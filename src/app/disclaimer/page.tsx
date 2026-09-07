import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Disclaimer — Fura Habitech",
  description: "Important disclaimers regarding the information on the Fura Habitech website.",
};

export default function DisclaimerPage() {
  return (
    <PageShell>
      <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
        <div className="mx-auto flex w-full max-w-[800px] flex-col items-start gap-6 py-8 lg:py-16">
          <p className="text-base font-medium text-brand-primary">Legal</p>
          <h1 className="text-display-xs font-medium text-title lg:text-display-md">
            Disclaimer
          </h1>
          <p className="text-sm text-subtitle">Last updated: 4 September 2026</p>

          <div className="flex w-full flex-col gap-6 text-base text-subtitle">
            <p>
              The information on this website is published by FURA Australia
              Pty Ltd (ACN 685 099 674) (&ldquo;FURA&rdquo;) for general
              informational purposes only and does not take into account
              your individual objectives, financial situation, or needs.
            </p>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-title">
                Not financial advice
              </h2>
              <p>
                Nothing on this website is, or should be treated as, financial
                product advice, a recommendation, or an offer or invitation
                to acquire any financial product or interest. Any investment
                opportunity referred to on this website is available only on
                the basis of the applicable offer documents and to eligible
                investors.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-title">
                Risk of investment
              </h2>
              <p>
                Past performance is not a reliable indicator of future
                performance. Property and development investments carry
                risk, including the risk of loss of capital. You should seek
                independent legal, financial, and taxation advice before
                making any investment decision.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-title">
                Accuracy of information
              </h2>
              <p>
                While we take reasonable care to ensure the information on
                this website is accurate and up to date, FURA gives no
                warranty as to its accuracy, completeness, or currency, and
                accepts no liability for any loss arising from reliance on
                it, including project renders, timelines, and indicative
                pricing, which remain subject to change.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-title">
                Contact us
              </h2>
              <p>
                Questions about this disclaimer can be sent to{" "}
                <a
                  href="mailto:enquiries@furahabitech.com.au"
                  className="font-medium text-title underline"
                >
                  enquiries@furahabitech.com.au
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
