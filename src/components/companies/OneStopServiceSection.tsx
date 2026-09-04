import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceStepRow } from "@/components/ui/ServiceStepRow";
import { MANUFACTURING_STEPS } from "@/lib/companies-content";

export function OneStopServiceSection() {
  return (
    <Section gap="xl-tight" className="bg-surface-muted">
      <SectionHeading
        align="center"
        title="One Stop Service"
        description="Complete solutions, delivered with precision"
      />

      {/* Both frames stack the six rows 24px apart. */}
      <div className="flex w-full flex-col gap-6">
        {MANUFACTURING_STEPS.map((step, index) => (
          <ServiceStepRow
            key={step.number}
            {...step}
            reversed={index % 2 === 1}
          />
        ))}
      </div>
    </Section>
  );
}
