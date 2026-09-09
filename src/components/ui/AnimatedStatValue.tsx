"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedStatValueProps = {
  value: string;
  className?: string;
};

const NUMBER_PATTERN = /[\d,]+(?:\.\d+)?/;

/**
 * Decelerates into the final figure without the long crawl a steeper curve
 * leaves behind — a quint ease spends its last third barely moving, which on a
 * small target means the same number held for dozens of frames.
 */
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Renders a stat value with its numeric portion counting up from 0 once the
 * card scrolls into view, keeping any prefix/suffix (`+`, `> USD `, `M`, …)
 * static so only the digits animate.
 *
 * The count writes to the node directly rather than through state: a figure
 * changing every frame would otherwise re-render the component ~100 times over
 * the run, and the whole row animates at once. React is handed the final value
 * when it lands, so its tree and the DOM agree from then on.
 *
 * Runs once: the observer disconnects itself as soon as the count starts, so
 * scrolling the card off-screen and back never replays it.
 */
export function AnimatedStatValue({ value, className }: AnimatedStatValueProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  /** Values with no digits are left alone by `replace`. */
  const [display, setDisplay] = useState(() =>
    value.replace(NUMBER_PATTERN, "0"),
  );
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || done.current) return;

    // Derived here rather than in render: `match` returns a fresh array every
    // time, so as a dependency it would re-run this effect on every render,
    // tearing down a count mid-flight.
    const match = value.match(NUMBER_PATTERN);
    if (!match) return;

    const target = Number(match[0].replace(/,/g, ""));
    const hasComma = match[0].includes(",");
    const decimals = match[0].split(".")[1]?.length ?? 0;

    const format = (n: number) => {
      const fixed = n.toFixed(decimals);
      return hasComma
        ? Number(fixed).toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })
        : fixed;
    };

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let frame = 0;
    let running = false;

    const run = () => {
      if (running || done.current) return;
      running = true;

      if (reduceMotion) {
        done.current = true;
        setDisplay(value);
        return;
      }

      const duration = 1600;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const current = format(target * easeOutCubic(progress));
        el.textContent = value.replace(NUMBER_PATTERN, current);

        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        } else {
          done.current = true;
          setDisplay(value);
        }
      };

      // A frame late, so the browser paints the starting figure first —
      // otherwise a reload already scrolled to the section counts during
      // hydration and is over before anything appears on screen.
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(tick);
      });
    };

    if (el.getBoundingClientRect().top < window.innerHeight) {
      run();
      return () => cancelAnimationFrame(frame);
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
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <p ref={ref} className={className}>
      {display}
    </p>
  );
}
