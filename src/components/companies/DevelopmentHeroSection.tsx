import { Button } from "@/components/ui/Button";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";

/**
 * Unlike the other company pages, this banner sits on a light ground with
 * dark copy — the photo is masked into the off-white background rather than
 * sitting full-bleed behind a dark scrim, so it uses its own layout instead
 * of `CompanyHero`.
 */
export function DevelopmentHeroSection() {
  return (
    <section className="relative flex h-[500px] w-full items-center overflow-hidden bg-surface-muted px-4 py-8 lg:px-[100px] lg:py-24">
      <HeroBackdrop src="/fura/companies/development/hero-bg.png" />

      <div className="hero-rise relative flex w-full max-w-[500px] flex-col items-start gap-6">
        <div className="flex w-full flex-col gap-3">
          <h1 className="text-display-xs font-medium text-title lg:text-display-md">
            Habitech Development Pty Ltd
          </h1>
          <p className="text-xl text-subtitle lg:w-[396px]">
            Integrated Construction Solutions
          </p>
        </div>
        <p className="text-xl text-subtitle">Crafting Excellence, Building Success</p>
        <Button href="/invest">Partner With Us</Button>
      </div>
    </section>
  );
}
