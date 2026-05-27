import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { RemoveDuplicatesTool } from "@/components/tools/RemoveDuplicatesTool";
import { toolsBySlug } from "@/lib/tools-config";

const tool = toolsBySlug["remove-duplicate-lines"];
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export const metadata: Metadata = {
  title: "Remove Duplicate Lines - Free Online Deduplication Tool",
  description: tool.metaDescription,
  keywords: tool.keywords,
  openGraph: { title: `${tool.ogTitle} | ShelfCue`, description: tool.metaDescription, url: `${SITE_URL}/tools/remove-duplicate-lines`, siteName: "ShelfCue", images: [{ url: "/og/default.png", width: 1200, height: 630 }], type: "website" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: `${SITE_URL}/tools/remove-duplicate-lines` },
};

export default function RemoveDuplicateLinesPage() {
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
        "Paste your list or text (one item per line) into the input area.",
        "Configure options: case sensitivity, whitespace trimming, and blank line removal.",
        "Click 'Remove Duplicates' to deduplicate your list.",
        "The output shows unique lines in their original order with a count of removed duplicates.",
        "Copy the result with the Copy button.",
      ]}
      features={[
        "Removes duplicate lines while preserving original order",
        "Case-insensitive comparison by default (toggle to case-sensitive)",
        "Whitespace trimming before comparison",
        "Option to remove blank lines",
        "Shows count of lines before, after, and removed",
      ]}
    >
      <RemoveDuplicatesTool />
    </ToolLayout>
  );
}
