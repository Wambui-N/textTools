import type { Metadata } from "next";
import Link from "next/link";
import {
  LEGAL_LAST_UPDATED,
  SITE_OPERATOR,
  SITE_URL,
  CONTACT_PRIVACY,
  GA_MEASUREMENT_ID,
  ADSENSE_PUBLISHER_ID,
} from "@/lib/legal";

const CANONICAL = `${SITE_URL}/privacy`;

export const metadata: Metadata = {
  title: "Privacy Policy - ShelfCue",
  description:
    "ShelfCue Privacy Policy. Your text input is never collected. Learn what analytics and advertising data we use and how to control it.",
  alternates: { canonical: CANONICAL },
};

const h2 = "mb-2 text-base font-semibold";
const h2Style = { fontFamily: "var(--font-heading)", color: "var(--text-primary)" };
const linkStyle = { color: "var(--accent)" };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14">
      <h1
        className="mb-2 text-3xl font-semibold"
        style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
      >
        Privacy Policy
      </h1>
      <p className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>
        Last updated: {LEGAL_LAST_UPDATED}
      </p>

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>

        {/* Who we are */}
        <section>
          <h2 className={h2} style={h2Style}>Who we are</h2>
          <p>
            {SITE_OPERATOR} operates the website at{" "}
            <a href={SITE_URL} className="underline" style={linkStyle}>{SITE_URL}</a> and provides
            free browser-based text tools. For privacy questions, contact us at{" "}
            <a href={`mailto:${CONTACT_PRIVACY}`} className="underline" style={linkStyle}>
              {CONTACT_PRIVACY}
            </a>
            .
          </p>
        </section>

        {/* Your text stays local */}
        <section>
          <h2 className={h2} style={h2Style}>Your text is never collected</h2>
          <p>
            All ShelfCue tools process text locally in your browser using JavaScript. The text you
            paste or type is never transmitted to our servers, never stored, and never logged. You
            can verify this by opening your browser&apos;s developer tools, switching to the Network
            tab, and running any tool. You will see no outbound request containing your text.
          </p>
          <p className="mt-2">
            Third-party services (Google Analytics, Google AdSense) may receive usage signals when
            you grant consent, but they receive no text content.
          </p>
        </section>

        {/* Data we collect */}
        <section>
          <h2 className={h2} style={h2Style}>Data we do collect</h2>
          <p className="mb-3">
            We collect limited, non-personal data to understand how the site is used and to fund the
            service through advertising. This is split across two services:
          </p>

          <div className="space-y-4">
            <div>
              <p className="font-medium" style={{ color: "var(--text-primary)" }}>
                Google Analytics 4 (Measurement ID: {GA_MEASUREMENT_ID})
              </p>
              <p className="mt-1">When you accept analytics cookies, GA4 may collect:</p>
              <ul className="mt-1 list-disc space-y-1 pl-5">
                <li>Pages visited, time on page, and session duration</li>
                <li>Browser type, operating system, and screen resolution</li>
                <li>Approximate location (country and city level; not precise GPS)</li>
                <li>Referral source (how you arrived at the site)</li>
                <li>
                  Custom events: <code className="rounded bg-black/5 px-1 dark:bg-white/10">tool_used</code> (records
                  tool name and character count of your input, not the content),{" "}
                  <code className="rounded bg-black/5 px-1 dark:bg-white/10">copy_result</code> (records tool name
                  when you copy an output)
                </li>
              </ul>
              <p className="mt-2">
                This data is processed by Google under their{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={linkStyle}
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://marketingplatform.google.com/about/analytics/terms/us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={linkStyle}
                >
                  Terms of Service
                </a>
                .
              </p>
            </div>

            <div>
              <p className="font-medium" style={{ color: "var(--text-primary)" }}>
                Google AdSense (Publisher ID: {ADSENSE_PUBLISHER_ID})
              </p>
              <p className="mt-1">
                When you accept advertising cookies, Google AdSense may serve personalised or
                contextual advertisements based on cookies, prior visits to sites in the Google
                Display Network, and device information. Google and its partners may use cookies to
                serve ads. You can learn more at{" "}
                <a
                  href="https://www.google.com/policies/technologies/partner-sites/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={linkStyle}
                >
                  How Google uses data when you use our partners&apos; sites
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Hosting */}
        <section>
          <h2 className={h2} style={h2Style}>Hosting and server logs</h2>
          <p>
            The site is hosted on{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={linkStyle}
            >
              Vercel
            </a>
            . Vercel automatically records standard server access logs (IP address, user-agent,
            timestamp, and HTTP status code) for security and infrastructure purposes. These logs
            are not used by us to read or associate your text input and are retained according to
            Vercel&apos;s standard policy.
          </p>
        </section>

        {/* Cookies */}
        <section>
          <h2 className={h2} style={h2Style}>Cookies</h2>
          <p className="mb-3">
            We use three categories of cookies and browser storage:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs" style={{ borderColor: "var(--border)" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <th className="py-2 pr-4 text-left font-semibold" style={{ color: "var(--text-primary)" }}>Category</th>
                  <th className="py-2 pr-4 text-left font-semibold" style={{ color: "var(--text-primary)" }}>Source</th>
                  <th className="py-2 text-left font-semibold" style={{ color: "var(--text-primary)" }}>Purpose</th>
                </tr>
              </thead>
              <tbody className="space-y-1">
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <td className="py-2 pr-4 align-top font-medium" style={{ color: "var(--text-primary)" }}>Essential</td>
                  <td className="py-2 pr-4 align-top">ShelfCue (localStorage)</td>
                  <td className="py-2 align-top">Stores your cookie consent preference. Required for the banner to function.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <td className="py-2 pr-4 align-top font-medium" style={{ color: "var(--text-primary)" }}>Analytics</td>
                  <td className="py-2 pr-4 align-top">Google Analytics 4</td>
                  <td className="py-2 align-top">Measures page views, sessions, and tool usage events. Only set with consent.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top font-medium" style={{ color: "var(--text-primary)" }}>Advertising</td>
                  <td className="py-2 pr-4 align-top">Google AdSense</td>
                  <td className="py-2 align-top">Serves and measures ads. May personalise based on prior browsing. Only set with consent.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Your choices */}
        <section>
          <h2 className={h2} style={h2Style}>Your choices and how to opt out</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Cookie banner</strong> — when you visit for the first time, you can accept or
              reject non-essential cookies. Your choice is saved locally and no analytics or
              advertising cookies are set until you accept.
            </li>
            <li>
              <strong>Google Analytics opt-out</strong> — install the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={linkStyle}
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </li>
            <li>
              <strong>Ad personalisation</strong> — manage ad preferences at{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={linkStyle}
              >
                Google Ad Settings
              </a>
              . You can also opt out of personalised ads from participating companies at{" "}
              <a
                href="https://optout.aboutads.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={linkStyle}
              >
                YourAdChoices
              </a>
              .
            </li>
            <li>
              <strong>Browser controls</strong> — you can clear or block cookies at any time in your
              browser settings. Rejecting all cookies will not affect tool functionality since all
              processing is local.
            </li>
          </ul>
        </section>

        {/* Legal rights */}
        <section>
          <h2 className={h2} style={h2Style}>Your legal rights</h2>
          <p className="mb-2">
            Depending on where you are located, you may have rights including:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>The right to access the personal data held about you</li>
            <li>The right to request correction or deletion of your data</li>
            <li>The right to object to or restrict processing</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent at any time</li>
            <li>
              EU/UK residents: the right to lodge a complaint with your local data protection
              authority
            </li>
            <li>
              California residents: we do not sell personal information as defined by the CCPA. The
              categories of information we collect are described in the &ldquo;Data we do
              collect&rdquo; section above.
            </li>
          </ul>
          <p className="mt-2">
            Because we do not collect or store your text, most data rights requests will relate to
            Google Analytics or AdSense data. For those, please use Google&apos;s data controls
            directly. For any other requests, contact{" "}
            <a href={`mailto:${CONTACT_PRIVACY}`} className="underline" style={linkStyle}>
              {CONTACT_PRIVACY}
            </a>
            .
          </p>
        </section>

        {/* Children */}
        <section>
          <h2 className={h2} style={h2Style}>Children&apos;s privacy</h2>
          <p>
            ShelfCue is not directed at children under 13 and does not knowingly collect personal
            information from children. If you believe a child under 13 has submitted information,
            please contact us and we will take appropriate steps.
          </p>
        </section>

        {/* International */}
        <section>
          <h2 className={h2} style={h2Style}>International data transfers</h2>
          <p>
            Data collected through Google Analytics and Google AdSense may be processed in the
            United States and other countries where Google operates data centres. Google provides
            appropriate safeguards for international transfers under their standard contractual
            clauses.
          </p>
        </section>

        {/* Changes */}
        <section>
          <h2 className={h2} style={h2Style}>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. When we do, we will update the &ldquo;Last
            updated&rdquo; date at the top of this page. For material changes, we recommend
            reviewing this page periodically.
          </p>
        </section>

        {/* Links */}
        <section>
          <h2 className={h2} style={h2Style}>Related</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <Link href="/terms" className="underline" style={linkStyle}>
                Terms of Service
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_PRIVACY}`}
                className="underline"
                style={linkStyle}
              >
                {CONTACT_PRIVACY}
              </a>{" "}
              for privacy questions
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}
