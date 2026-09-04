"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CarouselArrows, useCarouselControls } from "@/components/ui/carousel-controls";
import type { FeaturedProperty } from "@/lib/properties-content";

/**
 * Horizontal scroll row for completed projects. Per design feedback (see the
 * "common/Remark" annotation on this frame in Figma): these don't get a
 * click-through detail page — that information already lives on the
 * relevant company page — so the card itself only surfaces key facts.
 * Clicking a card instead opens a lightbox with the full description.
 */
export function CompletedProjectsStrip({
  properties,
}: {
  properties: FeaturedProperty[];
}) {
  const { trackRef, active, step } = useCarouselControls();
  const [selected, setSelected] = useState<FeaturedProperty | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <div
        ref={trackRef}
        role="group"
        aria-label="Completed projects"
        tabIndex={0}
        className="flex w-full items-start justify-center gap-6 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {properties.map((property) => (
          <button
            key={property.title}
            type="button"
            onClick={() => setSelected(property)}
            className="flex w-[320px] shrink-0 flex-col items-start gap-3 overflow-hidden rounded-2xl border border-border-primary bg-surface p-3 text-left transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-xl">
              <Image
                src={property.image}
                alt={property.title}
                fill
                sizes="320px"
                className="object-cover"
              />
              <span className="absolute top-4 right-4 rounded-md bg-surface px-3 py-1.5 text-sm font-medium text-title">
                {property.status}
              </span>
            </div>

            <div className="flex w-full flex-col gap-2 rounded-xl bg-surface-muted p-4">
              <h3 className="w-full text-lg font-semibold text-title">
                {property.title}
              </h3>
              <p className="line-clamp-3 w-full text-sm text-subtitle">
                {property.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      <CarouselArrows active={active} step={step} />

      {selected ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="flex max-h-[90vh] w-full max-w-[480px] flex-col overflow-hidden rounded-2xl bg-surface"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[360/260] w-full shrink-0">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                sizes="480px"
                className="object-cover"
              />
              <span className="absolute top-4 right-4 rounded-md bg-surface px-3 py-1.5 text-sm font-medium text-title">
                {selected.status}
              </span>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="press absolute top-4 left-4 flex size-9 items-center justify-center rounded-full bg-surface/90 text-title transition-opacity duration-200 hover:opacity-80"
              >
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-5">
                  <path
                    d="M5 5L15 15M15 5L5 15"
                    stroke="currentColor"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex w-full flex-col gap-3 overflow-y-auto p-6">
              <h3 className="w-full text-display-xs font-semibold text-title">
                {selected.title}
              </h3>
              <p className="w-full text-base text-subtitle">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
