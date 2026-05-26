export interface CharCountResult {
  total: number;
  noSpaces: number;
  words: number;
  lines: number;
}

export interface PlatformLimit {
  name: string;
  limit: number;
}

export const platformLimits: PlatformLimit[] = [
  { name: "Twitter / X", limit: 280 },
  { name: "Meta description", limit: 160 },
  { name: "YouTube title", limit: 100 },
  { name: "Instagram caption", limit: 2200 },
  { name: "LinkedIn post", limit: 3000 },
];

export function countCharacters(text: string): CharCountResult {
  const total = text.length;
  const noSpaces = text.replace(/\s/g, "").length;
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const lines = text === "" ? 0 : text.split(/\n/).length;
  return { total, noSpaces, words, lines };
}
