const LOREM_WORDS = [
  "lorem","ipsum","dolor","sit","amet","consectetur","adipiscing","elit","sed","do",
  "eiusmod","tempor","incididunt","ut","labore","et","dolore","magna","aliqua","enim",
  "ad","minim","veniam","quis","nostrud","exercitation","ullamco","laboris","nisi",
  "aliquip","ex","ea","commodo","consequat","duis","aute","irure","in","reprehenderit",
  "voluptate","velit","esse","cillum","fugiat","nulla","pariatur","excepteur","sint",
  "occaecat","cupidatat","non","proident","sunt","culpa","qui","officia","deserunt",
  "mollit","anim","id","est","laborum","curabitur","pretium","tincidunt","lacus",
  "nec","pulvinar","nisl","tincidunt","id","aliquet","risus","feugiat","in","ante",
  "metus","dictum","at","tempor","commodo","ullamcorper","a","lacus","vestibulum",
  "sed","arcu","non","odio","euismod","lacinia","at","quis","risus","sed",
];

const CLASSIC_START = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function randomWord(exclude?: string): string {
  let word: string;
  do {
    word = LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)];
  } while (exclude && word === exclude);
  return word;
}

function generateSentence(wordCount = 8): string {
  const words = Array.from({ length: wordCount }, (_, i) => i === 0 ? randomWord().charAt(0).toUpperCase() + randomWord().slice(1) : randomWord());
  return words.join(" ") + ".";
}

export type LoremType = "words" | "sentences" | "paragraphs";

export function generateLorem(type: LoremType, amount: number, startClassic: boolean): string {
  if (amount <= 0) return "";

  if (type === "words") {
    const words = startClassic
      ? [
          ...CLASSIC_START.replace(/[.,]/g, "").toLowerCase().split(" "),
          ...Array.from({ length: Math.max(0, amount - 11) }, () => randomWord()),
        ].slice(0, amount)
      : Array.from({ length: amount }, () => randomWord());
    return words.join(" ") + ".";
  }

  if (type === "sentences") {
    const sentences = Array.from({ length: amount }, (_, i) => {
      if (i === 0 && startClassic) return CLASSIC_START;
      return generateSentence(Math.floor(Math.random() * 8) + 6);
    });
    return sentences.join(" ");
  }

  const paragraphs = Array.from({ length: amount }, (_, pi) => {
    const sentenceCount = Math.floor(Math.random() * 4) + 3;
    const sentences = Array.from({ length: sentenceCount }, (_, si) => {
      if (pi === 0 && si === 0 && startClassic) return CLASSIC_START;
      return generateSentence(Math.floor(Math.random() * 8) + 6);
    });
    return sentences.join(" ");
  });
  return paragraphs.join("\n\n");
}
