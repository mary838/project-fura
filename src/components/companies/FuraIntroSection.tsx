import Image from "next/image";

type PortfolioFeature = {
  icon: string;
  title: string;
  description: string;
  /** Shorter copy shown on mobile, where the card is narrower. */
  mobileTitle?: string;
  mobileDescription?: string;
};

/** The three regulatory/operating roles behind Coda's asset developments. */
const PORTFOLIO_FEATURES: PortfolioFeature[] = [
  {
    icon: "/fura/icons/check-circle-broken.svg",
    title: "AFSL License",
    description: "Coda AM AFSL 389315",
    mobileTitle: "AFS License",
    mobileDescription: "Provides licensed oversight",
  },
  {
    icon: "/fura/icons/briefcase-02.svg",
    title: "Investment Manager",
    description: "Manages the portfolio",
  },
  {
    icon: "/fura/icons/lock-02.svg",
    title: "Security Trustee",
    description: "Holds security for bondholders",
  },
];

export function FuraIntroSection() {
  return (
    <section className="w-full bg-surface px-4 py-12 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-8 lg:gap-[42px]">
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-4">
            <h2 className="text-display-xs font-medium tracking-tight text-title lg:text-display-md">
              Coda assets developments
            </h2>
            <span className="rounded-full bg-surface-muted px-3 py-3 text-sm font-medium text-title lg:hidden">
              AFSL 389315
            </span>
            <span className="hidden rounded-full bg-surface-muted px-3 py-3 text-sm font-medium text-title lg:inline-flex">
              FURA HABITECH pty ltd is an investment management company,
              regulated under ASIC AFSL no 389315
            </span>
          </div>
          <p className="w-full text-lg leading-7 text-subtitle">
            Providing trusted oversight and management to protect and grow
            investor value.
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-4 lg:flex-row lg:items-start">
          {PORTFOLIO_FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-1 items-start gap-3 rounded-xl border-[1.5px] border-border-primary bg-surface p-6 lg:gap-6 lg:p-8"
            >
              <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-surface-tile">
                <Image
                  src={feature.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4">
                <h3 className="text-display-xs font-semibold tracking-tight text-title">
                  <span className="lg:hidden">
                    {feature.mobileTitle ?? feature.title}
                  </span>
                  <span className="hidden lg:inline">{feature.title}</span>
                </h3>
                <p className="text-sm text-subtitle">
                  <span className="lg:hidden">
                    {feature.mobileDescription ?? feature.description}
                  </span>
                  <span className="hidden lg:inline">
                    {feature.description}
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
