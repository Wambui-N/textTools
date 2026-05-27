export interface RemoveNumbersOptions {
  collapseSpaces: boolean;
}

export function removeNumbers(text: string, opts: RemoveNumbersOptions): string {
  let result = text.replace(/[0-9]/g, "");
  if (opts.collapseSpaces) {
    result = result.replace(/ {2,}/g, " ").trim();
  }
  return result;
}
