"use client";

import { useState } from "react";
import { LiveOutputPanel } from "./shared/LiveOutputPanel";
import { countVowels } from "@/lib/tools/countVowels";

export function CountVowelsTool() {
  const [text, setText] = useState("");
  const result = countVowels(text);

  return (
    <LiveOutputPanel
      input={text}
      onInputChange={setText}
      toolName="count-vowels-consonants"
      stats={[
        { label: "Vowels", value: result.vowels.toLocaleString() },
        { label: "Consonants", value: result.consonants.toLocaleString() },
        { label: "Total letters", value: result.letters.toLocaleString() },
        { label: "Vowel %", value: `${result.vowelPercent}%` },
        { label: "Consonant %", value: `${result.consonantPercent}%` },
        { label: "Other chars", value: result.other.toLocaleString() },
      ]}
    />
  );
}
