"use client";

import { useState } from "react";
import { ApplyTransformPanel } from "./shared/ApplyTransformPanel";
import { removePunctuation, type PunctuationPreserve } from "@/lib/tools/removePunctuation";

const PRESERVE_OPTIONS: { value: PunctuationPreserve; label: string }[] = [
  { value: "none", label: "Remove all punctuation" },
  { value: "sentence", label: "Keep sentence endings (. ! ?)" },
];

export function RemovePunctuationTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [preserve, setPreserve] = useState<PunctuationPreserve>("none");
  const [collapseSpaces, setCollapseSpaces] = useState(true);

  function apply() {
    setOutput(removePunctuation(input, { preserve, collapseSpaces }));
  }

  return (
    <ApplyTransformPanel
      input={input}
      output={output}
      onInputChange={(v) => { setInput(v); setOutput(""); }}
      onClear={() => { setInput(""); setOutput(""); }}
      onApply={apply}
      applyLabel="Remove Punctuation"
      toolName="remove-punctuation"
      controls={
        <div className="space-y-2">
          <div className="flex flex-wrap gap-4">
            {PRESERVE_OPTIONS.map((o) => (
              <label key={o.value} className="flex cursor-pointer items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <input
                  type="radio"
                  value={o.value}
                  checked={preserve === o.value}
                  onChange={() => setPreserve(o.value)}
                  className="accent-[var(--accent)]"
                />
                {o.label}
              </label>
            ))}
          </div>
          <label className="flex cursor-pointer items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <input
              type="checkbox"
              checked={collapseSpaces}
              onChange={(e) => setCollapseSpaces(e.target.checked)}
              className="accent-[var(--accent)]"
            />
            Collapse extra spaces
          </label>
        </div>
      }
    />
  );
}
