import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FH_COMPARISON, FH_STRATEGIES } from "@/lib/fura-habitech-content";

export function StrategyComparisonSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-20">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8">
        <SectionHeading
          gap="2xs"
          className="justify-center"
          title="Strategy Comparison"
        >
          <div className="flex w-full flex-col gap-4 text-base text-[#717680]">
            <p>Choose the strategy that best fits your investment goals.</p>
            <p>
              Each class offers a distinct balance of return profile, hold
              period and risk exposure.
            </p>
          </div>
        </SectionHeading>

        <div className="flex w-full flex-col items-start gap-8">
          <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:py-6">
            {FH_STRATEGIES.map((item) => (
              <div
                key={item.badge}
                className="flex flex-col items-start gap-2 rounded-2xl border border-border-secondary p-6 lg:min-w-0 lg:flex-1 lg:self-stretch"
              >
                <Badge className="rounded-lg">{item.badge}</Badge>
                <p className="text-xl font-semibold whitespace-nowrap text-title">
                  {item.title}
                </p>
                <p className="w-full text-sm text-subtitle">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/*
            The table keeps its 1200px desktop width on mobile in the design,
            so it scrolls horizontally rather than reflowing.
          */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[1200px] overflow-hidden rounded-lg border border-border-secondary text-sm">
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
                      ? "border-b border-border-secondary"
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
