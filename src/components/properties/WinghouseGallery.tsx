"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type WinghouseGalleryProps = {
  /** [main, preview1, preview2, preview3, preview4] */
  images: string[];
  alt: string;
  /** e.g. "1+" — how many more photos beyond this set, shown on the last tile. */
  moreCount?: string;
  /** e.g. "All 6 photo" — the badge label on the last tile. */
  moreLabel?: string;
};

/**
 * Main image beside a 2x2 preview grid, matching the Habitech Property
 * pattern — except the last grid cell is a dark "view all photos" tile
 * (matches the design's "+N / All X photo" overlay) rather than a plain
 * thumbnail.
 */
export function WinghouseGallery({
  images,
  alt,
  moreCount = "1+",
  moreLabel = "All 6 photo",
}: WinghouseGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [main, image2, image3, image4, image5] = images;

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowRight") {
        setOpenIndex((current) =>
          current === null ? current : (current + 1) % images.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setOpenIndex((current) =>
          current === null
            ? current
            : (current - 1 + images.length) % images.length,
        );
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex, images.length]);

  return (
    <>
      {/* Mobile: a single scrollable row of equal thumbnails, all plain (no
          "view all" overlay — the row itself already shows everything).
          Desktop: a large main image beside a 2x2 grid, with the last cell
          styled as the "view all photos" tile. */}
      <div className="flex w-full gap-3 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] lg:h-[552px] lg:overflow-visible lg:[&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar]:hidden">
        <button
          type="button"
          onClick={() => setOpenIndex(0)}
          className="relative h-[135px] w-[206px] shrink-0 overflow-hidden rounded-2xl border border-border-primary lg:h-full lg:w-[670px]"
        >
          <Image
            src={main}
            alt={alt}
            fill
            priority
            sizes="(min-width: 1024px) 670px, 206px"
            className="object-cover"
          />
        </button>
        {[image2, image3, image4, image5].map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setOpenIndex(index + 1)}
            className="relative h-[135px] w-[206px] shrink-0 overflow-hidden rounded-2xl lg:hidden"
          >
            <Image src={image} alt="" fill sizes="206px" className="object-cover" />
          </button>
        ))}

        <div className="hidden lg:grid lg:h-full lg:flex-1 lg:grid-cols-2 lg:grid-rows-2 lg:gap-3">
          <button
            type="button"
            onClick={() => setOpenIndex(1)}
            className="relative hidden overflow-hidden rounded-lg lg:block lg:h-full lg:w-full"
          >
            <Image src={image2} alt="" fill sizes="253px" className="object-cover" />
          </button>
          <button
            type="button"
            onClick={() => setOpenIndex(2)}
            className="relative hidden overflow-hidden rounded-lg border border-border-primary lg:block lg:h-full lg:w-full"
          >
            <Image src={image3} alt="" fill sizes="253px" className="object-cover" />
          </button>
          <button
            type="button"
            onClick={() => setOpenIndex(3)}
            className="relative hidden overflow-hidden rounded-lg border border-border-primary lg:block lg:h-full lg:w-full"
          >
            <Image src={image4} alt="" fill sizes="253px" className="object-cover" />
          </button>
          <button
            type="button"
            onClick={() => setOpenIndex(4)}
            className="relative hidden flex-col items-center justify-center gap-2.5 overflow-hidden rounded-lg p-3 lg:flex lg:h-full lg:w-full"
          >
            <Image src={image5} alt="" fill sizes="253px" className="object-cover" />
            <span className="absolute inset-0 bg-black/40" />
            <span className="relative text-display-sm font-bold text-title-inverse">
              {moreCount}
            </span>
            <span className="relative ml-auto rounded-md bg-brand-secondary px-3 py-1.5 text-base font-semibold text-title">
              {moreLabel}
            </span>
          </button>
        </div>
      </div>

      {openIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-[rgba(34,35,37,0.9)] px-4 py-6 backdrop-blur-[5.5px] lg:px-[64px]"
          onClick={() => setOpenIndex(null)}
        >
          <div className="flex w-full max-w-[1248px] items-center justify-end">
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label="Close"
              className="press flex size-12 items-center justify-center rounded-full border border-brand-primary bg-[#222325] text-title-inverse transition-opacity duration-200 hover:opacity-80"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-6">
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div
            className="relative aspect-[1024/578] w-full max-w-[1024px] shrink-0 overflow-hidden rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[openIndex]}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>

          <div
            className="flex w-full max-w-[1024px] items-center gap-2 overflow-x-auto px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onClick={(event) => event.stopPropagation()}
          >
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setOpenIndex(index)}
                className={`relative size-[108px] shrink-0 overflow-hidden rounded [border-width:1px] border-solid ${
                  index === openIndex
                    ? "border-border-primary"
                    : "border-transparent"
                }`}
              >
                <Image src={image} alt="" fill sizes="108px" className="object-cover" />
                {index !== openIndex ? (
                  <span className="absolute inset-0 bg-black/50" />
                ) : null}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
