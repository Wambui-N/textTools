"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CopyButton } from "./CopyButton";
import { ClearButton } from "./ClearButton";
import { StatBadge } from "./StatBadge";
import { removeExtraSpaces, type RemoveSpacesOptions } from "@/lib/tools/removeSpaces";

export function RemoveExtraSpacesTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [opts, setOpts] = useState<RemoveSpacesOptions>({
    leadingTrailing: true,
    multipleSpaces: true,
    beforePunctuation: true,
    tabs: true,
  });
  const [stats, setStats] = useState({ charsBefore: 0, charsAfter: 0, spacesRemoved: 0 });

  function apply() {
    const result = removeExtraSpaces(input, opts);
    setOutput(result.output);
    setStats({ charsBefore: result.charsBefore, charsAfter: result.charsAfter, spacesRemoved: result.spacesRemoved });
  }

  const toggle = (key: keyof RemoveSpacesOptions) =>
    setOpts((prev) => ({ ...prev, [key]: !prev[key] }));

  const optionLabels: { key: keyof RemoveSpacesOptions; label: string }[] = [
    { key: "leadingTrailing", label: "Remove leading/trailing spaces" },
    { key: "multipleSpaces", label: "Replace multiple spaces with one" },
    { key: "beforePunctuation", label: "Remove spaces before punctuation" },
    { key: "tabs", label: "Convert tabs to spaces" },
  ];

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <Textarea
          placeholder="Paste your text here..."
          className="min-h-40 resize-y text-sm"
          style={{ fontFamily: "var(--font-mono)", backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", color: "var(--text-primary)" }}
          value={input}
          onChange={(e) => { setInput(e.target.value); setOutput(""); }}
        />
        {input && (
          <div className="flex justify-end">
            <ClearButton onClear={() => { setInput(""); setOutput(""); }} />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {optionLabels.map(({ key, label }) => (
          <label key={key} className="flex cursor-pointer items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <input type="checkbox" checked={opts[key]} onChange={() => toggle(key)} className="accent-[var(--accent)]" />
            {label}
          </label>
        ))}
      </div>

      <Button onClick={apply} disabled={!input} style={{ backgroundColor: "var(--accent)", color: "#fff" }}>
        Remove Spaces
      </Button>

      {output && (
        <>
          <div className="grid grid-cols-3 gap-3">
            <StatBadge label="Before" value={stats.charsBefore.toLocaleString()} />
            <StatBadge label="After" value={stats.charsAfter.toLocaleString()} />
            <StatBadge label="Removed" value={stats.spacesRemoved.toLocaleString()} />
          </div>
          <div>
            <Textarea
              readOnly
              className="min-h-40 resize-y text-sm"
              style={{ fontFamily: "var(--font-mono)", backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", color: "var(--text-primary)" }}
              value={output}
            />
            <div className="mt-2 flex justify-end">
              <CopyButton text={output} toolName="remove-extra-spaces" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
