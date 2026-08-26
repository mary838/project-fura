import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { VALUE_CARDS } from "@/lib/home-content";

export function WhyPartnerSection() {
  return (
    <Section gap="xl-tight" className="bg-surface-muted">
      <SplitHeading
        eyebrow="WHY FURA HABITECH"
        title="Why Partner With Fura"
        description={"FURA is not just an investor —\nwe are a long-term platform builder"}
      />

      <div className="flex w-full flex-col gap-6 lg:grid lg:h-[353px] lg:grid-cols-2 lg:gap-[42px]">
        <Reveal from="right" className="lg:order-2">
          <MediaFrame
            src="/fura/images/why-partner.png"
            alt="Fura Habitech development site"
            sizes="(min-width: 1024px) 579px, 100vw"
            className="h-[221px] lg:h-full"
          />
        </Reveal>

        <Reveal
          from="left"
          className="flex flex-col gap-3 lg:order-1 lg:grid lg:grid-cols-2 lg:grid-rows-2"
        >
          {VALUE_CARDS.map((card) => (
            <article
              key={card.title}
              className={`flex flex-col items-start rounded-2xl bg-surface p-6 ${
                card.wide ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex w-full flex-col gap-3">
                <h3 className="text-xl font-medium text-title">{card.title}</h3>
                <p className="text-lg text-subtitle">{card.description}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
