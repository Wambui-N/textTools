import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export const metadata: Metadata = {
  title: "Terms of Service — ShelfCue",
  description: "ShelfCue Terms of Service. Free text tools with no warranties. Your text is never stored.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14">
      <h1
        className="mb-2 text-3xl font-semibold"
        style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
      >
        Terms of Service
      </h1>
      <p className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>
        Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <section>
          <h2 className="mb-2 text-base font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
            Acceptance of terms
          </h2>
          <p>
            By using ShelfCue (shelfcue.com), you agree to these Terms of Service. If you do not agree, please do not use the site.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
            Acceptable use
          </h2>
          <p>ShelfCue tools are provided for lawful personal and professional use. You agree not to:</p>
          <ul className="mt-2 space-y-1 list-disc pl-5">
            <li>Use the site for any illegal purpose</li>
            <li>Attempt to scrape, crawl, or automate requests to the site in a way that disrupts service for other users</li>
            <li>Reverse engineer, copy, or redistribute the site code without permission</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
            No warranties
          </h2>
          <p>
            ShelfCue tools are provided &quot;as is&quot; without any warranties, express or implied. We do not warrant that the tools are error-free, accurate for all inputs, or suitable for any particular purpose. Use the results at your own discretion.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
            Your text is not stored
          </h2>
          <p>
            ShelfCue does not receive, store, or process your text on its servers. All tool logic runs locally in your browser. We make no claims of ownership over any text you use with our tools.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
            Limitation of liability
          </h2>
          <p>
            To the maximum extent permitted by law, ShelfCue and its operators shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of or inability to use the site or its tools.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
            DMCA
          </h2>
          <p>
            If you believe content on this site infringes your copyright, please contact us at{" "}
            <a href="mailto:legal@shelfcue.com" className="underline" style={{ color: "var(--accent)" }}>
              legal@shelfcue.com
            </a>{" "}
            with a description of the allegedly infringing material.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
            Governing law
          </h2>
          <p>
            These terms are governed by the laws of Kenya. Any disputes arising from use of this site are subject to the jurisdiction of Kenyan courts.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
            Changes to these terms
          </h2>
          <p>
            We may update these terms from time to time. Continued use of the site after any changes constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
            Contact
          </h2>
          <p>
            Questions about these terms:{" "}
            <a href="mailto:legal@shelfcue.com" className="underline" style={{ color: "var(--accent)" }}>
              legal@shelfcue.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
