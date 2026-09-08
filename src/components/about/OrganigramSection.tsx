import { OrganigramCard } from "@/components/ui/OrganigramCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ORGANIGRAM_PARENT,
  ORGANIGRAM_SUBSIDIARIES,
} from "@/lib/about-content";

/** 2px connector, matching the #a4a7ae rules in the design. */
const CONNECTOR = "bg-placeholder";

/**
 * Unlike the other sections this one is not capped at the 1200px container —
 * the design lets the diagram use the full padded width so the six subsidiary
 * cards each get 193px and their names stay on one line.
 */
export function OrganigramSection() {
  return (
    <section className="w-full bg-surface-muted px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="flex w-full flex-col gap-12">
        <SectionHeading
          align="center"
          title="A Global and Connected Real Asset Platform"
          description="Corporate structure and global subsidiaries hierarchy"
          descriptionSize="base"
        />

        <Reveal className="flex w-full flex-col items-center gap-3 lg:gap-0 lg:py-8">
          <OrganigramCard {...ORGANIGRAM_PARENT} emphasis />

          <div className={`hidden h-10 w-0.5 lg:block ${CONNECTOR}`} />

          {/*
            Horizontal branch spans centre-of-first to centre-of-last column.
            With six equal columns that's 5/6 of the row width — but the row
            also has 5 gaps of 16px (`lg:gap-4`) between the columns, which
            widen each column and push the outer centres further apart than a
            plain 83.333% accounts for. The general distance between the
            centre of column 0 and column n-1, given n equal columns and gap
            g, is (n-1)/n * (width + g) — for n=6, g=16px that's
            83.333% of the row plus 13.333px.
          */}
          <div className="hidden w-full justify-center lg:flex">
            <div className={`h-0.5 w-[calc(83.3333%+13.3333px)] ${CONNECTOR}`} />
          </div>

          <div className="flex w-full flex-col justify-center gap-3 lg:flex-row lg:gap-4">
            {ORGANIGRAM_SUBSIDIARIES.map((entry) => (
              <div
                key={entry.name}
                className="flex flex-col items-center lg:min-w-0 lg:flex-1"
              >
                <div className={`hidden h-6 w-0.5 lg:block ${CONNECTOR}`} />
                <OrganigramCard {...entry} className="lg:flex-1" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
