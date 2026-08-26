import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StrategyCard } from "@/components/ui/StrategyCard";
import { STRATEGIES } from "@/lib/home-content";

export function StrategiesSection() {
  return (
    <Section gap="xl" reveal className="bg-surface">
      <div className="flex w-full flex-col items-center gap-6 lg:gap-8">
        <SectionHeading
          align="center"
          title="Three strategies capture value at different stages"
          description="Investors select a class; each class is governed by its applicable offer documents."
          descriptionSize="base"
        />
        <Button href="/projects">Check Our Investment Projects</Button>
      </div>

      <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row lg:items-start">
        {STRATEGIES.map((strategy) => (
          <StrategyCard key={strategy.badge} {...strategy} />
        ))}
      </div>
    </Section>
  );
}
