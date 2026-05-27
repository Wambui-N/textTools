"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { CopyButton } from "./CopyButton";
import { TextareaWithClear } from "./shared/TextareaWithClear";
import { encodeToMorse, decodeFromMorse } from "@/lib/tools/morseCode";

type Direction = "encode" | "decode";

export function MorseCodeTool() {
  const [input, setInput] = useState("");
  const [direction, setDirection] = useState<Direction>("encode");

  const output = input.trim()
    ? direction === "encode"
      ? encodeToMorse(input)
      : decodeFromMorse(input)
    : "";

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {(["encode", "decode"] as Direction[]).map((d) => (
          <button
            key={d}
            onClick={() => { setDirection(d); }}
            className="rounded-full px-4 py-1.5 text-sm font-medium transition-all capitalize"
            style={
              direction === d
                ? { backgroundColor: "var(--accent)", color: "#fff" }
                : { backgroundColor: "var(--bg-secondary)", color: "var(--text-secondary)", border: "1px solid var(--border)" }
            }
          >
            {d === "encode" ? "Text to Morse" : "Morse to Text"}
          </button>
        ))}
      </div>

      <TextareaWithClear
        value={input}
        onChange={setInput}
        placeholder={
          direction === "encode"
            ? "Type or paste text to convert to Morse code..."
            : "Paste Morse code here (use spaces between letters, / between words)..."
        }
      />

      {output && (
        <div>
          <Textarea
            readOnly
            className="min-h-32 resize-y text-sm"
            style={{ fontFamily: "var(--font-mono)", backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", color: "var(--text-primary)" }}
            value={output}
          />
          <div className="mt-2 flex justify-end">
            <CopyButton text={output} toolName="morse-code-converter" />
          </div>
        </div>
      )}
    </div>
  );
}
