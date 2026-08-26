import { Section } from "@/components/ui/Section";
import { SplitHeading } from "@/components/ui/SplitHeading";

export function AboutSection() {
  return (
    <Section gap="none" className="bg-surface">
      <SplitHeading
        columns="between"
        stackGap="md"
        leadGap="md"
        eyebrow="OUR INVESTMENTS PROJECTS"
        title="Your trusted partner in property investment & development"
        description="FURA Australia Pty Ltd (ACN 685 099 674) is an Australian holding company specializing in investment and development, focusing on landbanking, development approval (DA) uplift, built-to-sell and build-to-rent residential communities."
        descriptionSize="xl-flat"
      />
    </Section>
  );
}
