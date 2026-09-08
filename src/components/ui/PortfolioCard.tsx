import Image from "next/image";
import Link from "next/link";
import type { PortfolioCompany } from "@/lib/home-content";

/**
 * Full-bleed company tile with a gradient scrim and a "View Company Details" link.
 *
 * Hovering lifts the card (translate + drop shadow) and zooms the photo
 * slightly. `z-10` puts the lifted card over its neighbours instead of under
 * them.
 */
export function PortfolioCard({ image, title, href }: PortfolioCompany) {
  return (
    <Link
      href={href}
      className="group relative flex h-[480px] flex-1 flex-col items-start justify-end overflow-hidden rounded-2xl p-8 shadow-none transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-10 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="(min-width: 1024px) 588px, 100vw"
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[rgba(24,29,39,0.3)] mix-blend-multiply" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(153.9deg, rgba(24, 29, 39, 0) 31.25%, rgba(24, 29, 39, 0.902) 81.25%)",
        }}
      />

      {/*
        The hover shadow. An inset box-shadow rather than an overlay tint, so
        it falls off softly from the bottom edge the way a cast shadow does
        instead of flattening the photo under an even wash.
      */}
      <div className="absolute inset-0 opacity-0 shadow-[inset_0_-140px_110px_-70px_rgba(9,12,20,0.9)] transition-opacity duration-500 group-hover:opacity-100" />

      {/* Quick black flash on press/tap, layered on top of the hover scrim. */}
      <div className="pointer-events-none absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-150 group-active:opacity-100" />

      <div className="relative flex w-full flex-col gap-2.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2">
        <h3 className="text-display-sm font-semibold text-title-inverse">
          {title}
        </h3>
        <span className="flex items-center gap-1.5">
          <span className="text-sm font-medium whitespace-nowrap text-brand-secondary">
            View Company Details
          </span>
          <Image
            src="/fura/icons/arrow-up-right.svg"
            alt=""
            width={24}
            height={24}
            className="size-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
