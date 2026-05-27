import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { RemoveLineBreaksTool } from "@/components/tools/RemoveLineBreaksTool";
import { toolsBySlug } from "@/lib/tools-config";

const tool = toolsBySlug["remove-line-breaks"];
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export const metadata: Metadata = {
  title: "Remove Line Breaks - Join Lines of Text Online Free",
  description: tool.metaDescription,
  keywords: tool.keywords,
  openGraph: { title: `${tool.ogTitle} | ShelfCue`, description: tool.metaDescription, url: `${SITE_URL}/tools/remove-line-breaks`, siteName: "ShelfCue", images: [{ url: "/og/default.png", width: 1200, height: 630 }], type: "website" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: `${SITE_URL}/tools/remove-line-breaks` },
};

export default function RemoveLineBreaksPage() {
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
        "Paste your text (with unwanted line breaks) into the input area.",
        "Choose what to replace line breaks with: a space, nothing, a comma, or a custom character.",
        "Optionally enable 'Collapse multiple blank lines' or 'Remove all blank lines'.",
        "Click 'Remove Line Breaks' to process the text.",
        "Copy the cleaned output with the Copy button.",
      ]}
      features={[
        "Replace line breaks with a space, nothing, comma, or any custom character",
        "Handles both Windows (CRLF) and Unix (LF) line endings automatically",
        "Option to collapse multiple blank lines into one",
        "Option to remove all blank lines entirely",
        "Ideal for cleaning up text copied from PDFs and emails",
      ]}
    >
      <RemoveLineBreaksTool />
    </ToolLayout>
  );
}
