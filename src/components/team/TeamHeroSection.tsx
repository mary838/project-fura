import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SplitHeading } from "@/components/ui/SplitHeading";

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

      <Reveal from="right" className="w-full">
        <MediaFrame
          src="/fura/images/team-hero.png"
          alt="Fura Habitech modular home"
          sizes="(min-width: 1024px) 1200px, 100vw"
          priority
          className="h-[444px] bg-surface-muted lg:aspect-[1200/444] lg:h-auto"
        />
      </Reveal>
    </Section>
  );
}
