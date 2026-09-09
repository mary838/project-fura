"use client";

import Image from "next/image";
import { CarouselArrows, useCarouselControls } from "@/components/ui/carousel-controls";
import type { FeaturedProperty } from "@/lib/properties-content";

/**
 * Horizontal scroll row for completed projects. Per design feedback these are
 * read-only: there is no click-through detail page — that information already
 * lives on the relevant company page — so each card states its case in full
 * and the arrows are the only control.
 */
export function CompletedProjectsStrip({
  properties,
}: {
  properties: FeaturedProperty[];
}) {
  const { trackRef, active, step } = useCarouselControls();

  return (
    <div className="flex w-full flex-col items-center gap-6">
      {/*
        Start-aligned, never centred: `justify-center` on a track that overflows
        pushes the leading cards to a negative offset, and nothing can scroll
        back past zero to reach them. Three 384px cards and two 24px gaps fill
        the 1200px container exactly, so the arrows page one card at a time.
      */}
      <div
        ref={trackRef}
        role="group"
        aria-label="Completed projects"
        tabIndex={0}
        className="-mt-2 flex w-full items-stretch justify-start gap-6 overflow-x-auto pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {properties.map((property) => (
          <article
            key={property.title}
            className="group flex w-[384px] shrink-0 flex-col items-start gap-3 overflow-hidden rounded-2xl border border-border-primary bg-surface p-3 card-hover hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-12px_rgba(9,12,20,0.28)] active:-translate-y-1.5 active:shadow-[0_18px_40px_-12px_rgba(9,12,20,0.28)] touch:shadow-[0_18px_40px_-12px_rgba(9,12,20,0.28)]"
          >
            <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-xl">
              <Image
                src={property.image}
                alt={property.title}
                fill
                sizes="384px"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-active:scale-105"
              />
              <span className="absolute top-4 right-4 rounded-md bg-surface px-3 py-1.5 text-sm font-medium text-title">
                {property.status}
              </span>
            </div>

            <div className="flex w-full flex-1 flex-col gap-2 rounded-xl bg-surface-muted p-4">
              <h3 className="w-full text-display-xs font-semibold text-title">
                {property.title}
              </h3>
              {/*
                Every card in the row is as tall as the longest write-up, so
                the clamp is what keeps the short ones from trailing a block of
                empty grey. Eight lines at 16px is the point where the spread
                between the shortest and longest entry closes up.
              */}
              <p className="line-clamp-8 w-full text-base text-subtitle">
                {property.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <CarouselArrows active={active} step={step} />
    </div>
  );
}
