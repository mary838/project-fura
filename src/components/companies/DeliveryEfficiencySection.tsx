import Image from "next/image";
import { StatTile } from "@/components/ui/StatTile";
import { DELIVERY_POINTS, MANUFACTURING_STATS } from "@/lib/companies-content";

export function DeliveryEfficiencySection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-16">
        <div className="flex w-full flex-col gap-2 text-center">
          <h2 className="w-full text-display-xs font-medium text-title lg:text-display-md">
            Modular delivery targets labour and time efficiency
          </h2>
          <p className="w-full text-base text-subtitle">
            More work moves into a controlled factory environment while site
            works progress in parallel.
          </p>
        </div>

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
              construction, holding and finance costs - supporting project
              margin.
            </p>
          </div>

          <div className="relative h-[445px] w-full overflow-hidden rounded-[10px] lg:h-[344px] lg:w-[500px] lg:shrink-0">
            <Image
              src="/fura/companies/manufacturing/delivery-diagram.png"
              alt="Modular delivery programme compared with traditional construction"
              fill
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 lg:flex-row lg:items-start">
          {MANUFACTURING_STATS.map((stat) => (
            <StatTile key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
