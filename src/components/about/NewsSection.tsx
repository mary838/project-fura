import { NewsCard } from "@/components/ui/NewsCard";
import { Section } from "@/components/ui/Section";
import { NEWS_ITEMS } from "@/lib/about-content";

export function NewsSection() {
  return (
    <Section gap="xl" className="bg-surface">
      <div className="flex w-full flex-col items-start gap-3">
        <h2 className="w-full text-display-xs font-medium text-title lg:text-display-md">
          News &amp; Events
        </h2>
        <p className="w-full text-base text-subtitle lg:text-lg">
          Stay informed on our latest projects, partnerships, market insights,
          and company updates.
        </p>
      </div>

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
