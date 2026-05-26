"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ClearButton } from "./ClearButton";
import { StatBadge } from "./StatBadge";
import { estimateReadingTime } from "@/lib/tools/readingTime";

export function ReadingTimeTool() {
  const [text, setText] = useState("");
  const result = estimateReadingTime(text);

  function formatTime(minutes: number): string {
    if (minutes === 0) return "0 min";
    if (minutes < 60) return `${minutes} min`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
  }

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
        <StatBadge label="Slow reader (150 wpm)" value={formatTime(result.slowMinutes)} />
        <StatBadge label="Average (238 wpm)" value={formatTime(result.avgMinutes)} />
        <StatBadge label="Fast reader (350 wpm)" value={formatTime(result.fastMinutes)} />
        <StatBadge label="Speaking (130 wpm)" value={formatTime(result.speakingMinutes)} />
        <StatBadge label="Words" value={result.wordCount.toLocaleString()} />
        <StatBadge label="Characters" value={result.charCount.toLocaleString()} />
      </div>

      {text.trim() && result.contentType && (
        <div
          className="rounded-lg px-4 py-3 text-sm"
          style={{ backgroundColor: "var(--accent-subtle)", color: "var(--accent)" }}
        >
          This text takes about <strong>{formatTime(result.avgMinutes)}</strong> to read —
          similar to a <strong>{result.contentType}</strong>.
        </div>
      )}
    </div>
  );
}
