const EMAIL_REGEX = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/g;

export interface ExtractEmailsResult {
  emails: string[];
  total: number;
  unique: number;
}

export function extractEmails(text: string): ExtractEmailsResult {
  const matches = text.match(EMAIL_REGEX) || [];
  const total = matches.length;
  const uniqueSet = new Set(matches.map((e) => e.toLowerCase()));
  const emails = Array.from(uniqueSet).sort();
  return { emails, total, unique: emails.length };
}
