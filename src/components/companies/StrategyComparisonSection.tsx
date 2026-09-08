import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FH_COMPARISON, FH_STRATEGIES } from "@/lib/fura-habitech-content";

export function StrategyComparisonSection() {
  return (
    <section className="w-full bg-surface-muted px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8">
        <SectionHeading
          gap="2xs"
          className="justify-center"
          title="Strategy Comparison"
        >
          <p className="w-full text-base text-[#717680]">
            Choose the strategy that best fits your investment goals. Each
            class offers a distinct balance of return profile, hold period
            and risk exposure.
          </p>
        </SectionHeading>

        <div className="flex w-full flex-col items-start gap-8">
          <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row lg:items-start">
            {FH_STRATEGIES.map((item) => (
              <div
                key={item.badge}
                className="flex flex-col items-start gap-6 rounded-2xl border border-border-primary bg-surface p-8 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-lg lg:min-w-0 lg:flex-1 lg:self-stretch"
              >
                <div className="flex w-full items-start justify-between">
                  <div className="flex size-16 items-center justify-center rounded-full bg-surface-tile">
                    <Image
                      src={item.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="size-6"
                    />
                  </div>
                  <Badge className="rounded-lg">{item.badge}</Badge>
                </div>

                <div className="flex w-full flex-col gap-4">
                  <p className="text-display-xs font-semibold text-title">
                    {item.title}
                  </p>
                  <p className="w-full text-sm text-subtitle">
                    {item.description}
                  </p>
                </div>

                <hr className="w-full border-t border-border-secondary" />

                <div className="flex w-full flex-col gap-2">
                  <p className="text-xs font-semibold text-[#2d2e31]">
                    Primary Value Driver
                  </p>
                  <p className="text-sm font-semibold text-title">
                    {item.driver}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/*
            The table keeps its 1200px desktop width on mobile in the design,
            so it scrolls horizontally rather than reflowing.
          */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[1200px] overflow-hidden rounded-lg border border-border-primary text-sm">
              <div className="flex w-full items-start gap-4 bg-utility-gray-900 px-6 py-4 font-medium text-white">
                <p className="w-[200px] shrink-0">STRATEGY</p>
                <p className="w-[180px] shrink-0">TARGET RETURN</p>
                <p className="w-[160px] shrink-0">TYPICAL HOLD</p>
                <p className="w-[320px] shrink-0">KEY FOCUS</p>
                <p className="min-w-0 flex-1">SUITED FOR</p>
              </div>

              {FH_COMPARISON.map((row, index) => (
                <div
                  key={row.klass}
                  className={`flex w-full items-center gap-4 bg-surface px-6 py-5 ${
                    index < FH_COMPARISON.length - 1
                      ? "border-b border-border-primary"
                      : ""
                  }`}
                >
                  <div className="flex w-[200px] shrink-0 flex-col gap-1 whitespace-nowrap">
                    <p className="font-semibold text-title">{row.klass}</p>
                    <p className="text-subtitle">{row.strategy}</p>
                  </div>
                  <div className="w-[180px] shrink-0 font-semibold text-title">
                    {row.targetReturn.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  <p className="w-[160px] shrink-0 text-subtitle">{row.hold}</p>
                  <p className="w-[320px] shrink-0 text-subtitle">
                    {row.focus}
                  </p>
                  <p className="min-w-0 flex-1 text-subtitle">
                    {row.suitedFor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
