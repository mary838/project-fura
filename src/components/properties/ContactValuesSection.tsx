import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT_VALUES } from "@/lib/properties-content";

export function ContactValuesSection({
  ctaLabel = "Invest with us",
  ctaHref = "#contact-form",
}: {
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:pt-24 lg:pb-30">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 lg:gap-16">
        <SectionHeading
          align="center"
          gap="sm"
          className="justify-center lg:gap-4"
          title="Contact Us"
          description={"Let’s build long-term value together."}
          descriptionSize="sm-xl"
        >
          <Button href={ctaHref}>{ctaLabel}</Button>
        </SectionHeading>

        <RevealGroup className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-x-6">
          {CONTACT_VALUES.map((value) => (
            <div
              key={value.title}
              className="group card-hover flex flex-col items-center gap-3 rounded-2xl border border-surface-muted bg-surface-muted p-6 hover:-translate-y-1 hover:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)] active:-translate-y-1 active:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)] touch:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)]"
            >
              <Image
                src={value.icon}
                alt=""
                width={42}
                height={42}
                className="size-[42px] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-active:scale-110"
              />
              <div className="flex w-full flex-col gap-4 text-center">
                <p className="text-display-sm font-medium text-title">
                  {value.title}
                </p>
                <p className="text-lg font-medium text-subtitle">
                  {value.body}
                </p>
              </div>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
