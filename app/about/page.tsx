import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export const metadata: Metadata = {
  title: "About ShelfCue - Free Text Tools, Built Privately",
  description: "ShelfCue is a collection of free online text tools built for writers, developers, and marketers. All processing happens in your browser. No accounts, no data collection.",
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14">
      <h1
        className="mb-4 text-3xl font-semibold"
        style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
      >
        About ShelfCue
      </h1>
      <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <p>
          ShelfCue is a collection of free, fast text tools designed for writers, developers, marketers, students, and anyone who works with text every day. Every tool on this site is available at no cost and requires no account, no sign-up, and no personal information.
        </p>
        <p>
          The goal is simple: when you need to count words, clean up copied text, convert text case, or compare two documents, you should be able to do it in seconds, without ads that obscure the tool, without being pushed to sign up for a subscription, and without wondering whether your text is being stored somewhere.
        </p>
        <h2
          className="text-xl font-semibold pt-2"
          style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
        >
          Privacy by default
        </h2>
        <p>
          Every ShelfCue tool processes text entirely in your browser using JavaScript. Nothing you type or paste is ever sent to a server. We do not log your text, we do not store it, and we do not share it. You can verify this by opening your browser&apos;s developer tools and checking the network tab while using any tool. You will see no requests containing your text.
        </p>
        <p>
          The only data we collect is standard analytics through Google Analytics 4 (page views, session duration, tool usage events). We do not associate this data with your text content. See our <a href="/privacy" className="underline" style={{ color: "var(--accent)" }}>Privacy Policy</a> for full details.
        </p>
        <h2
          className="text-xl font-semibold pt-2"
          style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
        >
          Always free
        </h2>
        <p>
          All tools on ShelfCue are free and will remain free. The site is supported by Google AdSense advertising. If you find the tools useful, simply using them and occasionally engaging with an ad keeps the site running.
        </p>
        <h2
          className="text-xl font-semibold pt-2"
          style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
        >
          Contact
        </h2>
        <p>
          Questions, suggestions, or feedback? Reach us at{" "}
          <a href="mailto:hello@shelfcue.com" className="underline" style={{ color: "var(--accent)" }}>
            hello@shelfcue.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
