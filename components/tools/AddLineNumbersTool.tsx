"use client";

import { useState } from "react";
import { ApplyTransformPanel } from "./shared/ApplyTransformPanel";
import { addLineNumbers } from "@/lib/tools/addLineNumbers";

const SEPARATOR_OPTIONS = [
  { value: ". ", label: "1. Line" },
  { value: ") ", label: "1) Line" },
  { value: ": ", label: "1: Line" },
  { value: "\t", label: "1\\t Line (tab)" },
];

export function AddLineNumbersTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [start, setStart] = useState(1);
  const [separator, setSeparator] = useState(". ");
  const [padNumbers, setPadNumbers] = useState(true);

  function apply() {
    setOutput(addLineNumbers(input, { start, separator, padNumbers }));
  }

  return (
    <ApplyTransformPanel
      input={input}
      output={output}
      onInputChange={(v) => { setInput(v); setOutput(""); }}
      onClear={() => { setInput(""); setOutput(""); }}
      onApply={apply}
      applyLabel="Add Line Numbers"
      toolName="add-line-numbers"
      controls={
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <span>Start at:</span>
            <input
              type="number"
              min={0}
              max={9999}
              value={start}
              onChange={(e) => setStart(Math.max(0, Number(e.target.value)))}
              className="w-20 rounded border px-2 py-1 text-sm"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-tool)", color: "var(--text-primary)" }}
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {SEPARATOR_OPTIONS.map((o) => (
              <label key={o.value} className="flex cursor-pointer items-center gap-1.5 text-sm" style={{ color: "var(--text-secondary)" }}>
                <input
                  type="radio"
                  value={o.value}
                  checked={separator === o.value}
                  onChange={() => setSeparator(o.value)}
                  className="accent-[var(--accent)]"
                />
                <span className="font-mono text-xs">{o.label}</span>
              </label>
            ))}
          </div>
          <label className="flex cursor-pointer items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <input
              type="checkbox"
              checked={padNumbers}
              onChange={(e) => setPadNumbers(e.target.checked)}
              className="accent-[var(--accent)]"
            />
            Pad numbers with spaces for alignment
          </label>
        </div>
      }
    />
  );
}
