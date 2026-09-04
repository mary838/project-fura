import Image from "next/image";
import { CheckList } from "@/components/ui/CheckList";
import { SplitLines } from "@/components/ui/SplitLines";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { CAPABILITIES } from "@/lib/about-content";

/**
 * Body copy is kept as plain strings so `SplitLines` can measure it: it reveals
 * a paragraph one rendered line at a time, which needs a single text node. A
 * newline is the forced break the design draws with a `<br>`.
 */
const VISION =
  "Building scalable housing solutions for Australia’s future, Our mission is to become Australia’s leading affordable housing and residential investment platform. Our vision is to redefine housing delivery through innovation, investment, and integrated execution — ensuring affordability, sustainability, and scalability at every stage.";

const ECOSYSTEM =
  "FURA Australia has established a fully integrated ecosystem designed to address Australia’s growing housing shortage through development, manufacturing, construction, property\nmanagement, and capital solutions.";

const VALUE_CHAIN =
  "This integrated approach positions FURA Habitech to participate across the entire housing value chain while maintaining a strong focus on capital preservation and scalable growth.";

const BODY = "w-full text-base text-subtitle lg:text-xl";
const HEADING =
  "w-full text-display-xs font-medium text-title lg:text-display-md";

export function VisionSection() {
  return (
    <Section gap="xl" reveal className="bg-surface">
      <div className="flex w-full flex-col items-start gap-6">
        <SplitLines as="h2" text="Our Vision" className={HEADING} />
        <SplitLines text={VISION} className={BODY} startDelay={200} />
      </div>

      {/* Copy on the left, imagery on the right, stacking below `lg`. */}
      <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:gap-16">
        <div className="flex w-full flex-col items-start gap-6 lg:min-w-0 lg:flex-1">
          <SplitLines
            as="h2"
            text="About fura habitech - Queenland Australia"
            className={HEADING}
          />
          {/*
            Each block trails the one above it, so the column reads top-down
            rather than every paragraph starting at once.
          */}
          <SplitLines text={ECOSYSTEM} className={BODY} startDelay={200} />
          <SplitLines text={VALUE_CHAIN} className={BODY} startDelay={320} />

          <div className="flex w-full flex-col items-start gap-4">
            <SplitLines
              text="Through this structure, FURA is able to:"
              className="w-full text-base font-medium text-subtitle lg:text-xl"
              startDelay={440}
            />
            <CheckList items={CAPABILITIES} reveal revealDelay={520} />
          </div>

          <Reveal delay={200}>
            <Button href="/invest">Partner With Us</Button>
          </Reveal>
        </div>

        <div className="relative h-[280px] w-full overflow-hidden rounded-2xl lg:h-[720px] lg:min-w-0 lg:flex-1">
          <Image
            src="/fura/images/about-vision.png"
            alt="Fura Habitech residential development in Queensland"
            fill
            sizes="(min-width: 1024px) 588px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
