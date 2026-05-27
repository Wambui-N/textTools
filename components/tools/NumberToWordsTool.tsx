"use client";

import { useState } from "react";
import { CopyButton } from "./CopyButton";
import { numberToWords } from "@/lib/tools/numberToWords";

export function NumberToWordsTool() {
  const [input, setInput] = useState("");

  const parsed = input.trim() ? parseInt(input.replace(/[,\s]/g, ""), 10) : NaN;
  const output = !isNaN(parsed) ? numberToWords(parsed) : "";
  const isError = output.startsWith("Supported range");

  return (
    <div className="space-y-4">
      <div>
        <label className="mb-1 block text-xs" style={{ color: "var(--text-muted)" }}>Enter a number</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. 147 or 1,000,000"
          className="w-full rounded border px-3 py-2 text-lg font-mono"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-tool)", color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}
        />
      </div>

      {output && (
        <div
          className="rounded-lg px-4 py-4"
          style={{
            backgroundColor: isError ? "var(--bg-secondary)" : "var(--accent-subtle)",
            borderLeft: `3px solid ${isError ? "var(--border-strong)" : "var(--accent)"}`,
          }}
        >
          <p
            className="text-base leading-relaxed"
            style={{ color: isError ? "var(--text-muted)" : "var(--text-primary)", fontFamily: "var(--font-heading)" }}
          >
            {output}
          </p>
        </div>
      )}

      {output && !isError && (
        <div className="flex justify-end">
          <CopyButton text={output} toolName="number-to-words" />
        </div>
      )}
    </div>
  );
}
