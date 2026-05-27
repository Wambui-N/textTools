"use client";

import { Textarea } from "@/components/ui/textarea";
import { ClearButton } from "@/components/tools/ClearButton";

interface TextareaWithClearProps {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  placeholder?: string;
  minHeight?: string;
  readOnly?: boolean;
}

export function TextareaWithClear({
  value,
  onChange,
  onClear,
  placeholder = "Paste or type your text here...",
  minHeight = "min-h-40",
  readOnly = false,
}: TextareaWithClearProps) {
  return (
    <div className="space-y-1">
      <Textarea
        placeholder={placeholder}
        className={`${minHeight} resize-y text-sm`}
        style={{ fontFamily: "var(--font-mono)", backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", color: "var(--text-primary)" }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        readOnly={readOnly}
      />
      {value && !readOnly && (
        <div className="flex justify-end">
          <ClearButton onClear={() => { onChange(""); onClear?.(); }} />
        </div>
      )}
    </div>
  );
}
