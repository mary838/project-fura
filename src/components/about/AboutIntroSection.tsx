import { Eyebrow } from "@/components/ui/Eyebrow";

export function AboutIntroSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-4">
        <div className="flex w-full flex-col items-start gap-2">
          <Eyebrow>ABOUT US</Eyebrow>
          <h1 className="w-full text-display-md font-medium text-title">
            About fura group
          </h1>
        </div>
        <p className="w-full text-base text-subtitle lg:text-xl">
          FURA is a Singapore-headquartered investment group focused on real
          estate, infrastructure, agriculture, hospitality, and industry,
          forming a global and connected platform with presence in Singapore,
          Australia, Cambodia, Japan, and the USA.
          <br aria-hidden />
          Over 15 of network and expertise in asset development and cross-border
          capital management. FURA asset portfolio excessing USD 750 million USD
          covering more than 250 hectares of developed land,
          <br aria-hidden />
          The hospitality fund manage assets valued at over 250 million USD.
        </p>
      </div>
    </section>
  );
}
