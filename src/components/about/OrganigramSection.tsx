import { OrganigramCard } from "@/components/ui/OrganigramCard";
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
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <h2 className="w-full text-display-xs font-medium text-title lg:text-display-md">
            Company organigram
          </h2>
          <p className="w-full text-base text-subtitle">
            Corporate structure and global subsidiaries hierarchy
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-3 lg:gap-0 lg:py-8">
          <OrganigramCard {...ORGANIGRAM_PARENT} emphasis />

          <div className={`hidden h-10 w-0.5 lg:block ${CONNECTOR}`} />

          {/*
            Horizontal branch spans centre-of-first to centre-of-last column.
            With six equal columns that is 100% - (100%/6) = 83.333%.
            It only makes sense once the columns sit side by side.
          */}
          <div className="hidden w-full justify-center lg:flex">
            <div className={`h-0.5 w-[83.333%] ${CONNECTOR}`} />
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
        </div>
      </div>
    </section>
  );
}
