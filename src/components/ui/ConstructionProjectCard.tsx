import Image from "next/image";
import type { ConstructionProject } from "@/lib/companies-content";

/**
 * Project card for the construction page. Mobile and desktop show different
 * copy: the compact `meta` line below `lg`, the full `description` above it.
 */
export function ConstructionProjectCard({
  image,
  category,
  title,
  description,
  meta,
}: ConstructionProject) {
  return (
    <article className="group flex w-full flex-col items-start gap-4 overflow-hidden rounded-2xl border border-border-secondary bg-surface transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg lg:h-[664px] lg:gap-6">
      <div className="relative aspect-[628/353.25] w-full shrink-0 lg:aspect-auto lg:h-[420px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 1200px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex w-full flex-col items-start gap-3 px-6 pb-8">
        <p className="w-full text-xs font-medium text-tag lg:text-sm lg:font-normal">
          {category}
        </p>

        <div className="flex w-full flex-col items-start gap-1 lg:gap-3">
          <h3 className="w-full text-xl font-semibold text-title lg:text-display-xs">
            {title}
          </h3>
          <p className="w-full truncate text-base text-subtitle lg:hidden">
            {meta}
          </p>
          <p className="hidden w-full text-lg text-subtitle lg:block">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
