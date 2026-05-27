"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CopyButton } from "./CopyButton";
import { ClearButton } from "./ClearButton";
import { reverseText, type ReverseMode } from "@/lib/tools/reverseText";

const MODES: { value: ReverseMode; label: string; description: string }[] = [
  { value: "chars", label: "Reverse entire text", description: "dlroW olleH" },
  { value: "words", label: "Reverse word order", description: "World Hello" },
  { value: "each", label: "Reverse each word", description: "olleH dlroW" },
  { value: "flip", label: "Flip upside down", description: "ɥǝllo ʍoɹld" },
];

export function ReverseTextTool() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<ReverseMode>("chars");

  const output = text ? reverseText(text, mode) : "";

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <Textarea
          placeholder="Paste or type your text here..."
          className="min-h-32 resize-y text-sm"
          style={{ fontFamily: "var(--font-mono)", backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", color: "var(--text-primary)" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {text && (
          <div className="flex justify-end">
            <ClearButton onClear={() => setText("")} />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {MODES.map((m) => (
          <label
            key={m.value}
            className="flex items-start gap-3 cursor-pointer rounded-lg border p-3 transition-colors"
            style={{
              borderColor: mode === m.value ? "var(--accent)" : "var(--border)",
              backgroundColor: mode === m.value ? "var(--accent-subtle)" : "var(--bg-tool)",
            }}
          >
            <input type="radio" value={m.value} checked={mode === m.value} onChange={() => setMode(m.value)} className="mt-0.5 accent-[var(--accent)]" />
            <div>
              <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{m.label}</p>
              <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>{m.description}</p>
            </div>
          </label>
        ))}
      </div>

      {output && (
        <div>
          <Textarea
            readOnly
            className="min-h-32 resize-y text-sm"
            style={{ fontFamily: "var(--font-mono)", backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", color: "var(--text-primary)" }}
            value={output}
          />
          <div className="mt-2 flex justify-end">
            <CopyButton text={output} toolName="reverse-text" />
          </div>
        </div>
      )}
    </div>
  );
}
