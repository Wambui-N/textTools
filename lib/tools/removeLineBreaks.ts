export type LineBreakReplacement = "space" | "nothing" | "comma" | "custom";

export interface RemoveLineBreaksOptions {
  replacement: LineBreakReplacement;
  customChar: string;
  collapseMultiple: boolean;
  removeAll: boolean;
}

export function removeLineBreaks(text: string, opts: RemoveLineBreaksOptions): string {
  let replacer: string;
  switch (opts.replacement) {
    case "space":    replacer = " "; break;
    case "nothing":  replacer = ""; break;
    case "comma":    replacer = ", "; break;
    case "custom":   replacer = opts.customChar; break;
  }

  let output = text.replace(/\r\n/g, "\n");

  if (opts.removeAll) {
    output = output.replace(/\n+/g, replacer);
  } else if (opts.collapseMultiple) {
    output = output.replace(/\n{2,}/g, "\n").replace(/\n/g, replacer);
  } else {
    output = output.replace(/\n/g, replacer);
  }

  return output.trim();
}
