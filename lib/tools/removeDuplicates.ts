export interface RemoveDuplicatesOptions {
  caseSensitive: boolean;
  trimWhitespace: boolean;
  removeBlankLines: boolean;
}

export interface RemoveDuplicatesResult {
  output: string;
  linesBefore: number;
  linesAfter: number;
  removed: number;
}

export function removeDuplicateLines(
  text: string,
  opts: RemoveDuplicatesOptions
): RemoveDuplicatesResult {
  const lines = text.split("\n");
  const seen = new Set<string>();
  const output: string[] = [];

  for (const line of lines) {
    if (opts.removeBlankLines && line.trim() === "") continue;
    const key = opts.trimWhitespace ? line.trim() : line;
    const normalised = opts.caseSensitive ? key : key.toLowerCase();
    if (!seen.has(normalised)) {
      seen.add(normalised);
      output.push(line);
    }
  }

  const linesBefore = lines.length;
  const linesAfter = output.length;

  return {
    output: output.join("\n"),
    linesBefore,
    linesAfter,
    removed: linesBefore - linesAfter,
  };
}
