import { StatTile } from "@/components/ui/StatTile";
import { DEVELOPMENT_STATS } from "@/lib/companies-content";

export function DevelopmentStatsSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-3 lg:flex-row lg:items-start">
        {DEVELOPMENT_STATS.map((stat) => (
          <StatTile key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
