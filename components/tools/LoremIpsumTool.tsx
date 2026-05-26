"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CopyButton } from "./CopyButton";
import { generateLorem, type LoremType } from "@/lib/tools/loremIpsum";

export function LoremIpsumTool() {
  const [type, setType] = useState<LoremType>("paragraphs");
  const [amount, setAmount] = useState(3);
  const [startClassic, setStartClassic] = useState(true);
  const [output, setOutput] = useState("");

  function generate() {
    const amt = Math.max(1, Math.min(100, amount));
    setOutput(generateLorem(type, amt, startClassic));
  }

  const types: { value: LoremType; label: string }[] = [
    { value: "words", label: "Words" },
    { value: "sentences", label: "Sentences" },
    { value: "paragraphs", label: "Paragraphs" },
  ];

  return (
    <div className="space-y-4">
      <div
        className="rounded-lg border p-4"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-tool)" }}
      >
        <div className="flex flex-wrap items-end gap-4">
          <div>
            <label className="mb-1 block text-xs" style={{ color: "var(--text-muted)" }}>Generate</label>
            <div className="flex gap-2">
              {types.map((t) => (
                <Button
                  key={t.value}
                  variant={type === t.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setType(t.value)}
                  style={type === t.value ? { backgroundColor: "var(--accent)", color: "#fff", borderColor: "var(--accent)" } : {}}
                >
                  {t.label}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs" style={{ color: "var(--text-muted)" }}>Amount</label>
            <input
              type="number"
              min={1}
              max={100}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-20 rounded border px-3 py-2 text-sm"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)", color: "var(--text-primary)" }}
            />
          </div>

          <label className="flex items-center gap-2 cursor-pointer text-sm pb-0.5" style={{ color: "var(--text-secondary)" }}>
            <input type="checkbox" checked={startClassic} onChange={(e) => setStartClassic(e.target.checked)} className="accent-[var(--accent)]" />
            Start with "Lorem ipsum..."
          </label>
        </div>
      </div>

      <Button onClick={generate} style={{ backgroundColor: "var(--accent)", color: "#fff" }}>
        Generate
      </Button>

      {output && (
        <div>
          <textarea
            readOnly
            className="w-full min-h-48 resize-y rounded-md border px-3 py-2 text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-body)", backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", color: "var(--text-primary)" }}
            value={output}
          />
          <div className="mt-2 flex justify-end">
            <CopyButton text={output} toolName="lorem-ipsum-generator" />
          </div>
        </div>
      )}
    </div>
  );
}
