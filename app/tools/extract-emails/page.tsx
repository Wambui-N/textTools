import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { ExtractEmailsTool } from "@/components/tools/ExtractEmailsTool";
import { toolsBySlug } from "@/lib/tools-config";

const tool = toolsBySlug["extract-emails"];
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export const metadata: Metadata = {
  title: "Extract Emails from Text - Free Email Extractor Tool",
  description: tool.metaDescription,
  keywords: tool.keywords,
  openGraph: { title: `${tool.ogTitle} | ShelfCue`, description: tool.metaDescription, url: `${SITE_URL}/tools/extract-emails`, siteName: "ShelfCue", images: [{ url: "/og/default.png", width: 1200, height: 630 }], type: "website" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: `${SITE_URL}/tools/extract-emails` },
};

export default function ExtractEmailsPage() {
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
        "Paste any text, email body, or webpage source into the input area.",
        "The tool automatically extracts all valid email addresses.",
        "Duplicate addresses are removed automatically.",
        "Copy the results as a newline-separated list or comma-separated list.",
        "Download all extracted emails as a .txt file.",
      ]}
      features={[
        "Extracts all email addresses from any block of text",
        "Automatic deduplication (case-insensitive)",
        "Shows total found and unique count",
        "Copy as newline-separated or comma-separated list",
        "Download extracted emails as a .txt file",
      ]}
    >
      <ExtractEmailsTool />
    </ToolLayout>
  );
}
