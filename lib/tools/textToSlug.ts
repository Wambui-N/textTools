const SLUG_STOP_WORDS = new Set([
  "a","an","the","and","or","but","in","on","at","to","for","of","with","by",
  "from","is","are","was","were","be","as","if","it","its",
]);

export interface SlugOptions {
  separator: "-" | "_";
  lowercase: boolean;
  removeStopWords: boolean;
  maxLength: number | null;
}

export function textToSlug(text: string, opts: SlugOptions): string {
  let slug = text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s-_]/g, "")
    .trim();

  if (opts.lowercase) slug = slug.toLowerCase();

  let words = slug.split(/[\s_-]+/).filter(Boolean);

  if (opts.removeStopWords) {
    words = words.filter((w) => !SLUG_STOP_WORDS.has(w.toLowerCase()));
  }

  slug = words.join(opts.separator);

  if (opts.maxLength && slug.length > opts.maxLength) {
    slug = slug.slice(0, opts.maxLength).replace(new RegExp(`${opts.separator}[^${opts.separator}]*$`), "");
  }

  return slug;
}
