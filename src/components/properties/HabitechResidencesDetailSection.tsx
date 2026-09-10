import Image from "next/image";
import Link from "next/link";
import { PropertyGallery } from "@/components/properties/PropertyGallery";
import { Reveal } from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import {
  HABITECH_RESIDENCES_GALLERY,
  HABITECH_RESIDENCES_SPECS,
} from "@/lib/properties-content";

export function HabitechResidencesDetailSection() {
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
            Habitech Residences
          </span>
        </nav>

        <div className="order-1 w-full lg:order-2">
          <PropertyGallery images={HABITECH_RESIDENCES_GALLERY} alt="Habitech Residences" />
        </div>

        <Reveal className="order-2 flex w-full flex-col items-start gap-4 lg:order-1 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="order-2 flex w-full flex-col items-start gap-3 lg:order-1 lg:w-[800px] lg:gap-3">
            <SplitLines
              as="h1"
              text="Habitech Residences"
              className="w-full text-display-xs font-medium text-title lg:text-display-md"
            />
            <SplitLines
              text="Habitech Residences is a opportunity comprising the acquisition, development and sale of a premium five-storey residential apartment project located at 153 Mt Gravatt–Capalaba Road, Upper Mount Gravatt, Queensland. The project comprises 35 apartments with two basement parking levels and rooftop communal facilities. The development has an estimated Gross Development Value (GDV) of AUD 38.67 million and is expected to be completed within 24 months."
              className="w-full text-base text-subtitle"
              startDelay={120}
            />
          </div>

          <div className="order-1 flex shrink-0 items-start gap-2 lg:order-2 lg:flex-col lg:items-end">
            <span className="rounded-md bg-brand-secondary px-3 py-1.5 text-base font-medium whitespace-nowrap text-title">
              On going
            </span>
            <p className="text-display-sm font-medium whitespace-nowrap text-title lg:font-bold lg:text-display-lg">
              A$38.7M GDV
            </p>
          </div>
        </Reveal>

        <div className="order-3 flex w-full flex-col items-start overflow-hidden rounded-xl border border-border-primary">
          <div className="flex h-[70px] w-full shrink-0 items-center bg-surface-muted p-5">
            <p className="text-xl font-medium text-title">Properties Detail</p>
          </div>
          {HABITECH_RESIDENCES_SPECS.map((spec) => (
            <div
              key={spec.label}
              className="flex h-[70px] w-full shrink-0 items-center justify-between border-t border-border-primary bg-surface-muted p-5"
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
              <span className="min-w-0 flex-1 text-right text-base font-semibold whitespace-nowrap text-title">
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#contact-form"
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
        </a>
      </div>
    </section>
  );
}
