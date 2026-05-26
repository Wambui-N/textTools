"use client";

import { useState, useMemo } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ClearButton } from "./ClearButton";
import { CopyButton } from "./CopyButton";
import { Button } from "@/components/ui/button";
import { StatBadge } from "./StatBadge";
import { extractEmails } from "@/lib/tools/extractEmails";
import { Download } from "lucide-react";

export function ExtractEmailsTool() {
  const [text, setText] = useState("");
  const result = useMemo(() => extractEmails(text), [text]);

  function downloadTxt() {
    const blob = new Blob([result.emails.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "emails.txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <Textarea
          placeholder="Paste any text, email, or webpage source here..."
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

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <StatBadge label="Emails found" value={result.total} />
        <StatBadge label="Unique emails" value={result.unique} />
      </div>

      {result.emails.length > 0 && (
        <div>
          <div
            className="min-h-24 rounded-lg border p-4 text-sm"
            style={{ fontFamily: "var(--font-mono)", backgroundColor: "var(--bg-tool)", borderColor: "var(--border)", color: "var(--text-primary)", whiteSpace: "pre-wrap", wordBreak: "break-all" }}
          >
            {result.emails.join("\n")}
          </div>
          <div className="mt-2 flex flex-wrap gap-2 justify-end">
            <CopyButton text={result.emails.join("\n")} toolName="extract-emails" label="Copy (newline)" />
            <CopyButton text={result.emails.join(", ")} toolName="extract-emails" label="Copy (comma)" />
            <Button variant="outline" size="sm" onClick={downloadTxt} className="gap-1.5">
              <Download className="h-3.5 w-3.5" />
              Download .txt
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
