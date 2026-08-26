import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About Fura Group", href: "/about" },
      { label: "Leadership Team", href: "/leadership" },
      { label: "Investor Relations", href: "/investor-relations" },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { label: "Fura Habitech", href: "/companies/fura-habitech" },
      {
        label: "Habitech Manufacturing",
        href: "/companies/habitech-manufacturing",
      },
      {
        label: "Habitech Construction",
        href: "/companies/habitech-construction",
      },
      {
        label: "Habitech Development",
        href: "/companies/habitech-development",
      },
      { label: "Habitech Property", href: "/companies/habitech-property" },
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: "/fura/icons/linkedin.svg", label: "LinkedIn", href: "https://www.linkedin.com" },
  { icon: "/fura/icons/instagram.svg", label: "Instagram", href: "https://www.instagram.com" },
  { icon: "/fura/icons/x.svg", label: "X", href: "https://x.com" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
];

/**
 * Newsletter sign-up band. Only some pages carry it, so the footer takes it
 * as an opt-in rather than showing it everywhere.
 */
function NewsletterBand() {
  return (
    <div className="flex w-full flex-col items-center bg-[#fafafa] py-8 lg:py-12">
      <div className="flex w-full max-w-[1280px] flex-col gap-8 px-4 lg:px-8">
        <div className="flex w-full flex-wrap items-start justify-between gap-y-8">
          <div className="flex min-w-0 flex-col gap-2 lg:max-w-[768px] lg:min-w-[480px] lg:flex-1">
            <p className="text-lg font-semibold text-title lg:text-xl">
              Join our newsletter
            </p>
            <p className="text-base text-subtitle">
              We&rsquo;ll send you a nice letter once per week. No spam.
            </p>
          </div>
          <form className="flex w-full flex-col items-stretch gap-4 lg:w-[400px] lg:flex-row lg:items-start">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-md border border-border-primary bg-surface px-3.5 py-2.5 text-base text-title placeholder:text-placeholder focus:outline-2 focus:outline-offset-2 focus:outline-title"
            />
            <Button
              type="submit"
              size="sm"
              icon={null}
              className="w-full lg:w-auto"
            >
              Send us
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

/**
 * The Figma footer component now carries the newsletter band, so it is on by
 * default; pass `newsletter={false}` for a page that should omit it.
 */
export function Footer({ newsletter = true }: { newsletter?: boolean }) {
  return (
    <footer className="flex w-full flex-col bg-surface lg:gap-2.5">
      {newsletter ? <NewsletterBand /> : null}
      <div className="flex w-full flex-col gap-8 overflow-hidden rounded-t-[32px] bg-utility-gray-900 px-4 pt-12 pb-10 lg:gap-16 lg:px-[100px] lg:pt-20">
        <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
          <div className="flex flex-col gap-7 lg:w-[320px] lg:shrink-0">
            <Image
              src="/fura/icons/logo-lockup-white.svg"
              alt="Fura Habitech"
              width={239}
              height={39}
              className="h-[39px] w-[239px]"
            />
            <div className="flex flex-col gap-2.5 text-sm text-subtitle-inverse">
              <p className="font-semibold">Get in Touch</p>
              <a href="tel:+61730000000">+61 7 3000 0000</a>
              <a href="mailto:enquiries@furahabitech.com.au">
                enquiries@furahabitech.com.au
              </a>
            </div>
            <div className="flex items-start gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-9 items-center justify-center rounded-md bg-white/30 p-2 opacity-80 transition-opacity hover:opacity-100"
                >
                  <Image
                    src={social.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="size-6"
                  />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-4 lg:min-w-0 lg:flex-1">
              <p className="text-sm font-semibold text-placeholder">
                {column.title}
              </p>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-subtitle-inverse transition-opacity hover:opacity-70"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-4 lg:min-w-0 lg:flex-1">
            <p className="text-sm font-semibold text-placeholder">
              Office Location
            </p>
            <address className="flex flex-col gap-2 not-italic text-subtitle-inverse">
              <p className="text-sm font-semibold">FURA Australia Pty Ltd</p>
              <p className="text-xs">ACN 685 099 674</p>
              <p className="text-sm">
                Level 12, 1 Eagle Street
                <br />
                Brisbane QLD 4000, Australia
              </p>
              <p className="text-xs text-placeholder">
                Mon – Fri: 8:30 am – 5:30 pm AEST
              </p>
            </address>
          </div>
        </div>

        <hr className="w-full border-t border-white/10" />

        <div className="flex w-full flex-col items-center gap-3 text-center text-subtitle-inverse lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:text-left">
          <p className="text-sm opacity-60">
            © 2026 FURA Australia Pty Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-start justify-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs opacity-70 transition-opacity hover:opacity-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
