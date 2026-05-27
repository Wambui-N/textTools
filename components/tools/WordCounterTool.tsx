"use client";

import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ClearButton } from "./ClearButton";
import { StatBadge } from "./StatBadge";
import { analyzeText } from "@/lib/tools/wordCounter";
import { trackToolUsed } from "@/lib/analytics";

export function WordCounterTool() {
  const [text, setText] = useState("");
  const stats = analyzeText(text);

  useEffect(() => {
    if (text.length > 10) trackToolUsed("word-counter", text.length);
  }, [text.length > 10]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <Textarea
          placeholder="Paste or type your text here..."
          className="min-h-64 resize-y font-mono text-sm"
          style={{ fontFamily: "var(--font-mono)", backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", color: "var(--text-primary)" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {text && (
          <div className="flex justify-end">
            <ClearButton onClear={() => setText("")} />
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatBadge label="Words" value={stats.words.toLocaleString()} />
        <StatBadge label="Characters" value={stats.chars.toLocaleString()} />
        <StatBadge label="Without spaces" value={stats.charsNoSpaces.toLocaleString()} />
        <StatBadge label="Sentences" value={stats.sentences.toLocaleString()} />
        <StatBadge label="Paragraphs" value={stats.paragraphs.toLocaleString()} />
        <StatBadge label="Reading time" value={`${stats.readingTime} min`} />
        <StatBadge label="Speaking time" value={`${stats.speakingTime} min`} />
      </div>
    </div>
  );
}
