"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CopyButton } from "./CopyButton";
import { ClearButton } from "./ClearButton";
import { removeLineBreaks, type LineBreakReplacement } from "@/lib/tools/removeLineBreaks";

export function RemoveLineBreaksTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [replacement, setReplacement] = useState<LineBreakReplacement>("space");
  const [customChar, setCustomChar] = useState("");
  const [collapseMultiple, setCollapseMultiple] = useState(true);
  const [removeAll, setRemoveAll] = useState(false);

  function apply() {
    const result = removeLineBreaks(input, { replacement, customChar, collapseMultiple, removeAll });
    setOutput(result);
  }

  const options: { value: LineBreakReplacement; label: string }[] = [
    { value: "space", label: "Space ( )" },
    { value: "nothing", label: "Nothing" },
    { value: "comma", label: "Comma (,)" },
    { value: "custom", label: "Custom" },
  ];

  return (
    <div className="space-y-4">
      <div className="relative">
        <Textarea
          placeholder="Paste text with line breaks here..."
          className="min-h-40 resize-y text-sm"
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
        <div>
          <p className="mb-2 text-xs font-medium" style={{ color: "var(--text-muted)" }}>Replace line breaks with</p>
          <div className="flex flex-wrap gap-3">
            {options.map((o) => (
              <label key={o.value} className="flex items-center gap-1.5 cursor-pointer text-sm" style={{ color: "var(--text-secondary)" }}>
                <input type="radio" value={o.value} checked={replacement === o.value} onChange={() => setReplacement(o.value)} className="accent-[var(--accent)]" />
                {o.label}
              </label>
            ))}
          </div>
          {replacement === "custom" && (
            <input
              type="text"
              value={customChar}
              onChange={(e) => setCustomChar(e.target.value)}
              placeholder="Type replacement..."
              className="mt-2 rounded border px-2 py-1 text-sm w-40"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-tool)", color: "var(--text-primary)" }}
            />
          )}
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer text-sm" style={{ color: "var(--text-secondary)" }}>
            <input type="checkbox" checked={collapseMultiple} onChange={(e) => setCollapseMultiple(e.target.checked)} className="accent-[var(--accent)]" />
            Collapse multiple blank lines
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm" style={{ color: "var(--text-secondary)" }}>
            <input type="checkbox" checked={removeAll} onChange={(e) => setRemoveAll(e.target.checked)} className="accent-[var(--accent)]" />
            Remove all blank lines
          </label>
        </div>
      </div>

      <Button onClick={apply} disabled={!input} style={{ backgroundColor: "var(--accent)", color: "#fff" }}>
        Remove Line Breaks
      </Button>

      {output && (
        <div>
          <Textarea
            readOnly
            className="min-h-40 resize-y text-sm"
            style={{ fontFamily: "var(--font-mono)", backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", color: "var(--text-primary)" }}
            value={output}
          />
          <div className="mt-2 flex justify-end">
            <CopyButton text={output} toolName="remove-line-breaks" />
          </div>
        </div>
      )}
    </div>
  );
}
