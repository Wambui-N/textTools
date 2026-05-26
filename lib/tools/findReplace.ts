export interface FindReplaceOptions {
  caseSensitive: boolean;
  wholeWord: boolean;
}

export interface FindReplaceResult {
  output: string;
  matchCount: number;
}

export function findAndReplace(
  text: string,
  find: string,
  replace: string,
  opts: FindReplaceOptions
): FindReplaceResult {
  if (!find) return { output: text, matchCount: 0 };

  const flags = opts.caseSensitive ? "g" : "gi";
  const escaped = find.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = opts.wholeWord ? `\\b${escaped}\\b` : escaped;

  try {
    const regex = new RegExp(pattern, flags);
    const matches = text.match(regex);
    const matchCount = matches ? matches.length : 0;
    const output = text.replace(regex, replace);
    return { output, matchCount };
  } catch {
    return { output: text, matchCount: 0 };
  }
}

export function getMatchCount(text: string, find: string, opts: FindReplaceOptions): number {
  if (!find) return 0;
  const flags = opts.caseSensitive ? "g" : "gi";
  const escaped = find.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = opts.wholeWord ? `\\b${escaped}\\b` : escaped;
  try {
    const regex = new RegExp(pattern, flags);
    return (text.match(regex) || []).length;
  } catch {
    return 0;
  }
}
