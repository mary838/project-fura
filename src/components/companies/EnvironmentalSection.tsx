import Image from "next/image";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";
import { SUSTAINABILITY_CERTS } from "@/lib/companies-content";

/** Stamp diameter in the design; the artwork is sized as a multiple of it. */
const STAMP = 120;

export function EnvironmentalSection() {
  return (
    <section className="flex w-full items-center justify-center bg-surface-muted px-4 py-10 lg:px-[100px] lg:py-26">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-10 lg:flex-row lg:gap-20">
        <div className="flex w-full flex-col items-start gap-7 lg:min-w-0 lg:flex-1">
          {/* Display md/Regular here — lighter than the other section titles. */}
          <SectionHeading
            gap="sm"
            titleWeight="normal"
            title="Environmental Engineering"
            description="From Bioclimatic Design to Green Certifications"
            descriptionSize="base"
          />

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

        <RevealGroup step={70} className="flex w-full flex-wrap items-start justify-center gap-4 lg:min-w-0 lg:flex-1">
          {SUSTAINABILITY_CERTS.map((cert) => (
            <div
              key={cert.image}
              className="relative flex size-[120px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#eaefea] bg-surface"
              style={cert.ground ? { backgroundColor: cert.ground } : undefined}
            >
              {/*
                The mark is scaled past the stamp and cropped by it, which is
                how the design fills each circle — `object-contain` inside the
                padding box would render every logo at half this size.
              */}
              <div
                className="relative flex items-center justify-center overflow-hidden"
                style={
                  cert.frame
                    ? { width: cert.frame.width, height: cert.frame.height }
                    : undefined
                }
              >
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={Math.round(STAMP * cert.zoom)}
                  height={Math.round(STAMP * cert.zoom)}
                  className="max-w-none shrink-0 object-contain"
                  style={{
                    width: STAMP * cert.zoom,
                    height: STAMP * cert.zoom,
                    translate:
                      cert.offsetX || cert.offsetY
                        ? `${cert.offsetX ?? 0}px ${cert.offsetY ?? 0}px`
                        : undefined,
                  }}
                />
              </div>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
