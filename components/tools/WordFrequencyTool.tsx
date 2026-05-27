"use client";

import { useState, useMemo } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ClearButton } from "./ClearButton";
import { countWordFrequency, type WordFrequencyOptions, type WordFreqEntry } from "@/lib/tools/wordFrequency";

type SortOrder = "count-desc" | "count-asc" | "alpha";

export function WordFrequencyTool() {
  const [text, setText] = useState("");
  const [opts, setOpts] = useState<WordFrequencyOptions>({
    ignoreStopWords: true,
    caseSensitive: false,
    minLength: 2,
    topN: 25,
  });
  const [sortOrder, setSortOrder] = useState<SortOrder>("count-desc");

  const entries = useMemo(() => countWordFrequency(text, opts), [text, opts]);

  const sorted = useMemo(() => {
    const copy = [...entries];
    if (sortOrder === "count-asc") copy.sort((a, b) => a.count - b.count);
    else if (sortOrder === "alpha") copy.sort((a, b) => a.word.localeCompare(b.word));
    return copy;
  }, [entries, sortOrder]);

  const maxCount = sorted.length > 0 ? sorted[0].count : 1;

  const toggle = (key: keyof WordFrequencyOptions) =>
    setOpts((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <Textarea
          placeholder="Paste your text here to analyze word frequency..."
          className="min-h-48 resize-y text-sm"
          style={{ fontFamily: "var(--font-mono)", backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", color: "var(--text-primary)" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {text && (
          <div className="flex justify-end">
            <ClearButton onClear={() => setText("")} />
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-4">
        <label className="flex items-center gap-2 cursor-pointer text-sm" style={{ color: "var(--text-secondary)" }}>
          <input type="checkbox" checked={opts.ignoreStopWords} onChange={() => toggle("ignoreStopWords")} className="accent-[var(--accent)]" />
          Ignore stop words
        </label>
        <label className="flex items-center gap-2 cursor-pointer text-sm" style={{ color: "var(--text-secondary)" }}>
          <input type="checkbox" checked={opts.caseSensitive} onChange={() => toggle("caseSensitive")} className="accent-[var(--accent)]" />
          Case sensitive
        </label>
        <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
          <span>Min length:</span>
          <input
            type="number" min={1} max={20}
            value={opts.minLength}
            onChange={(e) => setOpts((p) => ({ ...p, minLength: Math.max(1, Number(e.target.value)) }))}
            className="w-14 rounded border px-2 py-1 text-xs"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-tool)", color: "var(--text-primary)" }}
          />
        </div>
        <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
          <span>Show top:</span>
          <select
            value={opts.topN ?? "all"}
            onChange={(e) => setOpts((p) => ({ ...p, topN: e.target.value === "all" ? null : Number(e.target.value) }))}
            className="rounded border px-2 py-1 text-xs"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-tool)", color: "var(--text-primary)" }}
          >
            {[10, 25, 50].map((n) => <option key={n} value={n}>{n}</option>)}
            <option value="all">All</option>
          </select>
        </div>
      </div>

      {sorted.length > 0 && (
        <div
          className="rounded-lg border overflow-hidden"
          style={{ borderColor: "var(--border)" }}
        >
          <div
            className="flex items-center gap-2 border-b px-4 py-2"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
          >
            <span className="text-xs font-medium flex-1" style={{ color: "var(--text-muted)" }}>
              {sorted.length} word{sorted.length !== 1 ? "s" : ""} found
            </span>
            <div className="flex gap-2">
              {([
                { value: "count-desc" as SortOrder, label: "Most frequent" },
                { value: "count-asc" as SortOrder, label: "Least frequent" },
                { value: "alpha" as SortOrder, label: "A–Z" },
              ]).map((s) => (
                <button
                  key={s.value}
                  onClick={() => setSortOrder(s.value)}
                  className="rounded px-2 py-0.5 text-xs transition-colors"
                  style={{
                    backgroundColor: sortOrder === s.value ? "var(--accent-subtle)" : "transparent",
                    color: sortOrder === s.value ? "var(--accent)" : "var(--text-muted)",
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {sorted.map((entry: WordFreqEntry, i) => (
              <div
                key={entry.word}
                className="flex items-center gap-3 border-b px-4 py-2 last:border-0"
                style={{ borderColor: "var(--border)" }}
              >
                <span className="w-6 text-xs tabular-nums" style={{ color: "var(--text-muted)" }}>{i + 1}</span>
                <span className="w-28 truncate text-sm font-medium" style={{ color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}>{entry.word}</span>
                <div className="flex-1">
                  <div className="h-2 overflow-hidden rounded-full" style={{ backgroundColor: "var(--bg-secondary)" }}>
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${(entry.count / maxCount) * 100}%`, backgroundColor: "var(--accent)" }}
                    />
                  </div>
                </div>
                <span className="w-12 text-right text-xs tabular-nums" style={{ color: "var(--text-secondary)" }}>{entry.count}</span>
                <span className="w-12 text-right text-xs tabular-nums" style={{ color: "var(--text-muted)" }}>{entry.percent.toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
