const ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
  "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function threeDigitsToWords(n: number): string {
  if (n === 0) return "";
  if (n < 20) return ONES[n];
  if (n < 100) {
    const ten = TENS[Math.floor(n / 10)];
    const one = n % 10;
    return one > 0 ? `${ten}-${ONES[one]}` : ten;
  }
  const hundreds = ONES[Math.floor(n / 100)];
  const rest = threeDigitsToWords(n % 100);
  return rest ? `${hundreds} hundred ${rest}` : `${hundreds} hundred`;
}

export function numberToWords(n: number): string {
  if (!Number.isInteger(n) || n < 0 || n > 999_999_999) {
    return "Supported range: 0 to 999,999,999";
  }
  if (n === 0) return "zero";

  const parts: string[] = [];
  if (n >= 1_000_000) {
    parts.push(`${threeDigitsToWords(Math.floor(n / 1_000_000))} million`);
    n %= 1_000_000;
  }
  if (n >= 1_000) {
    parts.push(`${threeDigitsToWords(Math.floor(n / 1_000))} thousand`);
    n %= 1_000;
  }
  if (n > 0) {
    parts.push(threeDigitsToWords(n));
  }
  return parts.join(", ");
}
