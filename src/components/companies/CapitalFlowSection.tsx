import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SplitLines } from "@/components/ui/SplitLines";

type ReviewItem = {
  num: string;
  title: string;
  description: string;
};

const REVIEW_ITEMS: ReviewItem[] = [
  {
    num: "01",
    title: "Full Information Memorandum",
    description: "Offer terms, risks, fees and eligibility",
  },
  {
    num: "02",
    title: "Project feasibility and capital stack",
    description: "Costs, debt, investor capital and sensitivity",
  },
  {
    num: "03",
    title: "Security and governance documents",
    description:
      "Bond deed, security trust and management arrangements",
  },
  {
    num: "04",
    title: "Wholesale investor application",
    description: "Identification, eligibility and application process",
  },
];

/** Each row lags the one above it, so the list cascades down. */
const ROW_STEP = 90;

export function CapitalFlowSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      <Reveal className="mx-auto flex w-full max-w-[1200px] flex-col gap-8">
        <SectionHeading
          gap="xs"
          title="Move from overview to investment review"
          description="Request the complete due-diligence pack and assess the opportunity with professional advisers."
        />

        <dl className="flex w-full flex-col border-b border-border-secondary">
          {REVIEW_ITEMS.map((item, index) => {
            const base = index * ROW_STEP;
            return (
              <div
                key={item.num}
                className="flex w-full flex-col gap-2 border-t border-border-secondary py-4 lg:flex-row lg:items-center lg:gap-4 lg:py-6"
              >
                <SplitLines
                  as="div"
                  text={item.num}
                  className="w-8 shrink-0 text-base font-medium text-title"
                  startDelay={base}
                />
                <dt className="lg:w-[405px] lg:shrink-0">
                  <SplitLines
                    as="div"
                    text={item.title}
                    className="text-base font-medium text-title"
                    startDelay={base + 60}
                  />
                </dt>
                <dd className="lg:min-w-0 lg:flex-1">
                  <SplitLines
                    as="div"
                    text={item.description}
                    className="text-sm text-subtitle"
                    startDelay={base + 120}
                  />
                </dd>
              </div>
            );
          })}
        </dl>

        <div className="flex w-full flex-col flex-wrap items-start gap-6 rounded-lg bg-utility-gray-900 px-6 py-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col items-start justify-center gap-2">
            <p className="text-base font-medium whitespace-nowrap text-brand-secondary">
              NEXT STEP
            </p>
            <p className="text-xl text-title-inverse lg:w-[752px]">
              Arrange a confidential briefing with FURA Habitech
            </p>
          </div>
          <a
            href="#"
            className="group flex shrink-0 items-center gap-[15px]"
          >
            <span className="text-xl text-brand-secondary">
              Review before applying
            </span>
            <Image
              src="/fura/icons/arrow-narrow-right.svg"
              alt=""
              width={24}
              height={24}
              className="size-6 shrink-0 transition-transform duration-150 ease-out group-hover:translate-x-1"
            />
          </a>
        </div>

        <p className="w-full text-xl text-subtitle">
          Wholesale investors only. General information, not personal
          financial advice. Returns are targets and are not guaranteed.
          Distribution is subject to applicable laws.
        </p>
      </Reveal>
    </section>
  );
}
