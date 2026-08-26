import { ServiceStepRow } from "@/components/ui/ServiceStepRow";
import { MANUFACTURING_STEPS } from "@/lib/companies-content";

export function OneStopServiceSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-16">
        <div className="flex w-full flex-col gap-4 text-center">
          <h2 className="w-full text-display-xs font-medium text-title lg:text-display-md">
            One Stop Service
          </h2>
          <p className="w-full text-base text-subtitle lg:text-xl">
            Complete solutions, delivered with precision
          </p>
        </div>

        <div className="flex w-full flex-col gap-16">
          {MANUFACTURING_STEPS.map((step, index) => (
            <ServiceStepRow
              key={step.number}
              {...step}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
