import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Canonical URL shape: no trailing slash (e.g. /tools not /tools/)
  trailingSlash: false,

  async redirects() {
    return [
      // Fix 404: /og/default.png was previously referenced in OG metadata.
      // Redirect to the dynamic OG image route so any cached links still work.
      {
        source: "/og/default.png",
        destination: "/opengraph-image",
        permanent: true,
      },
      // Fix trailing-slash redirects: ensure Googlebot sees 301s to the
      // canonical non-slash versions, not a Next.js internal 308.
      {
        source: "/tools/",
        destination: "/tools",
        permanent: true,
      },
      {
        source: "/about/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/privacy/",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/terms/",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/contact/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/updates/",
        destination: "/updates",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
