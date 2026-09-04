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
  layout?: "fluid" | "fixed" | "cards" | "cards-fluid";
  /** Tile shape — see `StatTile`. */
  variant?: "row" | "stacked";
  className?: string;
};

/** Row of metric tiles, stacking on mobile. */
export function StatTileRow({
  stats,
  layout = "fluid",
  variant = "row",
  className,
}: StatTileRowProps) {
  const fixed = layout === "fixed";
  const cards = layout === "cards";
  const cardsFluid = layout === "cards-fluid";
  return (
    <div
      className={cn(
        "flex w-full flex-col lg:flex-row",
        cards || cardsFluid ? "gap-4" : "gap-3",
        fixed && "mx-auto items-center justify-center lg:w-[1240px]",
        // Four 298px cards plus three 16px gaps — the 1240px band in the frame.
        // They run full width in a single column until then.
        cards && "mx-auto lg:w-[1240px] lg:items-stretch",
        cardsFluid && "lg:items-stretch",
        !fixed && !cards && !cardsFluid && "lg:items-start",
        className,
      )}
    >
      {stats.map((stat) => (
        <StatTile
          key={stat.label}
          {...stat}
          variant={variant}
          className={cn(
            fixed && "lg:w-[318px] lg:flex-none",
            cards && "lg:w-[298px] lg:flex-none",
            cardsFluid && "lg:min-w-0 lg:flex-1",
          )}
        />
      ))}
    </div>
  );
}
