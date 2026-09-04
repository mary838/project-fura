"use client";

import { cn } from "@/lib/cn";
import { CarouselArrows, useCarouselControls } from "@/components/ui/carousel-controls";

type CarouselProps = {
  children: React.ReactNode;
  className?: string;
  /** Accessible name for the scrollable region. */
  label: string;
};

/**
 * Horizontally scrolling row with a previous/next pair beneath it.
 *
 * The row is a plain scroll container, so it stays usable by touch, trackpad
 * and keyboard whether or not the buttons are reachable — they only paginate
 * it.
 */
export function Carousel({ children, className, label }: CarouselProps) {
  const { trackRef, active, step } = useCarouselControls();

  return (
    <div className="flex w-full flex-col gap-6 lg:gap-8">
      {/*
        The row runs to the right edge of the screen at every width while its
        first card stays flush with the page gutter, so the next card always
        peeks past the edge and the row reads as scrollable.

        `50% + 50vw` is the container's left edge out to the viewport's right:
        50% resolves against the container, 50vw against the screen. A viewport
        unit ignores the scrollbar, so this can overshoot by a pixel or two —
        `main` clips the overflow, so it never reaches the document.
      */}
      <div
        ref={trackRef}
        role="group"
        aria-label={label}
        tabIndex={0}
        className={cn(
          "-mx-4 flex w-[calc(100%+2rem)] snap-x snap-mandatory items-stretch gap-6 overflow-x-auto px-4 pb-1",
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          // The track takes focus for keyboard scrolling, so it needs a ring.
          "focus-visible:outline-offset-[-2px]",
          // Trailing padding is the page gutter, so the last card lands back on
          // the container's edge once the row is scrolled to the end.
          "lg:mx-0 lg:w-[calc(50%+50vw)] lg:pb-0 lg:pl-0 lg:pr-[100px]",
          className,
        )}
      >
        {children}
      </div>

      <CarouselArrows active={active} step={step} className="w-full" />
    </div>
  );
}
