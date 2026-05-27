export interface AddLineNumbersOptions {
  start: number;
  separator: string;
  padNumbers: boolean;
}

export function addLineNumbers(text: string, opts: AddLineNumbersOptions): string {
  const lines = text.split("\n");
  const total = lines.length;
  const width = opts.padNumbers ? String(opts.start + total - 1).length : 0;

  return lines
    .map((line, i) => {
      const num = String(opts.start + i).padStart(width, " ");
      return `${num}${opts.separator}${line}`;
    })
    .join("\n");
}
