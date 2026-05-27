"use client";

import { useState, useMemo } from "react";
import { Textarea } from "@/components/ui/textarea";
import { StatBadge } from "./StatBadge";
import { TextareaWithClear } from "./shared/TextareaWithClear";
import { countWordOccurrences } from "@/lib/tools/countWordOccurrences";

export function CountWordOccurrencesTool() {
  const [text, setText] = useState("");
  const [word, setWord] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [wholeWord, setWholeWord] = useState(true);

  const result = useMemo(
    () => countWordOccurrences(text, word, { caseSensitive, wholeWord }),
    [text, word, caseSensitive, wholeWord]
  );

  return (
    <div className="space-y-4">
      <TextareaWithClear
        value={text}
        onChange={(v) => setText(v)}
        placeholder="Paste or type your text here..."
      />

      <div>
        <label className="mb-1 block text-xs" style={{ color: "var(--text-muted)" }}>Word or phrase to count</label>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="e.g. the"
          className="w-full rounded border px-3 py-2 text-sm"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-tool)", color: "var(--text-primary)" }}
        />
      </div>

      <div className="flex flex-wrap gap-4">
        <label className="flex cursor-pointer items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
          <input
            type="checkbox"
            checked={caseSensitive}
            onChange={(e) => setCaseSensitive(e.target.checked)}
            className="accent-[var(--accent)]"
          />
          Case sensitive
        </label>
        <label className="flex cursor-pointer items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
          <input
            type="checkbox"
            checked={wholeWord}
            onChange={(e) => setWholeWord(e.target.checked)}
            className="accent-[var(--accent)]"
          />
          Whole word only
        </label>
      </div>

      {word && text && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <StatBadge label="Occurrences" value={result.count.toLocaleString()} />
          <StatBadge
            label="Frequency"
            value={
              (() => {
                const totalWords = text.trim() ? text.trim().split(/\s+/).length : 0;
                return totalWords > 0 ? `${((result.count / totalWords) * 100).toFixed(2)}%` : "0%";
              })()
            }
          />
          <StatBadge
            label="Total words"
            value={text.trim() ? text.trim().split(/\s+/).length.toLocaleString() : "0"}
          />
        </div>
      )}
    </div>
  );
}
