import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Fura Australia Pty Ltd collects, uses, and protects your personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ]}
      />
      <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
        <div className="mx-auto flex w-full max-w-[800px] flex-col items-start gap-6 py-8 lg:py-16">
          <p className="text-base font-medium text-brand-primary">Legal</p>
          <h1 className="text-display-xs font-medium text-title lg:text-display-md">
            Privacy Policy
          </h1>
          <p className="text-sm text-subtitle">Last updated: 4 September 2026</p>

          <div className="flex w-full flex-col gap-6 text-base text-subtitle">
            <p>
              FURA Australia Pty Ltd (ACN 685 099 674) (&ldquo;FURA&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy and is
              committed to protecting personal information collected through
              this website in accordance with the Australian Privacy
              Principles under the Privacy Act 1988 (Cth).
            </p>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-title">
                Information we collect
              </h2>
              <p>
                We collect information you provide directly, such as your
                name and email address when you submit an enquiry through our
                contact form, along with technical information such as your
                IP address and browser type for security and analytics
                purposes.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-title">
                How we use your information
              </h2>
              <p>
                We use the information you provide to respond to your
                enquiries, share information about our investment
                opportunities and projects, and to improve our website and
                services.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-title">
                Third parties
              </h2>
              <p>
                We use Cloudflare Turnstile to protect our contact form from
                automated abuse, and a third-party email delivery service to
                send enquiry notifications. We do not sell your personal
                information to third parties.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-title">
                Contact us
              </h2>
              <p>
                For questions about this policy or to access or correct your
                personal information, contact us at{" "}
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
