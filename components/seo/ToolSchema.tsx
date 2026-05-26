const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

interface ToolSchemaProps {
  name: string;
  description: string;
  slug: string;
  featureList?: string;
}

export function ToolSchema({ name, description, slug, featureList }: ToolSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    url: `${SITE_URL}/tools/${slug}`,
    description,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    ...(featureList ? { featureList } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
