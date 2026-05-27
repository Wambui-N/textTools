import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { RemoveExtraSpacesTool } from "@/components/tools/RemoveExtraSpacesTool";
import { toolsBySlug } from "@/lib/tools-config";

const tool = toolsBySlug["remove-extra-spaces"];
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export const metadata: Metadata = {
  title: "Remove Extra Spaces - Clean Whitespace from Text Free",
  description: tool.metaDescription,
  keywords: tool.keywords,
  openGraph: { title: `${tool.ogTitle} | ShelfCue`, description: tool.metaDescription, url: `${SITE_URL}/tools/remove-extra-spaces`, siteName: "ShelfCue", images: [{ url: "/og/default.png", width: 1200, height: 630 }], type: "website" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: `${SITE_URL}/tools/remove-extra-spaces` },
};

export default function RemoveExtraSpacesPage() {
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
        "Choose which types of spaces to remove using the checkboxes.",
        "Click 'Remove Spaces' to clean your text.",
        "The output shows the cleaned text with a before/after character count.",
        "Click 'Copy' to copy the cleaned text.",
      ]}
      features={[
        "Remove leading and trailing spaces per line",
        "Collapse multiple consecutive spaces into one",
        "Remove spaces before punctuation marks",
        "Convert tabs to single spaces",
        "Shows character count before and after cleaning",
      ]}
    >
      <RemoveExtraSpacesTool />
    </ToolLayout>
  );
}
