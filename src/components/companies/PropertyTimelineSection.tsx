import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROPERTY_TIMELINE } from "@/lib/companies-content";

export function PropertyTimelineSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 lg:gap-[52px]">
        <SectionHeading align="center" title="From Handover to Everyday Management" />

        <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:gap-0">
          {PROPERTY_TIMELINE.map((step, index) => {
            const isLast = index === PROPERTY_TIMELINE.length - 1;
            return (
              <div
                key={step.number}
                className="flex w-full flex-row items-start gap-4 lg:flex-1 lg:flex-col lg:items-stretch lg:gap-4"
              >
                <div className="flex shrink-0 flex-col items-center self-stretch lg:w-full lg:flex-row lg:self-auto">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-3xl border-4 border-[#222325] bg-[#222325]">
                    <span className="text-sm font-bold text-title-inverse">
                      {step.number}
                    </span>
                  </div>
                  {!isLast ? (
                    <div className="mt-1 w-0.5 flex-1 bg-border-secondary lg:mt-0 lg:ml-1 lg:h-0.5 lg:w-auto" />
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col gap-2 pb-4 lg:flex-none lg:px-4 lg:pb-0">
                  <h3 className="w-full text-xl font-semibold text-title">
                    {step.title}
                  </h3>
                  <p className="w-full text-sm text-subtitle">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
