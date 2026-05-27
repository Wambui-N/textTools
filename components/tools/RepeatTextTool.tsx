"use client";

import { useState } from "react";
import { ApplyTransformPanel } from "./shared/ApplyTransformPanel";
import { repeatText } from "@/lib/tools/repeatText";

const SEPARATOR_OPTIONS = [
  { value: "\n", label: "New line" },
  { value: " ", label: "Space" },
  { value: ", ", label: "Comma" },
  { value: "", label: "None" },
];

export function RepeatTextTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [times, setTimes] = useState(3);
  const [separator, setSeparator] = useState("\n");

  function apply() {
    setOutput(repeatText(input, { times, separator }));
  }

  return (
    <ApplyTransformPanel
      input={input}
      output={output}
      onInputChange={(v) => { setInput(v); setOutput(""); }}
      onClear={() => { setInput(""); setOutput(""); }}
      onApply={apply}
      applyLabel="Repeat Text"
      inputPlaceholder="Enter the text to repeat..."
      toolName="repeat-text"
      controls={
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <span>Repeat:</span>
            <input
              type="number"
              min={1}
              max={1000}
              value={times}
              onChange={(e) => setTimes(Math.max(1, Math.min(1000, Number(e.target.value))))}
              className="w-20 rounded border px-2 py-1 text-sm"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-tool)", color: "var(--text-primary)" }}
            />
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>times</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
            <span>Separator:</span>
            {SEPARATOR_OPTIONS.map((o) => (
              <label key={o.label} className="flex cursor-pointer items-center gap-1.5">
                <input
                  type="radio"
                  value={o.value}
                  checked={separator === o.value}
                  onChange={() => setSeparator(o.value)}
                  className="accent-[var(--accent)]"
                />
                {o.label}
              </label>
            ))}
          </div>
        </div>
      }
    />
  );
}
