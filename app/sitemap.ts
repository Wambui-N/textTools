import type { MetadataRoute } from "next";
import { tools } from "@/lib/tools-config";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

// Use fixed dates so the sitemap doesn't falsely signal daily changes.
// Update TOOLS_DATE whenever you ship a new batch of tools.
const LAUNCH_DATE = new Date("2026-05-27");
const TOOLS_DATE = new Date("2026-05-27"); // bump when adding new tools
const LEGAL_DATE = new Date("2026-05-27");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: LAUNCH_DATE,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/tools`,
      lastModified: TOOLS_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: LAUNCH_DATE,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: LEGAL_DATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: LEGAL_DATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...tools.map((tool) => ({
      url: `${SITE_URL}/tools/${tool.slug}`,
      lastModified: TOOLS_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
