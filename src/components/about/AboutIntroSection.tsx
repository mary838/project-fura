import { CheckList } from "@/components/ui/CheckList";
import { Section } from "@/components/ui/Section";
import { SplitLines } from "@/components/ui/SplitLines";
import { GROUP_HIGHLIGHTS } from "@/lib/about-content";

export function AboutIntroSection() {
  return (
    <Section gap="none" reveal className="bg-surface" containerClassName="gap-6">
      <SplitLines
        as="h1"
        text="About fura group"
        className="w-full text-display-xs font-medium text-title lg:text-display-md"
      />

      <div className="flex w-full flex-col gap-4">
        <SplitLines
          text="Through this structure, FURA is able to:"
          className="w-full text-base font-medium text-subtitle lg:text-xl"
          startDelay={200}
        />
        <CheckList items={GROUP_HIGHLIGHTS} reveal revealDelay={280} />
      </div>
    </Section>
  );
}
