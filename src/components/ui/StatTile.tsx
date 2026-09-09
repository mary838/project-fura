import Image from "next/image";
import { AnimatedStatValue } from "@/components/ui/AnimatedStatValue";
import { cn } from "@/lib/cn";
import type { StatTile as StatTileData } from "@/lib/companies-content";

// `flex-1` is lg-only: in the mobile column layout the main axis is vertical,
// so a flex-basis there would override the card's fixed 112px height.
const HOVER =
  "card-hover hover:-translate-y-1 hover:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)] active:-translate-y-1 active:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)] touch:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)]";

const CARD =
  `flex h-28 w-full min-w-0 items-center gap-4 rounded-xl border border-[#f3f4f6] bg-surface p-[25px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] lg:flex-1 ${HOVER}`;

const STACKED_CARD =
  `flex w-full min-w-0 flex-col items-center gap-4 rounded-xl border border-border-primary bg-surface p-[25px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] ${HOVER}`;

/**
 * Metric tile. `"row"` is the icon-beside-metric card most company pages use;
 * `"stacked"` is the manufacturing page's taller card, which centres a 96px
 * icon disc above the label and figure.
 */
export function StatTile({
  label,
  value,
  icon,
  iconIsContainer,
  variant = "row",
  className,
}: StatTileData & { variant?: "row" | "stacked"; className?: string }) {
  if (variant === "stacked") {
    return (
      <div className={cn(STACKED_CARD, className)}>
        <div className="flex size-24 shrink-0 items-center justify-center rounded-full bg-surface-muted">
          <Image
            src={icon}
            alt=""
            width={35}
            height={35}
            className="size-[35px]"
          />
        </div>
        <div className="flex w-full flex-col items-center gap-1 pb-3 text-center">
          <p className="w-full text-lg text-[#4b5563]">{label}</p>
          <AnimatedStatValue
            value={value}
            className="w-full text-display-xs font-bold text-title"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={cn(CARD, className)}>
      {iconIsContainer ? (
        <Image
          src={icon}
          alt=""
          width={64}
          height={64}
          className="size-16 shrink-0"
        />
      ) : (
        <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-surface-muted">
          <Image src={icon} alt="" width={32} height={32} className="size-8" />
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <p className="text-lg text-[#4b5563]">{label}</p>
        <AnimatedStatValue
          value={value}
          className="text-display-xs font-bold text-title"
        />
      </div>
    </div>
  );
}
