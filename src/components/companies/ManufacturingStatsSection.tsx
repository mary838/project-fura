import { Section } from "@/components/ui/Section";
import { StatTileRow } from "@/components/ui/StatTileRow";
import { MANUFACTURING_STATS } from "@/lib/companies-content";

/** Closing band of four metric cards, on its own white section in the frame. */
export function ManufacturingStatsSection() {
  return (
    <Section gap="none" className="bg-surface">
      <StatTileRow stats={MANUFACTURING_STATS} layout="cards" variant="stacked" />
    </Section>
  );
}
