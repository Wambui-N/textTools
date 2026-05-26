export interface WordCountResult {
  words: number;
  chars: number;
  charsNoSpaces: number;
  sentences: number;
  paragraphs: number;
  readingTime: number;
  speakingTime: number;
}

export function analyzeText(text: string): WordCountResult {
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, "").length;
  const sentences = text === "" ? 0 : (text.match(/[.!?]+/g) || []).length;
  const paragraphs = text === "" ? 0 : text.split(/\n\s*\n/).filter((p) => p.trim()).length;
  const readingTime = Math.ceil(words / 238);
  const speakingTime = Math.ceil(words / 130);
  return { words, chars, charsNoSpaces, sentences, paragraphs, readingTime, speakingTime };
}
