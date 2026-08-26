import { cn } from "@/lib/cn";

type FilterPillProps = {
  children: React.ReactNode;
  active?: boolean;
  /** `"primary"` is the lighter rule used by the capital-flow tabs. */
  border?: "secondary" | "primary";
  className?: string;
};

/** Selectable pill in a filter or tab row. */
export function FilterPill({
  children,
  active = false,
  border = "secondary",
  className,
}: FilterPillProps) {
  return (
    <span
      className={cn(
        "flex h-11 items-center justify-center rounded-lg py-3 text-sm font-medium",
        active
          ? "bg-utility-gray-900 text-title-inverse"
          : cn(
              "bg-surface text-title",
              border === "primary"
                ? "border border-border-primary"
                : "border border-border-secondary",
            ),
        className,
      )}
    >
      {children}
    </span>
  );
}
