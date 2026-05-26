export type SortMode = "az" | "za" | "shortest" | "longest" | "reverse" | "random";

export interface SortLinesOptions {
  mode: SortMode;
  caseSensitive: boolean;
  trimWhitespace: boolean;
  removeBlankLines: boolean;
}

export function sortLines(text: string, opts: SortLinesOptions): string {
  let lines = text.split("\n");

  if (opts.trimWhitespace) lines = lines.map((l) => l.trim());
  if (opts.removeBlankLines) lines = lines.filter((l) => l.trim() !== "");

  const compare = (a: string, b: string) => {
    const ka = opts.caseSensitive ? a : a.toLowerCase();
    const kb = opts.caseSensitive ? b : b.toLowerCase();
    return ka < kb ? -1 : ka > kb ? 1 : 0;
  };

  switch (opts.mode) {
    case "az":
      lines.sort(compare);
      break;
    case "za":
      lines.sort((a, b) => compare(b, a));
      break;
    case "shortest":
      lines.sort((a, b) => a.length - b.length || compare(a, b));
      break;
    case "longest":
      lines.sort((a, b) => b.length - a.length || compare(a, b));
      break;
    case "reverse":
      lines.reverse();
      break;
    case "random":
      for (let i = lines.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lines[i], lines[j]] = [lines[j], lines[i]];
      }
      break;
  }

  return lines.join("\n");
}
