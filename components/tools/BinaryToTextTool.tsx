"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { CopyButton } from "./CopyButton";
import { TextareaWithClear } from "./shared/TextareaWithClear";
import { binaryToText } from "@/lib/tools/binaryToText";

export function BinaryToTextTool() {
  const [input, setInput] = useState("");
  const result = input.trim() ? binaryToText(input) : { output: "", error: null };

  return (
    <div className="space-y-4">
      <TextareaWithClear
        value={input}
        onChange={setInput}
        placeholder="Paste 8-bit binary groups separated by spaces (e.g. 01001000 01101001)..."
      />

      {result.error && (
        <div
          className="rounded-lg px-4 py-3 text-sm"
          style={{ backgroundColor: "var(--bg-secondary)", borderLeft: "3px solid #ef4444", color: "#ef4444" }}
        >
          {result.error}
        </div>
      )}

      {result.output && (
        <div>
          <Textarea
            readOnly
            className="min-h-32 resize-y text-sm"
            style={{ fontFamily: "var(--font-mono)", backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", color: "var(--text-primary)" }}
            value={result.output}
          />
          <div className="mt-2 flex justify-end">
            <CopyButton text={result.output} toolName="binary-to-text" />
          </div>
        </div>
      )}
    </div>
  );
}
