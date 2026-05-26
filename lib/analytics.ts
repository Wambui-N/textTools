declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackToolUsed(toolName: string, textLength: number) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "tool_used", { tool_name: toolName, text_length: textLength });
  }
}

export function trackCopyResult(toolName: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "copy_result", { tool_name: toolName });
  }
}
