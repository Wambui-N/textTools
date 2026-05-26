export type ToolCategory = "Analysis" | "Cleaning" | "Transformation" | "Generation" | "Utilities";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ToolDefinition {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  keywords: string[];
  category: ToolCategory;
  icon: string;
  faqs: FAQItem[];
  relatedSlugs: string[];
  ogTitle?: string;
  metaDescription?: string;
  featureList?: string;
}
