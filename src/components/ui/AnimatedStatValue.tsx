"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedStatValueProps = {
  value: string;
  className?: string;
};

const NUMBER_PATTERN = /[\d,]+(?:\.\d+)?/;

/** Eases fast at the start and settles in, so the count doesn't feel linear/robotic. */
function easeOutQuint(t: number) {
  return 1 - Math.pow(1 - t, 5);
}

/**
 * Renders a stat value with its numeric portion counting up from 0 once the
 * card scrolls into view, keeping any prefix/suffix (`+`, `> USD `, `M`, …)
 * static so only the digits animate.
 *
 * Runs once: the observer disconnects itself as soon as the count starts, so
 * scrolling the card off-screen and back never replays it.
 */
export function AnimatedStatValue({ value, className }: AnimatedStatValueProps) {
  const match = value.match(NUMBER_PATTERN);
  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState(match ? value.replace(NUMBER_PATTERN, "1") : value);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;

    const target = Number(match[0].replace(/,/g, ""));
    const hasComma = match[0].includes(",");
    const decimals = match[0].split(".")[1]?.length ?? 0;

    const format = (n: number) => {
      const fixed = n.toFixed(decimals);
      return hasComma ? Number(fixed).toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }) : fixed;
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      if (animated.current) return;
      animated.current = true;

      if (reduceMotion) {
        setDisplay(value);
        return;
      }

      const duration = 1400;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = easeOutQuint(progress);
        const current = format(1 + (target - 1) * eased);
        setDisplay(value.replace(NUMBER_PATTERN, current));
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setDisplay(value);
        }
      };

      requestAnimationFrame(tick);
    };

    if (el.getBoundingClientRect().top < window.innerHeight) {
      run();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, match]);

  return (
    <p ref={ref} className={className}>
      {display}
    </p>
  );
}
