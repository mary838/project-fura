import { ConstructionProjectCard } from "@/components/ui/ConstructionProjectCard";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONSTRUCTION_PROJECTS } from "@/lib/companies-content";

export function ConstructionProjectsSection() {
  return (
    <Section className="bg-surface-muted" gap="md">
      <SectionHeading align="center" title="Selected Construction Projects" />

      <RevealGroup className="flex w-full flex-col items-start gap-8">
        {CONSTRUCTION_PROJECTS.map((project) => (
          <ConstructionProjectCard key={project.title} {...project} />
        ))}
      </RevealGroup>
    </Section>
  );
}
