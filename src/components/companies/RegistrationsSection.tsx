import { CheckList } from "@/components/ui/CheckList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatTileRow } from "@/components/ui/StatTileRow";
import {
  CONSTRUCTION_REGISTRATIONS,
  CONSTRUCTION_STATS,
} from "@/lib/companies-content";

export function RegistrationsSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      {/* Wider than the usual container so the three stat tiles fit in a row. */}
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-8 lg:gap-12">
        <SectionHeading title="Professional Registrations" />

        <CheckList
          items={CONSTRUCTION_REGISTRATIONS}
          align="center"
          tone="muted"
        />

        <StatTileRow stats={CONSTRUCTION_STATS} />
      </div>
    </section>
  );
}
