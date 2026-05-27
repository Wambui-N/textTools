"use client";

import { useState } from "react";
import { LiveOutputPanel } from "./shared/LiveOutputPanel";
import { analyzeText } from "@/lib/tools/wordCounter";

export function CountSentencesTool() {
  const [text, setText] = useState("");
  const stats = analyzeText(text);

  return (
    <LiveOutputPanel
      input={text}
      onInputChange={setText}
      toolName="count-sentences"
      stats={[
        { label: "Sentences", value: stats.sentences.toLocaleString() },
        { label: "Words", value: stats.words.toLocaleString() },
        { label: "Avg words / sentence", value: stats.sentences > 0 ? (stats.words / stats.sentences).toFixed(1) : "0" },
        { label: "Paragraphs", value: stats.paragraphs.toLocaleString() },
      ]}
    />
  );
}
