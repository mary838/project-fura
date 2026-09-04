import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import type { Strategy } from "@/lib/home-content";

/**
 * Investment-class card used in the "Three strategies" section. The 7px bar
 * across the top edge is a box-shadow rather than a border, so it follows the
 * card's rounded corners the way the Figma frame draws it.
 */
export function StrategyCard({ badge, icon, title, description, driver }: Strategy) {
  return (
    <article className="flex flex-1 flex-col items-start gap-6 rounded-2xl border border-border-primary bg-surface p-8 shadow-[0_-7px_0_0_#222325]">
      <div className="flex w-full items-start justify-between">
        <div className="flex size-16 items-center justify-center rounded-full bg-surface-tile">
          <Image src={icon} alt="" width={24} height={24} className="size-6" />
        </div>
        <Badge>{badge}</Badge>
      </div>

      <div className="flex w-full flex-col gap-4">
        <h3 className="text-display-xs font-semibold text-title">{title}</h3>
        <p className="text-sm text-subtitle">{description}</p>
      </div>

      <hr className="w-full border-t border-border-secondary" />

      <div className="flex w-full flex-col gap-2 rounded-2xl bg-surface-muted p-6">
        <p className="text-xs font-semibold text-[#2d2e31]">
          Primary Value Driver
        </p>
        <p className="text-sm font-semibold text-title">{driver}</p>
      </div>
    </article>
  );
}
