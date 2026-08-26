import { StatTileRow } from "@/components/ui/StatTileRow";
import { FURA_HABITECH_STATS } from "@/lib/companies-content";

export function FuraStatsSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      <StatTileRow stats={FURA_HABITECH_STATS} layout="fixed" />
    </section>
  );
}
