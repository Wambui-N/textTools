const TITLE_CASE_EXCEPTIONS = new Set([
  "a", "an", "the", "of", "in", "on", "at", "for", "with", "but", "or", "nor",
  "and", "as", "by", "to", "up", "yet", "so",
]);

export type CaseType =
  | "upper"
  | "lower"
  | "title"
  | "sentence"
  | "camel"
  | "pascal"
  | "snake"
  | "kebab";

export function convertCase(text: string, type: CaseType): string {
  switch (type) {
    case "upper":
      return text.toUpperCase();

    case "lower":
      return text.toLowerCase();

    case "title": {
      const words = text.toLowerCase().split(/\s+/);
      return words
        .map((word, i) => {
          const clean = word.replace(/[^a-z0-9']/g, "");
          if (i === 0 || i === words.length - 1 || !TITLE_CASE_EXCEPTIONS.has(clean)) {
            return word.charAt(0).toUpperCase() + word.slice(1);
          }
          return word;
        })
        .join(" ");
    }

    case "sentence": {
      const lower = text.toLowerCase();
      return lower.replace(/(^\s*\w|[.!?]\s+\w)/g, (c) => c.toUpperCase());
    }

    case "camel": {
      return text
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .split(/\s+/)
        .filter(Boolean)
        .map((word, i) =>
          i === 0
            ? word.toLowerCase()
            : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join("");
    }

    case "pascal": {
      return text
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .split(/\s+/)
        .filter(Boolean)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join("");
    }

    case "snake":
      return text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .trim()
        .replace(/\s+/g, "_");

    case "kebab":
      return text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .trim()
        .replace(/\s+/g, "-");
  }
}
