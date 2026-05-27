"use client";

import { useState } from "react";
import { ApplyTransformPanel } from "./shared/ApplyTransformPanel";
import { removeLineNumbers } from "@/lib/tools/removeLineNumbers";

export function RemoveLineNumbersTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function apply() {
    setOutput(removeLineNumbers(input));
  }

  return (
    <ApplyTransformPanel
      input={input}
      output={output}
      onInputChange={(v) => { setInput(v); setOutput(""); }}
      onClear={() => { setInput(""); setOutput(""); }}
      onApply={apply}
      applyLabel="Remove Line Numbers"
      inputPlaceholder={"Paste numbered lines here...\n1. First item\n2. Second item"}
      toolName="remove-line-numbers"
    />
  );
}
