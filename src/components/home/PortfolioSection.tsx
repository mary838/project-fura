import { Eyebrow } from "@/components/ui/Eyebrow";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { Section } from "@/components/ui/Section";
import { SplitLines } from "@/components/ui/SplitLines";
import { PORTFOLIO_COMPANIES } from "@/lib/home-content";

export function PortfolioSection() {
  return (
    <Section gap="xl" reveal className="bg-surface-muted">
      <div className="flex w-full flex-col gap-6">
        <div className="flex w-full flex-col justify-center gap-4">
          <Eyebrow>OUR PORTFOLIO</Eyebrow>
          <h2 className="text-display-xs font-medium text-subtitle lg:text-display-md">
            Portfolio of <span className="text-brand-primary">Companies</span>
          </h2>
        </div>
        <SplitLines
          text="A specialized ecosystem spanning capital, prefabrication, construction, and educational platforms delivering innovative housing solutions across Australia."
          className="text-base text-subtitle lg:text-xl"
          startDelay={200}
        />
      </div>

      <RevealGroup className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
        {PORTFOLIO_COMPANIES.map((company) => (
          <PortfolioCard key={company.title} {...company} />
        ))}
      </RevealGroup>
    </Section>
  );
}
