import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatTileRow } from "@/components/ui/StatTileRow";
import { PROPERTY_SHOWCASE, PROPERTY_STATS } from "@/lib/companies-content";

export function PropertySalesSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      {/* This frame is not capped at 1200px — the stat row below runs wider. */}
      <div className="mx-auto flex w-full flex-col items-center gap-8 lg:gap-16">
        <SectionHeading
          gap="sm"
          title="Connecting People with Better Places"
          description="From project launch to final sale, we combine market knowledge, customer engagement, and strategic sales support to create a seamless property journey."
          descriptionSize="xl-flat"
        >
          <Button href="/invest">Partner With Us</Button>
        </SectionHeading>

        <div className="flex w-full max-w-[1200px] flex-col items-center gap-4 lg:flex-row">
          {PROPERTY_SHOWCASE.map((item) => (
            <div
              key={item.image}
              className="flex h-[423px] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#e4d9cc] lg:min-w-0 lg:flex-1"
            >
              {/* Portrait floor plan sits inset on the beige panel. */}
              <div className="relative h-[422px] w-[253px] shrink-0">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="253px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <StatTileRow
          stats={PROPERTY_STATS}
          layout="fixed"
          className="mt-8 lg:mt-0"
        />
      </div>
    </section>
  );
}
