"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ClearButton } from "./ClearButton";
import { StatBadge } from "./StatBadge";
import { countCharacters, platformLimits } from "@/lib/tools/characterCounter";

export function CharacterCounterTool() {
  const [text, setText] = useState("");
  const stats = countCharacters(text);

  return (
    <div className="space-y-4">
      <div className="relative">
        <Textarea
          placeholder="Paste or type your text here..."
          className="min-h-48 resize-y text-sm"
          style={{ fontFamily: "var(--font-mono)", backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", color: "var(--text-primary)" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {text && (
          <div className="absolute right-2 top-2">
            <ClearButton onClear={() => setText("")} />
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatBadge label="Characters" value={stats.total.toLocaleString()} />
        <StatBadge label="Without spaces" value={stats.noSpaces.toLocaleString()} />
        <StatBadge label="Words" value={stats.words.toLocaleString()} />
        <StatBadge label="Lines" value={stats.lines.toLocaleString()} />
      </div>

      <div
        className="rounded-lg border p-4"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-tool)" }}
      >
        <p className="mb-3 text-sm font-medium" style={{ color: "var(--text-primary)" }}>
          Platform limits
        </p>
        <div className="space-y-3">
          {platformLimits.map((p) => {
            const pct = Math.min((stats.total / p.limit) * 100, 100);
            const over = stats.total > p.limit;
            return (
              <div key={p.name}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span style={{ color: "var(--text-secondary)" }}>{p.name}</span>
                  <span style={{ color: over ? "#ef4444" : "var(--text-muted)" }}>
                    {stats.total} / {p.limit}
                    {over && " (over limit)"}
                  </span>
                </div>
                <div
                  className="h-1.5 overflow-hidden rounded-full"
                  style={{ backgroundColor: "var(--bg-secondary)" }}
                >
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: over ? "#ef4444" : "var(--accent)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
