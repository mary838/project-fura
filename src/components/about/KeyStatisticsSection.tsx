import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";
import { STATISTICS_PRIMARY, STATISTICS_SECONDARY } from "@/lib/about-content";

export function KeyStatisticsSection() {
  return (
    <Section reveal className="bg-surface-muted">
      <SectionHeading
        gap="lg"
        align="center"
        title="Key Statistics"
        description="A snapshot of our experience, scale, and global reach across real asset investment and development."
      />

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
