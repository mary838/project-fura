import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FURA_HABITECH_PHILOSOPHY } from "@/lib/companies-content";

export function FuraStatsSection() {
  return (
    <section className="w-full bg-surface-muted px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-6">
        <SectionHeading
          title="Our philosophy is clear"
          description="Capital Preservation First"
        />

        <CheckList items={FURA_HABITECH_PHILOSOPHY} align="center" />

        <Button href="/invest">Partner With Us</Button>
      </div>
    </section>
  );
}
