"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CopyButton } from "./CopyButton";
import { ClearButton } from "./ClearButton";
import { StatBadge } from "./StatBadge";
import { removeDuplicateLines, type RemoveDuplicatesOptions } from "@/lib/tools/removeDuplicates";

export function RemoveDuplicatesTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [opts, setOpts] = useState<RemoveDuplicatesOptions>({ caseSensitive: false, trimWhitespace: true, removeBlankLines: false });
  const [stats, setStats] = useState({ linesBefore: 0, linesAfter: 0, removed: 0 });
  const [done, setDone] = useState(false);

  function apply() {
    const result = removeDuplicateLines(input, opts);
    setOutput(result.output);
    setStats({ linesBefore: result.linesBefore, linesAfter: result.linesAfter, removed: result.removed });
    setDone(true);
    setTimeout(() => setDone(false), 1500);
  }

  const toggle = (key: keyof RemoveDuplicatesOptions) =>
    setOpts((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="space-y-4">
      <div className="relative">
        <Textarea
          placeholder="Paste your list here (one item per line)..."
          className="min-h-48 resize-y text-sm"
          style={{ fontFamily: "var(--font-mono)", backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", color: "var(--text-primary)" }}
          value={input}
          onChange={(e) => { setInput(e.target.value); setOutput(""); }}
        />
        {input && (
          <div className="absolute right-2 top-2">
            <ClearButton onClear={() => { setInput(""); setOutput(""); }} />
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-4">
        {([
          { key: "caseSensitive" as const, label: "Case sensitive" },
          { key: "trimWhitespace" as const, label: "Trim whitespace before comparing" },
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
          Remove Duplicates
        </Button>
        {done && <span className="text-sm" style={{ color: "var(--accent)" }}>Done ✓</span>}
      </div>

      {output && (
        <>
          <div className="grid grid-cols-3 gap-3">
            <StatBadge label="Lines before" value={stats.linesBefore} />
            <StatBadge label="Lines after" value={stats.linesAfter} />
            <StatBadge label="Removed" value={stats.removed} />
          </div>
          <div>
            <Textarea
              readOnly
              className="min-h-48 resize-y text-sm"
              style={{ fontFamily: "var(--font-mono)", backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", color: "var(--text-primary)" }}
              value={output}
            />
            <div className="mt-2 flex justify-end">
              <CopyButton text={output} toolName="remove-duplicate-lines" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
