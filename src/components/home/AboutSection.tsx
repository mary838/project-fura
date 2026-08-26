import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";

export function AboutSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        <Reveal from="left" className="flex w-full flex-col gap-4 lg:flex-1">
          <Eyebrow>OUR INVESTMENTS PROJECTS</Eyebrow>
          <SplitLines
            as="h2"
            text="Your trusted partner in property investment & development"
            className="text-display-xs font-medium text-title lg:text-display-md"
          />
        </Reveal>
        <SplitLines
          text="FURA Australia Pty Ltd (ACN 685 099 674) is an Australian holding company specializing in investment and development, focusing on landbanking, development approval (DA) uplift, built-to-sell and build-to-rent residential communities."
          className="w-full text-xl text-subtitle lg:flex-1"
          startDelay={200}
        />
      </div>
    </section>
  );
}
