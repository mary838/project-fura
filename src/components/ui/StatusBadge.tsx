import { cn } from "@/lib/cn";
import type { PropertyStatus } from "@/lib/properties-content";

/** Pill marking a project as delivered or in progress. */
export function StatusBadge({
  status,
  className,
}: {
  status: PropertyStatus;
  className?: string;
}) {
  const ongoing = status === "On going";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium",
        ongoing
          ? "border-[#fedf89] bg-[#fffaeb] text-[#b54708]"
          : "border-[#c3c4c5] bg-[#f8f8f8] text-[#38393d]",
        className,
      )}
    >
      {status}
    </span>
  );
}
