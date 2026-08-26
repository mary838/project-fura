import { Section } from "@/components/ui/Section";
import { SplitHeading } from "@/components/ui/SplitHeading";

export function PropertyIntroSection() {
  return (
    <Section gap="none" className="bg-surface">
      <SplitHeading
        title="Property Sales & Market Solutions"
        titleWidth="lg:w-[417px]"
        description="Habitech Property supports the Fura ecosystem through property sales, market positioning, and buyer engagement, helping projects reach the right customers across Australia and international markets."
        descriptionSize="sm-xl"
      />
    </Section>
  );
}
