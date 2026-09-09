import Image from "next/image";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SUSTAINABILITY_PILLARS } from "@/lib/companies-content";

export function EnvironmentalSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 lg:gap-10">
        <SectionHeading
          align="center"
          title="Building Better, Living Greener"
          description="Sustainability is at the heart of how we design and develop. We create architecture and communities that respect the environment, enhance everyday living and deliver long-term value."
          descriptionSize="base"
        />

        <RevealGroup className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
          {SUSTAINABILITY_PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="group flex flex-col items-start gap-6 rounded-2xl border border-border-primary bg-surface p-6 card-hover hover:-translate-y-1 hover:shadow-lg active:-translate-y-1 active:shadow-lg touch:shadow-lg"
            >
              <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#eaf0eb] transition-colors duration-200 ease-out group-hover:bg-brand-secondary group-active:bg-brand-secondary">
                <Image
                  src={pillar.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10"
                />
              </div>

              <div className="flex w-full flex-col gap-4">
                <h3 className="text-display-xs font-semibold text-title">
                  {pillar.title}
                </h3>
                <p className="w-full text-sm text-subtitle">
                  {pillar.description}
                </p>
              </div>
            </article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
