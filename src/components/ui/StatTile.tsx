import Image from "next/image";
import { cn } from "@/lib/cn";
import type { StatTile as StatTileData } from "@/lib/companies-content";

// `flex-1` is lg-only: in the mobile column layout the main axis is vertical,
// so a flex-basis there would override the card's fixed 112px height.
const CARD =
  "flex h-28 w-full min-w-0 items-center gap-4 rounded-xl border border-[#f3f4f6] bg-surface p-[25px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] lg:flex-1";

/** Icon-beside-metric tile used under the delivery infographic. */
export function StatTile({
  label,
  value,
  icon,
  iconIsContainer,
  className,
}: StatTileData & { className?: string }) {
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
        <p className="text-display-xs font-bold text-title">{value}</p>
      </div>
    </div>
  );
}
