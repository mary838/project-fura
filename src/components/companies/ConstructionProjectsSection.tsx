import { ConstructionProjectCard } from "@/components/ui/ConstructionProjectCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONSTRUCTION_PROJECTS } from "@/lib/companies-content";

export function ConstructionProjectsSection() {
  return (
    <Section gap="none" className="bg-surface-muted" containerClassName="gap-12">
      <SectionHeading align="center-lg" title="Selected Construction Projects" />

      <div className="flex w-full flex-col gap-4 lg:gap-8">
        {CONSTRUCTION_PROJECTS.map((project) => (
          <ConstructionProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}
