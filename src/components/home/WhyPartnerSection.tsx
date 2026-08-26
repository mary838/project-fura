import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { Section } from "@/components/ui/Section";
import { VALUE_CARDS } from "@/lib/home-content";

export function WhyPartnerSection() {
  return (
    <Section gap="xl-tight" className="bg-surface-muted">
      <div className="flex w-full flex-col gap-3 lg:flex-row lg:items-center lg:gap-[46px]">
        <div className="flex flex-col gap-3 lg:flex-1 lg:gap-4">
          <Eyebrow>WHY FURA HABITECH</Eyebrow>
          <SplitLines
            as="h2"
            text="Why Partner With Fura"
            className="text-display-xs font-medium text-title lg:text-display-md"
          />
        </div>
        <SplitLines
          text={"FURA is not just an investor \u2014\nwe are a long-term platform builder"}
          className="text-base text-subtitle lg:flex-1 lg:text-xl"
          startDelay={200}
        />
      </div>

      <div className="flex w-full flex-col gap-6 lg:grid lg:h-[353px] lg:grid-cols-2 lg:gap-[42px]">
        <Reveal from="right" className="relative h-[221px] w-full overflow-hidden rounded-2xl lg:order-2 lg:h-auto">
          <Image
            src="/fura/images/why-partner.png"
            alt="Fura Habitech development site"
            fill
            sizes="(min-width: 1024px) 579px, 100vw"
            className="object-cover"
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
