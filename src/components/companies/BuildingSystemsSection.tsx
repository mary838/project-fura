import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BUILDING_SYSTEMS } from "@/lib/companies-content";

export function BuildingSystemsSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-20">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 lg:gap-10">
        <SectionHeading
          align="center"
          title="Construction Materials & Building Systems"
          description="High-performance material systems that support efficient, durable, and environmentally responsible development outcomes."
          descriptionSize="base"
        />

        <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row lg:items-start">
          {BUILDING_SYSTEMS.map((system) => (
            <article
              key={system.title}
              className="flex flex-col items-start gap-4 overflow-hidden rounded-2xl bg-surface-muted lg:min-w-0 lg:flex-1 lg:self-stretch"
            >
              <div className="relative h-[296px] w-full shrink-0">
                <Image
                  src={system.image}
                  alt={system.title}
                  fill
                  sizes="(min-width: 1024px) 384px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex w-full flex-col items-start gap-1 px-6 pb-8">
                <h3 className="w-full text-xl font-semibold text-title">
                  {system.title}
                </h3>
                <p className="w-full text-sm text-subtitle">
                  {system.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
