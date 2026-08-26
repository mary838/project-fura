import { Section } from "@/components/ui/Section";
import { StatCard } from "@/components/ui/StatCard";
import { STATISTICS_PRIMARY, STATISTICS_SECONDARY } from "@/lib/about-content";

export function KeyStatisticsSection() {
  return (
    <Section className="bg-surface-muted">
      <div className="flex w-full flex-col items-start gap-6 text-center">
        <h2 className="w-full text-display-xs font-medium text-title lg:text-display-md">
          Key Statistics
        </h2>
        <p className="w-full text-base text-subtitle lg:text-xl">
          A snapshot of our experience, scale, and global reach across real
          asset investment and development.
        </p>
      </div>

      <div className="flex w-full flex-col items-start gap-6">
        <div className="flex w-full flex-col justify-center gap-4 lg:flex-row lg:items-start">
          {STATISTICS_PRIMARY.map((stat) => (
            <div key={stat.value} className="w-full lg:w-[397.333px]">
              <StatCard {...stat} />
            </div>
          ))}
        </div>

        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
          {STATISTICS_SECONDARY.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </Section>
  );
}
