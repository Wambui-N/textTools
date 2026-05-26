import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { ReadingTimeTool } from "@/components/tools/ReadingTimeTool";
import { toolsBySlug } from "@/lib/tools-config";

const tool = toolsBySlug["reading-time-estimator"];
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export const metadata: Metadata = {
  title: "Reading Time Estimator — Calculate Reading Time Free",
  description: tool.metaDescription,
  keywords: tool.keywords,
  openGraph: { title: `${tool.ogTitle} | ShelfCue`, description: tool.metaDescription, url: `${SITE_URL}/tools/reading-time-estimator`, siteName: "ShelfCue", images: [{ url: "/og/default.png", width: 1200, height: 630 }], type: "website" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: `${SITE_URL}/tools/reading-time-estimator` },
};

export default function ReadingTimePage() {
  return (
    <ToolLayout
      slug={tool.slug}
      title={tool.title}
      description={tool.description}
      faqs={tool.faqs}
      relatedSlugs={tool.relatedSlugs}
      featureList={tool.featureList}
      whatIs={tool.whatIs}
      useCases={tool.useCases}
      howToUse={[
        "Paste or type your text into the text area.",
        "Reading time estimates update instantly.",
        "See estimates for slow (150 wpm), average (238 wpm), and fast readers (350 wpm).",
        "Speaking time (130 wpm) is useful for presentations and podcasts.",
        "The content-type hint gives context for what the length means.",
      ]}
      features={[
        "Three reading speed estimates: slow (150 wpm), average (238 wpm), fast (350 wpm)",
        "Speaking time estimate at 130 words per minute",
        "Word and character count included",
        "Content-type hint (short article, blog post, essay, etc.)",
        "Based on research-backed reading speed averages",
      ]}
    >
      <ReadingTimeTool />
    </ToolLayout>
  );
}
