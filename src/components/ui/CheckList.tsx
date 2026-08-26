import Image from "next/image";
import { cn } from "@/lib/cn";

type CheckListProps = {
  items: readonly string[];
  /**
   * `"start"` keeps the tick against the first line of wrapping copy;
   * `"center"` is for the single-line rows on the construction page.
   */
  align?: "start" | "center";
  tone?: "subtitle" | "muted";
  className?: string;
};

/** Ticked list of capabilities or registrations. */
export function CheckList({
  items,
  align = "start",
  tone = "subtitle",
  className,
}: CheckListProps) {
  const centered = align === "center";
  return (
    <ul className={cn("flex w-full flex-col gap-4", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex w-full",
            centered ? "min-h-7 items-center gap-2" : "items-start gap-2.5",
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
              "min-w-0 flex-1 text-base font-medium",
              tone === "muted" ? "text-[#484747]" : "text-subtitle",
            )}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
