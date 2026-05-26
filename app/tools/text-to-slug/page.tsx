import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { TextToSlugTool } from "@/components/tools/TextToSlugTool";
import { toolsBySlug } from "@/lib/tools-config";

const tool = toolsBySlug["text-to-slug"];
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export const metadata: Metadata = {
  title: "Text to Slug — URL Slug Generator Online Free",
  description: tool.metaDescription,
  keywords: tool.keywords,
  openGraph: { title: `${tool.ogTitle} | ShelfCue`, description: tool.metaDescription, url: `${SITE_URL}/tools/text-to-slug`, siteName: "ShelfCue", images: [{ url: "/og/default.png", width: 1200, height: 630 }], type: "website" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: `${SITE_URL}/tools/text-to-slug` },
};

export default function TextToSlugPage() {
  return (
    <ToolLayout
      slug={tool.slug}
      title={tool.title}
      description={tool.description}
      faqs={tool.faqs}
      relatedSlugs={tool.relatedSlugs}
      featureList={tool.featureList}
      howToUse={[
        "Type or paste your title or phrase into the input field.",
        "The slug is generated instantly as you type.",
        "Choose hyphen (-) or underscore (_) as the separator.",
        "Optionally enable stop word removal or set a maximum length.",
        "Click 'Copy' to copy the generated slug.",
      ]}
      features={[
        "Instant slug generation as you type",
        "Choose hyphen or underscore separator (Google recommends hyphens)",
        "Automatic lowercase conversion",
        "Optional stop word removal",
        "Optional maximum length limit",
        "Handles accented characters and special characters",
      ]}
    >
      <TextToSlugTool />
    </ToolLayout>
  );
}
