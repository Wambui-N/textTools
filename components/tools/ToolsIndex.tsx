"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { tools, categories } from "@/lib/tools-config";
import * as Icons from "lucide-react";
import { Search } from "lucide-react";
import type { ToolCategory } from "@/types/tools";

type Category = typeof categories[number];

type IconComponent = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;

function ToolIcon({ name }: { name: string }) {
  const Icon = (Icons as unknown as Record<string, IconComponent>)[name];
  if (!Icon) return <Icons.Wrench className="h-5 w-5" />;
  return <Icon className="h-5 w-5" />;
}

const CATEGORY_COLORS: Record<ToolCategory, string> = {
  Analysis: "#3B82F6",
  Cleaning: "#10B981",
  Transformation: "#8B5CF6",
  Generation: "#F59E0B",
  Utilities: "#EC4899",
};

export function ToolsIndex() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return tools.filter((t) => {
      const matchesCategory = activeCategory === "All" || t.category === activeCategory;
      const matchesQuery =
        !q ||
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.keywords.some((k) => k.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <div className="space-y-6">
      {/* Search + filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: "var(--text-muted)" }} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tools..."
            className="w-full rounded-lg border py-2.5 pl-9 pr-3 text-sm"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-tool)", color: "var(--text-primary)" }}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="rounded-full px-3 py-1.5 text-xs font-medium transition-colors"
              style={
                activeCategory === cat
                  ? { backgroundColor: "var(--accent)", color: "#fff" }
                  : { backgroundColor: "var(--bg-secondary)", color: "var(--text-secondary)", border: "1px solid var(--border)" }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="py-12 text-center text-sm" style={{ color: "var(--text-muted)" }}>
          No tools found for &quot;{query}&quot;
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group rounded-xl border p-5 transition-all hover:shadow-md"
              style={{ backgroundColor: "var(--bg-tool)", borderColor: "var(--border)" }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "var(--accent-subtle)", color: "var(--accent)" }}
                >
                  <ToolIcon name={tool.icon} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      className="text-sm font-semibold leading-snug group-hover:underline"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {tool.title}
                    </h3>
                    <span
                      className="shrink-0 rounded-full px-2 py-0.5 text-xs font-medium"
                      style={{
                        backgroundColor: `${CATEGORY_COLORS[tool.category]}15`,
                        color: CATEGORY_COLORS[tool.category],
                      }}
                    >
                      {tool.category}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {tool.shortDescription}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <p className="text-xs" style={{ color: "var(--text-muted)" }}>
        {filtered.length} tool{filtered.length !== 1 ? "s" : ""} shown
      </p>
    </div>
  );
}
