import { StatTile } from "@/components/ui/StatTile";
import { FURA_HABITECH_STATS } from "@/lib/companies-content";

export function FuraStatsSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-3 lg:w-[1240px] lg:flex-row">
        {FURA_HABITECH_STATS.map((stat) => (
          <StatTile
            key={stat.label}
            {...stat}
            className="lg:w-[318px] lg:flex-none"
          />
        ))}
      </div>
    </section>
  );
}
