"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackCopyResult } from "@/lib/analytics";

interface CopyButtonProps {
  text: string;
  toolName?: string;
  label?: string;
  className?: string;
}

export function CopyButton({ text, toolName = "", label = "Copy", className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    if (toolName) trackCopyResult(toolName);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Button
      onClick={handleCopy}
      variant="outline"
      size="sm"
      className={`gap-1.5 ${className}`}
      disabled={!text}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" style={{ color: "var(--accent)" }} />
          Copied!
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          {label}
        </>
      )}
    </Button>
  );
}
