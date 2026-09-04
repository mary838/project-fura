import { MediaFrame } from "@/components/ui/MediaFrame";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DELIVERY_IMAGES, DELIVERY_POINTS } from "@/lib/companies-content";

export function DeliveryEfficiencySection() {
  return (
    <Section gap="xl-tight" className="bg-surface-muted">
      <SectionHeading
        align="center"
        gap="xs"
        title="Modular delivery targets labour and time efficiency"
        description="More work moves into a controlled factory environment while site works progress in parallel."
        descriptionSize="base"
      />

      <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
        <div className="flex flex-col items-start gap-6 lg:min-w-0 lg:flex-1 lg:self-stretch lg:justify-center lg:gap-7">
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

          {/*
            The frame fills this box with #f5f5f5 on a #f5f5f5 section, so it
            reads as indented copy rather than a visible panel. Kept as-is.
          */}
          <p className="w-full rounded-md bg-surface-muted px-4 py-3 text-sm text-subtitle">
            Lower labour requirements and shorter delivery periods may reduce
            construction, holding and finance costs - supporting project margin.
          </p>
        </div>

        {/* The four delivery stages, two up, in a 500px column beside the list. */}
        <RevealGroup className="grid w-full grid-cols-1 gap-4 lg:w-[500px] lg:shrink-0 lg:grid-cols-2 lg:gap-3">
          {DELIVERY_IMAGES.map((image) => (
            <MediaFrame
              key={image.src}
              src={image.src}
              alt={image.alt}
              sizes="(min-width: 1024px) 244px, 100vw"
              radius="md"
              className="h-[242px]"
            />
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
