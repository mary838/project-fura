import Image from "next/image";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { PropertyPreviewStrip } from "@/components/properties/PropertyPreviewStrip";
import { Reveal } from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
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
          <Link href="/properties" className="hover:text-title active:text-title">
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
          <Reveal from="left" className="flex flex-col items-start gap-8 lg:w-[420px] lg:shrink-0">
            <div className="flex w-full flex-col items-start gap-4">
              <StatusBadge status="On going" />
              <SplitLines
                as="h1"
                text="Winghouse"
                className="w-full text-display-xs font-medium text-title lg:text-display-md"
              />
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

            <SplitLines
              text="Habitech Property supports the Fura ecosystem through property sales, market positioning, and buyer engagement, helping projects reach the right customers across Australia and international markets."
              className="w-full text-base text-subtitle"
              startDelay={120}
            />

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
              className="flex w-full items-center justify-center gap-1.5 overflow-hidden rounded-full border border-utility-gray-900 bg-surface px-[18px] py-3 text-base font-semibold text-subtitle transition-colors hover:bg-surface-muted active:bg-surface-muted"
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
          </Reveal>

          <Reveal from="right" className="flex flex-col items-start gap-8 lg:min-w-0 lg:flex-1 lg:gap-12">
            <div className="flex w-full flex-col items-start gap-4">
              <MediaFrame
                src="/fura/properties/winghouse/main.png"
                alt="Winghouse"
                sizes="(min-width: 1024px) 716px, 100vw"
                preload
                className="h-[420px]"
              />

              <PropertyPreviewStrip previews={WINGHOUSE_PREVIEWS} />
            </div>

            <div className="flex w-full flex-col items-start gap-4">
              <SplitLines
                as="h2"
                text="Project Overview"
                className="text-display-xs font-medium whitespace-nowrap text-title"
              />
              <SplitLines
                text="Fura Living delivers thoughtfully designed, energy-efficient homes in a connected community setting. The project supports sustainable living with quality finishes and well-planned amenity."
                className="w-full text-base text-[#667085]"
                startDelay={200}
              />
            </div>

            <div className="flex w-full flex-col items-stretch gap-4 lg:flex-row lg:items-start">
              {WINGHOUSE_FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="card-hover flex flex-col items-center gap-4 rounded-2xl border border-border-secondary p-4 hover:-translate-y-1 hover:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)] lg:min-w-0 lg:flex-1 lg:self-stretch active:-translate-y-1 active:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)] touch:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)]"
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
