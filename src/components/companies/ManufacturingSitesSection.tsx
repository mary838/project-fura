import { MediaFrame } from "@/components/ui/MediaFrame";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MANUFACTURING_SITES } from "@/lib/companies-content";

export function ManufacturingSitesSection() {
  return (
    <Section gap="xl-tight" className="bg-surface-muted">
      <SectionHeading
        align="center"
        title="Our Manufacturing Sites"
        description="Habitech manufacturing counts 5 construction material factory site in China specialized in Modular, Prefab house and steel Factory. These production site benefuits from the investment and partnership of JINGGONG STEEL GROUP Chinese listed companies ranked no 1 In steel construction"
        descriptionSize="xl-flat"
      />

      <RevealGroup className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
        {MANUFACTURING_SITES.map((site, index) => (
          <MediaFrame
            key={site}
            src={site}
            alt={`Manufacturing site ${index + 1}`}
            sizes="(min-width: 1024px) 592px, 100vw"
            className="h-[423px]"
            overlay="bg-black/10"
          />
        ))}
      </RevealGroup>
    </Section>
  );
}
