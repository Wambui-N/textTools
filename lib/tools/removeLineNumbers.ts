export function removeLineNumbers(text: string): string {
  // Matches leading patterns like: "1. ", "1) ", "1: ", " 1 ", "1\t"
  return text
    .split("\n")
    .map((line) => line.replace(/^\s*\d+[.):\t]\s*/, ""))
    .join("\n");
}
