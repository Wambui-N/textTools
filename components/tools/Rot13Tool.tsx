"use client";

import { useState } from "react";
import { LiveOutputPanel } from "./shared/LiveOutputPanel";
import { rot13 } from "@/lib/tools/rot13";

export function Rot13Tool() {
  const [text, setText] = useState("");
  const output = text ? rot13(text) : "";

  return (
    <LiveOutputPanel
      input={text}
      output={output}
      onInputChange={setText}
      toolName="rot13"
      inputPlaceholder="Paste text to encode or decode..."
    />
  );
}
