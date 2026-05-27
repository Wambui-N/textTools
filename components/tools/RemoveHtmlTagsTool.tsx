"use client";

import { useState } from "react";
import { ApplyTransformPanel } from "./shared/ApplyTransformPanel";
import { removeHtmlTags } from "@/lib/tools/removeHtmlTags";

export function RemoveHtmlTagsTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [decodeEntities, setDecodeEntities] = useState(true);

  function apply() {
    setOutput(removeHtmlTags(input, decodeEntities));
  }

  return (
    <ApplyTransformPanel
      input={input}
      output={output}
      onInputChange={(v) => { setInput(v); setOutput(""); }}
      onClear={() => { setInput(""); setOutput(""); }}
      onApply={apply}
      applyLabel="Strip HTML Tags"
      inputPlaceholder="Paste HTML here..."
      toolName="remove-html-tags"
      controls={
        <label className="flex cursor-pointer items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
          <input
            type="checkbox"
            checked={decodeEntities}
            onChange={(e) => setDecodeEntities(e.target.checked)}
            className="accent-[var(--accent)]"
          />
          Decode HTML entities (&amp; &lt; &gt; &quot;)
        </label>
      }
    />
  );
}
