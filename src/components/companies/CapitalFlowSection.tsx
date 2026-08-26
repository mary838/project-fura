import Image from "next/image";
import { CODA_ROLES, FH_FLOW_STEPS } from "@/lib/fura-habitech-content";

const TAB_CLASSES = ["Class A", "Class B", "Class C"];
const ACTIVE_TAB = "Class B";

export function CapitalFlowSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-20">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8">
        <div className="flex w-full flex-col justify-center gap-2.5">
          <h2 className="w-full text-display-xs font-medium text-title lg:text-display-md">
            How Capital May Flow to Mt Gravatt
          </h2>
          <p className="w-full text-base text-subtitle">
            Investors select Class A, B, or C; they do not nominate an
            individual project.
          </p>
          <p className="w-full text-base text-subtitle">
            Mt Gravatt is shown as one Class B deployment example.
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="flex w-full items-start gap-3 lg:w-auto">
            {TAB_CLASSES.map((tab) => (
              <span
                key={tab}
                className={`flex h-11 w-[132px] items-center justify-center rounded-lg px-9 py-3 text-sm font-medium ${
                  tab === ACTIVE_TAB
                    ? "bg-utility-gray-900 text-title-inverse"
                    : "border border-border-primary bg-surface text-title"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
          <p className="flex items-center px-4 py-2 text-sm text-subtitle">
            Illustrative path below:&nbsp;
            <span className="font-medium text-title">
              Class B / Mt Gravatt
            </span>
          </p>
        </div>

        {/* Horizontal chain on desktop; a vertical one on mobile. */}
        <div className="flex w-full flex-col items-stretch justify-center gap-2 lg:flex-row lg:items-center lg:py-6">
          {FH_FLOW_STEPS.map((step, index) => (
            <div
              key={step.title}
              className="contents lg:flex lg:min-w-0 lg:flex-1 lg:items-center"
            >
              <div className="flex w-full flex-col items-center gap-4 rounded-[10px] border border-border-secondary bg-surface px-4 py-6 text-center lg:h-[142px] lg:min-w-0 lg:flex-1">
                <p className="w-full text-base font-medium text-title">
                  {step.title}
                </p>
                <p className="w-full text-[13px] leading-[18px] text-subtitle">
                  {step.description}
                </p>
              </div>
              {index < FH_FLOW_STEPS.length - 1 ? (
                <span className="flex w-full shrink-0 items-center justify-center lg:h-[170px] lg:w-6">
                  <Image
                    src="/fura/icons/flow-arrow.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="size-4 rotate-90 lg:rotate-0"
                  />
                </span>
              ) : null}
            </div>
          ))}
        </div>

        {/* CODA leads on mobile; FURA sits first on desktop. */}
        <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row lg:items-start">
          <div className="order-2 flex flex-col gap-3 overflow-hidden rounded-2xl bg-utility-gray-900 p-10 lg:order-1 lg:w-[420px] lg:shrink-0 lg:gap-5 lg:self-stretch">
            <p className="text-xs text-[#b38e5b]">OFFER ARRANGEMENT</p>
            <p className="text-display-xs font-medium text-white lg:text-display-sm">
              FURA Australia
            </p>
            <p className="text-base text-white/88 lg:w-[280px]">
              Authorised intermediary arranging the offer and applications.
            </p>
          </div>

          <div className="order-1 flex flex-col gap-7 rounded-2xl border border-border-secondary bg-surface p-8 lg:order-2 lg:min-w-0 lg:flex-1 lg:self-stretch">
            <div className="flex w-full items-center gap-3 border-b border-border-primary pb-4 whitespace-nowrap">
              <p className="text-base font-medium text-title">
                CODA ASSET MANAGEMENT
              </p>
              <p className="text-[13px] text-[#717680]">|</p>
              <p className="text-sm text-[#717680]">AFSL 389315</p>
            </div>

            <div className="flex w-full flex-col items-center gap-4 lg:flex-row">
              {CODA_ROLES.map((role, index) => (
                <div
                  key={role.title}
                  className="contents lg:flex lg:min-w-0 lg:flex-1 lg:items-center"
                >
                  <div className="flex w-full flex-col items-center justify-center gap-4 lg:min-w-0 lg:flex-1">
                    <span className="flex size-10 items-center justify-center">
                      <Image
                        src={role.icon}
                        alt=""
                        width={28}
                        height={28}
                        className="size-7"
                      />
                    </span>
                    <span className="flex w-full flex-col items-center gap-1.5 text-center">
                      <span className="w-full text-sm font-medium text-title">
                        {role.title}
                      </span>
                      <span className="w-full text-xs text-subtitle">
                        {role.caption}
                      </span>
                    </span>
                  </div>
                  {index < CODA_ROLES.length - 1 ? (
                    <span className="hidden h-16 w-px shrink-0 bg-border-primary lg:block" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
