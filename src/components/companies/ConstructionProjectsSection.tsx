import { ConstructionProjectCard } from "@/components/ui/ConstructionProjectCard";
import { CONSTRUCTION_PROJECTS } from "@/lib/companies-content";

export function ConstructionProjectsSection() {
  return (
    <section className="w-full bg-surface-muted px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12">
        <h2 className="w-full text-display-xs font-medium text-title lg:text-center lg:text-display-md">
          Selected Construction Projects
        </h2>

        <div className="flex w-full flex-col gap-4 lg:gap-8">
          {CONSTRUCTION_PROJECTS.map((project) => (
            <ConstructionProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
