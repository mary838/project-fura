import Image from "next/image";
import Link from "next/link";
import type { PortfolioCompany } from "@/lib/home-content";

/** Full-bleed company tile with a gradient scrim and a "View Portfolio" link. */
export function PortfolioCard({ image, title, href }: PortfolioCompany) {
  return (
    <Link
      href={href}
      className="group relative flex h-[480px] flex-1 flex-col items-start justify-end overflow-hidden rounded-2xl p-8 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="(min-width: 1024px) 588px, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[rgba(24,29,39,0.3)] mix-blend-multiply" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(153.9deg, rgba(24, 29, 39, 0) 31.25%, rgba(24, 29, 39, 0.902) 81.25%)",
        }}
      />

      <div className="relative flex w-full flex-col gap-2.5">
        <h3 className="text-display-sm font-semibold text-title-inverse">
          {title}
        </h3>
        <span className="flex items-center gap-1.5">
          <span className="text-sm font-medium whitespace-nowrap text-brand-secondary">
            View Portfolio
          </span>
          <Image
            src="/fura/icons/arrow-up-right.svg"
            alt=""
            width={24}
            height={24}
            className="size-6"
          />
        </span>
      </div>
    </Link>
  );
}
