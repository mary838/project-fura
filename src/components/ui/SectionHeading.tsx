import { cn } from "@/lib/cn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SplitLines } from "@/components/ui/SplitLines";

/** Type scales the design uses for a section's supporting line. */
const DESCRIPTION_SIZES = {
  base: "text-base",
  lg: "text-base lg:text-lg",
  xl: "text-base lg:text-xl",
  "xl-flat": "text-xl",
  "sm-xl": "text-sm lg:text-xl",
} as const;

const TITLE_SIZES = {
  /** 30px stepping up to 44px — the default for section headings. */
  responsive: "text-display-xs lg:text-display-md",
  /** 44px at every width, used by the page-opening h1s. */
  display: "text-display-md",
} as const;

const GAPS = {
  xs: "gap-2",
  "2xs": "gap-2.5",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
} as const;

type SectionHeadingProps = {
  /** Small uppercase label above the heading. */
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  /** `"center-lg"` stays left-aligned on mobile and centres from `lg` up. */
  align?: "start" | "center" | "center-lg";
  /** Vertical rhythm between eyebrow, heading and description. */
  gap?: keyof typeof GAPS;
  /**
   * Pairs the eyebrow tightly with the title in their own group, instead of
   * letting the section's own `gap` separate them.
   */
  eyebrowGap?: keyof typeof GAPS;
  titleSize?: keyof typeof TITLE_SIZES;
  /** A couple of frames set the title in regular rather than medium. */
  titleWeight?: "medium" | "normal";
  descriptionSize?: keyof typeof DESCRIPTION_SIZES;
  /** Light-on-dark, for sections on the black background. */
  tone?: "default" | "inverse";
  className?: string;
  /** Trailing content, typically a call-to-action button. */
  children?: React.ReactNode;
};

/**
 * Stacked section heading: eyebrow, title and supporting line, with the lines
 * revealing in sequence. The description trails the title by 200ms, which is
 * the cadence used across every section.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  as = "h2",
  align = "start",
  gap = "md",
  eyebrowGap,
  titleSize = "responsive",
  titleWeight = "medium",
  descriptionSize = "xl",
  tone = "default",
  className,
  children,
}: SectionHeadingProps) {
  const inverse = tone === "inverse";
  // Without an explicit eyebrow gap the two simply sit in the outer flow.
  const Group = eyebrowGap ? EyebrowGroup : Passthrough;

  return (
    <div
      className={cn(
        "flex w-full flex-col",
        GAPS[gap],
        align === "center" && "items-center text-center",
        align === "center-lg" && "items-start lg:items-center lg:text-center",
        align === "start" && "items-start",
        className,
      )}
    >
      <Group
        className={cn(
          eyebrowGap && GAPS[eyebrowGap],
          align === "center" ? "items-center" : "items-start",
          align === "center-lg" && "lg:items-center",
        )}
      >
        {eyebrow ? (
          <Eyebrow className={cn(inverse && "text-brand-secondary")}>
            {eyebrow}
          </Eyebrow>
        ) : null}

        <SplitLines
          as={as}
          text={title}
          className={cn(
            "w-full",
            titleWeight === "normal" ? "font-normal" : "font-medium",
            TITLE_SIZES[titleSize],
            inverse ? "text-title-inverse" : "text-title",
          )}
        />
      </Group>

      {description ? (
        <SplitLines
          text={description}
          className={cn(
            "w-full",
            DESCRIPTION_SIZES[descriptionSize],
            inverse ? "text-subtitle-inverse" : "text-subtitle",
          )}
          startDelay={200}
        />
      ) : null}

      {children}
    </div>
  );
}

function EyebrowGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex w-full flex-col", className)}>
      {children}
    </div>
  );
}

function Passthrough({ children }: { children: React.ReactNode; className?: string }) {
  return <>{children}</>;
}
