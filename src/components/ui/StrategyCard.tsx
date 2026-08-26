import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import type { Strategy } from "@/lib/home-content";

/** Investment-class card used in the "Three strategies" section. */
export function StrategyCard({ badge, icon, title, description, driver }: Strategy) {
  return (
    <article className="flex flex-1 flex-col items-start gap-6 overflow-hidden rounded-2xl border-[1.5px] border-border-secondary bg-surface p-8">
      <div className="flex w-full items-start">
        <Badge>{badge}</Badge>
      </div>

      <div className="flex size-16 items-center justify-center rounded-full bg-surface-tile">
        <Image src={icon} alt="" width={28} height={28} className="size-7" />
      </div>

      <div className="flex w-full flex-col gap-4">
        <h3 className="text-display-xs font-semibold text-title">{title}</h3>
        <p className="text-sm text-subtitle">{description}</p>
      </div>

      <hr className="w-full border-t border-border-secondary" />

      <div className="flex w-full flex-col gap-2">
        <p className="text-xs font-semibold text-subtitle">
          Primary Value Driver
        </p>
        <p className="text-sm font-semibold text-title">{driver}</p>
      </div>
    </article>
  );
}
