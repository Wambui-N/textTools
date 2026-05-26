import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="border-t py-10 mt-16"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
            ShelfCue — Clean text tools for everyday work
          </p>
          <nav className="flex items-center gap-6">
            <Link href="/tools" className="text-xs hover:underline" style={{ color: "var(--text-muted)" }}>
              All Tools
            </Link>
            <Link href="/about" className="text-xs hover:underline" style={{ color: "var(--text-muted)" }}>
              About
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
        </p>
      </div>
    </footer>
  );
}
