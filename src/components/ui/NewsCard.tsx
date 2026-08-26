import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/lib/about-content";

/** Article card used in the News & Events row. */
export function NewsCard({ image, title, date, href }: NewsItem) {
  return (
    <Link
      href={href}
      className="group flex w-80 shrink-0 snap-start flex-col items-start overflow-hidden rounded-2xl border border-border-secondary bg-surface transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg lg:w-auto lg:min-w-[320px] lg:flex-1"
    >
      <div className="relative aspect-[384/256] w-full">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 384px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex w-full flex-col items-start gap-5 p-6">
        <div className="flex w-full items-start gap-4">
          <h3 className="min-w-0 flex-1 text-lg font-semibold text-title">
            {title}
          </h3>
          <span className="flex shrink-0 flex-col items-start pt-0.5">
            <Image
              src="/fura/icons/arrow-up-right-muted.svg"
              alt=""
              width={24}
              height={24}
              className="size-6"
            />
          </span>
        </div>
        <p className="text-sm whitespace-nowrap text-subtitle">{date}</p>
      </div>
    </Link>
  );
}
