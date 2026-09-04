import Image from "next/image";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROPERTY_CARE_POINTS } from "@/lib/companies-content";

export function PropertyCareSection() {
  return (
    <section className="w-full bg-surface-muted px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-6 lg:gap-6">
        <SectionHeading
          gap="md"
          title="Caring for Property, Supporting People"
          description="Habitech Property supports the Fura ecosystem through property sales, market positioning, and buyer engagement, helping projects reach the right customers across Australia and international markets."
          descriptionSize="sm-xl"
        />

        <div className="flex w-full flex-col gap-4">
          <p className="w-full text-xl font-medium text-subtitle">
            Capital Preservation First
          </p>

          <RevealGroup as="ul" className="flex w-full flex-col gap-4">
            {PROPERTY_CARE_POINTS.map((point) => (
              <li key={point.title} className="flex w-full items-center gap-2.5">
                <Image
                  src="/fura/icons/check.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 shrink-0"
                />
                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <span className="w-full text-base font-semibold text-title">
                    {point.title}
                  </span>
                  <span className="w-full text-sm text-[#4b5563]">
                    {point.description}
                  </span>
                </span>
              </li>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
