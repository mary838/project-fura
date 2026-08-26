import { Reveal } from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { GOVERNANCE_ITEMS } from "@/lib/home-content";

/** Each row lags the one above it, so the list cascades down. */
const ROW_STEP = 90;

export function GovernanceSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      <Reveal className="mx-auto flex w-full max-w-[1200px] flex-col gap-12">
        <div className="flex w-full flex-col gap-4">
          <SplitLines
            as="h2"
            text="Governance and asset backing frame the offer"
            className="text-display-xs font-medium text-[#0a0a0c] lg:text-display-md"
          />
          <SplitLines
            text="Investor protections depend on the final deeds, security priority and disciplined portfolio execution."
            className="text-base text-[#555964]"
            startDelay={200}
          />
        </div>

        <dl className="flex w-full flex-col border-b border-border-secondary">
          {GOVERNANCE_ITEMS.map((item, index) => {
            const base = index * ROW_STEP;
            return (
              <div
                key={item.num}
                className="flex w-full flex-col gap-4 border-t border-border-secondary py-3 lg:flex-row lg:items-center lg:gap-4 lg:py-6"
              >
                <SplitLines
                  as="div"
                  text={item.num}
                  className="w-12 shrink-0 text-xl font-medium text-title"
                  startDelay={base}
                />
                {/* 260px at every width — it is what wraps row 02 onto two lines. */}
                <dt className="w-[260px] lg:shrink-0">
                  <SplitLines
                    as="div"
                    text={item.title}
                    className="text-xl font-medium text-[#0a0a0c]"
                    startDelay={base + 60}
                  />
                </dt>
                <dd className="lg:min-w-0 lg:flex-1">
                  <SplitLines
                    as="div"
                    text={item.description}
                    className="text-xl text-subtitle"
                    startDelay={base + 120}
                  />
                </dd>
              </div>
            );
          })}
        </dl>
      </Reveal>
    </section>
  );
}
