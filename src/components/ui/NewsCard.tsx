import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/lib/about-content";

/**
 * Article card in the News & Events carousel. The card height is fixed so the
 * row stays even however long a headline runs; the overflow is clipped, as in
 * the design.
 */
export function NewsCard({ image, titleLead, title, date, href }: NewsItem) {
  return (
    <Link
      href={href}
      className="group flex h-[470px] w-[320px] shrink-0 snap-start flex-col items-start overflow-hidden rounded-2xl border border-border-primary bg-surface transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg lg:w-[384px]"
    >
      <div className="relative aspect-[384/256] w-full shrink-0">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 384px, 320px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex w-full flex-col items-start gap-5 p-6">
        <h3 className="w-full text-base text-title">
          {titleLead ? <strong className="font-bold">{titleLead}</strong> : null}
          {title}
        </h3>
        <p className="text-sm whitespace-nowrap text-subtitle">{date}</p>
      </div>
    </Link>
  );
}
