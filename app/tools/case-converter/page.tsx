import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { CaseConverterTool } from "@/components/tools/CaseConverterTool";
import { toolsBySlug } from "@/lib/tools-config";

const tool = toolsBySlug["case-converter"];
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export const metadata: Metadata = {
  title: "Case Converter — Change Text Case Online Free",
  description: tool.metaDescription,
  keywords: tool.keywords,
  openGraph: {
    title: `${tool.ogTitle} | ShelfCue`,
    description: tool.metaDescription,
    url: `${SITE_URL}/tools/case-converter`,
    siteName: "ShelfCue",
    images: [{ url: "/og/default.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: `${SITE_URL}/tools/case-converter` },
};

export default function CaseConverterPage() {
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
        "Click one of the eight case conversion buttons.",
        "Your text is converted instantly.",
        "Click 'Copy' to copy the converted text to your clipboard.",
        "Click another button to apply a different case conversion.",
      ]}
      features={[
        "8 case formats: UPPER, lower, Title, Sentence, camelCase, PascalCase, snake_case, kebab-case",
        "Title case respects exception words (a, the, of, in, etc.)",
        "Sentence case capitalises the first letter of each sentence",
        "Instant conversion with one-click copy",
      ]}
    >
      <CaseConverterTool />
    </ToolLayout>
  );
}
