import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { ReverseTextTool } from "@/components/tools/ReverseTextTool";
import { toolsBySlug } from "@/lib/tools-config";

const tool = toolsBySlug["reverse-text"];
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export const metadata: Metadata = {
  title: "Reverse Text — Backwards Text Generator Online Free",
  description: tool.metaDescription,
  keywords: tool.keywords,
  openGraph: { title: `${tool.ogTitle} | ShelfCue`, description: tool.metaDescription, url: `${SITE_URL}/tools/reverse-text`, siteName: "ShelfCue", images: [{ url: "/og/default.png", width: 1200, height: 630 }], type: "website" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: `${SITE_URL}/tools/reverse-text` },
};

export default function ReverseTextPage() {
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
        "Type or paste your text into the input area.",
        "Select the reversal mode you want to use.",
        "The reversed text updates instantly in the output area.",
        "Copy the reversed text to your clipboard.",
      ]}
      features={[
        "Reverse entire text character by character",
        "Reverse word order while keeping each word intact",
        "Reverse letters within each word",
        "Upside-down Unicode flip for social media",
        "Live preview that updates as you type",
      ]}
    >
      <ReverseTextTool />
    </ToolLayout>
  );
}
