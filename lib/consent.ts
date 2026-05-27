/** Cookie consent helpers. All reads are SSR-safe (no window access at module level). */

export type ConsentChoice = "all" | "essential";

const CONSENT_KEY = "shelfcue_consent";

export function getConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === "all" || value === "essential") return value;
  return null;
}

export function setConsent(choice: ConsentChoice): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_KEY, choice);
}

export function hasConsented(): boolean {
  return getConsent() !== null;
}

export function hasMarketingConsent(): boolean {
  return getConsent() === "all";
}
