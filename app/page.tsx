import Link from "next/link";
import { tools } from "@/lib/tools-config";
import { AdBanner } from "@/components/ads/AdBanner";
import { ArrowRight, Zap, Lock, MousePointerClick } from "lucide-react";
import * as Icons from "lucide-react";
import type { ToolCategory } from "@/types/tools";

type IconComponent = React.ComponentType<{ className?: string }>;

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

const CATEGORIES: ToolCategory[] = ["Analysis", "Cleaning", "Transformation", "Generation", "Utilities"];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b py-20" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div
            className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-medium"
            style={{ backgroundColor: "var(--accent-subtle)", color: "var(--accent)" }}
          >
            15 free tools · No signup · Private
          </div>
          <h1
            className="mb-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
          >
            Every text tool you reach for,
            <br />
            <em>finally in one place</em>
          </h1>
          <p
            className="mx-auto mb-8 max-w-xl text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Clean, fast text tools for writers, developers, and marketers.
            No accounts. No data collection. Everything runs in your browser.
          </p>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--accent)", color: "#fff" }}
          >
            Browse all tools
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Ad banner */}
      <div className="mx-auto max-w-6xl px-4 pt-6">
        <AdBanner />
      </div>

      {/* Tools grid by category */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        {CATEGORIES.map((category) => {
          const categoryTools = tools.filter((t) => t.category === category);
          return (
            <div key={category} className="mb-12">
              <div className="mb-5 flex items-center gap-2">
                <h2
                  className="text-xl font-semibold"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
                >
                  {category}
                </h2>
                <span
                  className="rounded-full px-2 py-0.5 text-xs font-medium"
                  style={{
                    backgroundColor: `${CATEGORY_COLORS[category]}15`,
                    color: CATEGORY_COLORS[category],
                  }}
                >
                  {categoryTools.length} tools
                </span>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categoryTools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.slug}`}
                    className="group flex items-start gap-3 rounded-xl border p-4 transition-all hover:shadow-md"
                    style={{ backgroundColor: "var(--bg-tool)", borderColor: "var(--border)" }}
                  >
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: "var(--accent-subtle)", color: "var(--accent)" }}
                    >
                      <ToolIcon name={tool.icon} />
                    </div>
                    <div>
                      <p
                        className="text-sm font-medium group-hover:underline"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {tool.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {tool.shortDescription}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Why ShelfCue */}
      <section
        className="border-t py-16"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <h2
            className="mb-10 text-center text-2xl font-semibold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
          >
            Why ShelfCue?
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Instant results",
                body: "Every tool responds in real time as you type or paste. No submit button, no waiting, no friction.",
              },
              {
                icon: Lock,
                title: "Completely private",
                body: "Your text never leaves your browser. We do not have servers that receive your content.",
              },
              {
                icon: MousePointerClick,
                title: "No account needed",
                body: "Open a tool, use it, close it. No email, no password, no paywalls. All 15 tools are free forever.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "var(--accent-subtle)", color: "var(--accent)" }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3
                  className="mb-2 text-base font-semibold"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom ad */}
      <div className="mx-auto max-w-6xl px-4 py-6">
        <AdBanner />
      </div>
    </>
  );
}
