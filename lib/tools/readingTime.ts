export interface ReadingTimeResult {
  wordCount: number;
  charCount: number;
  slowMinutes: number;
  avgMinutes: number;
  fastMinutes: number;
  speakingMinutes: number;
  contentType: string;
}

export function estimateReadingTime(text: string): ReadingTimeResult {
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  const slowMinutes = wordCount === 0 ? 0 : Math.ceil(wordCount / 150);
  const avgMinutes = wordCount === 0 ? 0 : Math.ceil(wordCount / 238);
  const fastMinutes = wordCount === 0 ? 0 : Math.ceil(wordCount / 350);
  const speakingMinutes = wordCount === 0 ? 0 : Math.ceil(wordCount / 130);

  let contentType = "";
  if (wordCount > 0 && wordCount <= 300) contentType = "short article";
  else if (wordCount <= 800) contentType = "blog post";
  else if (wordCount <= 1500) contentType = "long article";
  else if (wordCount <= 3000) contentType = "essay";
  else if (wordCount <= 8000) contentType = "long-form piece";
  else contentType = "book chapter";

  return { wordCount, charCount, slowMinutes, avgMinutes, fastMinutes, speakingMinutes, contentType };
}
