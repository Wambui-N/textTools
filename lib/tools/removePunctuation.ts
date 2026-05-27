export type PunctuationPreserve = "none" | "sentence" | "all";

export interface RemovePunctuationOptions {
  preserve: PunctuationPreserve;
  collapseSpaces: boolean;
}

export function removePunctuation(text: string, opts: RemovePunctuationOptions): string {
  let result = text;

  if (opts.preserve === "none") {
    // Remove all punctuation: Unicode categories P* and S*
    result = result.replace(/[\u2000-\u206F\u2E00-\u2E7F\u3000-\u303F!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g, "");
  } else if (opts.preserve === "sentence") {
    // Keep sentence-ending punctuation (.!?) but remove everything else
    result = result.replace(/[!"#$%&'()*+,\-/:;<=>?@[\\\]^_`{|}~]/g, (ch) =>
      ".!?".includes(ch) ? ch : ""
    );
  }
  // "all" means no change — just collapse spaces if requested

  if (opts.collapseSpaces) {
    result = result.replace(/ {2,}/g, " ").trim();
  }
  return result;
}
