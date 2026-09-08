import Image from "next/image";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VALUE_CARDS } from "@/lib/home-content";

export function WhyPartnerSection() {
  return (
    <Section gap="xl-tight" reveal className="bg-surface-muted">
      <SectionHeading
        align="center-lg"
        eyebrowGap="sm"
        eyebrow="WHY FURA HABITECH"
        title="Why Partner With Fura"
        description="FURA is not just an investor — we are a long-term platform builder"
        descriptionSize="xl"
      />

      {/*
        The card row breaks the 1200px container by 20px on either side in the
        design, so it is pulled wide from `lg` up.
      */}
      <RevealGroup className="grid w-full grid-cols-1 gap-4 lg:-mx-5 lg:flex lg:w-[calc(100%+40px)] lg:flex-row lg:items-stretch lg:gap-6">
        {VALUE_CARDS.map((card) => (
          <article
            key={card.title}
            className="group flex flex-col items-center gap-4 rounded-2xl border border-border-primary bg-surface p-[25px] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-lg lg:flex-1"
          >
            <div className="flex size-24 items-center justify-center rounded-full bg-surface-muted transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-brand-accent">
              <Image
                src={card.icon}
                alt=""
                width={35}
                height={35}
                className="size-[35px]"
              />
            </div>

            <div className="flex flex-col items-center gap-3">
              <h3 className="text-display-xs font-semibold text-[#0b192c]">
                {card.title}
              </h3>
              <span className="h-0.5 w-[61px] rounded-full bg-[#222325]" />
            </div>

            <p className="w-full text-center text-lg text-subtitle">
              {card.description}
            </p>
          </article>
        ))}
      </RevealGroup>
    </Section>
  );
}
