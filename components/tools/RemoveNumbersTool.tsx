"use client";

import { useState } from "react";
import { ApplyTransformPanel } from "./shared/ApplyTransformPanel";
import { removeNumbers } from "@/lib/tools/removeNumbers";

export function RemoveNumbersTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [collapseSpaces, setCollapseSpaces] = useState(true);

  function apply() {
    setOutput(removeNumbers(input, { collapseSpaces }));
  }

  return (
    <ApplyTransformPanel
      input={input}
      output={output}
      onInputChange={(v) => { setInput(v); setOutput(""); }}
      onClear={() => { setInput(""); setOutput(""); }}
      onApply={apply}
      applyLabel="Remove Numbers"
      toolName="remove-numbers"
      controls={
        <label className="flex cursor-pointer items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
          <input
            type="checkbox"
            checked={collapseSpaces}
            onChange={(e) => setCollapseSpaces(e.target.checked)}
            className="accent-[var(--accent)]"
          />
          Collapse extra spaces left by removed numbers
        </label>
      }
    />
  );
}
