import Image from "next/image";
import type { Project } from "@/lib/home-content";

/** Image-over-caption card used in the "Our Projects" section. */
export function ProjectCard({
  image,
  category,
  detail,
  title,
  meta,
  sizes = "(min-width: 1024px) 384px, 100vw",
}: Project & { sizes?: string }) {
  return (
    <article className="group flex flex-1 flex-col gap-4 overflow-hidden rounded-2xl border border-border-primary bg-surface card-hover hover:-translate-y-1 hover:shadow-lg active:-translate-y-1 active:shadow-lg touch:shadow-lg">
      <div className="relative aspect-[628/353.25] w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
        />
      </div>

      <div className="flex w-full flex-col gap-3 px-6 pb-8">
        <div className="flex w-full items-center gap-2">
          <p className="text-sm whitespace-nowrap text-brand-primary">
            {category}
          </p>
          <span className="size-1 shrink-0 rounded-full bg-border-primary" />
          <p className="min-w-0 flex-1 text-sm text-subtitle">{detail}</p>
        </div>

        <div className="flex w-full flex-col gap-1">
          <h3 className="text-xl font-semibold text-title">{title}</h3>
          <div className="flex w-full items-center gap-1.5">
            <Image
              src="/fura/icons/marker.svg"
              alt=""
              width={20}
              height={20}
              className="size-5 shrink-0"
            />
            <p className="min-w-0 flex-1 truncate text-base text-subtitle">
              {meta}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
