export interface VowelCountResult {
  vowels: number;
  consonants: number;
  letters: number;
  other: number;
  vowelPercent: number;
  consonantPercent: number;
}

const VOWELS = new Set("aeiouAEIOU");
const CONSONANT_PATTERN = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/;

export function countVowels(text: string): VowelCountResult {
  let vowels = 0;
  let consonants = 0;
  let other = 0;

  for (const ch of text) {
    if (VOWELS.has(ch)) {
      vowels++;
    } else if (CONSONANT_PATTERN.test(ch)) {
      consonants++;
    } else {
      other++;
    }
  }

  const letters = vowels + consonants;
  return {
    vowels,
    consonants,
    letters,
    other,
    vowelPercent: letters > 0 ? Math.round((vowels / letters) * 100) : 0,
    consonantPercent: letters > 0 ? Math.round((consonants / letters) * 100) : 0,
  };
}
