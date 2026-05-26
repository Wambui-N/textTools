import type { Metadata } from "next";
import { ToolsIndex } from "@/components/tools/ToolsIndex";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export const metadata: Metadata = {
  title: "All Text Tools — Free Online Text Processing Tools",
  description: "Browse all 15 free online text tools: word counter, character counter, case converter, find and replace, text diff checker, and more. No signup required.",
  openGraph: {
    title: "All Text Tools | ShelfCue",
    description: "Browse all 15 free online text tools. No signup, no ads, all processing in your browser.",
    url: `${SITE_URL}/tools`,
    siteName: "ShelfCue",
    images: [{ url: "/og/default.png", width: 1200, height: 630 }],
    type: "website",
  },
  alternates: { canonical: `${SITE_URL}/tools` },
};

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1
          className="mb-2 text-3xl font-semibold"
          style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
        >
          All Text Tools
        </h1>
        <p className="text-base" style={{ color: "var(--text-secondary)" }}>
          15 free tools for counting, cleaning, converting, and analyzing text. No signup required.
        </p>
      </div>
      <ToolsIndex />
    </div>
  );
}
