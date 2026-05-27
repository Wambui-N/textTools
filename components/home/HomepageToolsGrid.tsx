"use client";

import { useState } from "react";
import Link from "next/link";
import { tools } from "@/lib/tools-config";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import type { ToolCategory } from "@/types/tools";

type IconComponent = React.ComponentType<{ className?: string }>;

function ToolIcon({ name }: { name: string }) {
  const Icon = (Icons as unknown as Record<string, IconComponent>)[name];
  if (!Icon) return <Icons.Wrench className="h-5 w-5" />;
  return <Icon className="h-5 w-5" />;
}

const CATEGORY_COLORS: Record<ToolCategory, string> = {
  Analysis: "#3B82F6",
  Cleaning: "#10B981",
  Transformation: "#8B5CF6",
  Generation: "#F59E0B",
  Utilities: "#EC4899",
};

const FILTER_CATEGORIES = ["All", "Analysis", "Cleaning", "Transformation", "Generation", "Utilities"] as const;
type FilterCategory = typeof FILTER_CATEGORIES[number];

// Problem-first descriptions for the homepage grid
const PROBLEM_DESCRIPTIONS: Record<string, string> = {
  "word-counter": "Stop guessing your word count. Paste any text and get words, characters, sentences, and reading time instantly.",
  "character-counter": "Hitting Twitter's 280-char limit or writing a meta description? See exactly where you stand with live platform bars.",
  "case-converter": "Pasted text in the wrong case? Convert between UPPER, lower, Title, camelCase, snake_case, and 4 more formats in one click.",
  "remove-duplicate-lines": "Merged two lists and now have repeats? Remove every duplicate line instantly while keeping the original order.",
  "sort-lines": "Lists out of order? Sort alphabetically, by length, in reverse, or shuffle randomly, with case and whitespace controls.",
  "remove-extra-spaces": "Text copied from a PDF or Word doc full of double spaces? Clean all whitespace issues in one pass.",
  "remove-line-breaks": "Copied from a PDF and every line ends with a break? Join lines into clean paragraphs in seconds.",
  "find-and-replace": "Need to bulk-replace a word or phrase across a long document? Find every instance and replace them all at once.",
  "text-diff-checker": "Two versions of a document and need to know what changed? Highlight every addition and deletion side by side.",
  "reading-time-estimator": "Is your article too long? Calculate reading time at slow, average, and fast speeds before you publish.",
  "lorem-ipsum-generator": "Designing a layout and need dummy text right now? Generate Lorem Ipsum by words, sentences, or paragraphs instantly.",
  "word-frequency-counter": "Overusing a word without realising it? Find the most-used words in any text and check keyword density.",
  "extract-emails": "Got email addresses buried in a wall of text? Extract every address and get a clean, deduplicated list.",
  "reverse-text": "Need backwards text for a puzzle, post, or test? Reverse characters, words, or generate upside-down Unicode text.",
  "text-to-slug": "Turning a blog title into a URL? Generate a clean, lowercase, hyphenated slug ready to paste into your CMS.",
  // Batch 1
  "remove-html-tags": "Copied HTML source and now the tags are cluttering your document? Strip all markup and keep only the clean text.",
  "remove-punctuation": "Need raw words for a word cloud or NLP pipeline? Remove all punctuation in one click, with an option to keep sentence endings.",
  "remove-numbers": "Scraped data full of rogue digits? Delete every number from your text and collapse the gaps they leave.",
  "remove-line-numbers": "Copied numbered text and the prefixes followed along? Strip leading line numbers in one pass.",
  "count-sentences": "Wondering if your writing is too dense? Count sentences, get average sentence length, and spot readability issues instantly.",
  "count-paragraphs": "Checking your article structure? Count paragraphs and see how long each one is on average.",
  "count-vowels-consonants": "Curious about the sound and rhythm of your writing? Count every vowel and consonant with percentages.",
  "count-word-occurrences": "Using a keyword too often - or not enough? Count exactly how many times any word or phrase appears.",
  "add-line-numbers": "Need to share code or text where reviewers can reference line numbers? Prefix every line in your chosen format.",
  "wrap-text": "Long lines breaking your email or terminal? Hard-wrap text at any column width to fit any format.",
  "repeat-text": "Need 50 copies of the same line for test data or a layout mockup? Repeat any text N times with a chosen separator.",
  "rot13": "Hiding a spoiler or puzzle answer? Encode and decode ROT13 instantly - the same button does both.",
  "text-to-binary": "Want to see what your text looks like in binary? Convert every character to its 8-bit ASCII representation.",
  "binary-to-text": "Got space-separated binary groups and need to read them? Decode them back to text with automatic error checking.",
  "morse-code-converter": "Encoding a message in Morse code or decoding one you received? Translate both ways using the ITU standard.",
  "number-to-words": "Need to spell out a number for a cheque or legal document? Convert any integer up to 999 million into English words.",
};

export function HomepageToolsGrid() {
  const [active, setActive] = useState<FilterCategory>("All");

  const filtered = active === "All" ? tools : tools.filter((t) => t.category === active);

  return (
    <div>
      {/* Category filter pills */}
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTER_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="rounded-full px-4 py-1.5 text-sm font-medium transition-all"
            style={
              active === cat
                ? { backgroundColor: "var(--accent)", color: "#fff" }
                : {
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-secondary)",
                    border: "1px solid var(--border)",
                  }
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="group rounded-xl border p-5 transition-all hover:shadow-md"
            style={{ backgroundColor: "var(--bg-tool)", borderColor: "var(--border)" }}
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "var(--accent-subtle)", color: "var(--accent)" }}
                >
                  <ToolIcon name={tool.icon} />
                </div>
                <span
                  className="text-sm font-semibold group-hover:underline"
                  style={{ color: "var(--text-primary)" }}
                >
                  {tool.title}
                </span>
              </div>
              <span
                className="shrink-0 rounded-full px-2 py-0.5 text-xs font-medium"
                style={{
                  backgroundColor: `${CATEGORY_COLORS[tool.category]}15`,
                  color: CATEGORY_COLORS[tool.category],
                }}
              >
                {tool.category}
              </span>
            </div>
            <p className="mb-3 text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {PROBLEM_DESCRIPTIONS[tool.slug] || tool.description}
            </p>
            <span
              className="inline-flex items-center gap-1 text-xs font-medium"
              style={{ color: "var(--accent)" }}
            >
              Use tool <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        ))}
      </div>

      <p className="mt-4 text-xs" style={{ color: "var(--text-muted)" }}>
        Showing {filtered.length} of {tools.length} tools
      </p>
    </div>
  );
}
