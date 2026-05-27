"use client";

import { useState, useMemo } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CopyButton } from "./CopyButton";
import { ClearButton } from "./ClearButton";
import { findAndReplace, getMatchCount } from "@/lib/tools/findReplace";

export function FindReplaceTool() {
  const [text, setText] = useState("");
  const [find, setFind] = useState("");
  const [replace, setReplace] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [wholeWord, setWholeWord] = useState(false);
  const [output, setOutput] = useState("");
  const [replacements, setReplacements] = useState<number | null>(null);

  const matchCount = useMemo(
    () => getMatchCount(text, find, { caseSensitive, wholeWord }),
    [text, find, caseSensitive, wholeWord]
  );

  function applyAll() {
    const result = findAndReplace(text, find, replace, { caseSensitive, wholeWord });
    setOutput(result.output);
    setReplacements(result.matchCount);
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <Textarea
          placeholder="Paste your text here..."
          className="min-h-48 resize-y text-sm"
          style={{ fontFamily: "var(--font-mono)", backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", color: "var(--text-primary)" }}
          value={text}
          onChange={(e) => { setText(e.target.value); setOutput(""); setReplacements(null); }}
        />
        {text && (
          <div className="flex justify-end">
            <ClearButton onClear={() => { setText(""); setOutput(""); setReplacements(null); }} />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs" style={{ color: "var(--text-muted)" }}>Find</label>
          <div className="relative">
            <input
              type="text"
              value={find}
              onChange={(e) => setFind(e.target.value)}
              placeholder="Search text..."
              className="w-full rounded border px-3 py-2 text-sm"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-tool)", color: "var(--text-primary)" }}
            />
            {find && text && (
              <span
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded px-1.5 py-0.5 text-xs"
                style={{ backgroundColor: matchCount > 0 ? "var(--accent-subtle)" : "var(--bg-secondary)", color: matchCount > 0 ? "var(--accent)" : "var(--text-muted)" }}
              >
                {matchCount} match{matchCount !== 1 ? "es" : ""}
              </span>
            )}
          </div>
        </div>
        <div>
          <label className="mb-1 block text-xs" style={{ color: "var(--text-muted)" }}>Replace with</label>
          <input
            type="text"
            value={replace}
            onChange={(e) => setReplace(e.target.value)}
            placeholder="Replacement text (leave empty to delete)..."
            className="w-full rounded border px-3 py-2 text-sm"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-tool)", color: "var(--text-primary)" }}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2 cursor-pointer text-sm" style={{ color: "var(--text-secondary)" }}>
          <input type="checkbox" checked={caseSensitive} onChange={(e) => setCaseSensitive(e.target.checked)} className="accent-[var(--accent)]" />
          Case sensitive
        </label>
        <label className="flex items-center gap-2 cursor-pointer text-sm" style={{ color: "var(--text-secondary)" }}>
          <input type="checkbox" checked={wholeWord} onChange={(e) => setWholeWord(e.target.checked)} className="accent-[var(--accent)]" />
          Whole word only
        </label>
        <Button onClick={applyAll} disabled={!text || !find} style={{ backgroundColor: "var(--accent)", color: "#fff" }}>
          Replace All
        </Button>
        {replacements !== null && (
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>
            {replacements} replacement{replacements !== 1 ? "s" : ""} made
          </span>
        )}
      </div>

      {output && (
        <div>
          <Textarea
            readOnly
            className="min-h-48 resize-y text-sm"
            style={{ fontFamily: "var(--font-mono)", backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", color: "var(--text-primary)" }}
            value={output}
          />
          <div className="mt-2 flex justify-end">
            <CopyButton text={output} toolName="find-and-replace" />
          </div>
        </div>
      )}
    </div>
  );
}
