import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function FuraIntroSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        <div className="flex flex-col items-start gap-6 lg:w-[520px]">
          <h2 className="w-full text-display-xs font-medium text-title lg:text-display-md">
            Disciplined Capital, Long term value
          </h2>
          <p className="w-full text-xl text-subtitle">
            We combine investment expertise, structured capital solutions, and
            real asset opportunities to support sustainable growth and capital
            preservation.
          </p>
          <Button href="/invest">Partner With Us</Button>
        </div>

        <div className="relative h-[423px] w-full overflow-hidden rounded-2xl lg:w-[640px]">
          <Image
            src="/fura/companies/fura-habitech/intro.jpg"
            alt="FURA Habitech development"
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
