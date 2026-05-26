import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export const metadata: Metadata = {
  title: "Privacy Policy — ShelfCue",
  description: "ShelfCue Privacy Policy. We do not collect or store your text. Learn what data we do collect and how it is used.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

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
        Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <section>
          <h2 className="mb-2 text-base font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
            Your text is never collected
          </h2>
          <p>
            ShelfCue tools process all text locally in your browser. The text you paste or type into any ShelfCue tool is never transmitted to our servers, never stored, and never logged. All processing happens in JavaScript running in your browser.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
            Data we do collect
          </h2>
          <p>We collect anonymous usage analytics through Google Analytics 4. This includes:</p>
          <ul className="mt-2 space-y-1 list-disc pl-5">
            <li>Pages visited and time spent on each page</li>
            <li>Which tools are used (without the text content)</li>
            <li>Browser type, operating system, and approximate location (country/city level)</li>
            <li>Referral source (how you found the site)</li>
          </ul>
          <p className="mt-2">This data is used to understand how the site is used and to improve it. It is processed by Google under their privacy policy.</p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
            Cookies
          </h2>
          <p>
            ShelfCue uses cookies for Google Analytics (analytics cookies) and Google AdSense (advertising cookies). Analytics cookies help us understand site usage. Advertising cookies are used by Google to serve relevant ads.
          </p>
          <p className="mt-2">
            You can opt out of Google Analytics by installing the{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--accent)" }}>
              Google Analytics Opt-out Browser Add-on
            </a>
            . You can manage ad preferences at{" "}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--accent)" }}>
              Google Ad Settings
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
            Third-party services
          </h2>
          <ul className="space-y-2 list-disc pl-5">
            <li><strong>Google Analytics 4:</strong> Usage analytics. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--accent)" }}>Google Privacy Policy</a></li>
            <li><strong>Google AdSense:</strong> Advertising. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--accent)" }}>Google Privacy Policy</a></li>
            <li><strong>Vercel:</strong> Hosting infrastructure. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--accent)" }}>Vercel Privacy Policy</a></li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
            Children&apos;s privacy
          </h2>
          <p>
            ShelfCue does not knowingly collect personal information from children under 13. The site contains no features designed to collect data from minors.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
            Contact
          </h2>
          <p>
            For privacy questions, contact us at{" "}
            <a href="mailto:privacy@shelfcue.com" className="underline" style={{ color: "var(--accent)" }}>
              privacy@shelfcue.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
