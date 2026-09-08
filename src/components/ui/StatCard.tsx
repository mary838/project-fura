import { AnimatedStatValue } from "@/components/ui/AnimatedStatValue";
import type { Statistic } from "@/lib/about-content";

/** Metric tile in the Key Statistics grid. */
export function StatCard({ value, label }: Statistic) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-border-primary bg-surface p-6">
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
