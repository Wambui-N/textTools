export interface WrapTextOptions {
  width: number;
  preserveExistingBreaks: boolean;
}

export function wrapText(text: string, opts: WrapTextOptions): string {
  const { width, preserveExistingBreaks } = opts;
  if (width < 1) return text;

  const processBlock = (block: string): string => {
    const words = block.split(/\s+/).filter(Boolean);
    const lines: string[] = [];
    let current = "";

    for (const word of words) {
      if (current.length === 0) {
        current = word;
      } else if (current.length + 1 + word.length <= width) {
        current += " " + word;
      } else {
        lines.push(current);
        current = word;
      }
    }
    if (current) lines.push(current);
    return lines.join("\n");
  };

  if (preserveExistingBreaks) {
    return text
      .split("\n")
      .map((line) => processBlock(line))
      .join("\n");
  }
  return processBlock(text.replace(/\n/g, " "));
}
