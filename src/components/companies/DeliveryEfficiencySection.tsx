import { MediaFrame } from "@/components/ui/MediaFrame";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatTileRow } from "@/components/ui/StatTileRow";
import { DELIVERY_POINTS, MANUFACTURING_STATS } from "@/lib/companies-content";

export function DeliveryEfficiencySection() {
  return (
    <Section gap="xl" className="bg-surface">
      <SectionHeading
        align="center"
        gap="xs"
        title="Modular delivery targets labour and time efficiency"
        description="More work moves into a controlled factory environment while site works progress in parallel."
        descriptionSize="base"
      />

      <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start">
        <div className="flex flex-col items-start gap-7 lg:min-w-0 lg:flex-1 lg:self-stretch">
          <ol className="flex w-full flex-col gap-5">
            {DELIVERY_POINTS.map((point) => (
              <li key={point.number} className="flex w-full items-start gap-4">
                <span className="w-9 shrink-0 text-base font-semibold text-title">
                  {point.number}
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <span className="text-base font-medium text-title">
                    {point.title}
                  </span>
                  <span className="text-sm text-subtitle">
                    {point.description}
                  </span>
                </span>
              </li>
            ))}
          </ol>

          <p className="w-full rounded-md bg-surface-muted px-4 py-3 text-sm text-subtitle">
            Lower labour requirements and shorter delivery periods may reduce
            construction, holding and finance costs - supporting project margin.
          </p>
        </div>

        <MediaFrame
          src="/fura/companies/manufacturing/delivery-diagram.png"
          alt="Modular delivery programme compared with traditional construction"
          sizes="(min-width: 1024px) 500px, 100vw"
          radius="sm"
        className="h-[445px] lg:h-[344px] lg:w-[500px] lg:shrink-0"
        />
      </div>

      <StatTileRow stats={MANUFACTURING_STATS} />
    </Section>
  );
}
