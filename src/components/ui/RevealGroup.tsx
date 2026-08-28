"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type RevealGroupProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger between consecutive children, in ms. */
  step?: number;
  /** Offset before the first child moves, for cascading groups. */
  delay?: number;
};

/**
 * Staggers its direct children in as the group scrolls into view, and again
 * every time it scrolls back in.
 *
 * The children animate in place: this renders a single element carrying the
 * layout classes it replaces, and the reveal is applied by CSS to
 * `[data-reveal-group] > *`. Wrapping each card in its own `Reveal` would
 * insert a div between the flex/grid container and cards that rely on
 * `flex-1`, `col-span`, or `self-stretch`, which changes the layout — this
 * doesn't.
 *
 * The offset uses the `translate` property rather than `transform`, so the
 * cards' `hover:-translate-y-1` lift still composes instead of overriding it.
 */
export function RevealGroup({
  children,
  className,
  step = 90,
  delay = 0,
}: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    setState(
      el.getBoundingClientRect().top < window.innerHeight ? "shown" : "hidden",
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          return;
        }
        const rect = entry.boundingClientRect;
        if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
          setState("hidden");
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal-group={state === "idle" ? undefined : ""}
      className={cn(className, state === "shown" && "is-visible")}
      style={
        {
          "--reveal-step": `${step}ms`,
          "--reveal-delay": `${delay}ms`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
