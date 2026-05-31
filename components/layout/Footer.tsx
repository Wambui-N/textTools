import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="border-t py-10 mt-16"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-0.5">
            <span
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "1.75rem",
                fontWeight: 400,
                letterSpacing: "-0.015em",
                lineHeight: 1,
              }}
            >
              <span style={{ color: "var(--text-primary)" }}>shelf</span>
              <em style={{ fontStyle: "italic", color: "var(--accent-hover)" }}>cue</em>
            </span>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                color: "var(--accent-hover)",
                opacity: 0.75,
                letterSpacing: "0.06em",
              }}
            >
              clean text tools for everyday work
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/tools" className="text-xs hover:underline" style={{ color: "var(--text-muted)" }}>
              All Tools
            </Link>
            <Link href="/about" className="text-xs hover:underline" style={{ color: "var(--text-muted)" }}>
              About
            </Link>
            <Link href="/contact" className="text-xs hover:underline" style={{ color: "var(--text-muted)" }}>
              Contact
            </Link>
            <Link href="/updates" className="text-xs hover:underline" style={{ color: "var(--text-muted)" }}>
              Updates
            </Link>
            <Link href="/privacy" className="text-xs hover:underline" style={{ color: "var(--text-muted)" }}>
              Privacy
            </Link>
            <Link href="/terms" className="text-xs hover:underline" style={{ color: "var(--text-muted)" }}>
              Terms
            </Link>
          </nav>
        </div>
        <p className="mt-4 text-center text-xs" style={{ color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} ShelfCue. All tools are free. No account required. Your text never leaves your browser.
          {" "}Built by{" "}
          <a
            href="https://madewithmake.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
            style={{ color: "var(--text-muted)" }}
          >
            madewithmake
          </a>
          .
        </p>
        <p className="mt-2 text-center text-xs" style={{ color: "var(--text-muted)" }}>
          We use cookies for analytics and advertising.{" "}
          <a href="/privacy" className="underline hover:opacity-80" style={{ color: "var(--text-muted)" }}>
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}
