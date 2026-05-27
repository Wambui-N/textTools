export interface BinaryToTextResult {
  output: string;
  error: string | null;
}

export function binaryToText(binary: string): BinaryToTextResult {
  const cleaned = binary.trim().replace(/\s+/g, " ");
  const groups = cleaned.split(" ");

  const invalid = groups.find((g) => !/^[01]{8}$/.test(g));
  if (invalid) {
    return {
      output: "",
      error: `Invalid binary group "${invalid}". Each group must be exactly 8 bits (0s and 1s) separated by spaces.`,
    };
  }

  const output = groups.map((g) => String.fromCharCode(parseInt(g, 2))).join("");
  return { output, error: null };
}
