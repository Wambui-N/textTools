import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

// AI training crawlers that do not respect robots.txt are listed separately;
// well-behaved ones should honour this disallow.
const AI_CRAWLERS = [
  "GPTBot",
  "Google-Extended",
  "CCBot",
  "anthropic-ai",
  "Claude-Web",
  "cohere-ai",
  "FacebookBot",
  "Bytespider",
  "PetalBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Keep build artefacts out of the index
        disallow: ["/_next/", "/api/"],
      },
      {
        userAgent: AI_CRAWLERS,
        disallow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
