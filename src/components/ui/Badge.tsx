import { cn } from "@/lib/cn";

/** Pill badge used for the investment class tags. */
export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-utility-gray-800 px-3.5 py-1.5 text-xs font-bold text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}
