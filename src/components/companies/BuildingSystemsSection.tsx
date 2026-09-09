import Image from "next/image";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BUILDING_SYSTEMS } from "@/lib/companies-content";

export function BuildingSystemsSection() {
  return (
    <section className="w-full bg-surface-muted px-4 py-6 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10">
        <SectionHeading
          align="center"
          title="Construction Materials & Building Systems"
          description="High-performance material systems that support efficient, durable, and environmentally responsible development outcomes."
          descriptionSize="base"
        />

        <RevealGroup className="flex w-full flex-col items-stretch gap-4 lg:flex-row lg:items-start lg:gap-6">
          {BUILDING_SYSTEMS.map((system) => (
            <article
              key={system.title}
              className="group flex flex-col items-start gap-4 overflow-hidden rounded-2xl border border-border-primary bg-surface card-hover hover:-translate-y-1 hover:shadow-lg lg:min-w-0 lg:flex-1 lg:self-stretch active:-translate-y-1 active:shadow-lg touch:shadow-lg"
            >
              <div className="relative h-[296px] w-full shrink-0 overflow-hidden">
                <Image
                  src={system.image}
                  alt={system.title}
                  fill
                  sizes="(min-width: 1024px) 384px, 100vw"
                  className="object-cover transition-transform duration-200 ease-out group-hover:scale-105 group-active:scale-105"
                />
              </div>
              <div className="flex w-full flex-col items-start gap-1 px-6 pb-8 lg:p-4">
                <h3 className="w-full text-xl font-semibold text-title">
                  {system.title}
                </h3>
                <p className="w-full text-sm text-subtitle">
                  {system.description}
                </p>
              </div>
            </article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
