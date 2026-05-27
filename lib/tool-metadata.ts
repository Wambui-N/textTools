import type { Metadata } from "next";
import type { ToolDefinition } from "@/types/tools";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export function buildToolMetadata(tool: ToolDefinition): Metadata {
  const ogTitle = tool.ogTitle ?? tool.title;
  const canonical = `${SITE_URL}/tools/${tool.slug}`;

  return {
    title: ogTitle,
    description: tool.metaDescription,
    keywords: tool.keywords,
    openGraph: {
      title: `${ogTitle} | ShelfCue`,
      description: tool.metaDescription,
      url: canonical,
      siteName: "ShelfCue",
      images: [{ url: "/og/default.png", width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${ogTitle} | ShelfCue`,
      description: tool.metaDescription,
    },
    alternates: { canonical },
  };
}
