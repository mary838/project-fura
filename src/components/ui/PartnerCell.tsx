import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Partner } from "@/lib/home-content";

/** Logo tile in the "Trusted by leading partners" ribbon. */
export function PartnerCell({
  logo,
  name,
  logoClassName,
  className,
}: Partner & { className?: string }) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-2xl bg-surface-muted p-8 card-hover hover:-translate-y-1 hover:shadow-lg active:-translate-y-1 active:shadow-lg touch:shadow-lg",
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 flex-col items-start gap-0.5">
        <div className="relative h-[70px] w-full overflow-hidden">
          <Image
            src={logo}
            alt={name}
            fill
            sizes="(min-width: 1024px) 227px, 176px"
            className={`object-contain ${logoClassName ?? ""}`}
          />
        </div>
        <p className="w-full text-center text-xs font-medium text-subtitle">
          {name}
        </p>
      </div>
    </div>
  );
}
