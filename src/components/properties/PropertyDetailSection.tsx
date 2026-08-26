import Image from "next/image";
import Link from "next/link";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  WINGHOUSE_FEATURES,
  WINGHOUSE_PREVIEWS,
  WINGHOUSE_SPECS,
} from "@/lib/properties-content";

export function PropertyDetailSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 lg:gap-16">
        <nav className="flex items-center gap-0.5 text-xl text-subtitle">
          <Link href="/properties" className="hover:text-title">
            Real Estate Properties
          </Link>
          <Image
            src="/fura/icons/chevron-right.svg"
            alt=""
            width={16}
            height={16}
            className="size-4"
          />
          <span className="text-title">Winghouse</span>
        </nav>

        <div className="flex w-full flex-col gap-16 lg:flex-row lg:items-start">
          <div className="flex flex-col items-start gap-8 lg:w-[420px] lg:shrink-0">
            <div className="flex w-full flex-col items-start gap-4">
              <StatusBadge status="On going" />
              <h1 className="w-full text-display-xs font-medium text-title lg:text-display-md">
                Winghouse
              </h1>
              <p className="flex items-center gap-2 text-sm text-subtitle">
                <Image
                  src="/fura/icons/map-pin-sm.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="size-4"
                />
                Brisbane, Queensland
              </p>
            </div>

            <p className="w-full text-base text-subtitle">
              Habitech Property supports the Fura ecosystem through property
              sales, market positioning, and buyer engagement, helping projects
              reach the right customers across Australia and international
              markets.
            </p>

            <div className="flex w-full flex-col items-start overflow-hidden rounded-xl border border-border-secondary">
              {WINGHOUSE_SPECS.map((spec, index) => (
                <div
                  key={spec.label}
                  className={`flex w-full items-center justify-between p-5 ${
                    index % 2 === 0 ? "bg-surface-muted" : "bg-surface"
                  } ${
                    index < WINGHOUSE_SPECS.length - 1
                      ? "border-b border-border-secondary"
                      : ""
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Image
                      src={spec.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="size-5"
                    />
                    <span className="text-sm font-medium whitespace-nowrap text-subtitle">
                      {spec.label}
                    </span>
                  </span>
                  <span className="text-base font-semibold whitespace-nowrap text-title">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-1.5 overflow-hidden rounded-full border border-utility-gray-900 bg-surface px-[18px] py-3 text-base font-semibold text-subtitle transition-colors hover:bg-surface-muted"
            >
              <Image
                src="/fura/icons/download-cloud.svg"
                alt=""
                width={20}
                height={20}
                className="size-5"
              />
              Download Project Brochure
            </button>
          </div>

          <div className="flex flex-col items-start gap-8 lg:min-w-0 lg:flex-1 lg:gap-12">
            <div className="flex w-full flex-col items-start gap-4">
              <div className="relative h-[420px] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/fura/properties/winghouse/main.png"
                  alt="Winghouse"
                  fill
                  priority
                  sizes="(min-width: 1024px) 716px, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Preview strip is wider than the column, so it scrolls. */}
              <div className="w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex w-max items-start gap-4">
                  {WINGHOUSE_PREVIEWS.map((preview, index) => (
                    <div
                      key={`${preview}-${index}`}
                      className="relative h-[120px] w-[228px] shrink-0 overflow-hidden rounded-lg"
                    >
                      <Image
                        src={preview}
                        alt=""
                        fill
                        sizes="228px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel controls are desktop-only in the design. */}
              <div className="hidden w-full flex-col items-center justify-center lg:flex">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center overflow-hidden rounded-full bg-surface-muted p-2">
                    <Image
                      src="/fura/icons/chevron-left.svg"
                      alt="Previous"
                      width={20}
                      height={20}
                      className="size-5"
                    />
                  </span>
                  <span className="flex items-center justify-center overflow-hidden rounded-full bg-brand-primary p-2">
                    <Image
                      src="/fura/icons/chevron-right.svg"
                      alt="Next"
                      width={20}
                      height={20}
                      className="size-5"
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col items-start gap-4">
              <h2 className="text-display-xs font-medium whitespace-nowrap text-title">
                Project Overview
              </h2>
              <p className="w-full text-base text-[#667085]">
                Fura Living delivers thoughtfully designed, energy-efficient
                homes in a connected community setting. The project supports
                sustainable living with quality finishes and well-planned
                amenity.
              </p>
            </div>

            <div className="flex w-full flex-col items-stretch gap-4 lg:flex-row lg:items-start">
              {WINGHOUSE_FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-center gap-4 rounded-2xl border border-border-secondary p-4 lg:min-w-0 lg:flex-1 lg:self-stretch"
                >
                  <Image
                    src={feature.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="size-6"
                  />
                  <div className="flex w-full flex-col items-center gap-2 text-center">
                    <p className="w-full text-base font-medium text-title">
                      {feature.title}
                    </p>
                    <p className="w-full text-sm text-subtitle">
                      {feature.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
