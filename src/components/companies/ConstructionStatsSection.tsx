import { StatTileRow } from "@/components/ui/StatTileRow";
import { CONSTRUCTION_STATS } from "@/lib/companies-content";

/**
 * Closing band of metric cards, on its own white section in the frame. Like
 * the registrations list above it, it runs to the full padded width rather
 * than the 1200px container the other sections use.
 */
export function ConstructionStatsSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto w-full max-w-[1240px]">
        <StatTileRow
          stats={CONSTRUCTION_STATS}
          layout="cards-fluid"
          variant="stacked"
        />
      </div>
    </section>
  );
}
