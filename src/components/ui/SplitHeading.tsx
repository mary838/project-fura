import { cn } from "@/lib/cn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";

const DESCRIPTION_SIZES = {
  xl: "text-base lg:text-xl",
  "sm-xl": "text-sm lg:text-xl",
  /** 20px at every width. */
  "xl-flat": "text-xl",
} as const;

const STACK_GAPS = { none: "", sm: "gap-3", md: "gap-4" } as const;

const LEAD_GAPS = { xs: "gap-2", sm: "gap-3", md: "gap-4" } as const;

type SplitHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  as?: "h1" | "h2";
  /** Desktop column gap: 46px, flush, or pushed to the edges. */
  columns?: "even" | "tight" | "between";
  /** Cross-axis alignment of the two columns on desktop. */
  align?: "center" | "end";
  descriptionSize?: keyof typeof DESCRIPTION_SIZES;
  /** Light-on-dark, for sections on the black background. */
  tone?: "default" | "inverse";
  /** Fixed left-column width on desktop, when it is not an even split. */
  leadWidth?: string;
  /** Desktop cap on the title's line length, where a frame specifies one. */
  titleWidth?: string;
  /** Gap between eyebrow and title while stacked. */
  leadGap?: keyof typeof LEAD_GAPS;
  /** Gap between the two columns while they are stacked. */
  stackGap?: keyof typeof STACK_GAPS;
  /** Shrinks the eyebrow on mobile, as the team hero does. */
  compactEyebrow?: boolean;
};

/**
 * Two-column heading: title (and optional eyebrow) on the left, supporting
 * copy on the right, stacking on mobile. The columns fly in from their
 * respective edges.
 */
export function SplitHeading({
  eyebrow,
  title,
  description,
  as = "h2",
  columns = "even",
  align = "center",
  descriptionSize = "xl",
  tone = "default",
  leadWidth,
  titleWidth,
  leadGap = "sm",
  stackGap = "sm",
  compactEyebrow = false,
}: SplitHeadingProps) {
  const inverse = tone === "inverse";
  return (
    <div
      className={cn(
        "flex w-full flex-col lg:flex-row",
        STACK_GAPS[stackGap],
        align === "center" ? "lg:items-center" : "lg:items-end",
        columns === "even" && "lg:gap-[46px]",
        columns === "tight" && "lg:gap-0",
        columns === "between" && "lg:justify-between lg:gap-0",
      )}
    >
      <Reveal
        from="left"
        className={cn(
          "flex flex-col lg:gap-4",
          LEAD_GAPS[leadGap],
          leadWidth ?? "lg:min-w-0 lg:flex-1",
        )}
      >
        {eyebrow ? (
          <Eyebrow
            className={cn(
              inverse && "text-brand-secondary",
              compactEyebrow && "text-xs lg:text-base",
            )}
          >
            {eyebrow}
          </Eyebrow>
        ) : null}
        <SplitLines
          as={as}
          text={title}
          className={cn(
            "text-display-xs font-medium lg:text-display-md",
            inverse ? "text-title-inverse" : "text-title",
            titleWidth,
          )}
        />
      </Reveal>

      <Reveal from="right" className="lg:min-w-0 lg:flex-1">
        <SplitLines
          text={description}
          className={cn(
            "w-full",
            DESCRIPTION_SIZES[descriptionSize],
            inverse ? "text-subtitle-inverse" : "text-subtitle",
          )}
          startDelay={200}
        />
      </Reveal>
    </div>
  );
}
