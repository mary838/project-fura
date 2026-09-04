import { Marquee } from "@/components/ui/Marquee";
import { PartnerCell } from "@/components/ui/PartnerCell";
import { PARTNERS } from "@/lib/home-content";

/**
 * The partners run as one right-to-left ribbon at every width — the mobile
 * frame clips the same single row rather than stacking a grid. Cells narrow
 * from 226.667px to 179px below `lg`.
 */
export function PartnerRibbon() {
  return (
    <section className="flex w-full flex-col items-center gap-8 bg-surface py-8 lg:py-24">
      <p className="w-full px-4 text-center text-xl text-title lg:px-[100px]">
        Trusted by leading partners
      </p>

      <Marquee>
        {PARTNERS.map((partner) => (
          <PartnerCell
            key={partner.name}
            {...partner}
            className="w-[179px] lg:w-[226.667px]"
          />
        ))}
      </Marquee>
    </section>
  );
}
