import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutIntroSection() {
  return (
    <Section gap="none" reveal className="bg-surface" containerClassName="gap-4">
      <SectionHeading
        as="h1"
        title="About fura group"
        titleSize="display"
        eyebrow="ABOUT US"
        eyebrowGap="xs"
        gap="md"
        description={
          "FURA is a Singapore-headquartered investment group focused on real estate, infrastructure, agriculture, hospitality, and industry, forming a global and connected platform with presence in Singapore, Australia, Cambodia, Japan, and the USA.\n" +
          "Over 15 of network and expertise in asset development and cross-border capital management. FURA asset portfolio excessing USD 750 million USD covering more than 250 hectares of developed land,\n" +
          "The hospitality fund manage assets valued at over 250 million USD."
        }
      />
    </Section>
  );
}
