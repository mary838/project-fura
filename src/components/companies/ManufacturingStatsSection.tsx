import { StatTileRow } from "@/components/ui/StatTileRow";
import { MANUFACTURING_STATS } from "@/lib/companies-content";

/**
 * Closing band of four metric cards, on its own white section in the frame.
 * Uses a 1240px container (298px cards + 16px gaps) rather than the shared
 * 1200px `Section` container, so the row is fully visible and centered.
 */
export function ManufacturingStatsSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto w-full max-w-[1240px]">
        <StatTileRow stats={MANUFACTURING_STATS} layout="cards" variant="stacked" />
      </div>
    </section>
  );
}
