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
// Batch 1
import { RemoveHtmlTagsTool } from "@/components/tools/RemoveHtmlTagsTool";
import { RemovePunctuationTool } from "@/components/tools/RemovePunctuationTool";
import { RemoveNumbersTool } from "@/components/tools/RemoveNumbersTool";
import { RemoveLineNumbersTool } from "@/components/tools/RemoveLineNumbersTool";
import { CountSentencesTool } from "@/components/tools/CountSentencesTool";
import { CountParagraphsTool } from "@/components/tools/CountParagraphsTool";
import { CountVowelsTool } from "@/components/tools/CountVowelsTool";
import { CountWordOccurrencesTool } from "@/components/tools/CountWordOccurrencesTool";
import { AddLineNumbersTool } from "@/components/tools/AddLineNumbersTool";
import { WrapTextTool } from "@/components/tools/WrapTextTool";
import { RepeatTextTool } from "@/components/tools/RepeatTextTool";
import { Rot13Tool } from "@/components/tools/Rot13Tool";
import { TextToBinaryTool } from "@/components/tools/TextToBinaryTool";
import { BinaryToTextTool } from "@/components/tools/BinaryToTextTool";
import { MorseCodeTool } from "@/components/tools/MorseCodeTool";
import { NumberToWordsTool } from "@/components/tools/NumberToWordsTool";

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
  // Batch 1
  "remove-html-tags": RemoveHtmlTagsTool,
  "remove-punctuation": RemovePunctuationTool,
  "remove-numbers": RemoveNumbersTool,
  "remove-line-numbers": RemoveLineNumbersTool,
  "count-sentences": CountSentencesTool,
  "count-paragraphs": CountParagraphsTool,
  "count-vowels-consonants": CountVowelsTool,
  "count-word-occurrences": CountWordOccurrencesTool,
  "add-line-numbers": AddLineNumbersTool,
  "wrap-text": WrapTextTool,
  "repeat-text": RepeatTextTool,
  "rot13": Rot13Tool,
  "text-to-binary": TextToBinaryTool,
  "binary-to-text": BinaryToTextTool,
  "morse-code-converter": MorseCodeTool,
  "number-to-words": NumberToWordsTool,
};
