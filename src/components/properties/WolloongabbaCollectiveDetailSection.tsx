import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { WolloongabbaGallery } from "@/components/properties/WolloongabbaGallery";
import {
  WOLLOONGABBA_COLLECTIVE_GALLERY,
  WOLLOONGABBA_COLLECTIVE_SPECS,
} from "@/lib/properties-content";

export function WolloongabbaCollectiveDetailSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-6 lg:gap-16">
        <nav className="flex w-full items-center gap-0.5 text-base lg:text-xl">
          <Link
            href="/properties"
            className="shrink-0 font-normal whitespace-nowrap text-title lg:font-medium"
          >
            Real Estate Properties
          </Link>
          <Image
            src="/fura/icons/chevron-right.svg"
            alt=""
            width={16}
            height={16}
            className="size-4 shrink-0"
          />
          <span className="min-w-0 flex-1 truncate font-normal text-brand-primary lg:flex-none">
            The Wolloongabba Collective
          </span>
        </nav>

        <div className="order-1 w-full lg:order-2">
          <WolloongabbaGallery
            images={WOLLOONGABBA_COLLECTIVE_GALLERY}
            alt="The Wolloongabba Collective"
          />
        </div>

        <Reveal className="order-2 flex w-full flex-col items-start gap-4 lg:order-1 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="order-2 flex w-full flex-col items-start gap-3 lg:order-1 lg:w-[800px] lg:gap-3">
            <SplitLines
              as="h1"
              text="The Wolloongabba Collective"
              className="w-full text-display-xs font-medium text-title lg:text-display-md"
            />
            <SplitLines
              text="A large-scale inner-city landbank project comprising six adjoining parcels with a combined site area of 10,336 sqm. The site offers strong mixed-use development potential and provides flexibility for either short-term exit or long-term delivery."
              className="w-full text-base text-subtitle"
              startDelay={120}
            />
          </div>

          <div className="order-1 flex shrink-0 items-start gap-2 lg:order-2 lg:flex-col lg:items-end">
            <span className="rounded-md bg-brand-secondary px-3 py-1.5 text-base font-medium whitespace-nowrap text-title">
              On going
            </span>
            <p className="text-display-sm font-medium whitespace-nowrap text-title lg:font-bold lg:text-display-lg">
              N/A
            </p>
          </div>
        </Reveal>

        <div className="order-3 flex w-full flex-col items-start overflow-hidden rounded-xl border border-border-primary">
          <div className="flex h-[70px] w-full shrink-0 items-center bg-surface-muted p-5">
            <p className="text-xl font-medium text-title">Properties Detail</p>
          </div>
          {WOLLOONGABBA_COLLECTIVE_SPECS.map((spec) => (
            <div
              key={spec.label}
              className="flex h-[70px] w-full shrink-0 items-center justify-between border-t border-border-primary bg-surface-muted p-5"
            >
              <span className="flex shrink-0 items-center gap-3">
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
              <span className="min-w-0 flex-1 truncate text-right text-base font-semibold text-title">
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="order-4 flex w-full items-center justify-center gap-1.5 overflow-hidden rounded-full border border-utility-gray-900 bg-surface px-[18px] py-3 text-base font-semibold text-subtitle transition-colors hover:bg-surface-muted"
        >
          <Image
            src="/fura/icons/download-cloud-02.svg"
            alt=""
            width={20}
            height={20}
            className="size-5"
          />
          Download Project Brochure
        </button>
      </div>
    </section>
  );
}
