import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SITE_OPERATOR } from "@/lib/legal";

const CANONICAL = `${SITE_URL}/updates`;

export const metadata: Metadata = {
  title: "Updates - ShelfCue",
  description:
    "A changelog of new tools, improvements, and site updates on ShelfCue - free online text tools for writers, developers, and marketers.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Updates | ShelfCue",
    description: "New tools, improvements, and site updates.",
    url: CANONICAL,
    siteName: SITE_OPERATOR,
    type: "website",
  },
};

interface Update {
  date: string;
  tag: "Tools" | "Privacy" | "Site" | "SEO";
  title: string;
  description: string;
  links?: { label: string; href: string }[];
}

const UPDATES: Update[] = [
  {
    date: "May 2026",
    tag: "Tools",
    title: "Batch 1: 16 new text tools",
    description:
      "Added a second batch of 16 tools covering text cleaning, analysis, and transformation. New tools include: Remove HTML Tags, Remove Punctuation, Remove Numbers, Count Sentences, Count Paragraphs, Add Line Numbers, Remove Line Numbers, Wrap Text, Repeat Text, Count Vowels, ROT13 Encoder, Text to Binary, Binary to Text, Morse Code, Number to Words, and Count Word Occurrences. The site now offers 31 tools total.",
    links: [{ label: "Browse all tools", href: "/tools" }],
  },
  {
    date: "May 2026",
    tag: "Privacy",
    title: "Cookie consent and Google Consent Mode v2",
    description:
      "Added a cookie consent banner that blocks Google Analytics and Google AdSense until you explicitly accept. Implemented Google Consent Mode v2 so non-essential signals are denied by default. You can now use all tools with no third-party data collection if you decline.",
    links: [{ label: "Privacy Policy", href: "/privacy" }],
  },
  {
    date: "May 2026",
    tag: "SEO",
    title: "Dynamic Open Graph images and Search Console readiness",
    description:
      "Replaced a broken static OG image reference with dynamic Open Graph images for every page and tool. Updated the sitemap with accurate fixed lastModified dates, tightened robots.txt to block AI training crawlers, and added 301 redirects for old image URLs and trailing-slash variants.",
  },
  {
    date: "May 2026",
    tag: "Site",
    title: "Launch: 15 free text tools",
    description:
      "ShelfCue launched with 15 browser-based text tools for writers, developers, and marketers. All processing runs locally in your browser. No account required. Includes Word Counter, Character Counter, Case Converter, Remove Duplicates, Sort Lines, Find and Replace, Reverse Text, Text Diff Checker, Base64 Encode/Decode, URL Encode/Decode, Lorem Ipsum Generator, Slug Generator, Trim Whitespace, Extract Emails, and Extract URLs.",
    links: [
      { label: "About ShelfCue", href: "/about" },
      { label: "All Tools", href: "/tools" },
    ],
  },
];

const TAG_COLORS: Record<Update["tag"], string> = {
  Tools: "var(--accent)",
  Privacy: "#6366f1",
  Site: "var(--accent-hover)",
  SEO: "#0891b2",
};

export default function UpdatesPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14">
      <h1
        className="mb-2 text-3xl font-semibold"
        style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
      >
        Updates
      </h1>
      <p className="mb-12 text-base" style={{ color: "var(--text-secondary)" }}>
        New tools, improvements, and changes to ShelfCue.
      </p>

      <div className="relative">
        {/* Vertical timeline line */}
        <div
          className="absolute left-0 top-2 bottom-2 w-px"
          style={{ backgroundColor: "var(--border)" }}
        />

        <ol className="space-y-10 pl-8">
          {UPDATES.map((update, i) => (
            <li key={i} className="relative">
              {/* Timeline dot */}
              <span
                className="absolute -left-8 mt-1.5 h-3 w-3 rounded-full border-2"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  borderColor: TAG_COLORS[update.tag],
                  transform: "translateX(-50%)",
                  left: "0",
                }}
              />

              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: "var(--accent-subtle)",
                    color: TAG_COLORS[update.tag],
                  }}
                >
                  {update.tag}
                </span>
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {update.date}
                </span>
              </div>

              <h2
                className="text-base font-semibold mb-1"
                style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
              >
                {update.title}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {update.description}
              </p>

              {update.links && update.links.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-3">
                  {update.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-xs underline hover:opacity-80"
                      style={{ color: "var(--accent)" }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
