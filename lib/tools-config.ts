import type { ToolDefinition } from "@/types/tools";

export const tools: ToolDefinition[] = [
  {
    slug: "word-counter",
    title: "Word Counter",
    description: "Count words, characters, sentences, and paragraphs instantly with reading and speaking time estimates.",
    shortDescription: "Count words, characters & more",
    keywords: ["word counter", "count words online", "word count checker", "free word counter"],
    category: "Analysis",
    icon: "Hash",
    ogTitle: "Word Counter - Free Online Word Count Tool",
    metaDescription: "Count words, characters, sentences, and paragraphs instantly. Free online word counter with reading time estimate. No signup required.",
    featureList: "Counts words, characters, sentences, paragraphs, reading time, speaking time",
    whatIs: {
      definition: "A word counter is a tool that instantly counts the number of words, characters, sentences, and paragraphs in any block of text.",
      explanation: "Writers use word counters to meet assignment limits, editors use them to hit target lengths, and marketers use them to optimize content for readability. Unlike a word processor's built-in counter, a browser-based tool works on any device with no software installed and processes any text you can paste: emails, web copy, notes, or manuscripts.",
    },
    useCases: [
      { title: "Academic assignments", scenario: "A student writing a 2,500-word essay pastes their draft to verify the exact count before submitting, avoiding a grade penalty for being 300 words under the minimum." },
      { title: "Blog content planning", scenario: "A blogger targeting 1,200 words for SEO pastes their draft and sees 940 words, so they know exactly how much to expand before publishing." },
      { title: "Video scripts", scenario: "A video creator writing a 90-second script uses the speaking-time estimate (130 wpm) to confirm their 195-word draft fits the slot without re-recording." },
    ],
    faqs: [
      {
        question: "How do I count words in a document?",
        answer: "Paste or type your text into the word counter above. Word count, characters, sentences, and paragraphs update instantly with no button required. Use the Clear button to reset and start with new text.",
      },
      {
        question: "Does Word Counter save my text?",
        answer: "No. ShelfCue processes all text locally in your browser. Your text is never sent to our servers, stored, or logged. Disconnect from the internet and the tool still works perfectly.",
      },
      {
        question: "What counts as a word?",
        answer: "Words are counted by splitting text on whitespace: spaces, tabs, and line breaks. Any non-whitespace sequence between spaces is one word. Hyphenated words like 'well-known' count as a single word.",
      },
      {
        question: "How accurate is the reading time estimate?",
        answer: "Reading time uses the average adult reading speed of 238 words per minute, based on research by Rayner et al. (2016). Complex or technical content may take longer. The estimate is a reliable guide, not a precise measurement.",
      },
      {
        question: "Can I use this for counting words in an essay or assignment?",
        answer: "Yes. The Word Counter is accurate for standard written text. Paste your full draft including headings. Note that what counts toward your assignment limit depends on your institution. Footnotes and references may or may not be included.",
      },
    ],
    relatedSlugs: ["character-counter", "reading-time-estimator", "word-frequency-counter", "lorem-ipsum-generator"],
  },
  {
    slug: "character-counter",
    title: "Character Counter",
    description: "Count characters instantly with platform-specific limits for Twitter, Instagram, LinkedIn, and more.",
    shortDescription: "Count characters & check platform limits",
    keywords: ["character counter", "character count online", "count characters", "Twitter character counter"],
    category: "Analysis",
    icon: "Type",
    ogTitle: "Character Counter - Count Characters Online Free",
    metaDescription: "Count characters instantly with visual limits for Twitter (280), Instagram (2,200), LinkedIn (3,000), and meta descriptions. Free, no signup.",
    featureList: "Counts characters with and without spaces, shows platform limits for Twitter, Instagram, LinkedIn, meta description, YouTube title",
    whatIs: {
      definition: "A character counter counts every individual character in a piece of text, including letters, numbers, spaces, and punctuation marks.",
      explanation: "Character counts matter more than word counts on most digital platforms. Social networks, SMS, meta descriptions, and ad copy all impose strict character limits. Exceeding those limits truncates your message or prevents submission entirely. A live character counter lets you write directly toward the limit without manual counting or constant copy-pasting.",
    },
    useCases: [
      { title: "Twitter / X posts", scenario: "A marketer drafting a tweet checks the live counter to stay under 280 characters, fitting both the message and a URL without triggering Twitter's truncation." },
      { title: "SEO meta descriptions", scenario: "An SEO writes a 158-character meta description, safely under the 160-character limit, so Google displays the full text in search results rather than cutting it off." },
      { title: "Google Ads copy", scenario: "A PPC specialist writing a 30-character headline uses the counter to hit exactly 30 characters, maximising the space without exceeding the ad platform's limit." },
    ],
    faqs: [
      {
        question: "What is a character counter used for?",
        answer: "A character counter helps you stay within limits for social media posts, meta descriptions, SMS, and ad copy. It's essential for Twitter/X (280 characters), meta descriptions (160 characters), and SMS messages (160 characters per message segment).",
      },
      {
        question: "Does a space count as a character?",
        answer: "Yes, spaces count as characters on virtually all platforms. The counter shows both total characters (with spaces) and characters without spaces, so you can check whichever figure the platform requires.",
      },
      {
        question: "How many characters can a tweet have?",
        answer: "Twitter/X allows up to 280 characters per tweet. URLs are shortened to 23 characters regardless of length. Media attachments and polls also count toward the limit, reducing the available space for text.",
      },
      {
        question: "What is the Instagram caption character limit?",
        answer: "Instagram captions can be up to 2,200 characters. Only the first 125 characters appear in the feed before truncation. Put your most important text (your hook or call to action) within the first 125 characters.",
      },
      {
        question: "Why does character count matter for SEO?",
        answer: "Meta descriptions display fully in Google results at 150–160 characters. Shorter descriptions get cut off, reducing click-through rates. Title tags should stay under 60 characters. The platform limits in this counter cover both fields.",
      },
    ],
    relatedSlugs: ["word-counter", "text-to-slug", "find-and-replace", "remove-extra-spaces"],
  },
  {
    slug: "case-converter",
    title: "Case Converter",
    description: "Convert text between uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, and kebab-case.",
    shortDescription: "Convert text to any case format",
    keywords: ["case converter", "uppercase converter", "title case converter", "text case changer online"],
    category: "Transformation",
    icon: "CaseSensitive",
    ogTitle: "Case Converter - Change Text Case Online Free",
    metaDescription: "Convert text to UPPERCASE, lowercase, Title Case, camelCase, PascalCase, snake_case, and kebab-case instantly. Free online case converter.",
    featureList: "UPPER CASE, lower case, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case",
    whatIs: {
      definition: "A case converter transforms text between different capitalisation formats in a single click, from UPPER CASE to snake_case and everything in between.",
      explanation: "Developers need camelCase for variables and kebab-case for URLs. Editors need title case for headlines and sentence case for body copy. Doing these conversions manually is error-prone and slow, especially for longer strings. A case converter handles any length of text in under a second, and all 8 formats are available from the same tool.",
    },
    useCases: [
      { title: "Developer variable naming", scenario: "A developer copies a database column name like 'user_first_name' and converts it to camelCase ('userFirstName') for a JavaScript variable in 2 seconds rather than retyping." },
      { title: "Blog post headlines", scenario: "A content editor pastes 12 draft headlines typed in all-lowercase and converts them all to Title Case at once, saving 5 minutes of manual capitalisation." },
      { title: "URL slug preparation", scenario: "A copywriter converts a headline 'My Best Marketing Tips for 2025' to kebab-case ('my-best-marketing-tips-for-2025'), ready to paste as a URL slug." },
    ],
    faqs: [
      {
        question: "What is title case?",
        answer: "Title case capitalises the first letter of each major word. Small words like 'a', 'an', 'the', 'of', 'in', 'for', and 'with' stay lowercase unless they start the title. Example: 'the lord of the rings' → 'The Lord of the Rings'.",
      },
      {
        question: "What is the difference between camelCase and PascalCase?",
        answer: "camelCase starts with a lowercase letter and capitalises each subsequent word (myVariableName). PascalCase capitalises every word including the first (MyVariableName). camelCase is standard in JavaScript; PascalCase is used for class and component names.",
      },
      {
        question: "What is snake_case used for?",
        answer: "snake_case uses underscores between words and is the standard naming convention in Python, Ruby, and SQL. It is also common for file names in many projects. 'my variable name' becomes 'my_variable_name'.",
      },
      {
        question: "How do I convert text to lowercase online?",
        answer: "Paste your text into the Case Converter above and click the 'lower case' button. All characters convert to lowercase instantly. Click 'Copy' to copy the result to your clipboard.",
      },
      {
        question: "What is sentence case?",
        answer: "Sentence case capitalises only the first letter of each sentence, leaving the rest lowercase, exactly like standard prose. 'THE QUICK BROWN FOX. JUMPS OVER.' becomes 'The quick brown fox. Jumps over.'",
      },
    ],
    relatedSlugs: ["find-and-replace", "text-to-slug", "remove-extra-spaces", "reverse-text"],
  },
  {
    slug: "remove-duplicate-lines",
    title: "Remove Duplicate Lines",
    description: "Remove duplicate lines from any list or text block. Preserves original order and shows how many duplicates were removed.",
    shortDescription: "Remove duplicate lines from text",
    keywords: ["remove duplicate lines", "delete duplicate lines online", "find duplicate lines text"],
    category: "Cleaning",
    icon: "Layers",
    ogTitle: "Remove Duplicate Lines - Free Online Deduplication Tool",
    metaDescription: "Remove duplicate lines from any list or text instantly. Case-sensitive option, whitespace trimming, shows count of removed duplicates. Free.",
    featureList: "Removes duplicate lines, case-sensitive option, whitespace trimming, shows count of removed lines, preserves order",
    whatIs: {
      definition: "A duplicate line remover scans a list of text lines and removes any line that has already appeared, keeping only the first occurrence.",
      explanation: "Duplicate entries appear constantly in real work: exported contact lists with repeated email addresses, keyword lists built from multiple sources, product SKUs merged from two spreadsheets, or server log entries that fire twice. Manually finding duplicates in a list of 500 lines is impractical. This tool handles thousands of lines instantly and shows exactly how many were removed.",
    },
    useCases: [
      { title: "Email list cleaning", scenario: "A marketer exports 1,200 subscriber emails from two different forms, merges them into one list, and removes 87 duplicate addresses before importing to their email platform." },
      { title: "Keyword deduplication", scenario: "An SEO researcher combines keyword lists from 3 tools, resulting in 800 entries. After removing duplicates, they are left with 540 unique keywords to target." },
      { title: "Code refactoring", scenario: "A developer pastes 60 CSS class names from a stylesheet to audit usage. Removing duplicates instantly shows which 14 classes appear more than once." },
    ],
    faqs: [
      {
        question: "How do I remove duplicate lines from a list?",
        answer: "Paste your list into the input box, configure case sensitivity and whitespace options, then click 'Remove Duplicates'. The first occurrence of each line is kept. The output shows the unique lines with a count of how many duplicates were removed.",
      },
      {
        question: "Does the tool preserve the original order?",
        answer: "Yes. The first occurrence of each line stays in its original position. All subsequent duplicates are removed. The order of unique lines is preserved exactly as it appeared in the input.",
      },
      {
        question: "Is the comparison case-sensitive?",
        answer: "By default, comparisons are case-insensitive, so 'Apple' and 'apple' are treated as duplicates. Enable the 'Case sensitive' toggle to treat them as distinct lines.",
      },
      {
        question: "Can I use this to clean up a CSV?",
        answer: "Yes, for single-column CSV data. Paste the values one per line to remove duplicates. For multi-column CSVs, an entire row must be identical to count as a duplicate. Partial row matching is not supported.",
      },
      {
        question: "What happens to blank lines?",
        answer: "Multiple blank lines are treated as duplicates and collapsed to one. Enable 'Remove blank lines' to remove all blank lines entirely from the output.",
      },
    ],
    relatedSlugs: ["sort-lines", "remove-extra-spaces", "remove-line-breaks", "find-and-replace"],
  },
  {
    slug: "sort-lines",
    title: "Sort Lines",
    description: "Sort lines alphabetically, by length, in reverse, or randomly. Ideal for organizing lists, code, and data.",
    shortDescription: "Sort lines alphabetically or by length",
    keywords: ["sort lines alphabetically online", "sort list online", "alphabetize list", "sort text lines"],
    category: "Transformation",
    icon: "ArrowUpDown",
    ogTitle: "Sort Lines - Alphabetize Lists Online Free",
    metaDescription: "Sort lines alphabetically (A-Z or Z-A), by length, in reverse order, or randomly. Clean list sorting with case and whitespace options. Free.",
    featureList: "Sort A-Z, Z-A, shortest first, longest first, reverse order, random shuffle, case-sensitive option",
    whatIs: {
      definition: "A line sorter rearranges the lines of any text into a new order: alphabetical, by length, reversed, or randomised. One click.",
      explanation: "Sorted lists are easier to scan, compare, and de-duplicate. Developers sort import statements and configuration keys alphabetically for consistency. Writers sort reference lists for readability. Researchers sort data exports for analysis. Doing this manually in a text editor requires copy-pasting each line individually. This tool handles hundreds of lines in under a second.",
    },
    useCases: [
      { title: "Alphabetising a reading list", scenario: "A researcher pastes 45 book titles in random order and sorts them A→Z, producing a clean alphabetical bibliography in 3 seconds rather than sorting manually." },
      { title: "CSS property ordering", scenario: "A developer pastes 30 CSS properties from a class and sorts them alphabetically, making the stylesheet consistent with team standards across all 200 classes in the file." },
      { title: "Randomising a participant list", scenario: "A facilitator with 25 workshop participants uses the random shuffle to assign them to 5 breakout groups fairly, without manual drawing or bias." },
    ],
    faqs: [
      {
        question: "How do I sort a list alphabetically online?",
        answer: "Paste your list (one item per line) into the input area, select 'A → Z', and click 'Sort Lines'. The sorted result appears immediately. Use the 'Case sensitive' toggle to control how uppercase letters are ordered relative to lowercase.",
      },
      {
        question: "Can I sort numbers with this tool?",
        answer: "Numbers sort lexicographically (as strings), so '10' comes before '2'. To sort numerically, pad numbers with leading zeros ('02', '10') and they will sort correctly as strings.",
      },
      {
        question: "Does sorting preserve blank lines?",
        answer: "Yes by default. Blank lines are included in the sort as empty entries. Enable 'Remove blank lines' before sorting to exclude them from the output.",
      },
      {
        question: "What does reverse order mean for sorting?",
        answer: "'Reverse order' flips the current sequence: the last line becomes first. It does not sort alphabetically in reverse. For reverse-alphabetical sorting, use the 'Z → A' option.",
      },
      {
        question: "Can I randomize/shuffle a list online?",
        answer: "Yes. Select 'Random shuffle' and click 'Sort Lines'. The lines are shuffled using the Fisher-Yates algorithm, which produces a statistically unbiased random order. Each click produces a different result.",
      },
    ],
    relatedSlugs: ["remove-duplicate-lines", "remove-extra-spaces", "find-and-replace", "remove-line-breaks"],
  },
  {
    slug: "remove-extra-spaces",
    title: "Remove Extra Spaces",
    description: "Remove extra spaces, tabs, and unnecessary whitespace from text. Cleans up text copied from PDFs, emails, and documents.",
    shortDescription: "Remove extra spaces and whitespace",
    keywords: ["remove extra spaces", "remove whitespace online", "trim spaces text", "clean up spaces in text"],
    category: "Cleaning",
    icon: "Minimize2",
    ogTitle: "Remove Extra Spaces - Clean Whitespace from Text Free",
    metaDescription: "Remove leading, trailing, and multiple spaces from text. Clean up whitespace from PDFs, emails, and documents. Free online space remover.",
    featureList: "Removes leading/trailing spaces, multiple spaces, spaces before punctuation, tab characters",
    whatIs: {
      definition: "A whitespace cleaner removes redundant spaces, tabs, and other invisible characters from text, leaving clean, consistently spaced content.",
      explanation: "Extra spaces are invisible until they cause problems: a search fails because of a trailing space, an email subject line looks broken, or a database query returns no results because of hidden whitespace in a field. Text copied from PDFs, HTML, or Word documents is a common source of these hidden characters. This tool removes them reliably with configurable options.",
    },
    useCases: [
      { title: "PDF copy-paste cleanup", scenario: "A paralegal copies 3 pages of contract text from a PDF. The paste introduces double spaces after every period and trailing spaces on 40% of lines, removed in one click." },
      { title: "Database import prep", scenario: "A data analyst cleaning 500 customer names for a CRM import uses 'trim leading/trailing spaces' to fix 63 records that would otherwise create duplicate entries." },
      { title: "Email copy editing", scenario: "A copywriter pastes a forwarded email chain into a clean document. Extra spaces from quoted text formatting are removed, reducing the character count from 1,840 to 1,620." },
    ],
    faqs: [
      {
        question: "How do I remove extra spaces from text?",
        answer: "Paste your text into the input area, select which types of spaces to remove using the checkboxes, then click 'Remove Spaces'. All four options are enabled by default. The output shows the cleaned text with a before/after character count.",
      },
      {
        question: "What causes extra spaces in copied text?",
        answer: "Extra spaces come from PDFs (line layout adds double spaces), Word documents (double spaces after periods in some settings), HTML (multiple spaces collapse visually but remain in source), and formatted tables or spreadsheets.",
      },
      {
        question: "Does this remove spaces between words?",
        answer: "'Replace multiple spaces with one' collapses two or more consecutive spaces into a single space. It does not remove the single space that naturally separates words from each other.",
      },
      {
        question: "Can I use this to clean up pasted Word document text?",
        answer: "Yes. Word documents frequently introduce extra spaces, non-breaking spaces, and trailing whitespace. Enable all four cleaning options for the most thorough result when pasting from Word.",
      },
      {
        question: "What is the difference between trim and strip?",
        answer: "In most programming languages, 'trim' and 'strip' are synonymous: both remove leading and trailing whitespace from a string. JavaScript uses 'trim()', Python uses 'strip()'. This tool's option performs the same operation.",
      },
    ],
    relatedSlugs: ["remove-line-breaks", "remove-duplicate-lines", "find-and-replace", "case-converter"],
  },
  {
    slug: "remove-line-breaks",
    title: "Remove Line Breaks",
    description: "Remove or replace line breaks in text. Join multiple lines into a single paragraph or replace line breaks with any character.",
    shortDescription: "Remove or replace line breaks",
    keywords: ["remove line breaks", "remove line breaks online", "join lines of text", "convert line breaks to spaces"],
    category: "Cleaning",
    icon: "WrapText",
    ogTitle: "Remove Line Breaks - Join Lines of Text Online Free",
    metaDescription: "Remove line breaks from text and join lines into one. Replace line breaks with spaces, commas, or custom characters. Clean up PDF and email text. Free.",
    featureList: "Replace line breaks with space, nothing, comma, or custom character; remove multiple blank lines; remove all blank lines",
    whatIs: {
      definition: "A line break remover strips or replaces the newline characters in text, joining multiple lines into a single continuous block or a cleanly separated list.",
      explanation: "Unwanted line breaks are one of the most common formatting problems in day-to-day text work. PDF text extraction adds a break at every printed line. Email clients insert soft returns at 72 characters. Developers copy terminal output full of line breaks into documentation. This tool fixes all of these in seconds, with flexible options for what to replace line breaks with.",
    },
    useCases: [
      { title: "PDF text extraction", scenario: "A researcher copies 5 paragraphs from a PDF. Every line ends with a break at the 80-character print margin, creating 35 unwanted line breaks, all removed in one click." },
      { title: "List to comma-separated", scenario: "A developer has a vertical list of 50 city names (one per line) needed as a comma-separated string for a SQL IN() clause, converted in 2 seconds." },
      { title: "Email chain cleanup", scenario: "A PR manager pastes a quoted email reply chain into a document. 28 soft-return line breaks from the email client are replaced with spaces, producing clean readable paragraphs." },
    ],
    faqs: [
      {
        question: "How do I remove line breaks from text?",
        answer: "Paste your text, select what to replace line breaks with (space, nothing, comma, or a custom character), then click 'Remove Line Breaks'. The cleaned output appears below with the line breaks replaced as specified.",
      },
      {
        question: "Why does copied text have unwanted line breaks?",
        answer: "PDFs add breaks at every printed line margin. Email clients insert soft returns at ~72 characters. HTML source code often has deliberate line breaks that appear as spaces in the browser but transfer as breaks when copied.",
      },
      {
        question: "How do I join multiple lines into one line?",
        answer: "Select 'Replace with: Space' and apply. Every line break is replaced with a single space, joining all lines into one continuous paragraph. Choose 'Nothing' to join with no separator at all.",
      },
      {
        question: "What is the difference between \\n and \\r\\n?",
        answer: "\\n (LF) is the Unix/macOS line ending. \\r\\n (CRLF) is the Windows line ending. This tool handles both formats automatically. You do not need to know which format your source text uses.",
      },
      {
        question: "Can I replace line breaks with commas?",
        answer: "Yes. Select 'Comma' from the replacement options. This converts a vertical list into a comma-separated list, useful for SQL queries, spreadsheet formulas, and CSV preparation.",
      },
    ],
    relatedSlugs: ["remove-extra-spaces", "remove-duplicate-lines", "find-and-replace", "sort-lines"],
  },
  {
    slug: "find-and-replace",
    title: "Find and Replace",
    description: "Find and replace text online. Supports case-sensitive matching, whole-word matching, and real-time highlighting.",
    shortDescription: "Find and replace text instantly",
    keywords: ["find and replace text online", "text find replace tool", "bulk find replace", "online text editor find replace"],
    category: "Transformation",
    icon: "Search",
    ogTitle: "Find and Replace Text Online - Free Text Editor Tool",
    metaDescription: "Find and replace text online with case-sensitive and whole-word options. Highlights matches in real time. Free online find and replace tool.",
    featureList: "Case-sensitive matching, whole-word matching, replace all or one at a time, real-time match highlighting, match count",
    whatIs: {
      definition: "An online find and replace tool searches for a word or phrase within a block of text and substitutes every occurrence with a replacement string.",
      explanation: "Every text editor has find and replace, but sometimes you are working with text outside any editor: in a form field, a CMS, a spreadsheet cell, or pasted from a source with no editing tools. This tool lets you perform bulk replacements on any text in seconds. It also shows match counts in real time as you type the search term, so you know what will change before you apply it.",
    },
    useCases: [
      { title: "Brand name update", scenario: "A marketer pastes a 1,500-word press release and replaces 'Acme Corp' with 'Acme Corporation' across all 12 occurrences in a single click, with zero missed instances." },
      { title: "Deleting repeated phrases", scenario: "A content editor removes a filler phrase 'it is worth noting that' which appears 8 times in an article by replacing it with nothing, tightening the copy by 40 words." },
      { title: "Code template substitution", scenario: "A developer pastes a 200-line config template and replaces the placeholder 'PROJECT_NAME' with 'shelfcue' across all 17 occurrences before saving the file." },
    ],
    faqs: [
      {
        question: "How do I find and replace text online?",
        answer: "Paste your text into the main area, type your search term in the 'Find' field, type the replacement in the 'Replace with' field, then click 'Replace All'. Matches are counted in real time as you type the search term.",
      },
      {
        question: "Can I do a case-sensitive find and replace?",
        answer: "Yes. Enable the 'Case sensitive' toggle to match only the exact capitalisation of your search term. With it off, 'Apple', 'apple', and 'APPLE' all match.",
      },
      {
        question: "What is whole word matching?",
        answer: "With 'Whole word' enabled, the tool only matches the search term as a complete word. Searching for 'cat' matches 'cat' but not 'catalog' or 'concatenate'. This prevents partial-word replacements.",
      },
      {
        question: "Can I replace text with nothing (delete it)?",
        answer: "Yes. Leave the 'Replace with' field empty and click 'Replace All'. Every instance of the search term is deleted from the text with no replacement character inserted.",
      },
      {
        question: "How do I replace line breaks using find and replace?",
        answer: "Use the dedicated Remove Line Breaks tool for this. It handles \\n and \\r\\n line endings automatically. The Find and Replace tool operates on visible characters rather than control characters.",
      },
    ],
    relatedSlugs: ["remove-extra-spaces", "case-converter", "remove-duplicate-lines", "text-to-slug"],
  },
  {
    slug: "text-diff-checker",
    title: "Text Diff Checker",
    description: "Compare two texts and highlight the differences. Shows additions, deletions, and unchanged content side by side.",
    shortDescription: "Compare two texts and find differences",
    keywords: ["text diff checker", "compare two texts online", "find differences between texts", "online text comparison tool"],
    category: "Analysis",
    icon: "GitCompare",
    ogTitle: "Text Diff Checker - Compare Two Texts Online Free",
    metaDescription: "Compare two pieces of text and see exactly what changed. Highlights additions in green and deletions in red. Free online text diff tool.",
    featureList: "Word-level diff, line-level diff toggle, additions in green, deletions in red, count of changes",
    whatIs: {
      definition: "A text diff checker compares two versions of text and highlights exactly what has been added, removed, or left unchanged between them.",
      explanation: "Diff checking is a standard technique in software development, but writers, editors, lawyers, and translators use it just as much. Any time a document goes through revisions, a diff checker shows what changed at a glance, without reading both versions in full. This tool uses the same algorithm as version control systems like Git to detect changes at the word or line level.",
    },
    useCases: [
      { title: "Contract revision review", scenario: "A lawyer receives a revised 8-page contract. Instead of reading it twice, they paste both versions into the diff checker and see 6 changed clauses highlighted in seconds." },
      { title: "Blog post edit history", scenario: "An editor compares an article before and after a writer's revisions, immediately seeing that 3 paragraphs were rewritten and 1 section of 120 words was cut entirely." },
      { title: "Translation verification", scenario: "A translator checks their revised translation against the previous version to confirm exactly 4 terminology changes were made without accidentally altering surrounding sentences." },
    ],
    faqs: [
      {
        question: "How do I compare two pieces of text online?",
        answer: "Paste the original version in the left box and the revised version in the right box. Choose word or line diff mode, then click 'Compare'. Added text appears highlighted in green; removed text appears in red with a strikethrough.",
      },
      {
        question: "What does a text diff checker do?",
        answer: "It compares two versions of text and highlights additions (new content), deletions (removed content), and unchanged sections. This is the same technique used by Git and other version control systems to show what changed between commits.",
      },
      {
        question: "Can I compare two versions of a document?",
        answer: "Yes. Paste the old version on the left and the new version on the right. The diff view highlights every change, useful for proofreading, reviewing contract edits, checking content revisions, or auditing configuration changes.",
      },
      {
        question: "Is my text saved when using the diff checker?",
        answer: "No. All comparison runs locally in your browser using JavaScript. Neither version of your text is transmitted to any server or stored anywhere. The comparison is entirely private.",
      },
      {
        question: "What is the difference between character diff and word diff?",
        answer: "Character diff shows every individual character that changed, which can be hard to read on long texts. Word diff treats each word as a unit, showing which whole words were added or removed. This tool defaults to word diff with a line diff option.",
      },
    ],
    relatedSlugs: ["find-and-replace", "word-counter", "remove-extra-spaces", "remove-duplicate-lines"],
  },
  {
    slug: "reading-time-estimator",
    title: "Reading Time Estimator",
    description: "Estimate how long it takes to read any text at slow, average, and fast reading speeds, plus speaking time.",
    shortDescription: "Estimate reading time for any text",
    keywords: ["reading time estimator", "how long to read", "reading time calculator", "estimate reading time online"],
    category: "Analysis",
    icon: "Clock",
    ogTitle: "Reading Time Estimator - Calculate Reading Time Free",
    metaDescription: "Calculate how long it takes to read your text at 150, 238, and 350 words per minute. Plus speaking time. Free reading time calculator.",
    featureList: "Slow, average, and fast reader estimates, speaking time, word count, content-type hints",
    whatIs: {
      definition: "A reading time estimator calculates how long it will take an average reader to read a piece of text, based on the word count and typical reading speeds.",
      explanation: "Knowing reading time helps writers plan content length and helps readers decide whether to read now or save for later. Platforms like Medium and Substack show estimated reading time because it reduces bounce rate, since readers who know what they are committing to are more likely to finish. This tool gives estimates for slow, average, and fast readers, plus speaking time for presentations and podcasts.",
    },
    useCases: [
      { title: "Blog post length optimisation", scenario: "A blogger targeting a '5-minute read' label on Medium pastes their draft and sees 9 minutes, so they trim the post from 2,140 words to 1,190 to hit the target." },
      { title: "Presentation scripting", scenario: "A speaker preparing a 15-minute keynote pastes their script and uses the 130 wpm speaking estimate to confirm 1,950 words fills exactly 15 minutes without rushing." },
      { title: "Email newsletter planning", scenario: "A newsletter editor sees their 1,400-word issue takes 6 minutes to read at average speed, above their 3-minute target, and cuts two sections totalling 580 words." },
    ],
    faqs: [
      {
        question: "How long does it take to read 1000 words?",
        answer: "At the average adult reading speed of 238 wpm, 1,000 words takes about 4 minutes. At slow reading speed (150 wpm) it takes about 7 minutes. A fast reader (350 wpm) finishes in about 3 minutes.",
      },
      {
        question: "What is the average adult reading speed?",
        answer: "Research by Rayner et al. (2016) found the average adult reads approximately 238 words per minute for non-fiction. Reading speed varies with content complexity and reading purpose. Skimming is significantly faster than deep reading.",
      },
      {
        question: "How do I calculate reading time for a blog post?",
        answer: "Divide your word count by your target reading speed. At 238 wpm: a 500-word post takes 2 minutes; 1,000 words takes 4 minutes; 2,000 words takes 8 minutes. Medium uses 265 wpm as their baseline estimate.",
      },
      {
        question: "What is a good reading time for a web page?",
        answer: "Blog posts of 3–7 minutes (750–1,750 words) perform well in search and give readers enough depth. Long-form content over 10 minutes can rank well for competitive topics when it provides genuinely comprehensive coverage.",
      },
      {
        question: "How long does it take to read a 500-word article?",
        answer: "At average speed (238 wpm), about 2 minutes. A slower reader (150 wpm) takes about 3–4 minutes. A fast reader (350 wpm) finishes in about 90 seconds.",
      },
    ],
    relatedSlugs: ["word-counter", "word-frequency-counter", "character-counter", "lorem-ipsum-generator"],
  },
  {
    slug: "lorem-ipsum-generator",
    title: "Lorem Ipsum Generator",
    description: "Generate Lorem Ipsum placeholder text by words, sentences, or paragraphs. Ideal for mockups, designs, and development.",
    shortDescription: "Generate Lorem Ipsum placeholder text",
    keywords: ["lorem ipsum generator", "lorem ipsum text generator", "placeholder text generator", "dummy text generator"],
    category: "Generation",
    icon: "FileText",
    ogTitle: "Lorem Ipsum Generator - Free Placeholder Text Tool",
    metaDescription: "Generate Lorem Ipsum placeholder text by words, sentences, or paragraphs. Start with classic 'Lorem ipsum' or generate random text. Free.",
    featureList: "Generate by words, sentences, or paragraphs; start with classic Lorem ipsum; adjustable quantity",
    whatIs: {
      definition: "A Lorem Ipsum generator produces random Latin-derived placeholder text used to fill layouts and designs before real content is available.",
      explanation: "Lorem Ipsum has been the standard placeholder text in publishing and graphic design for over 500 years. Using meaningful text in a mockup distracts reviewers from evaluating the design itself: they read the words instead of looking at the layout. Placeholder text prevents this. This generator lets you produce exactly the amount you need, in any format, with one click.",
    },
    useCases: [
      { title: "UI wireframe population", scenario: "A UX designer building a 5-screen mobile app wireframe generates 3 paragraphs per screen, filling 15 content areas with realistic-length text in under 30 seconds." },
      { title: "Email template testing", scenario: "A developer building an HTML email template generates exactly 150 words to test text wrapping and line heights across 8 email clients before the real copy is ready." },
      { title: "Print layout proofing", scenario: "A graphic designer laying out a 12-page brochure generates 250 words per section to proof column widths, font sizes, and margins before the copywriter delivers final content." },
    ],
    faqs: [
      {
        question: "What is Lorem Ipsum?",
        answer: "Lorem Ipsum is standard placeholder text used in graphic design, publishing, and web development to fill layouts with dummy content. It lets designers evaluate visual design without the distraction of readable text drawing attention away from layout and typography.",
      },
      {
        question: "Where does Lorem Ipsum come from?",
        answer: "Lorem Ipsum is derived from Cicero's 'de Finibus Bonorum et Malorum', written in 45 BC. An unknown printer scrambled the text in the 1500s to use as a type specimen. It has been used in the printing industry ever since.",
      },
      {
        question: "How do I generate Lorem Ipsum text?",
        answer: "Select words, sentences, or paragraphs from the type selector, set the quantity, then click 'Generate'. The output appears in the text area below. Click 'Copy' to copy it to your clipboard with one click.",
      },
      {
        question: "Can I generate Lorem Ipsum by word count?",
        answer: "Yes. Select 'Words' from the type dropdown and enter the number of words you need. The generator produces exactly that many Lorem Ipsum words, from 1 to 100.",
      },
      {
        question: "What are alternatives to Lorem Ipsum for placeholder text?",
        answer: "Common alternatives include Cicero's original Latin, topic-specific Ipsum variants (Bacon Ipsum, Hipster Ipsum), random English words, and real representative content. For testing, real content often reveals layout issues that Lorem Ipsum masks.",
      },
    ],
    relatedSlugs: ["word-counter", "reading-time-estimator", "character-counter", "word-frequency-counter"],
  },
  {
    slug: "word-frequency-counter",
    title: "Word Frequency Counter",
    description: "Analyze word frequency in any text. Find the most common words, check keyword density, and filter out stop words.",
    shortDescription: "Analyze word frequency and keyword density",
    keywords: ["word frequency counter", "word frequency analysis", "most used words in text", "keyword density checker"],
    category: "Analysis",
    icon: "BarChart2",
    ogTitle: "Word Frequency Counter - Keyword Density Analyzer Free",
    metaDescription: "Count how often each word appears in your text. Filter stop words, check keyword density, sort by frequency or alphabetically. Free analysis tool.",
    featureList: "Word frequency table, frequency percentage, stop word filtering, sortable by count or alphabetically, CSS bar chart",
    whatIs: {
      definition: "A word frequency counter analyses text and produces a ranked list of how many times each word appears, along with its percentage of the total word count.",
      explanation: "Word frequency analysis reveals the vocabulary structure of any text. Writers use it to detect overused words they did not notice. SEOs use it to audit keyword density and check that target terms appear at the right frequency. Researchers use it to study writing style and vocabulary richness. The stop word filter removes common function words so the meaningful content words rise to the top of the results.",
    },
    useCases: [
      { title: "SEO keyword density audit", scenario: "An SEO pastes a 1,500-word article and confirms their target keyword appears 9 times (0.6% density), within the 1–2% optimal range, with no over-optimisation risk." },
      { title: "Writing repetition detection", scenario: "A novelist pastes a chapter and finds the word 'suddenly' appears 14 times, far more than intended, prompting them to vary language in 11 of the 14 instances." },
      { title: "Academic vocabulary analysis", scenario: "A linguistics student analyses a 2,000-word speech transcript with stop words disabled, revealing the 20 most distinctive content words that define the speaker's rhetoric." },
    ],
    faqs: [
      {
        question: "What is word frequency analysis?",
        answer: "Word frequency analysis counts how many times each word appears in a text. It reveals dominant vocabulary, helps detect keyword density for SEO, identifies overused words in writing, and can be used to study style and vocabulary across any text corpus.",
      },
      {
        question: "How do I find the most common words in a text?",
        answer: "Paste your text into the input area. The tool automatically counts every word and displays a ranked table with the most frequent words at the top. Sort by count (high to low), count (low to high), or alphabetically using the buttons above the table.",
      },
      {
        question: "What are stop words?",
        answer: "Stop words are common function words like 'the', 'a', 'is', 'in', 'of'. They appear very frequently in any text but carry little meaning. The stop word filter removes them so meaningful content words dominate the frequency results.",
      },
      {
        question: "How do I check keyword density?",
        answer: "The percentage column shows each word as a fraction of total words. For SEO, keyword density of 1–2% is generally considered optimal. Higher density risks over-optimisation signals. Use this tool to audit your target keyword's frequency before publishing.",
      },
      {
        question: "Can I use this to analyze SEO keyword usage?",
        answer: "Yes. Paste your page content and the tool shows how frequently each keyword appears and its density percentage. Check your primary keyword sits between 1–2%, and confirm secondary keywords appear naturally without clustering.",
      },
    ],
    relatedSlugs: ["word-counter", "reading-time-estimator", "find-and-replace", "character-counter"],
  },
  {
    slug: "extract-emails",
    title: "Extract Emails from Text",
    description: "Extract all email addresses from any block of text instantly. Deduplicates results and lets you copy or download them.",
    shortDescription: "Extract email addresses from text",
    keywords: ["extract emails from text", "email extractor online", "pull emails from text", "find email addresses in text"],
    category: "Utilities",
    icon: "Mail",
    ogTitle: "Extract Emails from Text - Free Email Extractor Tool",
    metaDescription: "Extract all email addresses from any text, webpage, or document instantly. Deduplicates results automatically. Copy or download as .txt. Free.",
    featureList: "Regex-based extraction, automatic deduplication, copy newline-separated or comma-separated, download as .txt",
    whatIs: {
      definition: "An email extractor scans any block of text and pulls out every valid email address it finds, removing duplicates and presenting a clean list.",
      explanation: "Email addresses are embedded in all kinds of text: pasted website source code, exported CRM data, forwarded email threads, scraped documents, and CSV exports. Finding them manually in a 5,000-word block of text can take 20 minutes. This tool scans the entire input in milliseconds and produces a deduplicated list ready to copy or download, without any information leaving your browser.",
    },
    useCases: [
      { title: "Event attendee list building", scenario: "An event organiser pastes 3 forwarded email threads totalling 800 lines and extracts 24 unique attendee email addresses, a task that would take 15 minutes manually." },
      { title: "Webpage contact harvesting", scenario: "A sales researcher pastes the HTML source of a company's team page and instantly extracts 11 staff email addresses that are not visible in the rendered layout." },
      { title: "CRM data cleaning", scenario: "A data analyst pastes a messy exported report containing 200 email addresses mixed with other data. The extractor returns 178 unique addresses, deduplicating 22 repeats." },
    ],
    faqs: [
      {
        question: "How do I extract email addresses from text?",
        answer: "Paste any text (a document, email thread, or webpage source) into the input area. The tool scans for valid email patterns and lists all addresses found. Duplicates are removed automatically. Copy or download the results.",
      },
      {
        question: "Does the extractor find all email formats?",
        answer: "The extractor recognises standard email formats including subdomains, plus signs (user+tag@example.com), hyphens, and dots. It handles the most common real-world formats used in business and personal communications.",
      },
      {
        question: "Are duplicate emails removed automatically?",
        answer: "Yes. Duplicate addresses are removed using case-insensitive matching, so 'User@Example.com' and 'user@example.com' are treated as the same address. The unique count is shown alongside the total found.",
      },
      {
        question: "Can I extract emails from a pasted webpage?",
        answer: "Yes. Copy the HTML source of any webpage and paste it into the extractor. It finds email addresses in both visible text and HTML attributes, including mailto: links that may not be visible in the rendered page.",
      },
      {
        question: "Is my text stored or logged?",
        answer: "No. All extraction runs locally in your browser using JavaScript. Your text is never sent to any server, stored, or logged. The email addresses you extract remain entirely private.",
      },
    ],
    relatedSlugs: ["find-and-replace", "remove-duplicate-lines", "word-counter", "text-diff-checker"],
  },
  {
    slug: "reverse-text",
    title: "Reverse Text",
    description: "Reverse text online by characters, words, or generate upside-down flipped text using Unicode characters.",
    shortDescription: "Reverse, flip, or mirror text",
    keywords: ["reverse text", "backwards text generator", "flip text online", "mirror text"],
    category: "Transformation",
    icon: "Repeat",
    ogTitle: "Reverse Text - Backwards Text Generator Online Free",
    metaDescription: "Reverse text online by characters, words, or generate upside-down Unicode text. Mirror text for social media, puzzles, and fun. Free.",
    featureList: "Reverse entire text, reverse word order, reverse each word, Unicode upside-down flip",
    whatIs: {
      definition: "A text reverser rearranges text in the opposite direction: reversing individual characters, reversing the order of words, or flipping text upside-down using Unicode substitutions.",
      explanation: "Reversed text has practical and creative uses. Educators create reading puzzles by reversing sentences. Social media users generate eye-catching flipped text that stands out in feeds. Developers test string-handling code with reversed inputs. The Unicode upside-down mode works on most platforms including Twitter/X, Instagram, and Discord, where special Unicode characters render as visually rotated letters.",
    },
    useCases: [
      { title: "Social media novelty posts", scenario: "A social media creator writes a 12-word call-to-action, flips it upside-down using the Unicode mode, and posts it to Twitter/X where it renders correctly and generates 3× more replies than normal posts." },
      { title: "Puzzle and game design", scenario: "A teacher creates a 20-question word puzzle where answers must be written backwards. They generate all 20 answer keys using the character reversal mode in 60 seconds." },
      { title: "String validation testing", scenario: "A developer uses the word-reversal mode to generate reversed test strings for a palindrome detection function, creating 15 test cases without manual typing." },
    ],
    faqs: [
      {
        question: "How do I reverse text online?",
        answer: "Type or paste your text into the input area, select a reversal mode (reverse entire text, reverse word order, reverse each word, or flip upside down) and the output updates instantly. Copy the result with the Copy button.",
      },
      {
        question: "What is the difference between reversing text and reversing words?",
        answer: "'Reverse entire text' reverses every character: 'Hello World' → 'dlroW olleH'. 'Reverse word order' keeps each word intact but reverses their sequence: 'Hello World' → 'World Hello'.",
      },
      {
        question: "How do I write backwards?",
        answer: "Use 'Reverse entire text' to reverse every character in your input. 'Reverse each word' keeps words in their original order but mirrors the letters inside each word: 'Hello World' → 'olleH dlroW'.",
      },
      {
        question: "What is mirrored text used for?",
        answer: "Mirrored and reversed text is used for visual puzzles, artistic typography, social media novelty posts, and light text obfuscation. The Unicode upside-down mode generates characters that display as rotated letters on most platforms.",
      },
      {
        question: "Can I reverse text for a social media post?",
        answer: "Yes. The Unicode upside-down flip mode generates special Unicode characters that look like rotated letters and work on Twitter/X, Instagram, and Facebook. Copy the result and paste directly into your post.",
      },
    ],
    relatedSlugs: ["case-converter", "find-and-replace", "text-to-slug", "remove-extra-spaces"],
  },
  {
    slug: "text-to-slug",
    title: "Text to Slug",
    description: "Convert any title or phrase into a clean, SEO-friendly URL slug. Supports hyphens, underscores, stop word removal, and length limits.",
    shortDescription: "Generate SEO-friendly URL slugs",
    keywords: ["text to slug converter", "URL slug generator", "convert title to URL", "slug generator online"],
    category: "Utilities",
    icon: "Link",
    ogTitle: "Text to Slug - URL Slug Generator Online Free",
    metaDescription: "Convert titles and phrases into clean URL slugs. Choose hyphens or underscores, remove stop words, set max length. SEO-friendly slug generator. Free.",
    featureList: "Hyphen or underscore separator, lowercase conversion, stop word removal, max length option, instant preview",
    whatIs: {
      definition: "A slug generator converts a title or phrase into a URL-safe string by lowercasing all characters, replacing spaces with hyphens or underscores, and removing special characters.",
      explanation: "A URL slug is the human-readable part of a web address that identifies a specific page. Good slugs are short, lowercase, contain the target keyword, and use hyphens as word separators, all of which Google recommends for SEO. Creating slugs manually from long titles requires careful formatting. This tool generates them instantly with options to remove stop words and enforce maximum length.",
    },
    useCases: [
      { title: "Blog post URL creation", scenario: "A blogger writes the title 'The 10 Best Free Tools for Writers in 2025' and generates the slug 'best-free-tools-writers-2025' with stop words removed, concise and keyword-rich." },
      { title: "CMS content migration", scenario: "A developer migrating 300 articles to a new CMS generates clean slugs for every title in bulk, ensuring all 300 URLs are lowercase, hyphenated, and under 60 characters." },
      { title: "E-commerce product URLs", scenario: "A store owner creating 50 product pages generates slugs from product names, enforcing a 40-character maximum to keep URLs clean in Google Shopping listings." },
    ],
    faqs: [
      {
        question: "What is a URL slug?",
        answer: "A URL slug is the part of a URL that identifies a specific page in human-readable form. In 'example.com/blog/my-blog-post', the slug is 'my-blog-post'. Good slugs are short, lowercase, descriptive, and contain the page's primary keyword.",
      },
      {
        question: "Should I use hyphens or underscores in URLs?",
        answer: "Google recommends hyphens. Google treats hyphens as word separators, so 'my-blog-post' is read as three words. Underscores join words, so 'my_blog_post' is read as one word, reducing keyword separation in search.",
      },
      {
        question: "How long should a URL slug be?",
        answer: "Keep slugs to 3–5 words. Shorter slugs are easier to remember, share, and fit in browser tabs and search results. Google has no strict URL length limit, but shorter, keyword-focused URLs tend to rank better.",
      },
      {
        question: "Should a URL slug be lowercase?",
        answer: "Yes. URLs are case-sensitive on most servers. 'example.com/My-Post' and 'example.com/my-post' can be treated as different pages, creating duplicate content issues. Always use lowercase slugs.",
      },
      {
        question: "What characters are not allowed in a URL?",
        answer: "URL slugs should only contain letters (a–z), numbers (0–9), and hyphens or underscores. Spaces, punctuation, special characters, and non-ASCII letters should be removed or encoded. This tool removes all of them automatically.",
      },
    ],
    relatedSlugs: ["case-converter", "find-and-replace", "remove-extra-spaces", "character-counter"],
  },
];

export const toolsBySlug: Record<string, ToolDefinition> = Object.fromEntries(
  tools.map((t) => [t.slug, t])
);

export const toolRelations: Record<string, string[]> = Object.fromEntries(
  tools.map((t) => [t.slug, t.relatedSlugs])
);

export const categories = ["All", "Analysis", "Cleaning", "Transformation", "Generation", "Utilities"] as const;
