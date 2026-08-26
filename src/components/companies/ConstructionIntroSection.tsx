import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function ConstructionIntroSection() {
  return (
    // 26px gutter on mobile is what this frame specifies (350px content in 402).
    <section className="w-full bg-surface px-[26px] py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        <div className="flex flex-col items-start gap-6 lg:w-[520px]">
          <h2 className="w-full text-display-xs font-medium text-title lg:text-display-md">
            Built with Precision. Delivered with Confidence
          </h2>
          <p className="w-full text-base text-subtitle lg:text-xl">
            Habitech Construction works alongside Open Build Pty Ltd, an
            Australian construction firm with 25 years of
            <br aria-hidden />
            experience and a proven track record of AUD550million in delivered
            projects. This partnership ensures precision, reliability, and
            compliance with national
            <br aria-hidden />
            certifications.
          </p>
          <Button href="/invest">Partner With Us</Button>
        </div>

        <div className="relative h-[423px] w-full overflow-hidden rounded-2xl lg:w-[640px]">
          <Image
            src="/fura/companies/construction/intro.png"
            alt="Habitech Construction project"
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
