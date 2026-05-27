import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { TextDiffTool } from "@/components/tools/TextDiffTool";
import { toolsBySlug } from "@/lib/tools-config";

const tool = toolsBySlug["text-diff-checker"];
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export const metadata: Metadata = {
  title: "Text Diff Checker - Compare Two Texts Online Free",
  description: tool.metaDescription,
  keywords: tool.keywords,
  openGraph: { title: `${tool.ogTitle} | ShelfCue`, description: tool.metaDescription, url: `${SITE_URL}/tools/text-diff-checker`, siteName: "ShelfCue", images: [{ url: "/og/default.png", width: 1200, height: 630 }], type: "website" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: `${SITE_URL}/tools/text-diff-checker` },
};

export default function TextDiffPage() {
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
        "Paste the original (old) version of your text in the left box.",
        "Paste the revised (new) version in the right box.",
        "Choose between 'Word diff' and 'Line diff' mode.",
        "Click 'Compare' to see highlighted differences.",
        "Green highlights show added text; red strikethrough shows removed text.",
      ]}
      features={[
        "Word-level diff for precise change detection",
        "Line-level diff mode for comparing documents line by line",
        "Additions highlighted in green, deletions in red with strikethrough",
        "Count of additions, deletions, and unchanged sections",
        "All comparison runs locally. Your text is never transmitted",
      ]}
    >
      <TextDiffTool />
    </ToolLayout>
  );
}
