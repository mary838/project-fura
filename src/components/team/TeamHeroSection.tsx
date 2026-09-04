import { Section } from "@/components/ui/Section";
import { SplitHeading } from "@/components/ui/SplitHeading";

/**
 * Opening band: eyebrow and title on the left, the supporting line on the
 * right. The frame carries no imagery — the page drops straight into the
 * leadership list on its grey background.
 */
export function TeamHeroSection() {
  return (
    <Section reveal className="bg-surface">
      <SplitHeading
        as="h1"
        columns="tight"
        leadGap="xs"
        compactEyebrow
        eyebrow="OUR TEAM"
        title="A Connected Global Platform"
        description="A globally connected network combining local expertise, strategic partnerships, and investment capabilities across key international markets."
        descriptionSize="sm-xl"
      />
    </Section>
  );
}
