import { cn } from "@/lib/cn";

type FilterPillProps = {
  children: React.ReactNode;
  active?: boolean;
  /** `"primary"` is the lighter rule used by the capital-flow tabs. */
  border?: "secondary" | "primary";
  className?: string;
  onClick?: () => void;
};

/** Selectable pill in a filter or tab row. */
export function FilterPill({
  children,
  active = false,
  border = "secondary",
  className,
  onClick,
}: FilterPillProps) {
  const pillClass = cn(
    "flex h-11 items-center justify-center rounded-lg py-3 text-sm font-medium transition-colors",
    active
      ? "bg-utility-gray-900 text-title-inverse"
      : cn(
          "bg-surface text-title",
          border === "primary"
            ? "border border-border-primary"
            : "border border-border-secondary",
        ),
    className,
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={pillClass}>
        {children}
      </button>
    );
  }

  return <span className={pillClass}>{children}</span>;
}
