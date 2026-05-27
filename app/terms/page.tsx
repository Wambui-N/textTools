import type { Metadata } from "next";
import Link from "next/link";
import {
  LEGAL_LAST_UPDATED,
  SITE_OPERATOR,
  SITE_URL,
  CONTACT_LEGAL,
} from "@/lib/legal";

const CANONICAL = `${SITE_URL}/terms`;

export const metadata: Metadata = {
  title: "Terms of Service - ShelfCue",
  description:
    "ShelfCue Terms of Service. Free browser-based text tools. Your text is never stored. Site supported by Google AdSense advertising.",
  alternates: { canonical: CANONICAL },
};

const h2 = "mb-2 text-base font-semibold";
const h2Style = { fontFamily: "var(--font-heading)", color: "var(--text-primary)" };
const linkStyle = { color: "var(--accent)" };

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
        Last updated: {LEGAL_LAST_UPDATED}
      </p>

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>

        {/* Acceptance */}
        <section>
          <h2 className={h2} style={h2Style}>Acceptance of terms</h2>
          <p>
            By accessing or using {SITE_OPERATOR} ({SITE_URL}), you agree to these Terms of
            Service and our{" "}
            <Link href="/privacy" className="underline" style={linkStyle}>
              Privacy Policy
            </Link>
            , which is incorporated here by reference. If you do not agree, please do not use the
            site.
          </p>
        </section>

        {/* Service description */}
        <section>
          <h2 className={h2} style={h2Style}>Service description</h2>
          <p>
            {SITE_OPERATOR} provides free browser-based text tools for personal and professional
            use. No account or registration is required. All tool processing occurs locally in your
            browser; we do not receive or store your text input. The service is funded by Google
            AdSense advertising.
          </p>
        </section>

        {/* Advertising */}
        <section>
          <h2 className={h2} style={h2Style}>Advertising</h2>
          <p>
            The site displays third-party advertisements served by Google AdSense. {SITE_OPERATOR}{" "}
            does not endorse any advertised product or service. Ad content is selected and served
            solely by Google. By accepting advertising cookies via the consent banner, you agree
            that Google may use cookies to serve personalised advertisements based on your browsing
            history. You can manage your ad preferences at{" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={linkStyle}
            >
              Google Ad Settings
            </a>
            .
          </p>
        </section>

        {/* Third-party services */}
        <section>
          <h2 className={h2} style={h2Style}>Third-party services</h2>
          <p>
            The site uses Google Analytics 4 and Google AdSense. These services are subject to
            Google&apos;s own terms and privacy policies. By using {SITE_OPERATOR} and accepting
            the relevant cookies, you acknowledge that these services may collect usage data as
            described in our{" "}
            <Link href="/privacy" className="underline" style={linkStyle}>
              Privacy Policy
            </Link>
            . We also use Vercel for hosting; their infrastructure processes connection metadata for
            security and performance purposes.
          </p>
        </section>

        {/* Acceptable use */}
        <section>
          <h2 className={h2} style={h2Style}>Acceptable use</h2>
          <p>
            {SITE_OPERATOR} tools are provided for lawful personal and professional use. You agree
            not to:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Use the site for any illegal purpose or to process unlawfully obtained text</li>
            <li>
              Scrape, crawl, or automate requests to the site in a way that degrades service for
              other users
            </li>
            <li>Use the tools to generate spam, malware, or other harmful content</li>
            <li>
              Reverse engineer, copy, or redistribute the site code or content without prior written
              permission
            </li>
            <li>Attempt to circumvent or interfere with any security or access measure</li>
          </ul>
        </section>

        {/* Your text */}
        <section>
          <h2 className={h2} style={h2Style}>Your text is not stored</h2>
          <p>
            {SITE_OPERATOR} does not receive, store, or process your text on its servers. All tool
            logic runs locally in your browser. We make no claim of ownership over any text you
            process using our tools. You remain solely responsible for the content of the text you
            choose to use.
          </p>
        </section>

        {/* Disclaimer */}
        <section>
          <h2 className={h2} style={h2Style}>No warranties</h2>
          <p>
            {SITE_OPERATOR} tools are provided &quot;as is&quot; and &quot;as available&quot;
            without any warranty of any kind, express or implied, including but not limited to
            warranties of merchantability, fitness for a particular purpose, or non-infringement.
            We do not warrant that tools are error-free, accurate for all inputs, or suitable for
            any specific purpose. Tool output is not professional, legal, medical, or financial
            advice. Use all results at your own discretion.
          </p>
        </section>

        {/* Limitation of liability */}
        <section>
          <h2 className={h2} style={h2Style}>Limitation of liability</h2>
          <p>
            To the maximum extent permitted by applicable law, {SITE_OPERATOR} and its operators
            shall not be liable for any direct, indirect, incidental, special, consequential, or
            punitive damages arising from the use of, or inability to use, the site or its tools.
            Because the service is provided free of charge, our total liability to you for any claim
            arising from use of the site shall not exceed zero dollars (or equivalent).
          </p>
        </section>

        {/* Indemnification */}
        <section>
          <h2 className={h2} style={h2Style}>Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless {SITE_OPERATOR} and its operators
            from and against any claims, damages, losses, or expenses (including reasonable legal
            fees) arising from your use of the site, your violation of these terms, or your
            violation of any third-party rights.
          </p>
        </section>

        {/* Age */}
        <section>
          <h2 className={h2} style={h2Style}>Age requirement</h2>
          <p>
            The service is not directed at children under 13. By using the site you confirm that
            you are at least 13 years old. If you are under 18, you confirm that you have parental
            or guardian permission to use the service.
          </p>
        </section>

        {/* DMCA */}
        <section>
          <h2 className={h2} style={h2Style}>DMCA</h2>
          <p>
            If you believe content on this site infringes your copyright, contact us at{" "}
            <a href={`mailto:${CONTACT_LEGAL}`} className="underline" style={linkStyle}>
              {CONTACT_LEGAL}
            </a>{" "}
            with a description of the allegedly infringing material and your contact details.
          </p>
        </section>

        {/* Governing law */}
        <section>
          <h2 className={h2} style={h2Style}>Governing law</h2>
          <p>
            These terms are governed by the laws of Kenya. Any disputes arising from use of this
            site are subject to the exclusive jurisdiction of the courts of Kenya.
          </p>
        </section>

        {/* Severability */}
        <section>
          <h2 className={h2} style={h2Style}>Severability and entire agreement</h2>
          <p>
            If any provision of these terms is found to be unenforceable, the remaining provisions
            will continue in full force and effect. These terms, together with our{" "}
            <Link href="/privacy" className="underline" style={linkStyle}>
              Privacy Policy
            </Link>
            , constitute the entire agreement between you and {SITE_OPERATOR} with respect to the
            service.
          </p>
        </section>

        {/* Changes */}
        <section>
          <h2 className={h2} style={h2Style}>Changes to these terms</h2>
          <p>
            We may update these terms from time to time. When we do, we will update the &ldquo;Last
            updated&rdquo; date at the top of this page. Continued use of the site after any
            changes constitutes acceptance of the updated terms.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className={h2} style={h2Style}>Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a href={`mailto:${CONTACT_LEGAL}`} className="underline" style={linkStyle}>
              {CONTACT_LEGAL}
            </a>
          </p>
        </section>

      </div>
    </div>
  );
}
