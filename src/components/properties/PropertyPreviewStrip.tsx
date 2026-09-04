"use client";

import Image from "next/image";
import { CarouselArrows, useCarouselControls } from "@/components/ui/carousel-controls";

/**
 * The thumbnail strip beneath the main property image. It is wider than its
 * column, so it scrolls; the arrows beneath page through it.
 */
export function PropertyPreviewStrip({ previews }: { previews: string[] }) {
  const { trackRef, active, step } = useCarouselControls();

  return (
    <>
      <div
        ref={trackRef}
        role="group"
        aria-label="Property photos"
        tabIndex={0}
        className="flex w-full items-start gap-4 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {previews.map((preview, index) => (
          <div
            key={`${preview}-${index}`}
            className="relative h-[120px] w-[228px] shrink-0 overflow-hidden rounded-lg"
          >
            <Image src={preview} alt="" fill sizes="228px" className="object-cover" />
          </div>
        ))}
      </div>

      {/* Carousel controls are desktop-only in the design. */}
      <CarouselArrows active={active} step={step} className="hidden w-full lg:flex" />
    </>
  );
}
