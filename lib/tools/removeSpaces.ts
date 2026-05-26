export interface RemoveSpacesOptions {
  leadingTrailing: boolean;
  multipleSpaces: boolean;
  beforePunctuation: boolean;
  tabs: boolean;
}

export interface RemoveSpacesResult {
  output: string;
  charsBefore: number;
  charsAfter: number;
  spacesRemoved: number;
}

export function removeExtraSpaces(text: string, opts: RemoveSpacesOptions): RemoveSpacesResult {
  let output = text;
  if (opts.tabs) output = output.replace(/\t/g, " ");
  if (opts.multipleSpaces) output = output.replace(/ {2,}/g, " ");
  if (opts.beforePunctuation) output = output.replace(/ +([.,!?;:])/g, "$1");
  if (opts.leadingTrailing) output = output.split("\n").map((l) => l.trim()).join("\n");

  return {
    output,
    charsBefore: text.length,
    charsAfter: output.length,
    spacesRemoved: text.length - output.length,
  };
}
