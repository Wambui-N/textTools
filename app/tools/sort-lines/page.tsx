import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { SortLinesTool } from "@/components/tools/SortLinesTool";
import { toolsBySlug } from "@/lib/tools-config";

const tool = toolsBySlug["sort-lines"];
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export const metadata: Metadata = {
  title: "Sort Lines — Alphabetize Lists Online Free",
  description: tool.metaDescription,
  keywords: tool.keywords,
  openGraph: { title: `${tool.ogTitle} | ShelfCue`, description: tool.metaDescription, url: `${SITE_URL}/tools/sort-lines`, siteName: "ShelfCue", images: [{ url: "/og/default.png", width: 1200, height: 630 }], type: "website" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: `${SITE_URL}/tools/sort-lines` },
};

export default function SortLinesPage() {
  return (
    <ToolLayout
      slug={tool.slug}
      title={tool.title}
      description={tool.description}
      faqs={tool.faqs}
      relatedSlugs={tool.relatedSlugs}
      featureList={tool.featureList}
      howToUse={[
        "Paste your list into the input area (one item per line).",
        "Select your sort mode: A→Z, Z→A, shortest, longest, reverse, or random.",
        "Configure options like case sensitivity and blank line handling.",
        "Click 'Sort Lines' to apply the sort.",
        "Copy the sorted output.",
      ]}
      features={[
        "6 sort modes: alphabetical (A-Z), reverse alphabetical (Z-A), shortest first, longest first, reverse order, and random shuffle",
        "Case-sensitive sorting option",
        "Whitespace trimming before sorting",
        "Option to remove blank lines",
        "Random shuffle uses the Fisher-Yates algorithm",
      ]}
    >
      <SortLinesTool />
    </ToolLayout>
  );
}
