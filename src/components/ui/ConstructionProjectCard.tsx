import Image from "next/image";
import type { ConstructionProject } from "@/lib/companies-content";

/** Full-width project tile: a 200px photo on mobile, 420px on desktop, over category, title and description. */
export function ConstructionProjectCard({
  image,
  mobileImage,
  category,
  title,
  description,
}: ConstructionProject) {
  return (
    <article className="flex w-full flex-col items-start gap-6 overflow-hidden rounded-2xl border border-border-secondary bg-surface">
      <div className="relative aspect-[1705/923] w-full shrink-0 lg:aspect-[1200/420]">
        {/*
          The container's aspect ratio matches each photo's native crop
          exactly (mobile 1.85:1, desktop 2.86:1), so object-cover scales the
          image without ever slicing off part of it, at any viewport width.
        */}
        <Image
          src={mobileImage}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover lg:hidden"
        />
        <Image
          src={image}
          alt={title}
          fill
          sizes="1200px"
          className="hidden object-cover lg:block"
        />
      </div>

      <div className="flex w-full flex-col items-start gap-3 px-6 pb-8">
        <p className="text-sm font-medium text-tag">{category}</p>
        <div className="flex w-full flex-col items-start gap-3">
          <h3 className="w-full text-display-xs font-semibold text-title">
            {title}
          </h3>
          <p className="w-full text-lg text-subtitle">{description}</p>
        </div>
      </div>
    </article>
  );
}
