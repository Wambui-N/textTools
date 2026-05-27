"use client";

import { useState } from "react";
import { LiveOutputPanel } from "./shared/LiveOutputPanel";
import { analyzeText } from "@/lib/tools/wordCounter";

export function CountParagraphsTool() {
  const [text, setText] = useState("");
  const stats = analyzeText(text);

  return (
    <LiveOutputPanel
      input={text}
      onInputChange={setText}
      toolName="count-paragraphs"
      stats={[
        { label: "Paragraphs", value: stats.paragraphs.toLocaleString() },
        { label: "Sentences", value: stats.sentences.toLocaleString() },
        { label: "Words", value: stats.words.toLocaleString() },
        { label: "Avg words / paragraph", value: stats.paragraphs > 0 ? (stats.words / stats.paragraphs).toFixed(1) : "0" },
      ]}
    />
  );
}
