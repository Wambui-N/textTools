import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { LoremIpsumTool } from "@/components/tools/LoremIpsumTool";
import { toolsBySlug } from "@/lib/tools-config";

const tool = toolsBySlug["lorem-ipsum-generator"];
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator — Free Placeholder Text Tool",
  description: tool.metaDescription,
  keywords: tool.keywords,
  openGraph: { title: `${tool.ogTitle} | ShelfCue`, description: tool.metaDescription, url: `${SITE_URL}/tools/lorem-ipsum-generator`, siteName: "ShelfCue", images: [{ url: "/og/default.png", width: 1200, height: 630 }], type: "website" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: `${SITE_URL}/tools/lorem-ipsum-generator` },
};

export default function LoremIpsumPage() {
  return (
    <ToolLayout
      slug={tool.slug}
      title={tool.title}
      description={tool.description}
      faqs={tool.faqs}
      relatedSlugs={tool.relatedSlugs}
      featureList={tool.featureList}
      howToUse={[
        "Select whether you want words, sentences, or paragraphs.",
        "Enter the quantity you need (1–100).",
        "Toggle 'Start with Lorem ipsum...' to use the classic opening or generate random text.",
        "Click 'Generate' to produce your placeholder text.",
        "Copy the text to your clipboard with one click.",
      ]}
      features={[
        "Generate Lorem Ipsum by words, sentences, or paragraphs",
        "Adjustable quantity from 1 to 100 units",
        "Toggle the classic 'Lorem ipsum dolor sit amet...' opening",
        "One-click copy to clipboard",
        "Ideal for web design mockups, print layouts, and development",
      ]}
    >
      <LoremIpsumTool />
    </ToolLayout>
  );
}
