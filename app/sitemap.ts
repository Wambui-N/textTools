import type { MetadataRoute } from "next";
import { tools } from "@/lib/tools-config";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/tools`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    ...tools.map((tool) => ({
      url: `${SITE_URL}/tools/${tool.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
