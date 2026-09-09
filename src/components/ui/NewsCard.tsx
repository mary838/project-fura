import Image from "next/image";
import type { NewsItem } from "@/lib/about-content";

/**
 * Article card in the News & Events carousel. Read-only: there is no article
 * page behind these, so the card states the announcement in full rather than
 * linking away. The card height is fixed so the row stays even however long a
 * headline runs; the overflow is clipped, as in the design.
 */
export function NewsCard({ image, titleLead, title, date }: NewsItem) {
  return (
    <article
      className="group flex h-[470px] w-[320px] shrink-0 snap-center flex-col items-start overflow-hidden rounded-2xl border border-border-primary bg-surface card-hover hover:-translate-y-1 hover:shadow-lg lg:w-[384px] lg:snap-start active:-translate-y-1 active:shadow-lg touch:shadow-lg"
    >
      <div className="relative aspect-[384/256] w-full shrink-0">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 384px, 320px"
          className="object-cover transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
        />
      </div>

      <div className="flex w-full flex-col items-start gap-5 p-6">
        <h3 className="w-full text-base text-title">
          {titleLead ? <strong className="font-bold">{titleLead}</strong> : null}
          {title}
        </h3>
        <p className="flex items-center gap-2 text-sm whitespace-nowrap text-subtitle">
          <Image
            src="/fura/icons/calendar-dots.svg"
            alt=""
            width={16}
            height={16}
            className="size-4 shrink-0"
          />
          {date}
        </p>
      </div>
    </article>
  );
}
