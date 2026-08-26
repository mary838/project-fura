import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { PartnerCell } from "@/components/ui/PartnerCell";
import { PARTNERS } from "@/lib/home-content";

/**
 * Mobile lays the partners out as a static 2x3 grid; from `lg` the row scrolls
 * right-to-left. Only one layout is in the DOM at a time (`display: none` keeps
 * the hidden one out of the accessibility tree), so names aren't announced twice.
 */
export function PartnerRibbon() {
  return (
    <section className="flex w-full flex-col items-center gap-8 bg-surface py-8 lg:py-24">
      <p className="w-full px-4 text-center text-xl text-title lg:px-[100px]">
        Trusted by leading partners
      </p>

      <div className="grid w-full grid-cols-2 gap-4 px-4 lg:hidden">
        {PARTNERS.map((partner, index) => (
          <Reveal key={partner.name} delay={index * 60} className="flex">
            <PartnerCell {...partner} className="w-full" />
          </Reveal>
        ))}
      </div>

      <div className="hidden w-full lg:block">
        <Marquee>
          {PARTNERS.map((partner) => (
            <PartnerCell
              key={partner.name}
              {...partner}
              className="w-[226.667px]"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
