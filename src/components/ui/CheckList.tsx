import Image from "next/image";
import { cn } from "@/lib/cn";
import { RevealGroup } from "@/components/ui/RevealGroup";
import type { RichSegment } from "@/lib/about-content";

/**
 * A row is either a plain line of copy, or a sequence of runs where the
 * design bolds part of the sentence.
 */
export type CheckListItem = string | readonly RichSegment[];

type CheckListProps = {
  items: readonly CheckListItem[];
  /**
   * `"start"` keeps the tick against the first line of wrapping copy;
   * `"center"` is for the construction page's registration rows — top-aligned
   * on mobile (where two rows wrap to two lines) and vertically centred from
   * `lg` up, where every row is a single line.
   */
  align?: "start" | "center";
  tone?: "subtitle" | "muted";
  className?: string;
  /** Stagger the rows in as the list scrolls into view. */
  reveal?: boolean;
  /** Offset before the first row moves, for cascading with the copy above. */
  revealDelay?: number;
};

/** Ticked list of capabilities or registrations. */
export function CheckList({
  items,
  align = "start",
  tone = "subtitle",
  className,
  reveal = false,
  revealDelay = 0,
}: CheckListProps) {
  const centered = align === "center";
  const listClassName = cn("flex w-full flex-col gap-4", className);
  const rows = (
    <>
      {items.map((item) => {
        const plain = typeof item === "string";
        return (
          <li
            key={plain ? item : item.map((run) => run.text).join("")}
            className={cn(
              "flex w-full",
              centered
                ? "min-h-7 items-start gap-2 lg:items-center"
                : "items-start gap-2.5",
            )}
          >
            <Image
              src="/fura/icons/check.svg"
              alt=""
              width={24}
              height={24}
              className="size-6 shrink-0"
            />
            <span
              className={cn(
                "min-w-0 flex-1 text-base",
                // Mixed-weight rows set their own emphasis run by run.
                plain && "font-medium",
                tone === "muted" ? "text-[#484747]" : "text-subtitle",
              )}
            >
              {plain
                ? item
                : item.map((run) =>
                    run.bold ? (
                      <strong key={run.text} className="font-bold">
                        {run.text}
                      </strong>
                    ) : (
                      run.text
                    ),
                  )}
            </span>
          </li>
        );
      })}
    </>
  );

  if (!reveal) return <ul className={listClassName}>{rows}</ul>;

  return (
    <RevealGroup as="ul" className={listClassName} delay={revealDelay} step={70}>
      {rows}
    </RevealGroup>
  );
}
