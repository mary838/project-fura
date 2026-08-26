import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

type SectionProps = {
  children: React.ReactNode;
  /** Vertical rhythm between the section's direct children. */
  gap?: "none" | "md" | "lg" | "xl" | "xl-tight";
  className?: string;
  id?: string;
  /** Fade the container up as it scrolls into view. */
  reveal?: boolean;
};

/**
 * Page section shell: Figma uses 16px / 32px padding on mobile and
 * 100px / 96px on desktop, with content capped at a 1200px container.
 */
export function Section({
  children,
  gap = "lg",
  className,
  id,
  reveal = false,
}: SectionProps) {
  const Container = reveal ? Reveal : "div";
  return (
    <section
      id={id}
      className={cn("w-full px-4 py-8 lg:px-[100px] lg:py-24", className)}
    >
      <Container
        className={cn(
          "mx-auto flex w-full max-w-[1200px] flex-col",
          gap === "lg" && "gap-8 lg:gap-16",
          gap === "md" && "gap-6 lg:gap-12",
          gap === "xl" && "gap-16",
          gap === "xl-tight" && "gap-6 lg:gap-16",
        )}
      >
        {children}
      </Container>
    </section>
  );
}
