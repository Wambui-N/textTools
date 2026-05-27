import type { Metadata } from "next";
import Link from "next/link";
import { tools, toolsBySlug } from "@/lib/tools-config";
import { AdBanner } from "@/components/ads/AdBanner";
import { HomepageToolsGrid } from "@/components/home/HomepageToolsGrid";
import { HomepageFAQ } from "@/components/home/HomepageFAQ";
import { HOMEPAGE_FAQS } from "@/lib/homepage-faqs";
import {
  ArrowRight,
  Zap,
  Lock,
  MousePointerClick,
  ServerOff,
  Hash,
  Type,
  CaseSensitive,
} from "lucide-react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export const metadata: Metadata = {
  title: "ShelfCue - 31 Free Online Text Tools | Word Counter, Case Converter & More",
  description:
    "Free online text tools for writers, developers, and marketers. Word counter, character counter, case converter, remove duplicates, text diff checker, and 26 more. No signup. Runs in your browser.",
  openGraph: {
    title: "ShelfCue - 31 Free Online Text Tools",
    description:
      "Free online text tools for writers, developers, and marketers. No signup. Runs in your browser.",
    url: SITE_URL,
    siteName: "ShelfCue",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShelfCue - 31 Free Online Text Tools",
    description:
      "Word counter, character counter, case converter, and 12 more. No signup. 100% browser-based.",
  },
  alternates: { canonical: SITE_URL },
};

// JSON-LD schemas
function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ShelfCue",
    url: SITE_URL,
    description:
      "Free online text tools for writers, developers, and marketers. No signup required.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/tools?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ShelfCue",
    url: SITE_URL,
    logo: `${SITE_URL}/opengraph-image`,
    description: "ShelfCue provides free online text tools for writers, developers, and marketers.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@mail.madewithmake.com",
      contactType: "customer support",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FAQPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOMEPAGE_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Popular tools spotlight data
const SPOTLIGHT_SLUGS = ["word-counter", "character-counter", "case-converter"];
const SPOTLIGHT_ICONS = [Hash, Type, CaseSensitive];
const SPOTLIGHT_HOOKS = [
  "Paste any text and see words, characters, sentences, paragraphs, and reading time update live with no button required.",
  "Know exactly how many characters you have left for Twitter, Instagram captions, meta descriptions, or any platform.",
  "One click converts text to UPPER CASE, lower case, Title Case, camelCase, snake_case, kebab-case, and more.",
];

