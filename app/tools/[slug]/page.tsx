import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { tools, toolsBySlug } from "@/lib/tools-config";
import { buildToolMetadata } from "@/lib/tool-metadata";
import { toolComponents } from "@/lib/tool-registry";
import { ToolLayout } from "@/components/tools/ToolLayout";

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = toolsBySlug[slug];
  if (!tool) return {};
  return buildToolMetadata(tool);
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = toolsBySlug[slug];
  if (!tool) notFound();

  const ToolComponent = toolComponents[slug];
  if (!ToolComponent) notFound();

  return (
    <ToolLayout
      slug={tool.slug}
      title={tool.title}
      description={tool.description}
      faqs={tool.faqs}
      relatedSlugs={tool.relatedSlugs}
      featureList={tool.featureList}
      whatIs={tool.whatIs}
      useCases={tool.useCases}
      howToUse={tool.howToUse}
      features={tool.features}
    >
      <ToolComponent />
    </ToolLayout>
  );
}
