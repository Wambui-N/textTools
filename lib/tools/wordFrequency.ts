const STOP_WORDS = new Set([
  "a","an","the","and","or","but","in","on","at","to","for","of","with","by",
  "from","up","about","into","through","during","before","after","above","below",
  "is","are","was","were","be","been","being","have","has","had","do","does","did",
  "will","would","could","should","may","might","shall","can","need","dare","ought",
  "i","me","my","myself","we","our","ours","you","your","yours","he","him","his",
  "she","her","hers","it","its","they","them","their","theirs","this","that","these",
  "those","what","which","who","whom","when","where","why","how","not","no","nor",
  "so","yet","as","if","than","then","because","while","although","though","unless",
  "since","until","even","also","just","only","very","too","more","most","other",
  "some","such","new","first","last","long","great","little","own","right","old",
  "big","high","next","early","young","important","public","private","real","best",
]);

export interface WordFreqEntry {
  word: string;
  count: number;
  percent: number;
}

export interface WordFrequencyOptions {
  ignoreStopWords: boolean;
  caseSensitive: boolean;
  minLength: number;
  topN: number | null;
}

export function countWordFrequency(text: string, opts: WordFrequencyOptions): WordFreqEntry[] {
  if (!text.trim()) return [];

  const raw = text
    .replace(/[^\w\s'-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  const counts: Record<string, number> = {};
  let total = 0;

  for (const rawWord of raw) {
    const word = opts.caseSensitive ? rawWord : rawWord.toLowerCase();
    if (word.length < opts.minLength) continue;
    if (opts.ignoreStopWords && STOP_WORDS.has(word.toLowerCase())) continue;
    counts[word] = (counts[word] || 0) + 1;
    total++;
  }

  let entries = Object.entries(counts)
    .map(([word, count]) => ({ word, count, percent: total > 0 ? (count / total) * 100 : 0 }))
    .sort((a, b) => b.count - a.count || a.word.localeCompare(b.word));

  if (opts.topN !== null) entries = entries.slice(0, opts.topN);

  return entries;
}
