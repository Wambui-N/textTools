export interface RepeatTextOptions {
  times: number;
  separator: string;
}

export function repeatText(text: string, opts: RepeatTextOptions): string {
  if (opts.times < 1) return "";
  const arr = Array.from({ length: opts.times }, () => text);
  return arr.join(opts.separator);
}
