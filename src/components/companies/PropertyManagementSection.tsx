import Image from "next/image";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROPERTY_MANAGEMENT_ITEMS } from "@/lib/companies-content";

export function PropertyManagementSection() {
  return (
    <section className="w-full bg-surface-muted px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 lg:gap-[52px]">
        <SectionHeading align="center" title="What We Manage" />

        <RevealGroup className="grid w-full grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-6">
          {PROPERTY_MANAGEMENT_ITEMS.map((item) => (
            <article
              key={item.title}
              className="group flex h-56 w-full flex-col items-start gap-5 rounded-xl border border-border-primary bg-surface p-8 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)]"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-[20px] bg-surface-muted transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-brand-secondary">
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
