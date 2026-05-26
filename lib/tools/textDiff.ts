import { diffWords, diffLines, type Change } from "diff";

export type DiffMode = "words" | "lines";

export interface DiffResult {
  parts: Change[];
  additions: number;
  deletions: number;
}

export function computeDiff(original: string, revised: string, mode: DiffMode): DiffResult {
  const parts = mode === "lines"
    ? diffLines(original, revised)
    : diffWords(original, revised);

  let additions = 0;
  let deletions = 0;

  for (const part of parts) {
    if (part.added) additions += (part.count ?? 0);
    if (part.removed) deletions += (part.count ?? 0);
  }

  return { parts, additions, deletions };
}
