"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

type ScrollHintProps = {
  children: React.ReactNode;
  /** Accessible name for the scrollable region. */
  label: string;
  className?: string;
};

/**
 * Wraps a table that is wider than the screen and makes that obvious.
 *
 * A row of columns cut off by the viewport edge reads as the end of the table
 * rather than the middle of it, so this adds the affordances that say
 * otherwise: arrows on each side, edges that fade into the content continuing
 * past them, and a bar showing how much of the width is on screen.
 *
 * Every one of them is tied to whether the content actually overflows, so on a
 * screen wide enough to show the whole table nothing is rendered at all.
 */
export function ScrollHint({ children, label, className }: ScrollHintProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  /** Fraction of the width on screen, and how far along it has been scrolled. */
  const [view, setView] = useState({ ratio: 1, position: 0 });

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanLeft(el.scrollLeft > 1);
    setCanRight(el.scrollLeft < max - 1);
    setView({
      ratio: el.scrollWidth ? el.clientWidth / el.scrollWidth : 1,
      position: max > 0 ? el.scrollLeft / max : 0,
    });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    measure();
    // The width can change without a scroll — a resize, or a font finally
    // loading and re-flowing the columns.
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    for (const child of Array.from(el.children)) observer.observe(child);
    return () => observer.disconnect();
  }, [measure]);

  const step = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    // A little short of a full screen, so the column at the edge stays visible
    // and carries the reader across the jump.
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const scrollable = canLeft || canRight;
  const thumbWidth = Math.max(view.ratio * 100, 12);

  return (
    <div className={cn("flex w-full flex-col gap-3", className)}>
      <div className="relative w-full">
        <div
          ref={trackRef}
          role="region"
          aria-label={label}
          tabIndex={0}
          onScroll={measure}
          className="w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] focus-visible:outline-offset-2 [&::-webkit-scrollbar]:hidden"
        >
          {children}
        </div>

        {/*
          The fades sit over the scroll area rather than inside it, so they stay
          pinned to the edges while the content moves underneath.
        */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-surface-muted to-transparent transition-opacity duration-300",
            canLeft ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-surface-muted to-transparent transition-opacity duration-300",
            canRight ? "opacity-100" : "opacity-0",
          )}
        />

        {scrollable ? (
          <>
            <ArrowButton
              direction="prev"
              disabled={!canLeft}
              onClick={() => step(-1)}
            />
            <ArrowButton
              direction="next"
              disabled={!canRight}
              onClick={() => step(1)}
            />
          </>
        ) : null}
      </div>

      {scrollable ? (
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-border-primary/60">
          <div
            className="h-full rounded-full bg-placeholder transition-[margin] duration-150"
            style={{
              width: `${thumbWidth}%`,
              marginLeft: `${view.position * (100 - thumbWidth)}%`,
            }}
          />
        </div>
      ) : null}
    </div>
  );
}

function ArrowButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  const prev = direction === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={prev ? "Scroll left" : "Scroll right"}
      className={cn(
        "press absolute top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface text-title shadow-[0_4px_12px_-2px_rgba(9,12,20,0.25)] transition-opacity duration-200",
        prev ? "-left-1" : "-right-1",
        disabled && "pointer-events-none opacity-0",
      )}
    >
      <Image
        src={`/fura/icons/chevron-${prev ? "left" : "right"}.svg`}
        alt=""
        width={20}
        height={20}
        className="size-5"
      />
    </button>
  );
}
