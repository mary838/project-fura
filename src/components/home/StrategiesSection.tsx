import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SplitLines } from "@/components/ui/SplitLines";
import { StrategyCard } from "@/components/ui/StrategyCard";
import { STRATEGIES } from "@/lib/home-content";

export function StrategiesSection() {
  return (
    <Section gap="xl" reveal className="bg-surface">
      <div className="flex w-full flex-col items-center gap-6 lg:gap-8">
        <div className="flex w-full flex-col gap-4 text-center">
          <SplitLines
            as="h2"
            text="Three strategies capture value at different stages"
            className="text-display-xs font-medium text-title lg:text-display-md"
          />
          <SplitLines
            text="Investors select a class; each class is governed by its applicable offer documents."
            className="text-base text-subtitle"
            startDelay={200}
          />
        </div>
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
