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
 * Fades and flies its content into place every time it scrolls into view.
 *
 * Server-render and the first client render emit no `data-reveal`, so the
 * markup matches during hydration and the content is visible when scripting is
 * unavailable. The hidden start state is applied in an effect, and only to
 * elements that are still below the fold — anything already on screen is marked
 * shown straight away, so nothing ever flashes out and back in.
 *
 * The observer stays connected so the reveal repeats: the element is reset to
 * its hidden state once it has left the viewport completely, which is why the
 * reset is keyed off the real viewport rather than the shrunken root used for
 * entry — resetting inside the visible area would fade the content out under
 * the reader's eye.
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
      data-reveal={state === "idle" ? undefined : from}
      className={cn(className, state === "shown" && "is-visible")}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
