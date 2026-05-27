import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { FindReplaceTool } from "@/components/tools/FindReplaceTool";
import { toolsBySlug } from "@/lib/tools-config";

const tool = toolsBySlug["find-and-replace"];
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export const metadata: Metadata = {
  title: "Find and Replace Text Online - Free Text Editor Tool",
  description: tool.metaDescription,
  keywords: tool.keywords,
  openGraph: { title: `${tool.ogTitle} | ShelfCue`, description: tool.metaDescription, url: `${SITE_URL}/tools/find-and-replace`, siteName: "ShelfCue", images: [{ url: "/og/default.png", width: 1200, height: 630 }], type: "website" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: `${SITE_URL}/tools/find-and-replace` },
};

export default function FindAndReplacePage() {
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
        "Paste your text into the main text area.",
        "Type the word or phrase you want to find in the 'Find' field. Matches are counted in real time.",
        "Type the replacement text in the 'Replace with' field (leave empty to delete matches).",
        "Toggle 'Case sensitive' or 'Whole word only' as needed.",
        "Click 'Replace All' to make all replacements at once.",
      ]}
      features={[
        "Real-time match counting as you type",
        "Case-sensitive and case-insensitive modes",
        "Whole-word matching to avoid partial matches",
        "Replace all occurrences at once",
        "Leave replacement field empty to delete all matches",
      ]}
    >
      <FindReplaceTool />
    </ToolLayout>
  );
}
