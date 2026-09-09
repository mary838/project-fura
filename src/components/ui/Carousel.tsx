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
        Below `lg` the row runs out to the edge of the screen so the next card
        peeks and reads as scrollable. From `lg` it is exactly the container:
        three 384px cards and two 24px gaps fill 1200px, so a full set of three
        is shown and the arrows page through one card at a time.
      */}
      <div
        ref={trackRef}
        role="group"
        aria-label={label}
        tabIndex={0}
        className={cn(
          "-mx-4 -my-4 flex w-[calc(100%+2rem)] snap-x snap-mandatory items-stretch gap-6 overflow-x-auto px-4 py-4",
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          // The track takes focus for keyboard scrolling, so it needs a ring.
          "focus-visible:outline-offset-[-2px]",
          // Vertical padding (cancelled by the matching negative margin, so it
          // doesn't add layout height) gives a hovered card's lifted box-shadow
          // room to render before `overflow-x-auto` — which clips both axes —
          // cuts it off.
          "lg:mx-0 lg:w-full lg:px-0",
          className,
        )}
      >
        {children}
      </div>

      <CarouselArrows active={active} step={step} className="w-full" />
    </div>
  );
}
