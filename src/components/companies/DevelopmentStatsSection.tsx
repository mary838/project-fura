import { StatTileRow } from "@/components/ui/StatTileRow";
import { DEVELOPMENT_STATS } from "@/lib/companies-content";

export function DevelopmentStatsSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-20">
      <StatTileRow
        stats={DEVELOPMENT_STATS}
        layout="cards-fluid"
        variant="stacked"
        className="mx-auto max-w-[1240px]"
      />
    </section>
  );
}
