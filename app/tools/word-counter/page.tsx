import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { WordCounterTool } from "@/components/tools/WordCounterTool";
import { toolsBySlug } from "@/lib/tools-config";

const tool = toolsBySlug["word-counter"];
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export const metadata: Metadata = {
  title: "Word Counter — Free Online Word Count Tool",
  description: tool.metaDescription,
  keywords: tool.keywords,
  openGraph: {
    title: `${tool.ogTitle} | ShelfCue`,
    description: tool.metaDescription,
    url: `${SITE_URL}/tools/word-counter`,
    siteName: "ShelfCue",
    images: [{ url: "/og/default.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `${tool.ogTitle} | ShelfCue`, description: tool.metaDescription },
  alternates: { canonical: `${SITE_URL}/tools/word-counter` },
};

export default function WordCounterPage() {
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
        "Paste or type your text into the text area above.",
        "Word count, character count, sentences, and paragraphs update instantly as you type.",
        "Reading time is calculated at 238 words per minute (average adult reading speed).",
        "Speaking time is calculated at 130 words per minute.",
        "Use the Clear button to reset and start with new text.",
      ]}
      features={[
        "Live word count that updates in real time",
        "Character count with and without spaces",
        "Sentence and paragraph detection",
        "Reading time estimate (238 wpm average)",
        "Speaking time estimate (130 wpm)",
        "No signup, no ads obscuring the tool, completely free",
        "All processing happens in your browser — text never leaves your device",
      ]}
    >
      <WordCounterTool />
    </ToolLayout>
  );
}
