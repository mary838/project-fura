import Image from "next/image";
import Link from "next/link";
import { SUSTAINABILITY_CERTS } from "@/lib/companies-content";

export function EnvironmentalSection() {
  return (
    <section className="flex w-full items-center justify-center bg-surface-muted px-4 py-10 lg:px-[100px] lg:py-26">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-10 lg:flex-row lg:gap-20">
        <div className="flex w-full flex-col items-start gap-7 lg:min-w-0 lg:flex-1">
          <div className="flex flex-col items-start gap-3">
            {/* Display md/Regular here — lighter than the other section titles. */}
            <h2 className="text-display-xs font-normal text-title lg:text-display-md">
              Environmental Engineering
            </h2>
            <p className="text-base text-subtitle">
              From Bioclimatic Design to Green Certifications
            </p>
          </div>

          <p className="w-full text-sm text-subtitle opacity-85">
            Sustainability is embedded in every decision we make - from
            bioclimatic design and passive strategies to advanced energy
            modelling and water-sensitive solutions.
          </p>
          <p className="w-full text-sm text-subtitle opacity-85">
            We measure performance against internationally recognized benchmarks
            to create healthy, efficient and resilient environments for people
            and planet.
          </p>

          <Link
            href="/about"
            className="flex items-center gap-2 rounded-full border border-title px-6 py-3 text-sm font-semibold text-title transition-colors hover:bg-title hover:text-title-inverse"
          >
            Our Sustainability Approach
            <Image
              src="/fura/icons/arrow-right-sm.svg"
              alt=""
              width={14}
              height={14}
              className="size-3.5"
            />
          </Link>
        </div>

        <div className="flex w-full flex-wrap items-start justify-center gap-4 lg:min-w-0 lg:flex-1">
          {SUSTAINABILITY_CERTS.map((cert, index) => (
            <div
              key={cert}
              className="relative flex size-[120px] shrink-0 items-center justify-center rounded-full border border-[#eaefea] bg-surface p-3"
            >
              <Image
                src={cert}
                alt={`Certification ${index + 1}`}
                width={96}
                height={96}
                className="size-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