export default function HomePage() {
  return (
    <>
      <WebSiteSchema />
      <OrganizationSchema />
      <FAQPageSchema />

      {/* ── 1. HERO ── */}
      <section
        className="border-b py-20"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-primary)" }}
      >
        <div className="mx-auto max-w-4xl px-4 text-center">
          {/* Eyebrow */}
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium"
            style={{
              backgroundColor: "var(--accent-subtle)",
              borderColor: "var(--accent)",
              color: "var(--accent)",
            }}
          >
            {tools.length} free tools · No signup required · 100% browser-based
          </div>

          {/* H1 */}
          <h1
            className="mb-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-[3.5rem]"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
          >
            Every text tool you reach for,
            <br />
            <em style={{ color: "var(--accent)" }}>finally in one place</em>
          </h1>

          {/* Subtext listing tool names */}
          <p
            className="mx-auto mb-3 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Word counter, character counter, case converter, find &amp; replace, text diff
            checker, and 10 more tools for writers, developers, and marketers.
          </p>

          {/* CTA */}
          <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--accent)", color: "#fff" }}
            >
              Browse all {tools.length} tools
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
            >
              How it works
            </Link>
          </div>

          {/* Privacy note */}
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Your text never leaves your browser. Ever.
          </p>
        </div>
      </section>

      {/* ── 2. TRUST BAR ── */}
      <section
        className="border-b"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="mx-auto max-w-4xl px-4 py-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { stat: String(tools.length), label: "Free tools", sub: "forever" },
              { stat: "0", label: "Servers", sub: "text never transmitted" },
              { stat: "0", label: "Accounts", sub: "no signup required" },
              { stat: "100%", label: "Browser-based", sub: "works offline" },
            ].map(({ stat, label, sub }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <span
                  className="text-3xl font-semibold tabular-nums"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
                >
                  {stat}
                </span>
                <span className="mt-0.5 text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {label}
                </span>
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AD BANNER ── */}
      <div className="mx-auto max-w-6xl px-4 pt-8">
        <AdBanner />
      </div>

      {/* ── 3. POPULAR TOOLS SPOTLIGHT ── */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h2
            className="text-xl font-semibold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
          >
            Popular tools
          </h2>
          <Link
            href="/tools"
            className="flex items-center gap-1 text-sm"
            style={{ color: "var(--accent)" }}
          >
            See all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {SPOTLIGHT_SLUGS.map((slug, i) => {
            const tool = toolsBySlug[slug];
            const Icon = SPOTLIGHT_ICONS[i];
            return (
              <Link
                key={slug}
                href={`/tools/${slug}`}
                className="group rounded-xl border p-5 transition-all hover:shadow-md"
                style={{ backgroundColor: "var(--bg-tool)", borderColor: "var(--border)" }}
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "var(--accent-subtle)", color: "var(--accent)" }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3
                  className="mb-1.5 text-base font-semibold group-hover:underline"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
                >
                  {tool.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {SPOTLIGHT_HOOKS[i]}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  Try it free <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── 4. ALL TOOLS GRID ── */}
      <section
        className="border-t py-12"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8">
            <h2
              className="mb-1 text-2xl font-semibold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
            >
              All {tools.length} tools
            </h2>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Filter by category or browse everything below.
            </p>
          </div>
          <HomepageToolsGrid />
        </div>
      </section>

      {/* ── 5. BUILT FOR PEOPLE WHO WORK WITH TEXT ── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2
          className="mb-2 text-2xl font-semibold"
          style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
        >
          Built for people who work with text
        </h2>
        <p className="mb-10 text-sm" style={{ color: "var(--text-secondary)" }}>
          ShelfCue covers the daily text tasks of three common roles, no tool-switching needed.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              role: "Writers",
              color: "#3B82F6",
              items: [
                "Check word counts for essays, articles, and manuscripts",
                "Estimate reading time before publishing a post",
                "Analyse word frequency to cut overused language",
                "Generate Lorem Ipsum for layout mockups",
              ],
            },
            {
              role: "Developers",
              color: "#8B5CF6",
              items: [
                "Convert variable names between camelCase, snake_case, and kebab-case",
                "Generate URL slugs from page titles in one click",
                "Diff two config files or code snippets side by side",
                "Extract email addresses from logs or exported data",
              ],
            },
            {
              role: "Marketers",
              color: "#10B981",
              items: [
                "Check character counts for Twitter, meta descriptions, and ad copy",
                "Remove duplicates from merged email or keyword lists",
                "Find and replace brand names across long documents",
                "Check keyword density before publishing SEO content",
              ],
            },
          ].map(({ role, color, items }) => (
            <div
              key={role}
              className="rounded-xl border p-6"
              style={{ backgroundColor: "var(--bg-tool)", borderColor: "var(--border)" }}
            >
              <div className="mb-4 flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <h3
                  className="text-base font-semibold"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
                >
                  {role}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. WHY SHELFCUE ── */}
      <section
        className="border-t py-16"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <h2
            className="mb-10 text-2xl font-semibold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
          >
            Why ShelfCue?
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Instant results",
                body: "Every analysis tool updates in real time as you type: word count, character count, reading time. No submit button, no spinner, no delay. You see results the moment you start typing.",
                detail: "Tools that transform text (sort lines, remove duplicates, case converter) apply in one click and show a before/after character count so you always know exactly what changed.",
              },
              {
                icon: ServerOff,
                title: "Genuinely private",
                body: "ShelfCue has no server-side text processing. There is no endpoint that receives your input. All tool logic is JavaScript running locally in your browser tab.",
                detail: "You can verify this in 30 seconds: open your browser's developer tools, go to the Network tab, paste text into any tool, and confirm that zero requests are made containing your content.",
              },
              {
                icon: MousePointerClick,
                title: "No friction",
                body: "No account. No email. No password. No free trial that expires. No feature locked behind a subscription. Open a tool, use it, close the tab.",
                detail: "ShelfCue is funded by Google AdSense advertising. That is the only trade-off: you may see an ad on the page. In exchange you get fully functional text tools, permanently free, with no other strings attached.",
              },
            ].map(({ icon: Icon, title, body, detail }) => (
              <div
                key={title}
                className="rounded-xl border p-6"
                style={{ backgroundColor: "var(--bg-tool)", borderColor: "var(--border)" }}
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "var(--accent-subtle)", color: "var(--accent)" }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3
                  className="mb-2 text-base font-semibold"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
                >
                  {title}
                </h3>
                <p className="mb-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {body}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ── */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2
          className="mb-6 text-2xl font-semibold"
          style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
        >
          Frequently asked questions
        </h2>
        <HomepageFAQ />
      </section>

      {/* ── 8. SEO PROSE BLOCK ── */}
      <section
        className="border-t py-12"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="mx-auto max-w-3xl px-4">
          <h2
            className="mb-4 text-lg font-semibold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
          >
            Free online text tools, no account required
          </h2>
          <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            <p>
              ShelfCue is a collection of free browser-based text tools designed for everyday use by writers, developers, marketers, students, and anyone who works with text. Every tool on this site runs entirely in your browser. Nothing is sent to a server, nothing is stored, and no account is required.
            </p>
            <p>
              The suite covers the most common text tasks: counting words and characters for platform limits and assignments, converting text case for code and headlines, cleaning up whitespace and line breaks from copy-pasted documents, sorting and deduplicating lists, finding and replacing text across long documents, comparing two versions of a text side by side, analysing word frequency for SEO and writing quality, and generating placeholder Lorem Ipsum text for design mockups.
            </p>
            <p>
              All {tools.length} tools are permanently free. ShelfCue is supported by Google AdSense advertising. Open any tool, use it, and come back whenever you need it. No login. No paywall. Your text never leaves your browser.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom ad */}
      <div className="mx-auto max-w-6xl px-4 py-6">
        <AdBanner />
      </div>
    </>
  );
}
