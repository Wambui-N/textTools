"use client";

import { Textarea } from "@/components/ui/textarea";
import { CopyButton } from "@/components/tools/CopyButton";
import { StatBadge } from "@/components/tools/StatBadge";
import { TextareaWithClear } from "./TextareaWithClear";

interface StatEntry {
  label: string;
  value: string | number;
}

interface LiveOutputPanelProps {
  input: string;
  output?: string;
  stats?: StatEntry[];
  onInputChange: (value: string) => void;
  inputPlaceholder?: string;
  toolName: string;
  controls?: React.ReactNode;
}

export function LiveOutputPanel({
  input,
  output,
  stats,
  onInputChange,
  inputPlaceholder,
  toolName,
  controls,
}: LiveOutputPanelProps) {
  return (
    <div className="space-y-4">
      <TextareaWithClear
        value={input}
        onChange={onInputChange}
        placeholder={inputPlaceholder}
      />

      {controls}

      {stats && stats.length > 0 && (
        <div className={`grid gap-3 ${stats.length <= 2 ? "grid-cols-2" : stats.length <= 4 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-3"}`}>
          {stats.map((s) => (
            <StatBadge key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
      )}

      {output !== undefined && output !== "" && (
        <div>
          <Textarea
            readOnly
            className="min-h-32 resize-y text-sm"
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
