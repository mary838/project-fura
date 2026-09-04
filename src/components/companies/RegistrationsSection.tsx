import { CheckList } from "@/components/ui/CheckList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONSTRUCTION_REGISTRATIONS } from "@/lib/companies-content";

export function RegistrationsSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      {/* The frame runs this list to the full padded width, not the 1200px container. */}
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-6 lg:gap-12">
        <SectionHeading title="Professional Registrations" />

        <CheckList
          items={CONSTRUCTION_REGISTRATIONS}
          align="center"
          tone="muted"
        />
      </div>
    </section>
  );
}
