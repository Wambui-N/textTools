"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
          <Wrench className="h-4 w-4" style={{ color: "var(--accent)" }} />
          <span className="text-lg">ShelfCue</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/tools"
            className="text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: "var(--text-secondary)" }}
          >
            All Tools
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: "var(--text-secondary)" }}
          >
            About
          </Link>

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="h-8 w-8"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
