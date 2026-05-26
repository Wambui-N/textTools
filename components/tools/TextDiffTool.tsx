"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { computeDiff, type DiffMode } from "@/lib/tools/textDiff";
import { StatBadge } from "./StatBadge";

export function TextDiffTool() {
  const [original, setOriginal] = useState("");
  const [revised, setRevised] = useState("");
  const [mode, setMode] = useState<DiffMode>("words");
  const [result, setResult] = useState<ReturnType<typeof computeDiff> | null>(null);

  function compare() {
    setResult(computeDiff(original, revised, mode));
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium" style={{ color: "var(--text-muted)" }}>
            Original text
          </label>
          <Textarea
            placeholder="Paste original text..."
            className="min-h-48 resize-y text-sm"
            style={{ fontFamily: "var(--font-mono)", backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", color: "var(--text-primary)" }}
            value={original}
            onChange={(e) => { setOriginal(e.target.value); setResult(null); }}
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium" style={{ color: "var(--text-muted)" }}>
            Revised text
          </label>
          <Textarea
            placeholder="Paste revised text..."
            className="min-h-48 resize-y text-sm"
            style={{ fontFamily: "var(--font-mono)", backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", color: "var(--text-primary)" }}
            value={revised}
            onChange={(e) => { setRevised(e.target.value); setResult(null); }}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          {(["words", "lines"] as DiffMode[]).map((m) => (
            <Button
              key={m}
              variant={mode === m ? "default" : "outline"}
              size="sm"
              onClick={() => setMode(m)}
              style={mode === m ? { backgroundColor: "var(--accent)", color: "#fff", borderColor: "var(--accent)" } : {}}
            >
              {m === "words" ? "Word diff" : "Line diff"}
            </Button>
          ))}
        </div>
        <Button
          onClick={compare}
          disabled={!original || !revised}
          style={{ backgroundColor: "var(--accent)", color: "#fff" }}
        >
          Compare
        </Button>
      </div>

      {result && (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <StatBadge label="Additions" value={result.additions} />
            <StatBadge label="Deletions" value={result.deletions} />
            <StatBadge label="Unchanged" value={result.parts.filter((p) => !p.added && !p.removed).length} />
          </div>

          <div className="rounded-lg border p-4 text-sm leading-relaxed" style={{ backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", fontFamily: "var(--font-mono)", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
            <div className="mb-2 flex gap-4 text-xs" style={{ fontFamily: "var(--font-body)" }}>
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded" style={{ backgroundColor: "#bbf7d0" }} /> Added
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded" style={{ backgroundColor: "#fecaca" }} /> Removed
              </span>
            </div>
            {result.parts.map((part, i) => (
              <span
                key={i}
                style={{
                  backgroundColor: part.added ? "#bbf7d0" : part.removed ? "#fecaca" : "transparent",
                  color: part.added ? "#166534" : part.removed ? "#991b1b" : "var(--text-primary)",
                  textDecoration: part.removed ? "line-through" : "none",
                }}
              >
                {part.value}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
