import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

/** Working routes a lost visitor is most likely to be looking for. */
const DESTINATIONS = [
  {
    icon: "/fura/icons/home-02.svg",
    title: "Home",
    description: "Start again from the top of the platform.",
    href: "/",
  },
  {
    icon: "/fura/icons/building-03.svg",
    title: "Real Estate Properties",
    description: "Browse ongoing and completed projects.",
    href: "/properties",
  },
  {
    icon: "/fura/icons/briefcase.svg",
    title: "Our Companies",
    description: "The businesses across the Fura group.",
    href: "/companies/fura-habitech",
  },
  {
    icon: "/fura/icons/users-02.svg",
    title: "About Fura Group",
    description: "Who we are and how we invest.",
    href: "/about",
  },
];

export default function NotFound() {
  return (
    <PageShell>
      <section className="relative w-full overflow-hidden bg-surface px-4 py-16 lg:px-[100px] lg:py-32">
        {/*
          The numeral is artwork, not content: the heading already says what
          went wrong, so it is hidden from assistive tech and never takes a
          click. It sits first in the DOM so the copy paints over it without
          either needing a z-index.
        */}
        <span
          aria-hidden
          className="pointer-events-none absolute -top-10 right-0 select-none text-[180px] leading-none font-medium text-surface-tile lg:-top-20 lg:text-[420px]"
        >
          404
        </span>

        <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-start gap-6 lg:gap-8">
          <div className="hero-rise" style={{ animationDelay: "40ms" }}>
            <Eyebrow>ERROR 404</Eyebrow>
          </div>

          <h1
            className="hero-rise max-w-[760px] text-display-sm font-medium text-title lg:text-display-lg"
            style={{ animationDelay: "120ms" }}
          >
            We can&rsquo;t find that page
          </h1>

          <p
            className="hero-rise max-w-[620px] text-base text-subtitle lg:text-xl"
            style={{ animationDelay: "200ms" }}
          >
            The link may be out of date, or the page may have moved. Check the
            address, or pick up again from one of the pages below.
          </p>

          <div
            className="hero-rise flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start"
            style={{ animationDelay: "280ms" }}
          >
            <Button href="/">Back to home</Button>
            <Button href="/properties" variant="outline-light" icon={null}>
              Explore properties
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-muted px-4 py-12 lg:px-[100px] lg:py-20">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 lg:gap-8">
          <h2 className="text-xl font-semibold text-title lg:text-display-xs">
            Popular destinations
          </h2>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {DESTINATIONS.map((destination) => (
              <Link
                key={destination.href}
                href={destination.href}
                className="group card-hover flex flex-col items-start gap-5 rounded-xl border border-border-primary bg-surface p-6 hover:-translate-y-1 hover:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)] active:-translate-y-1 active:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)] touch:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)]"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-[20px] bg-surface-muted transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-brand-secondary group-active:bg-brand-secondary">
                  <Image
                    src={destination.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="size-6"
                  />
                </div>

                <div className="flex w-full flex-col gap-2">
                  <span className="flex w-full items-start justify-between gap-2">
                    <span className="text-lg font-semibold text-title">
                      {destination.title}
                    </span>
                    <Image
                      src="/fura/icons/arrow-up-right.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="mt-0.5 size-5 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-active:translate-x-0.5 group-active:-translate-y-0.5"
                    />
                  </span>
                  <span className="text-sm text-subtitle">
                    {destination.description}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
