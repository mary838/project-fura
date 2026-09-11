import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "The terms governing your use of the Fura Habitech website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageShell>
      <PageSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Terms of Use", path: "/terms" },
        ]}
      />
      <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
        <div className="mx-auto flex w-full max-w-[800px] flex-col items-start gap-6 py-8 lg:py-16">
          <p className="text-base font-medium text-brand-primary">Legal</p>
          <h1 className="text-display-xs font-medium text-title lg:text-display-md">
            Terms of Use
          </h1>
          <p className="text-sm text-subtitle">Last updated: 4 September 2026</p>

          <div className="flex w-full flex-col gap-6 text-base text-subtitle">
            <p>
              These Terms of Use govern your access to and use of this
              website, operated by FURA Australia Pty Ltd (ACN 685 099 674)
              (&ldquo;FURA&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By
              accessing this website, you agree to be bound by these terms.
            </p>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-title">
                Use of this website
              </h2>
              <p>
                Content on this website is provided for general information
                purposes only about FURA Habitech and its related entities
                and projects. You may not reproduce, distribute, or use the
                content for commercial purposes without our written consent.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-title">
                No investment advice
              </h2>
              <p>
                Nothing on this website constitutes financial, legal, or
                investment advice, and does not constitute an offer or
                solicitation to invest. Any investment opportunity is subject
                to the applicable offer documents and eligibility
                requirements. See our{" "}
                <a href="/disclaimer" className="font-medium text-title underline">
                  Disclaimer
                </a>{" "}
                for more detail.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-title">
                Intellectual property
              </h2>
              <p>
                All trademarks, logos, and content on this website remain the
                property of FURA and its licensors unless otherwise stated.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-title">
                Changes to these terms
              </h2>
              <p>
                We may update these terms from time to time. Continued use of
                this website after changes are posted constitutes your
                acceptance of the updated terms.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-title">
                Contact us
              </h2>
              <p>
                Questions about these terms can be sent to{" "}
                <a
                  href="mailto:info@furahabitech.com"
                  className="font-medium text-title underline"
                >
                  info@furahabitech.com
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
