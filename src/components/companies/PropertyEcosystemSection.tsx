import Image from "next/image";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROPERTY_ECOSYSTEM_ITEMS } from "@/lib/companies-content";

export function PropertyEcosystemSection() {
  return (
    <section className="w-full bg-surface px-4 py-6 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 lg:gap-[52px]">
        <SectionHeading align="center" title="Part of an Integrated Property Ecosystem" />

        <RevealGroup className="grid w-full grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-6">
          {PROPERTY_ECOSYSTEM_ITEMS.map((item) => (
            <article
              key={item.title}
              className="flex h-56 w-full flex-col items-start gap-5 rounded-xl border border-border-primary bg-surface-muted p-8"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-[20px] bg-surface">
                <Image src={item.icon} alt="" width={24} height={24} className="size-6" />
              </div>

              <div className="flex w-full flex-col gap-2">
                <h3 className="w-full text-xl font-semibold text-[#1b2b4b]">
                  {item.title}
                </h3>
                <p className="w-full text-sm text-subtitle">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
