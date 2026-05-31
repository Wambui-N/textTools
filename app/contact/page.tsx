import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SITE_OPERATOR, CONTACT_GENERAL } from "@/lib/legal";

const CANONICAL = `${SITE_URL}/contact`;

export const metadata: Metadata = {
  title: "Contact ShelfCue - Get in Touch",
  description:
    "Have a question, suggestion, or bug report? Reach the ShelfCue team at hello@mail.madewithmake.com. We typically reply within 1-2 business days.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Contact ShelfCue",
    description: "Questions, suggestions, or feedback? We'd love to hear from you.",
    url: CANONICAL,
    siteName: SITE_OPERATOR,
    type: "website",
  },
};

function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${SITE_OPERATOR}`,
    url: CANONICAL,
    description: `Contact page for ${SITE_OPERATOR}, a free browser-based text tools site.`,
    mainEntity: {
      "@type": "Organization",
      name: SITE_OPERATOR,
      url: SITE_URL,
      contactPoint: {
        "@type": "ContactPoint",
        email: CONTACT_GENERAL,
        contactType: "customer support",
        availableLanguage: "English",
      },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const h2 = "mb-2 text-xl font-semibold";
const h2Style = { fontFamily: "var(--font-heading)", color: "var(--text-primary)" };
const linkStyle = { color: "var(--accent)" };

export default function ContactPage() {
  return (
    <>
      <ContactPageSchema />
      <div className="mx-auto max-w-2xl px-4 py-14">
        <h1
          className="mb-4 text-3xl font-semibold"
          style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
        >
          Contact Us
        </h1>
        <div className="space-y-8 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>

          <section>
            <p>
              We are a small team and we read every message. Whether you have a question about a
              tool, spotted a bug, or want to suggest a feature, we would love to hear from you.
            </p>
          </section>

          <section>
            <h2 className={h2} style={h2Style}>Email</h2>
            <p>
              Send us a message at{" "}
              <a
                href={`mailto:${CONTACT_GENERAL}`}
                className="underline font-medium"
                style={linkStyle}
              >
                {CONTACT_GENERAL}
              </a>
              . We typically respond within 1-2 business days.
            </p>
          </section>

          <section>
            <h2 className={h2} style={h2Style}>What to include</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li>The tool name or page URL you are asking about.</li>
              <li>A short description of the issue or request.</li>
              <li>Your browser and operating system, if reporting a bug.</li>
            </ul>
          </section>

          <section>
            <h2 className={h2} style={h2Style}>Privacy note</h2>
            <p className="text-sm">
              We only use the email address you provide to reply to your message. It is not added to
              any mailing list and is not shared with third parties. Your text inputs on ShelfCue
              tools are never sent to our servers and are not visible to us.{" "}
              <Link href="/privacy" className="underline" style={linkStyle}>
                Read our Privacy Policy.
              </Link>
            </p>
          </section>

          <section>
            <h2 className={h2} style={h2Style}>Other useful pages</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <Link href="/about" className="underline" style={linkStyle}>
                  About ShelfCue
                </Link>{" "}
                - what we do and how the tools work
              </li>
              <li>
                <Link href="/tools" className="underline" style={linkStyle}>
                  All Tools
                </Link>{" "}
                - browse all 31 free text tools
              </li>
              <li>
                <Link href="/terms" className="underline" style={linkStyle}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="underline" style={linkStyle}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </>
  );
}
