"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CopyButton } from "./CopyButton";
import { ClearButton } from "./ClearButton";
import { sortLines, type SortMode, type SortLinesOptions } from "@/lib/tools/sortLines";

const SORT_MODES: { value: SortMode; label: string }[] = [
  { value: "az", label: "A → Z" },
  { value: "za", label: "Z → A" },
  { value: "shortest", label: "Shortest first" },
  { value: "longest", label: "Longest first" },
  { value: "reverse", label: "Reverse order" },
  { value: "random", label: "Random shuffle" },
];

export function SortLinesTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<SortMode>("az");
  const [opts, setOpts] = useState<Omit<SortLinesOptions, "mode">>({ caseSensitive: false, trimWhitespace: true, removeBlankLines: false });
  const [done, setDone] = useState(false);

  function apply() {
    const result = sortLines(input, { mode, ...opts });
    setOutput(result);
    setDone(true);
    setTimeout(() => setDone(false), 1500);
  }

  const toggle = (key: keyof typeof opts) =>
    setOpts((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <Textarea
          placeholder="Paste your list here (one item per line)..."
          className="min-h-48 resize-y text-sm"
          style={{ fontFamily: "var(--font-mono)", backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", color: "var(--text-primary)" }}
          value={input}
          onChange={(e) => { setInput(e.target.value); setOutput(""); }}
        />
        {input && (
          <div className="flex justify-end">
            <ClearButton onClear={() => { setInput(""); setOutput(""); }} />
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {SORT_MODES.map((m) => (
          <Button
            key={m.value}
            variant={mode === m.value ? "default" : "outline"}
            size="sm"
            onClick={() => setMode(m.value)}
            style={mode === m.value ? { backgroundColor: "var(--accent)", color: "#fff", borderColor: "var(--accent)" } : {}}
          >
            {m.label}
          </Button>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        {([
          { key: "caseSensitive" as const, label: "Case sensitive" },
          { key: "trimWhitespace" as const, label: "Trim whitespace" },
          { key: "removeBlankLines" as const, label: "Remove blank lines" },
        ]).map(({ key, label }) => (
          <label key={key} className="flex items-center gap-2 cursor-pointer text-sm" style={{ color: "var(--text-secondary)" }}>
            <input type="checkbox" checked={opts[key]} onChange={() => toggle(key)} className="accent-[var(--accent)]" />
            {label}
          </label>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <Button onClick={apply} disabled={!input} style={{ backgroundColor: "var(--accent)", color: "#fff" }}>
          Sort Lines
        </Button>
        {done && <span className="text-sm" style={{ color: "var(--accent)" }}>Done ✓</span>}
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
            <CopyButton text={output} toolName="sort-lines" />
          </div>
        </div>
      )}
    </div>
  );
}
