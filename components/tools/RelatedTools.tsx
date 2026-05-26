import Link from "next/link";
import { toolsBySlug } from "@/lib/tools-config";
import { ArrowRight } from "lucide-react";

interface RelatedToolsProps {
  slugs: string[];
  heading?: string;
}

export function RelatedTools({ slugs, heading = "Related Tools" }: RelatedToolsProps) {
  const relatedTools = slugs.map((s) => toolsBySlug[s]).filter(Boolean);
  if (relatedTools.length === 0) return null;

  return (
    <section className="mt-12">
      <h2
        className="mb-4 text-xl font-semibold"
        style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
      >
        {heading}
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {relatedTools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="group flex items-center justify-between rounded-lg border p-4 transition-all hover:shadow-sm"
            style={{
              backgroundColor: "var(--bg-tool)",
              borderColor: "var(--border)",
            }}
          >
            <div>
              <p
                className="text-sm font-medium group-hover:underline"
                style={{ color: "var(--text-primary)" }}
              >
                {tool.title}
              </p>
              <p className="mt-0.5 text-xs" style={{ color: "var(--text-muted)" }}>
                {tool.shortDescription}
              </p>
            </div>
            <ArrowRight
              className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5"
              style={{ color: "var(--text-muted)" }}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
