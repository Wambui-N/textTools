import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { WordFrequencyTool } from "@/components/tools/WordFrequencyTool";
import { toolsBySlug } from "@/lib/tools-config";

const tool = toolsBySlug["word-frequency-counter"];
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export const metadata: Metadata = {
  title: "Word Frequency Counter - Keyword Density Analyzer Free",
  description: tool.metaDescription,
  keywords: tool.keywords,
  openGraph: { title: `${tool.ogTitle} | ShelfCue`, description: tool.metaDescription, url: `${SITE_URL}/tools/word-frequency-counter`, siteName: "ShelfCue", images: [{ url: "/og/default.png", width: 1200, height: 630 }], type: "website" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: `${SITE_URL}/tools/word-frequency-counter` },
};

export default function WordFrequencyPage() {
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
        "Paste your text into the input area.",
        "Enable or disable stop word filtering to show only meaningful content words.",
        "Set the minimum word length to filter out short words.",
        "Choose how many top words to show (10, 25, 50, or all).",
        "Sort the results by frequency, count, or alphabetically.",
      ]}
      features={[
        "Complete word frequency analysis with count and percentage",
        "Optional stop word filtering (common function words removed)",
        "Case-insensitive analysis by default",
        "Minimum word length filter",
        "Visual CSS bar chart showing relative frequency",
        "Sort by most frequent, least frequent, or alphabetically",
      ]}
    >
      <WordFrequencyTool />
    </ToolLayout>
  );
}
