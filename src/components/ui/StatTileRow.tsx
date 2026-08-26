import { StatTile } from "@/components/ui/StatTile";
import { cn } from "@/lib/cn";
import type { StatTile as StatTileData } from "@/lib/companies-content";

type StatTileRowProps = {
  stats: readonly StatTileData[];
  /**
   * `"fluid"` lets the tiles share the row evenly. `"fixed"` pins each to
   * 318px and centres the row in the wider 1240px frame the design uses for
   * the standalone stat bands.
   */
  layout?: "fluid" | "fixed";
  className?: string;
};

/** Row of metric tiles, stacking on mobile. */
export function StatTileRow({
  stats,
  layout = "fluid",
  className,
}: StatTileRowProps) {
  const fixed = layout === "fixed";
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-3 lg:flex-row",
        fixed
          ? "mx-auto items-center justify-center lg:w-[1240px]"
          : "lg:items-start",
        className,
      )}
    >
      {stats.map((stat) => (
        <StatTile
          key={stat.label}
          {...stat}
          className={fixed ? "lg:w-[318px] lg:flex-none" : undefined}
        />
      ))}
    </div>
  );
}
