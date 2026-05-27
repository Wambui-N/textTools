import type { ComponentType } from "react";
import { WordCounterTool } from "@/components/tools/WordCounterTool";
import { CharacterCounterTool } from "@/components/tools/CharacterCounterTool";
import { CaseConverterTool } from "@/components/tools/CaseConverterTool";
import { RemoveDuplicatesTool } from "@/components/tools/RemoveDuplicatesTool";
import { SortLinesTool } from "@/components/tools/SortLinesTool";
import { RemoveExtraSpacesTool } from "@/components/tools/RemoveExtraSpacesTool";
import { RemoveLineBreaksTool } from "@/components/tools/RemoveLineBreaksTool";
import { FindReplaceTool } from "@/components/tools/FindReplaceTool";
import { TextDiffTool } from "@/components/tools/TextDiffTool";
import { ReadingTimeTool } from "@/components/tools/ReadingTimeTool";
import { LoremIpsumTool } from "@/components/tools/LoremIpsumTool";
import { WordFrequencyTool } from "@/components/tools/WordFrequencyTool";
import { ExtractEmailsTool } from "@/components/tools/ExtractEmailsTool";
import { ReverseTextTool } from "@/components/tools/ReverseTextTool";
import { TextToSlugTool } from "@/components/tools/TextToSlugTool";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toolComponents: Record<string, ComponentType<any>> = {
  "word-counter": WordCounterTool,
  "character-counter": CharacterCounterTool,
  "case-converter": CaseConverterTool,
  "remove-duplicate-lines": RemoveDuplicatesTool,
  "sort-lines": SortLinesTool,
  "remove-extra-spaces": RemoveExtraSpacesTool,
  "remove-line-breaks": RemoveLineBreaksTool,
  "find-and-replace": FindReplaceTool,
  "text-diff-checker": TextDiffTool,
  "reading-time-estimator": ReadingTimeTool,
  "lorem-ipsum-generator": LoremIpsumTool,
  "word-frequency-counter": WordFrequencyTool,
  "extract-emails": ExtractEmailsTool,
  "reverse-text": ReverseTextTool,
  "text-to-slug": TextToSlugTool,
};
