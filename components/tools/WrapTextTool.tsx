"use client";

import { useState } from "react";
import { ApplyTransformPanel } from "./shared/ApplyTransformPanel";
import { wrapText } from "@/lib/tools/wrapText";

export function WrapTextTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [width, setWidth] = useState(80);
  const [preserveBreaks, setPreserveBreaks] = useState(true);

  function apply() {
    setOutput(wrapText(input, { width, preserveExistingBreaks: preserveBreaks }));
  }

  return (
    <ApplyTransformPanel
      input={input}
      output={output}
      onInputChange={(v) => { setInput(v); setOutput(""); }}
      onClear={() => { setInput(""); setOutput(""); }}
      onApply={apply}
      applyLabel="Wrap Text"
      toolName="wrap-text"
      controls={
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <span>Column width:</span>
            <input
              type="number"
              min={20}
              max={500}
              value={width}
              onChange={(e) => setWidth(Math.max(20, Math.min(500, Number(e.target.value))))}
              className="w-20 rounded border px-2 py-1 text-sm"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-tool)", color: "var(--text-primary)" }}
            />
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>characters</span>
          </div>
          <label className="flex cursor-pointer items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <input
              type="checkbox"
              checked={preserveBreaks}
              onChange={(e) => setPreserveBreaks(e.target.checked)}
              className="accent-[var(--accent)]"
            />
            Preserve existing line breaks (treat each line separately)
          </label>
        </div>
      }
    />
  );
}
