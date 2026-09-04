import { cn } from "@/lib/cn";

/**
 * Small uppercase label above a section heading.
 *
 * `compact` is the team hero's treatment: 12px regular on mobile, stepping
 * back up to the shared 16px medium from `lg`. The size and weight are picked
 * together rather than layered over the default, because `cn` is a plain
 * joiner — two competing `font-*` utilities would be resolved by stylesheet
 * order, not by the order they appear here.
 */
export function Eyebrow({
  children,
  className,
  compact = false,
}: {
  children: React.ReactNode;
  className?: string;
  compact?: boolean;
}) {
  return (
    <p
      className={cn(
        "text-brand-primary",
        compact
          ? "text-xs font-normal lg:text-base lg:font-medium"
          : "text-base font-medium",
        className,
      )}
    >
      {children}
    </p>
  );
}
