"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/tools/CopyButton";
import { TextareaWithClear } from "./TextareaWithClear";

interface ApplyTransformPanelProps {
  input: string;
  output: string;
  onInputChange: (value: string) => void;
  onClear: () => void;
  onApply: () => void;
  applyLabel: string;
  inputPlaceholder?: string;
  toolName: string;
  controls?: React.ReactNode;
  disabled?: boolean;
}

export function ApplyTransformPanel({
  input,
  output,
  onInputChange,
  onClear,
  onApply,
  applyLabel,
  inputPlaceholder,
  toolName,
  controls,
  disabled,
}: ApplyTransformPanelProps) {
  return (
    <div className="space-y-4">
      <TextareaWithClear
        value={input}
        onChange={(v) => { onInputChange(v); }}
        onClear={onClear}
        placeholder={inputPlaceholder}
      />

      {controls}

      <Button
        onClick={onApply}
        disabled={disabled ?? !input}
        style={{ backgroundColor: "var(--accent)", color: "#fff" }}
      >
        {applyLabel}
      </Button>

      {output && (
        <div>
          <Textarea
            readOnly
            className="min-h-40 resize-y text-sm"
            style={{ fontFamily: "var(--font-mono)", backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", color: "var(--text-primary)" }}
            value={output}
          />
          <div className="mt-2 flex justify-end">
            <CopyButton text={output} toolName={toolName} />
          </div>
        </div>
      )}
    </div>
  );
}
