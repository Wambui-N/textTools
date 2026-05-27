"use client";

import { useState } from "react";
import { LiveOutputPanel } from "./shared/LiveOutputPanel";
import { textToBinary } from "@/lib/tools/textToBinary";

export function TextToBinaryTool() {
  const [text, setText] = useState("");
  const output = text ? textToBinary(text) : "";

  return (
    <LiveOutputPanel
      input={text}
      output={output}
      onInputChange={setText}
      toolName="text-to-binary"
      inputPlaceholder="Paste or type text to convert to binary..."
    />
  );
}
