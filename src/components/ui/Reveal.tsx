"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger offset in ms, for revealing siblings in sequence. */
  delay?: number;
  /** Edge the content flies in from. */
  from?: "up" | "left" | "right";
};

/**
 * Fades and flies its content into place the first time it scrolls into view.
 *
 * Server-render and the first client render emit no `data-reveal`, so the
 * markup matches during hydration and the content is visible when scripting is
 * unavailable. The hidden start state is applied in an effect, and only to
 * elements that are still below the fold — anything already on screen is marked
 * shown straight away, so nothing ever flashes out and back in.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (el.getBoundingClientRect().top < window.innerHeight) {
      setState("shown");
      return;
    }

    setState("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
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
      data-reveal={state === "idle" ? undefined : from}
      className={cn(className, state === "shown" && "is-visible")}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
