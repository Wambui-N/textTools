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
    ogTitle: "Word Counter — Free Online Word Count Tool",
    metaDescription: "Count words, characters, sentences, and paragraphs instantly. Free online word counter with reading time estimate. No signup required.",
    featureList: "Counts words, characters, sentences, paragraphs, reading time, speaking time",
    faqs: [
      {
        question: "How do I count words in a document?",
        answer: "Paste or type your text into the word counter above. The tool instantly displays your word count along with character count, sentence count, and paragraph count. No need to select text or click any button — results update in real time.",
      },
      {
        question: "Does Word Counter save my text?",
        answer: "No. ShelfCue processes all text locally in your browser. Your text is never sent to our servers, stored, or logged. You can verify this by disconnecting from the internet — the tool still works perfectly.",
      },
      {
        question: "What counts as a word?",
        answer: "The tool counts words by splitting your text on whitespace (spaces, tabs, and line breaks). Any sequence of non-whitespace characters separated by a space is counted as one word. Hyphenated words like 'well-known' count as one word.",
      },
      {
        question: "How accurate is the reading time estimate?",
        answer: "Reading time is calculated using the average adult reading speed of 238 words per minute, based on research by Rayner et al. (2016). For complex or technical content, actual reading time may be longer. The estimate is a useful guide, not a precise measurement.",
      },
      {
        question: "Can I use this for counting words in an essay or assignment?",
        answer: "Yes. The Word Counter is commonly used by students to check essay and assignment word counts. It's accurate for standard written text. Note that footnotes, references, and headers may or may not be included depending on what you paste.",
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
    ogTitle: "Character Counter — Count Characters Online Free",
    metaDescription: "Count characters instantly with visual limits for Twitter (280), Instagram (2,200), LinkedIn (3,000), and meta descriptions. Free, no signup.",
    featureList: "Counts characters with and without spaces, shows platform limits for Twitter, Instagram, LinkedIn, meta description, YouTube title",
    faqs: [
      {
        question: "What is a character counter used for?",
        answer: "A character counter helps you stay within character limits for social media posts, meta descriptions, SMS messages, and other platforms that restrict text length. It's essential for Twitter/X posts (280 characters), meta descriptions (160 characters), and SMS (160 characters per message).",
      },
      {
        question: "Does a space count as a character?",
        answer: "Yes, spaces count as characters on virtually all platforms. The character counter shows both the total character count (with spaces) and the count without spaces, so you can see both figures at a glance.",
      },
      {
        question: "How many characters can a tweet have?",
        answer: "Twitter/X allows up to 280 characters per tweet. Previously the limit was 140 characters, but it was doubled in 2017. URLs in tweets are shortened to 23 characters regardless of their actual length, and media attachments also count toward the limit.",
      },
      {
        question: "What is the Instagram caption character limit?",
        answer: "Instagram captions can be up to 2,200 characters long. However, only the first 125 characters are visible in the feed before being truncated with a 'more' link. For maximum engagement, aim to put your most important text in the first 125 characters.",
      },
      {
        question: "Why does character count matter for SEO?",
        answer: "Meta descriptions should be between 150–160 characters to display fully in Google search results. Shorter descriptions get cut off and may show less relevant text. Title tags ideally stay under 60 characters. The character counter's SEO limits help you optimize both fields.",
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
    ogTitle: "Case Converter — Change Text Case Online Free",
    metaDescription: "Convert text to UPPERCASE, lowercase, Title Case, camelCase, PascalCase, snake_case, and kebab-case instantly. Free online case converter.",
    featureList: "UPPER CASE, lower case, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case",
    faqs: [
      {
        question: "What is title case?",
        answer: "Title case capitalizes the first letter of each major word in a title or heading. Small words like 'a', 'an', 'the', 'of', 'in', 'on', 'at', 'for', 'with', 'but', 'or', and 'nor' are kept lowercase unless they appear at the start. For example: 'the lord of the rings' becomes 'The Lord of the Rings'.",
      },
      {
        question: "What is the difference between camelCase and PascalCase?",
        answer: "In camelCase, the first word is all lowercase and subsequent words start with a capital letter (e.g., myVariableName). In PascalCase (also called UpperCamelCase), every word starts with a capital letter including the first (e.g., MyVariableName). camelCase is common in JavaScript and Java; PascalCase is used for class names in many languages.",
      },
      {
        question: "What is snake_case used for?",
        answer: "snake_case uses underscores between words and is commonly used for variable and function names in Python, Ruby, and SQL. It's also used for file names in many projects. The text 'my variable name' becomes 'my_variable_name' in snake_case.",
      },
      {
        question: "How do I convert text to lowercase online?",
        answer: "Paste your text into the Case Converter above and click the 'lower case' button. All characters will be converted to lowercase instantly. You can then copy the result with the Copy button.",
      },
      {
        question: "What is sentence case?",
        answer: "Sentence case capitalizes only the first letter of each sentence, just like standard written prose. The rest of the text remains lowercase. For example: 'THE QUICK BROWN FOX. JUMPS OVER THE LAZY DOG.' becomes 'The quick brown fox. Jumps over the lazy dog.'",
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
    ogTitle: "Remove Duplicate Lines — Free Online Deduplication Tool",
    metaDescription: "Remove duplicate lines from any list or text instantly. Case-sensitive option, whitespace trimming, shows count of removed duplicates. Free.",
    featureList: "Removes duplicate lines, case-sensitive option, whitespace trimming, shows count of removed lines, preserves order",
    faqs: [
      {
        question: "How do I remove duplicate lines from a list?",
        answer: "Paste your list or text into the input box above. The tool will automatically detect and remove duplicate lines as you make changes. Toggle the 'Case sensitive' option to control whether 'Apple' and 'apple' are treated as duplicates. Click 'Remove Duplicates' to apply.",
      },
      {
        question: "Does the tool preserve the original order?",
        answer: "Yes. When duplicates are removed, the first occurrence of each line is kept in its original position. The order of unique lines is preserved exactly as they appeared in the input.",
      },
      {
        question: "Is the comparison case-sensitive?",
        answer: "By default, the comparison is case-insensitive, meaning 'Apple' and 'apple' will be treated as duplicates. You can enable case-sensitive mode using the toggle, which will treat 'Apple' and 'apple' as distinct lines.",
      },
      {
        question: "Can I use this to clean up a CSV?",
        answer: "Yes, this tool works well for cleaning up single-column CSV data. Paste the values (one per line) to remove duplicates. For multi-column CSVs, the entire row must be identical to be considered a duplicate.",
      },
      {
        question: "What happens to blank lines?",
        answer: "Multiple consecutive blank lines are treated as duplicates and collapsed to a single blank line. You can also choose to remove all blank lines entirely using the 'Remove blank lines' option.",
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
    ogTitle: "Sort Lines — Alphabetize Lists Online Free",
    metaDescription: "Sort lines alphabetically (A-Z or Z-A), by length, in reverse order, or randomly. Clean list sorting with case and whitespace options. Free.",
    featureList: "Sort A-Z, Z-A, shortest first, longest first, reverse order, random shuffle, case-sensitive option",
    faqs: [
      {
        question: "How do I sort a list alphabetically online?",
        answer: "Paste your list (one item per line) into the input area and select 'A → Z' to sort alphabetically. The sorted list appears instantly in the output. Use the 'Case sensitive' toggle to control how uppercase and lowercase letters are ordered.",
      },
      {
        question: "Can I sort numbers with this tool?",
        answer: "The tool sorts numbers as strings (lexicographically) rather than numerically. This means '10' would come before '2' in A-Z order. For numeric sorting, prefix numbers with leading zeros (01, 02, 10) so they sort correctly as strings.",
      },
      {
        question: "Does sorting preserve blank lines?",
        answer: "By default, blank lines are included in the sort. If you want to remove blank lines before sorting, enable the 'Remove blank lines' option in the settings.",
      },
      {
        question: "What does reverse order mean for sorting?",
        answer: "'Reverse order' simply flips the current sequence of lines — the last line becomes first and vice versa. It does not sort alphabetically in reverse; use 'Z → A' for reverse alphabetical sorting.",
      },
      {
        question: "Can I randomize/shuffle a list online?",
        answer: "Yes. Select the 'Random shuffle' option to randomize the order of your lines. Each time you click 'Sort', the lines are shuffled to a different random order using the Fisher-Yates algorithm.",
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
    ogTitle: "Remove Extra Spaces — Clean Whitespace from Text Free",
    metaDescription: "Remove leading, trailing, and multiple spaces from text. Clean up whitespace from PDFs, emails, and documents. Free online space remover.",
    featureList: "Removes leading/trailing spaces, multiple spaces, spaces before punctuation, tab characters",
    faqs: [
      {
        question: "How do I remove extra spaces from text?",
        answer: "Paste your text into the input area. The tool automatically applies your selected options to clean up extra spaces. By default, it removes leading and trailing spaces and replaces multiple consecutive spaces with a single space.",
      },
      {
        question: "What causes extra spaces in copied text?",
        answer: "Extra spaces commonly come from copying text from PDFs (where line layout causes double spaces), Microsoft Word (which uses double spaces after periods in some settings), HTML content (where multiple spaces are reduced to one visually), or formatted tables and spreadsheets.",
      },
      {
        question: "Does this remove spaces between words?",
        answer: "No. The 'Replace multiple spaces with one' option only collapses runs of two or more spaces into a single space. It does not remove the single space that naturally separates words.",
      },
      {
        question: "Can I use this to clean up pasted Word document text?",
        answer: "Yes. Text copied from Word often has extra spaces, non-breaking spaces, and trailing whitespace. This tool handles all of these. For best results, enable all four cleaning options before pasting your Word text.",
      },
      {
        question: "What is the difference between trim and strip?",
        answer: "In most programming contexts, 'trim' and 'strip' are synonymous — both remove leading and trailing whitespace from a string. Some languages use 'trim' (JavaScript, Java) while others use 'strip' (Python). This tool's 'Remove leading/trailing spaces' option performs the equivalent operation.",
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
    ogTitle: "Remove Line Breaks — Join Lines of Text Online Free",
    metaDescription: "Remove line breaks from text and join lines into one. Replace line breaks with spaces, commas, or custom characters. Clean up PDF and email text. Free.",
    featureList: "Replace line breaks with space, nothing, comma, or custom character; remove multiple blank lines; remove all blank lines",
    faqs: [
      {
        question: "How do I remove line breaks from text?",
        answer: "Paste your text into the input area and select what to replace line breaks with — a space, nothing, a comma, or a custom character. The tool processes your text instantly. Use the 'Apply' button to see the result in the output area.",
      },
      {
        question: "Why does copied text have unwanted line breaks?",
        answer: "Line breaks are frequently introduced when copying from PDFs (which add breaks at the end of each printed line), email clients, terminal output, or poorly formatted web pages. This tool is designed specifically to clean up these unwanted breaks.",
      },
      {
        question: "How do I join multiple lines into one line?",
        answer: "Select 'Replace with: Space' and apply. All line breaks will be replaced with a single space, joining all lines into one continuous paragraph. If you want no separator, select 'Nothing' instead.",
      },
      {
        question: "What is the difference between \\n and \\r\\n?",
        answer: "\\n (LF, line feed) is the Unix/Linux/macOS line ending. \\r\\n (CRLF, carriage return + line feed) is the Windows line ending. This tool handles both automatically, so you do not need to worry about which line ending format your source text uses.",
      },
      {
        question: "Can I replace line breaks with commas?",
        answer: "Yes. Select 'Replace with: Comma' from the options. This is useful for converting a vertical list into a comma-separated list for use in spreadsheets, SQL queries, or other data tools.",
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
    ogTitle: "Find and Replace Text Online — Free Text Editor Tool",
    metaDescription: "Find and replace text online with case-sensitive and whole-word options. Highlights matches in real time. Free online find and replace tool.",
    featureList: "Case-sensitive matching, whole-word matching, replace all or one at a time, real-time match highlighting, match count",
    faqs: [
      {
        question: "How do I find and replace text online?",
        answer: "Paste your text into the main text area, type the word or phrase you want to find in the 'Find' field, and type the replacement in the 'Replace' field. Matches are highlighted in real time. Click 'Replace All' to replace every occurrence at once, or 'Replace Next' to step through them one by one.",
      },
      {
        question: "Can I do a case-sensitive find and replace?",
        answer: "Yes. Enable the 'Case sensitive' toggle and the tool will only match text that exactly matches the capitalization of your search term. With this off, 'Apple', 'apple', and 'APPLE' are all matched.",
      },
      {
        question: "What is whole word matching?",
        answer: "With 'Whole word' enabled, the tool only matches the search term when it appears as a complete word — not as part of a larger word. For example, searching for 'cat' with whole word on would match 'cat' but not 'catalog' or 'concatenate'.",
      },
      {
        question: "Can I replace text with nothing (delete it)?",
        answer: "Yes. Leave the 'Replace' field empty and click 'Replace All'. Every match of your search term will be deleted from the text.",
      },
      {
        question: "How do I replace line breaks using find and replace?",
        answer: "Use the dedicated Remove Line Breaks tool for this purpose, as it handles the various line ending formats (\\n and \\r\\n) automatically. The Find and Replace tool works on visible characters rather than line break control characters.",
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
    ogTitle: "Text Diff Checker — Compare Two Texts Online Free",
    metaDescription: "Compare two pieces of text and see exactly what changed. Highlights additions in green and deletions in red. Free online text diff tool.",
    featureList: "Word-level diff, line-level diff toggle, additions in green, deletions in red, count of changes",
    faqs: [
      {
        question: "How do I compare two pieces of text online?",
        answer: "Paste your original text in the left box and the revised version in the right box. Click 'Compare' to see the differences highlighted below. Added text appears in green and removed text appears in red with a strikethrough.",
      },
      {
        question: "What does a text diff checker do?",
        answer: "A diff checker compares two versions of text and highlights what has changed between them. It shows additions (new text), deletions (removed text), and unchanged text. This is the same technique used by version control systems like Git to show code changes.",
      },
      {
        question: "Can I compare two versions of a document?",
        answer: "Yes. Paste the old version in the left box and the new version in the right. The diff view highlights every change. This is useful for proofreading, comparing contract revisions, checking content edits, or reviewing code changes.",
      },
      {
        question: "Is my text saved when using the diff checker?",
        answer: "No. All comparison happens locally in your browser. Neither version of your text is transmitted to our servers or stored anywhere. The comparison is performed entirely in JavaScript in your browser.",
      },
      {
        question: "What is the difference between character diff and word diff?",
        answer: "A character diff shows every individual character that changed, which can be hard to read. A word diff treats each word as a unit and shows which whole words were added or removed, making changes much easier to read. This tool uses word-level diff by default, with a line-level option available.",
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
    ogTitle: "Reading Time Estimator — Calculate Reading Time Free",
    metaDescription: "Calculate how long it takes to read your text at 150, 238, and 350 words per minute. Plus speaking time. Free reading time calculator.",
    featureList: "Slow, average, and fast reader estimates, speaking time, word count, content-type hints",
    faqs: [
      {
        question: "How long does it take to read 1000 words?",
        answer: "At the average adult reading speed of 238 words per minute, 1,000 words takes approximately 4 minutes to read. At a slow reading speed (150 wpm) it takes about 7 minutes, and at a fast reading speed (350 wpm) it takes about 3 minutes.",
      },
      {
        question: "What is the average adult reading speed?",
        answer: "Research by Rayner et al. (2016) found the average adult reads approximately 238 words per minute for non-fiction text. Reading speed varies significantly based on the complexity of the content, the reader's familiarity with the subject, and reading purpose (skimming vs. deep reading).",
      },
      {
        question: "How do I calculate reading time for a blog post?",
        answer: "Divide your word count by your target reading speed. For the average reader (238 wpm): a 500-word post takes about 2 minutes; a 1,000-word post about 4 minutes; a 2,000-word post about 8 minutes. Medium uses 265 wpm as their reading speed estimate.",
      },
      {
        question: "What is a good reading time for a web page?",
        answer: "For blog posts and articles, 3–7 minutes (roughly 750–1,750 words) tends to perform well in search results and provides enough depth for readers. Longer long-form content (10+ minutes) can rank well for competitive topics when it provides comprehensive coverage.",
      },
      {
        question: "How long does it take to read a 500-word article?",
        answer: "A 500-word article takes approximately 2 minutes at average reading speed (238 wpm), about 3–4 minutes for a slower reader (150 wpm), and about 1.5 minutes for a fast reader (350 wpm).",
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
    ogTitle: "Lorem Ipsum Generator — Free Placeholder Text Tool",
    metaDescription: "Generate Lorem Ipsum placeholder text by words, sentences, or paragraphs. Start with classic 'Lorem ipsum' or generate random text. Free.",
    featureList: "Generate by words, sentences, or paragraphs; start with classic Lorem ipsum; adjustable quantity",
    faqs: [
      {
        question: "What is Lorem Ipsum?",
        answer: "Lorem Ipsum is standard placeholder text used in the graphic design, publishing, and web development industries. It is used to fill layouts and mockups with dummy text so the visual design can be evaluated without the distraction of readable content.",
      },
      {
        question: "Where does Lorem Ipsum come from?",
        answer: "Lorem Ipsum is derived from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. The text was altered and scrambled in the 1500s when an unknown printer used it as a type specimen, and it has been used in the printing industry ever since.",
      },
      {
        question: "How do I generate Lorem Ipsum text?",
        answer: "Select whether you want words, sentences, or paragraphs from the type selector, set the quantity using the number input, then click 'Generate'. The output appears in the text area below where you can copy it with one click.",
      },
      {
        question: "Can I generate Lorem Ipsum by word count?",
        answer: "Yes. Select 'Words' from the type dropdown and enter the desired word count. The generator will produce exactly that many Lorem Ipsum words.",
      },
      {
        question: "What are alternatives to Lorem Ipsum for placeholder text?",
        answer: "Common alternatives include 'Cicero' text (the original Latin), 'Ipsum' variations themed around specific topics (food, music, etc.), random English words, and generated sentences using a language model. For some projects, using real representative content as placeholder is better than Lorem Ipsum to catch layout issues.",
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
    ogTitle: "Word Frequency Counter — Keyword Density Analyzer Free",
    metaDescription: "Count how often each word appears in your text. Filter stop words, check keyword density, sort by frequency or alphabetically. Free analysis tool.",
    featureList: "Word frequency table, frequency percentage, stop word filtering, sortable by count or alphabetically, CSS bar chart",
    faqs: [
      {
        question: "What is word frequency analysis?",
        answer: "Word frequency analysis counts how many times each word appears in a text. It reveals which words dominate a piece of writing, helps identify keyword density for SEO, and can be used to study writing style, detect repeated language, or analyze any text corpus.",
      },
      {
        question: "How do I find the most common words in a text?",
        answer: "Paste your text into the input area. The tool automatically counts every word and displays a ranked table with the most frequent words at the top. You can sort the table by count (descending), count (ascending), or alphabetically.",
      },
      {
        question: "What are stop words?",
        answer: "Stop words are common function words like 'the', 'a', 'an', 'is', 'are', 'in', 'on', 'of', etc. They appear very frequently in any text but carry little meaning. Filtering them out lets you see the meaningful content words. The stop word filter is enabled by default but can be turned off.",
      },
      {
        question: "How do I check keyword density?",
        answer: "The frequency percentage column shows each word as a percentage of total words. For SEO, keyword density of 1–3% is generally considered optimal. Higher density can trigger over-optimization flags. The word frequency counter makes it easy to audit keyword usage.",
      },
      {
        question: "Can I use this to analyze SEO keyword usage?",
        answer: "Yes. Paste your page content and the tool shows how frequently each keyword appears and its density percentage. This helps you ensure your target keywords appear at the right frequency — prominent enough to rank, but not so frequent that they look spammy.",
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
    ogTitle: "Extract Emails from Text — Free Email Extractor Tool",
    metaDescription: "Extract all email addresses from any text, webpage, or document instantly. Deduplicates results automatically. Copy or download as .txt. Free.",
    featureList: "Regex-based extraction, automatic deduplication, copy newline-separated or comma-separated, download as .txt",
    faqs: [
      {
        question: "How do I extract email addresses from text?",
        answer: "Paste any text, document content, or webpage source into the input area. The tool scans the text using a comprehensive email regex pattern and lists all email addresses it finds in the output. Duplicate addresses are automatically removed.",
      },
      {
        question: "Does the extractor find all email formats?",
        answer: "The extractor recognizes standard email formats including addresses with subdomains, plus signs (user+tag@example.com), hyphens, and dots. It handles the most common real-world email formats used in business and personal communications.",
      },
      {
        question: "Are duplicate emails removed automatically?",
        answer: "Yes. If the same email address appears multiple times in the pasted text, it will only appear once in the output. The deduplication is case-insensitive, so 'User@Example.com' and 'user@example.com' are treated as the same address.",
      },
      {
        question: "Can I extract emails from a pasted webpage?",
        answer: "Yes. You can copy the source HTML of any webpage and paste it into the extractor. It will find all email addresses in the HTML markup, including those in href attributes (mailto: links) and visible text.",
      },
      {
        question: "Is my text stored or logged?",
        answer: "No. All extraction happens locally in your browser using JavaScript. Your text is never sent to any server, stored, or logged. The emails you extract remain entirely private.",
      },
    ],
    relatedSlugs: ["find-and-replace", "remove-duplicate-lines", "word-counter", "text-diff-checker"],
  },
  {
    slug: "reverse-text",
    title: "Reverse Text",
    description: "Reverse text online — by characters, words, or generate upside-down flipped text using Unicode characters.",
    shortDescription: "Reverse, flip, or mirror text",
    keywords: ["reverse text", "backwards text generator", "flip text online", "mirror text"],
    category: "Transformation",
    icon: "Repeat",
    ogTitle: "Reverse Text — Backwards Text Generator Online Free",
    metaDescription: "Reverse text online by characters, words, or generate upside-down Unicode text. Mirror text for social media, puzzles, and fun. Free.",
    featureList: "Reverse entire text, reverse word order, reverse each word, Unicode upside-down flip",
    faqs: [
      {
        question: "How do I reverse text online?",
        answer: "Type or paste your text into the input area. Select your reversal mode from the options — 'Reverse entire text', 'Reverse word order', 'Reverse each word', or 'Flip upside down' — and the output updates instantly.",
      },
      {
        question: "What is the difference between reversing text and reversing words?",
        answer: "'Reverse entire text' reverses every character in the text, so 'Hello World' becomes 'dlroW olleH'. 'Reverse word order' keeps each word intact but puts them in reverse sequence, so 'Hello World' becomes 'World Hello'.",
      },
      {
        question: "How do I write backwards?",
        answer: "Use the 'Reverse entire text' mode to reverse every character in your text. Alternatively, 'Reverse each word' keeps words in order but mirrors the letters inside each word, so 'Hello World' becomes 'olleH dlroW'.",
      },
      {
        question: "What is mirrored text used for?",
        answer: "Mirrored and reversed text is used for visual puzzles, artistic typography, social media posts, and encoding text that you want to be slightly obscured. The Unicode upside-down flip generates characters that display rotated on compatible platforms.",
      },
      {
        question: "Can I reverse text for a social media post?",
        answer: "Yes. The Unicode upside-down flip mode generates text using special Unicode characters that look like upside-down letters and works on most social media platforms including Twitter/X, Instagram, and Facebook. Copy the result and paste it directly into your post.",
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
    ogTitle: "Text to Slug — URL Slug Generator Online Free",
    metaDescription: "Convert titles and phrases into clean URL slugs. Choose hyphens or underscores, remove stop words, set max length. SEO-friendly slug generator. Free.",
    featureList: "Hyphen or underscore separator, lowercase conversion, stop word removal, max length option, instant preview",
    faqs: [
      {
        question: "What is a URL slug?",
        answer: "A URL slug is the part of a URL that identifies a specific page in human-readable form. For example, in 'https://example.com/blog/my-blog-post-title', the slug is 'my-blog-post-title'. Good slugs are short, descriptive, and contain the page's primary keyword.",
      },
      {
        question: "Should I use hyphens or underscores in URLs?",
        answer: "Google recommends using hyphens (-) rather than underscores (_) in URLs. Google treats hyphens as word separators, so 'my-blog-post' is read as three separate words: 'my', 'blog', and 'post'. Underscores are treated as word joiners, so 'my_blog_post' is read as one word.",
      },
      {
        question: "How long should a URL slug be?",
        answer: "Keep slugs short and meaningful — ideally 3–5 words. Shorter slugs are easier to remember, share, and display in browser tabs. Google does not impose a strict URL length limit, but research suggests shorter URLs tend to rank better and have higher click-through rates.",
      },
      {
        question: "Should a URL slug be lowercase?",
        answer: "Yes. URL slugs should always be lowercase because URLs are case-sensitive on most servers. 'example.com/My-Post' and 'example.com/my-post' can be treated as different pages, creating duplicate content issues. Always use lowercase in slugs.",
      },
      {
        question: "What characters are not allowed in a URL?",
        answer: "URL slugs should only contain letters (a-z), numbers (0-9), and hyphens (-) or underscores (_). Spaces, special characters (#, %, &, @, etc.), punctuation, and non-ASCII characters (including accented letters) should be removed or encoded. This tool handles all of that automatically.",
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
