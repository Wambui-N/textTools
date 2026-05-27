"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CopyButton } from "./CopyButton";
import { ClearButton } from "./ClearButton";
import { convertCase, type CaseType } from "@/lib/tools/caseConverter";

const CASES: { label: string; value: CaseType; example: string }[] = [
  { label: "UPPER CASE", value: "upper", example: "HELLO WORLD" },
  { label: "lower case", value: "lower", example: "hello world" },
  { label: "Title Case", value: "title", example: "Hello World" },
  { label: "Sentence case", value: "sentence", example: "Hello world" },
  { label: "camelCase", value: "camel", example: "helloWorld" },
  { label: "PascalCase", value: "pascal", example: "HelloWorld" },
  { label: "snake_case", value: "snake", example: "hello_world" },
  { label: "kebab-case", value: "kebab", example: "hello-world" },
];

export function CaseConverterTool() {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  function apply(type: CaseType) {
    setText(convertCase(text, type));
    setDone(true);
    setTimeout(() => setDone(false), 1500);
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <Textarea
          placeholder="Paste or type your text here..."
          className="min-h-48 resize-y text-sm"
          style={{ fontFamily: "var(--font-mono)", backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", color: "var(--text-primary)" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {text && (
          <div className="flex items-center justify-end gap-2">
            {done && <span className="text-xs" style={{ color: "var(--accent)" }}>Done ✓</span>}
            <ClearButton onClear={() => setText("")} />
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {CASES.map((c) => (
          <Button
            key={c.value}
            variant="outline"
            size="sm"
            onClick={() => apply(c.value)}
            disabled={!text}
            className="justify-start font-mono text-xs"
          >
            {c.label}
          </Button>
        ))}
      </div>

      {text && (
        <div className="flex justify-end">
          <CopyButton text={text} toolName="case-converter" />
        </div>
      )}
    </div>
  );
}
