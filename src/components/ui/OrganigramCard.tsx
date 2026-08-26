import { cn } from "@/lib/cn";
import type { OrganigramEntry } from "@/lib/about-content";

/** White card in the corporate-structure tree. */
export function OrganigramCard({
  name,
  country,
  className,
  emphasis = false,
}: OrganigramEntry & { className?: string; emphasis?: boolean }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-2xl border border-border-secondary bg-surface text-center drop-shadow-[0px_4px_6px_rgba(0,0,0,0.03)]",
        "w-full p-6",
        emphasis ? "lg:max-w-[380px]" : "lg:max-w-[200px] lg:p-4",
        className,
      )}
    >
      <p className="w-full text-base font-medium text-title">{name}</p>
      <p className="w-full text-sm text-brand-accent">{country}</p>
    </div>
  );
}
