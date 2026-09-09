import { AnimatedStatValue } from "@/components/ui/AnimatedStatValue";
import type { Statistic } from "@/lib/about-content";

/** Metric tile in the Key Statistics grid. */
export function StatCard({ value, label }: Statistic) {
  return (
    <div className="card-hover flex flex-col items-center gap-3 rounded-2xl border border-border-primary bg-surface p-6 hover:-translate-y-1 hover:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)] active:-translate-y-1 active:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)] touch:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)]">
      <div className="flex w-full flex-col gap-4 text-center">
        <AnimatedStatValue
          value={value}
          className="text-display-xs font-medium text-title lg:text-display-sm"
        />
        <p className="text-base font-medium text-subtitle lg:text-lg">{label}</p>
      </div>
    </div>
  );
}
