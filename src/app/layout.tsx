import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteSchema } from "@/lib/structured-data";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Lets every page below express canonical/OG URLs as relative paths.
  metadataBase: new URL(SITE_URL),
  title: {
    // Pages set only their own name; the suffix is appended here so the
    // wording is changed in one place.
    template: `%s — ${SITE_NAME}`,
    default: `${SITE_NAME} — Global Real Asset Platform`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_AU",
    url: "/",
    title: `${SITE_NAME} — Global Real Asset Platform`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Global Real Asset Platform`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Without these, Google caps the snippet length and thumbnail size it
      // will show. Uncapped snippets are what make a page eligible to be
      // pulled into a featured snippet or an AI Overview.
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={siteSchema()} />
        {children}
      </body>
    </html>
  );
}
