import { Reveal } from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { GOVERNANCE_ITEMS } from "@/lib/home-content";

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
          {GOVERNANCE_ITEMS.map((item) => (
            <div
              key={item.num}
              className="flex w-full flex-col gap-4 border-t border-border-secondary py-3 lg:flex-row lg:items-center lg:gap-4 lg:py-6"
            >
              <span className="w-12 shrink-0 text-xl font-medium text-title">
                {item.num}
              </span>
              {/* 260px at every width — it is what wraps row 02 onto two lines. */}
              <dt className="w-[260px] text-xl font-medium text-[#0a0a0c] lg:shrink-0">
                {item.title}
              </dt>
              <dd className="text-xl text-subtitle lg:min-w-0 lg:flex-1">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
