import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { CharacterCounterTool } from "@/components/tools/CharacterCounterTool";
import { toolsBySlug } from "@/lib/tools-config";

const tool = toolsBySlug["character-counter"];
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export const metadata: Metadata = {
  title: "Character Counter — Count Characters Online Free",
  description: tool.metaDescription,
  keywords: tool.keywords,
  openGraph: {
    title: `${tool.ogTitle} | ShelfCue`,
    description: tool.metaDescription,
    url: `${SITE_URL}/tools/character-counter`,
    siteName: "ShelfCue",
    images: [{ url: "/og/default.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: `${SITE_URL}/tools/character-counter` },
};

export default function CharacterCounterPage() {
  return (
    <ToolLayout
      slug={tool.slug}
      title={tool.title}
      description={tool.description}
      faqs={tool.faqs}
      relatedSlugs={tool.relatedSlugs}
      featureList={tool.featureList}
      howToUse={[
        "Type or paste your text into the text area.",
        "The character count updates instantly as you type.",
        "Check the platform limits section to see if your text fits within Twitter, Instagram, LinkedIn, or other platform limits.",
        "Use the 'Without spaces' count for platforms that count differently.",
      ]}
      features={[
        "Real-time character count with and without spaces",
        "Word and line count included",
        "Visual platform limit bars for Twitter/X, Instagram, LinkedIn, meta descriptions, and YouTube titles",
        "Over-limit warning displayed in red",
        "Completely free, no login required",
      ]}
    >
      <CharacterCounterTool />
    </ToolLayout>
  );
}
