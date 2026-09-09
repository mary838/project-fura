import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";

type TimorAvenueDetailSectionProps = {
  image: string;
  price: string;
  specs: { icon: string; label: string; value: string }[];
};

/**
 * Shared layout for the "Timor avenue" duplicate listings — same title and
 * description across every variant in the design, only the media, price and
 * specs table differ per unit.
 */
export function TimorAvenueDetailSection({
  image,
  price,
  specs,
}: TimorAvenueDetailSectionProps) {
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
            Timor Avenue
          </span>
        </nav>

        <div className="order-1 relative h-[220px] w-full shrink-0 overflow-hidden rounded-2xl lg:order-2 lg:h-[552px]">
          <Image
            src={image}
            alt="Timor Avenue"
            fill
            priority
            sizes="(min-width: 1024px) 1200px, 100vw"
            className="object-cover"
          />
        </div>

        <Reveal className="order-2 flex w-full flex-col items-start gap-4 lg:order-1 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="order-2 flex w-full flex-col items-start gap-3 lg:order-1 lg:w-[800px] lg:gap-3">
            <SplitLines
              as="h1"
              text="Timor Avenue"
              className="w-full text-display-xs font-medium text-title lg:text-display-md"
            />
            <SplitLines
              text="A residential development across three land parcels in Loganholme, targeting low-rise housing using modern prefab modular construction. The project is planned for a rapid Build-to-Sell strategy in an area of strong housing demand."
              className="w-full text-base text-subtitle"
              startDelay={120}
            />
          </div>

          <div className="order-1 flex shrink-0 items-start gap-2 lg:order-2 lg:flex-col lg:items-end">
            <span className="rounded-md bg-brand-secondary px-3 py-1.5 text-base font-medium whitespace-nowrap text-title">
              On going
            </span>
            <p className="text-display-sm font-medium whitespace-nowrap text-title lg:font-bold lg:text-display-lg">
              {price}
            </p>
          </div>
        </Reveal>

        <div className="order-3 flex w-full flex-col items-start overflow-hidden rounded-xl border border-border-primary">
          <div className="flex h-[70px] w-full shrink-0 items-center bg-surface-muted p-5">
            <p className="text-xl font-medium text-title">Properties Detail</p>
          </div>
          {specs.map((spec) => (
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
          className="order-4 flex w-full items-center justify-center gap-1.5 overflow-hidden rounded-full border border-brand-primary bg-surface px-[18px] py-3 text-base font-semibold text-subtitle transition-colors hover:bg-surface-muted active:bg-surface-muted"
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
