import Image from "next/image";
import { Button } from "@/components/ui/Button";

type CompanyHeroProps = {
  image: string;
  title: string;
  subtitle: string;
  /** Omitted on pages whose hero has no third line. */
  tagline?: string;
  ctaLabel: string;
  ctaHref: string;
};

/** Full-bleed banner at the top of a company page. */
export function CompanyHero({
  image,
  title,
  subtitle,
  tagline,
  ctaLabel,
  ctaHref,
}: CompanyHeroProps) {
  return (
    <section className="relative flex h-[500px] w-full flex-col items-start justify-end overflow-hidden px-4 py-8 lg:px-[100px] lg:py-24">
      <div aria-hidden className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(258.9deg, rgba(0, 0, 0, 0.33) 43.087%, rgba(0, 0, 0, 0.68) 81.538%)",
          }}
        />
      </div>

      <div className="relative flex w-full max-w-[1200px] flex-col items-start gap-6 lg:w-[633px]">
        <div className="flex w-full flex-col gap-3 font-medium text-title-inverse">
          <h1 className="text-display-xs lg:text-display-md">{title}</h1>
          <p className="text-lg lg:w-[396px] lg:text-display-xs">{subtitle}</p>
        </div>
        {tagline ? (
          <p className="w-full text-base text-subtitle-inverse lg:text-xl">
            {tagline}
          </p>
        ) : null}
        <Button href={ctaHref} variant="outline" className="border-white">
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
