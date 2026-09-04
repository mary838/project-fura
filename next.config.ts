import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
