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
            className="group flex min-h-[640px] w-[384px] shrink-0 flex-col items-start gap-3 overflow-hidden rounded-2xl border border-border-primary bg-surface p-3 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-xl">
              <Image
                src={property.image}
                alt={property.title}
                fill
                sizes="384px"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <span className="absolute top-4 right-4 rounded-md border border-success-border bg-success-surface px-3 py-1.5 text-sm font-medium text-success">
                {property.status}
              </span>
            </div>

            <div className="flex w-full flex-1 flex-col gap-2 rounded-xl bg-surface-muted p-4">
              <h3 className="w-full text-display-xs font-semibold text-title">
                {property.title}
              </h3>
              {/*
                No clamp: with no lightbox behind the card, anything trimmed
                here would be unreadable. The row stretches every card to the
                tallest instead, so the longest write-up still fits.
              */}
              <p className="w-full text-lg text-subtitle">
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
