import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 restricts the optimizer to this allowlist and defaults it to
    // `[75]`, so a `quality={95}` prop is silently served at 75 unless the
    // value appears here. 75 stays for everything that doesn't opt in.
    qualities: [75, 95],
  },
  async headers() {
    // Conservative headers only — no Content-Security-Policy here, since a
    // CSP would need auditing against every external asset/script this site
    // loads (Turnstile's widget included) to avoid breaking the app.
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
