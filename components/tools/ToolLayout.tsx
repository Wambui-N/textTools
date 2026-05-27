import Link from "next/link";
import type { FAQItem, WhatIs, UseCase } from "@/types/tools";
import { RelatedTools } from "./RelatedTools";
import { AdBanner } from "@/components/ads/AdBanner";
import { AdSidebar } from "@/components/ads/AdSidebar";
import { AdUnit } from "@/components/ads/AdUnit";
import { AD_SLOT_BELOW } from "@/lib/adsense";
import { ToolSchema } from "@/components/seo/ToolSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, BookOpen } from "lucide-react";

interface ToolLayoutProps {
  slug: string;
  title: string;
  description: string;
  faqs: FAQItem[];
  relatedSlugs: string[];
  featureList?: string;
  howToUse?: string[];
  features?: string[];
  whatIs?: WhatIs;
  useCases?: UseCase[];
  children: React.ReactNode;
}

export function ToolLayout({
  slug,
  title,
  description,
  faqs,
  relatedSlugs,
  featureList,
  howToUse,
  features,
  whatIs,
  useCases,
  children,
}: ToolLayoutProps) {
  const belowSlot = AD_SLOT_BELOW;

  return (
    <>
      <ToolSchema name={title} description={description} slug={slug} featureList={featureList} />
      <BreadcrumbSchema items={[{ name: "Tools", item: "/tools" }, { name: title, item: `/tools/${slug}` }]} />
      <FAQSchema faqs={faqs} />

      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:underline">Tools</Link>
          <span>/</span>
          <span style={{ color: "var(--text-secondary)" }}>{title}</span>
        </nav>

        {/* Title + description */}
        <h1
          className="mb-2 text-3xl font-semibold leading-tight sm:text-4xl"
          style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
        >
          {title}
        </h1>
        <p className="mb-6 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {description}
        </p>

        {/* What is X? section */}
        {whatIs && (
          <section className="mb-6">
            <h2
              className="mb-3 text-lg font-semibold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
            >
              What is a {title}?
            </h2>
            {/* Definition callout */}
            <div
              className="mb-3 flex items-start gap-3 rounded-lg border-l-4 px-4 py-3"
              style={{
                backgroundColor: "var(--accent-subtle)",
                borderLeftColor: "var(--accent)",
              }}
            >
              <BookOpen
                className="mt-0.5 h-4 w-4 shrink-0"
                style={{ color: "var(--accent)" }}
              />
              <p
                className="text-sm font-medium leading-relaxed"
                style={{ color: "var(--accent)" }}
              >
                {whatIs.definition}
              </p>
            </div>
            {/* Explanatory paragraph */}
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {whatIs.explanation}
            </p>
          </section>
        )}

        {/* Leaderboard ad */}
        <AdBanner className="mb-6" />

        {/* Main grid: tool + sidebar */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Tool area */}
          <div className="flex-1 min-w-0">
            {/* Privacy callout */}
            <div
              className="mb-4 flex items-start gap-2 rounded-lg px-4 py-3 text-sm"
              style={{ backgroundColor: "var(--accent-subtle)", color: "var(--accent)" }}
            >
              <Shield className="mt-0.5 h-4 w-4 shrink-0" />
              <span>ShelfCue processes all text locally in your browser. Nothing is sent to our servers. Your text is never stored, logged, or shared.</span>
            </div>

            {/* The tool itself */}
            {children}

            {/* Below-tool ad */}
            <div className="mt-8">
              <AdUnit slot={belowSlot} minHeight={280} />
            </div>

            {/* How to use */}
            {howToUse && howToUse.length > 0 && (
              <section className="mt-10">
                <h2
                  className="mb-4 text-xl font-semibold"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
                >
                  How to Use {title}
                </h2>
                <ol className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  {howToUse.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-medium"
                        style={{ backgroundColor: "var(--accent-subtle)", color: "var(--accent)" }}
                      >
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* Features */}
            {features && features.length > 0 && (
              <section className="mt-8">
                <h2
                  className="mb-4 text-xl font-semibold"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
                >
                  Features
                </h2>
                <ul className="space-y-1.5 text-sm" style={{ color: "var(--text-secondary)" }}>
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: "var(--accent)" }}>✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Use cases grid */}
            {useCases && useCases.length > 0 && (
              <section className="mt-10">
                <h2
                  className="mb-4 text-xl font-semibold"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
                >
                  Common Use Cases
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {useCases.map((uc, i) => (
                    <div
                      key={i}
                      className="rounded-lg border p-4"
                      style={{
                        backgroundColor: "var(--bg-tool)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <p
                        className="mb-2 text-sm font-semibold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {uc.title}
                      </p>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {uc.scenario}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ */}
            <section className="mt-10">
              <h2
                className="mb-4 text-xl font-semibold"
                style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
              >
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-2">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="rounded-lg border px-4"
                    style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-tool)" }}
                  >
                    <AccordionTrigger
                      className="text-sm font-medium text-left hover:no-underline"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Related tools */}
            <RelatedTools slugs={relatedSlugs} />
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-20 space-y-6">
              <AdSidebar />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
