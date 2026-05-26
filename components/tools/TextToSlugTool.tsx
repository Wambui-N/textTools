"use client";

import { useState, useMemo } from "react";
import { CopyButton } from "./CopyButton";
import { textToSlug, type SlugOptions } from "@/lib/tools/textToSlug";

export function TextToSlugTool() {
  const [text, setText] = useState("");
  const [opts, setOpts] = useState<SlugOptions>({
    separator: "-",
    lowercase: true,
    removeStopWords: false,
    maxLength: null,
  });

  const slug = useMemo(() => (text ? textToSlug(text, opts) : ""), [text, opts]);

  const toggle = (key: keyof SlugOptions) =>
    setOpts((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="space-y-4">
      <div>
        <label className="mb-1 block text-xs" style={{ color: "var(--text-muted)" }}>
          Title or phrase
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='e.g. "My Amazing Blog Post Title!"'
          className="w-full rounded-md border px-3 py-2.5 text-sm"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-tool)", color: "var(--text-primary)" }}
        />
      </div>

      <div className="flex flex-wrap gap-4">
        <div>
          <p className="mb-1.5 text-xs" style={{ color: "var(--text-muted)" }}>Separator</p>
          <div className="flex gap-2">
            {(["-", "_"] as const).map((sep) => (
              <label key={sep} className="flex items-center gap-1.5 cursor-pointer text-sm" style={{ color: "var(--text-secondary)" }}>
                <input type="radio" value={sep} checked={opts.separator === sep} onChange={() => setOpts((p) => ({ ...p, separator: sep }))} className="accent-[var(--accent)]" />
                <code style={{ fontFamily: "var(--font-mono)" }}>{sep === "-" ? "hyphen (-)" : "underscore (_)"}</code>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 self-end">
          <label className="flex items-center gap-2 cursor-pointer text-sm" style={{ color: "var(--text-secondary)" }}>
            <input type="checkbox" checked={opts.lowercase} onChange={() => toggle("lowercase")} className="accent-[var(--accent)]" />
            Lowercase
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm" style={{ color: "var(--text-secondary)" }}>
            <input type="checkbox" checked={opts.removeStopWords} onChange={() => toggle("removeStopWords")} className="accent-[var(--accent)]" />
            Remove stop words
          </label>
        </div>

        <div className="self-end">
          <label className="mb-1 block text-xs" style={{ color: "var(--text-muted)" }}>Max length</label>
          <input
            type="number"
            min={5}
            max={200}
            value={opts.maxLength ?? ""}
            onChange={(e) => setOpts((p) => ({ ...p, maxLength: e.target.value ? Number(e.target.value) : null }))}
            placeholder="No limit"
            className="w-24 rounded border px-2 py-1.5 text-sm"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-tool)", color: "var(--text-primary)" }}
          />
        </div>
      </div>

      {slug && (
        <div
          className="rounded-lg border p-4"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
        >
          <p className="mb-2 text-xs" style={{ color: "var(--text-muted)" }}>Generated slug</p>
          <div className="flex items-center gap-3">
            <code
              className="flex-1 break-all text-sm"
              style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}
            >
              {slug}
            </code>
            <CopyButton text={slug} toolName="text-to-slug" />
          </div>
        </div>
      )}
    </div>
  );
}
