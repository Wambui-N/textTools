export interface WordOccurrenceResult {
  count: number;
  positions: number[];
}

export interface CountWordOccurrencesOptions {
  caseSensitive: boolean;
  wholeWord: boolean;
}

export function countWordOccurrences(
  text: string,
  word: string,
  opts: CountWordOccurrencesOptions
): WordOccurrenceResult {
  if (!word.trim()) return { count: 0, positions: [] };

  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = opts.wholeWord ? `\\b${escaped}\\b` : escaped;
  const flags = opts.caseSensitive ? "g" : "gi";
  const regex = new RegExp(pattern, flags);

  const positions: number[] = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    positions.push(match.index);
  }

  return { count: positions.length, positions };
}
