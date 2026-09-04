import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { SplitLines } from "@/components/ui/SplitLines";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section } from "@/components/ui/Section";
import { PROJECTS } from "@/lib/home-content";

export function OurProjectsSection() {
  return (
    <Section gap="xl" className="bg-surface">
      {/* Title stack caps at 640px; the description runs the full width flush beneath it. */}
      <div className="flex w-full flex-col items-start">
        <Reveal from="left" className="flex flex-col gap-4 lg:w-[640px]">
          <Eyebrow>OUR WORK</Eyebrow>
          <SplitLines
            as="h2"
            text="Our Projects"
            className="text-display-xs font-medium text-title lg:text-display-md"
          />
        </Reveal>
        <Reveal from="left" className="w-full">
          <p className="text-base text-subtitle lg:text-xl">
            Discover how Fura Habitech transforms Australian real assets. From
            high-yield landbanking initiatives to community-first residential
            developments.
          </p>
        </Reveal>
      </div>

      <RevealGroup className="flex w-full flex-col items-stretch gap-4 lg:flex-row lg:items-start lg:gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </RevealGroup>

      <div className="flex w-full items-start justify-center">
        <Button href="/properties">Check our Real Estate Properties</Button>
      </div>
    </Section>
  );
}
