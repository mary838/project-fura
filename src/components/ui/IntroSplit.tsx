import { Button } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type IntroSplitProps = {
  title: string;
  /** One entry per rendered paragraph. `\n` inside one forces a line break. */
  paragraphs: readonly string[];
  image: { src: string; alt: string; mobileSrc?: string };
  cta?: { label: string; href: string };
  /** Mobile gutter — a couple of frames specify 26px instead of 16px. */
  gutter?: "default" | "wide";
  /** Gap between the copy and the image while they are stacked. */
  stackGap?: "md" | "lg";
  /** Body scale: `"md"` steps up at `lg`, `"xl"` is 20px at every width. */
  paragraphSize?: "md" | "xl";
};

/**
 * Company-page opener: heading, body copy and a call to action beside a
 * 640x423 image, stacking on mobile.
 */
export function IntroSplit({
  title,
  paragraphs,
  image,
  cta,
  gutter = "default",
  stackGap = "md",
  paragraphSize = "md",
}: IntroSplitProps) {
  return (
    <section
      className={cn(
        "w-full bg-surface py-8 lg:px-[100px] lg:py-24",
        gutter === "wide" ? "px-[26px]" : "px-4",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-[1200px] flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-0",
          stackGap === "md" ? "gap-6" : "gap-8",
        )}
      >
        <Reveal
          from="left"
          className="flex flex-col items-start gap-6 lg:w-[520px]"
        >
          <h2 className="w-full text-display-xs font-medium text-title lg:text-display-md">
            {title}
          </h2>
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className={cn(
                "w-full whitespace-pre-line text-subtitle",
                paragraphSize === "xl" ? "text-xl" : "text-base lg:text-xl",
              )}
            >
              {paragraph}
            </p>
          ))}
          {cta ? <Button href={cta.href}>{cta.label}</Button> : null}
        </Reveal>

        <Reveal from="right" className="w-full lg:w-[640px]">
          <MediaFrame
            src={image.src}
            mobileSrc={image.mobileSrc}
            alt={image.alt}
            sizes="(min-width: 1024px) 640px, 100vw"
            className="h-[423px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
