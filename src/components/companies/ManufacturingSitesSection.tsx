import Image from "next/image";
import { MANUFACTURING_SITES } from "@/lib/companies-content";

export function ManufacturingSitesSection() {
  return (
    <section className="w-full bg-surface-muted px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-16">
        <div className="flex w-full flex-col gap-4 text-center">
          <h2 className="w-full text-display-xs font-medium text-title lg:text-display-md">
            Our Manufacturing Sites
          </h2>
          <p className="w-full text-xl text-subtitle">
            Habitech manufacturing counts 5 construction material factory site
            in China specialized in Modular, Prefab house and steel Factory.
            These production site benefuits from the investment and partnership
            of JINGGONG STEEL GROUP Chinese listed companies ranked no 1 In
            steel construction
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
          {MANUFACTURING_SITES.map((site, index) => (
            <div
              key={site}
              className="relative h-[423px] w-full overflow-hidden rounded-2xl"
            >
              <Image
                src={site}
                alt={`Manufacturing site ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 592px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
