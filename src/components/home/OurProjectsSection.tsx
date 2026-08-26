import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section } from "@/components/ui/Section";
import { PROJECTS } from "@/lib/home-content";

export function OurProjectsSection() {
  return (
    <Section gap="xl-tight" className="bg-black">
      <div className="flex w-full flex-col lg:flex-row lg:items-end lg:justify-between">
        <Reveal from="left" className="flex flex-col gap-4 lg:w-[640px]">
          <Eyebrow className="text-brand-secondary">OUR WORK</Eyebrow>
          <SplitLines
            as="h2"
            text="Our Projects"
            className="text-display-xs font-medium text-title-inverse lg:text-display-md"
          />
        </Reveal>
        <Reveal from="right" className="lg:min-w-0 lg:flex-1">
          <p className="text-base text-subtitle-inverse lg:text-xl">
          Discover how Fura Habitech transforms Australian real assets. From
          high-yield landbanking initiatives to community-first residential
            developments.
          </p>
        </Reveal>
      </div>

      <Reveal className="flex w-full flex-col items-stretch gap-6 lg:flex-row lg:items-start">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </Reveal>

      <div className="flex w-full items-start justify-center">
        <Button href="/properties" variant="outline">
          Check our Real Estate Properties
        </Button>
      </div>
    </Section>
  );
}
