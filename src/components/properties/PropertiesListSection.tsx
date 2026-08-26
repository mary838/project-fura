import Image from "next/image";
import Link from "next/link";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  KINGAROY_SECOND_META,
  PROPERTIES,
  PROPERTY_FILTERS,
} from "@/lib/properties-content";

export function PropertiesListSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 lg:gap-16">
        <h1 className="w-full text-display-xs font-medium text-title lg:text-display-md">
          Completed &amp; Ongoing Projects
        </h1>

        <div className="flex w-full flex-col items-start gap-8">
          {/* The filter row is wider than the phone viewport, so it scrolls. */}
          <div className="-mx-4 w-[calc(100%+2rem)] overflow-x-auto px-4 [-ms-overflow-style:none] [scrollbar-width:none] lg:mx-0 lg:w-full lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max items-start gap-3">
              {PROPERTY_FILTERS.map((filter, index) => (
                <span
                  key={filter}
                  className={`flex h-11 shrink-0 items-center justify-center rounded-lg px-6 py-3 text-sm font-medium lg:px-9 ${
                    index === 0
                      ? "bg-utility-gray-900 text-title-inverse"
                      : "border border-border-secondary bg-surface text-title"
                  }`}
                >
                  {filter}
                </span>
              ))}
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
            {PROPERTIES.map((property, index) => {
              const cardClass =
                "relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl bg-surface-muted";
              const body = (
                <>
                  <div className="relative aspect-[608/342] w-full shrink-0 lg:aspect-auto lg:h-[342px]">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      sizes="(min-width: 1024px) 588px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex w-full flex-col items-start gap-3 px-6 pb-8">
                    <div className="flex w-full items-center gap-2">
                      <p className="text-sm whitespace-nowrap text-brand-primary">
                        {property.meta}
                      </p>
                      {index === 0 ? (
                        <>
                          <span className="size-1 shrink-0 rounded-full bg-border-primary" />
                          <p className="min-w-0 flex-1 text-sm text-subtitle">
                            {KINGAROY_SECOND_META}
                          </p>
                        </>
                      ) : (
                        <span className="min-w-0 flex-1" />
                      )}
                      <span className="flex shrink-0 flex-col items-start pt-0.5">
                        <Image
                          src="/fura/icons/arrow-up-right-dark.svg"
                          alt=""
                          width={24}
                          height={24}
                          className="size-6"
                        />
                      </span>
                    </div>

                    <div className="flex w-full flex-col items-start gap-1">
                      <h2 className="w-full text-xl font-semibold text-title">
                        {property.title}
                      </h2>
                      <p className="w-full truncate text-base text-subtitle">
                        {property.description}
                      </p>
                    </div>
                  </div>

                  <StatusBadge
                    status={property.status}
                    className="absolute top-[26px] left-5"
                  />
                </>
              );

              // Only the Wing House has a detail page in the design.
              return property.href ? (
                <Link
                  key={property.title}
                  href={property.href}
                  className={cardClass}
                >
                  {body}
                </Link>
              ) : (
                <div key={property.title} className={cardClass}>
                  {body}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
