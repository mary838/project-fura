import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

export function TeamHeroSection() {
  return (
    <Section className="bg-surface">
      <div className="flex w-full flex-col gap-3 lg:flex-row lg:items-center lg:gap-0">
        <div className="flex flex-col gap-2 lg:flex-1 lg:gap-4">
          <Eyebrow className="text-xs lg:text-base">OUR TEAM</Eyebrow>
          <h1 className="text-display-xs font-medium text-title lg:text-display-md">
            A Connected Global Platform
          </h1>
        </div>
        <div className="flex lg:min-w-0 lg:flex-1">
          <p className="w-full text-sm text-subtitle lg:text-xl">
            A globally connected network combining local expertise, strategic
            partnerships, and investment capabilities across key international
            markets.
          </p>
        </div>
      </div>

      <div className="relative h-[444px] w-full overflow-hidden rounded-2xl bg-surface-muted lg:aspect-[1200/444] lg:h-auto">
        <Image
          src="/fura/images/team-hero.png"
          alt="Fura Habitech modular home"
          fill
          priority
          sizes="(min-width: 1024px) 1200px, 100vw"
          className="object-cover"
        />
      </div>
    </Section>
  );
}
