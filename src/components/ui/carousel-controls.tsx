"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Shared behaviour for a scroll row driven by a previous/next arrow pair.
 *
 * A step is one card plus its gap, measured off the first two children so the
 * caller never has to declare the card width. Both arrows stay live: stepping
 * past either end wraps round to the other, so neither is a dead control.
 */
export function useCarouselControls<T extends HTMLElement = HTMLDivElement>() {
  const trackRef = useRef<T>(null);
  // Which arrow was last used — the pair reads as a control with a current
  // side, so the one you just pressed is the one that carries the accent.
  const [active, setActive] = useState<"prev" | "next">("next");

  const step = (direction: 1 | -1) => {
    setActive(direction === 1 ? "next" : "prev");

    const track = trackRef.current;
    if (!track) return;
    const [first, second] = Array.from(track.children) as HTMLElement[];
    // Distance between two card origins — the card plus the gap between them.
    const stride = second
      ? second.offsetLeft - first.offsetLeft
      : (first?.offsetWidth ?? track.clientWidth);

    const max = track.scrollWidth - track.clientWidth;
    const next = track.scrollLeft + direction * stride;
    // A sub-pixel track width can leave scrollLeft a hair short of either end.
    const target =
      direction === 1
        ? track.scrollLeft >= max - 1
          ? 0
          : Math.min(next, max)
        : track.scrollLeft <= 1
          ? max
          : Math.max(next, 0);

    track.scrollTo({ left: target, behavior: "smooth" });
  };

  return { trackRef, active, step };
}

export function ArrowButton({
  direction,
  active,
  onClick,
}: {
  direction: "prev" | "next";
  active: boolean;
  onClick: () => void;
}) {
  const next = direction === "next";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={next ? "Next slide" : "Previous slide"}
      className={cn(
        "press flex cursor-pointer items-center justify-center overflow-hidden rounded-full p-2 transition-[background-color,color,opacity,transform] duration-200 hover:opacity-80 active:opacity-80",
        active ? "bg-brand-primary text-white" : "bg-surface-muted text-[#D5D7DA]",
      )}
    >
      {/* Inline so the chevron's stroke follows the button's current colour. */}
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-5">
        <path
          d={next ? "M7.5 15L12.5 10L7.5 5" : "M12.5 15L7.5 10L12.5 5"}
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

/** The arrow pair, wired to a `useCarouselControls` result. */
export function CarouselArrows({
  active,
  step,
  className,
}: {
  active: "prev" | "next";
  step: (direction: 1 | -1) => void;
  className?: string;
}) {
  return (
    <div className={cn("flex items-start justify-center gap-3", className)}>
      <ArrowButton direction="prev" active={active === "prev"} onClick={() => step(-1)} />
      <ArrowButton direction="next" active={active === "next"} onClick={() => step(1)} />
    </div>
  );
}
