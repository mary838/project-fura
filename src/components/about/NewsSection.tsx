import { NewsCard } from "@/components/ui/NewsCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NEWS_ITEMS } from "@/lib/about-content";

export function NewsSection() {
  return (
    <Section gap="xl" reveal className="bg-surface">
      <SectionHeading
        gap="sm"
        title="News & Events"
        description="Stay informed on our latest projects, partnerships, market insights, and company updates."
        descriptionSize="lg"
      />

      {/*
        Mobile scrolls the cards horizontally, with the next one peeking past
        the edge. The negative margin lets the row bleed to the screen edge
        while the first card stays flush with the page's 16px gutter.
      */}
      <div className="-mx-4 flex w-[calc(100%+2rem)] snap-x snap-mandatory items-center gap-6 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:mx-0 lg:w-full lg:snap-none lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
        {NEWS_ITEMS.map((item) => (
          <NewsCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}
