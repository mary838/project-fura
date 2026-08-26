import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HousingHero() {
  return (
    <section className="relative flex min-h-[810px] w-full flex-col items-start overflow-hidden pt-20 lg:pt-[88px]">
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/fura/images/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(91,91,91,0.4)]" />
      </div>

      <div className="relative z-10 flex w-full flex-1 flex-col items-start justify-center px-4 py-8 lg:px-[100px] lg:pt-20 lg:pb-0">
        <div className="flex w-full flex-col items-center justify-end gap-3 pb-20 lg:min-h-[570px]">
          <h1
            className="hero-rise w-full text-center text-display-md font-normal text-title-inverse lg:max-w-[880px] lg:text-display-lg"
            style={{ animationDelay: "80ms" }}
          >
            Global Real Asset Platform for Innovative Housing Solutions in
            Australia
          </h1>
          <p
            className="hero-rise w-full text-center text-lg text-white/88"
            style={{ animationDelay: "160ms" }}
          >
            Fura Habitech, by Fura Group. Connecting investors with innovative
            real asset opportunities across Australia.
          </p>
          <div className="hero-rise flex items-start" style={{ animationDelay: "240ms" }}>
            <Button href="/properties" variant="outline">
              Explore Properties
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
