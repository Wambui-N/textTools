"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HOMEPAGE_FAQS as FAQS } from "@/lib/homepage-faqs";

export function HomepageFAQ() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {FAQS.map((faq, i) => (
        <AccordionItem
          key={i}
          value={`faq-${i}`}
          className="rounded-lg border px-4"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-tool)" }}
        >
          <AccordionTrigger
            className="text-sm font-medium text-left hover:no-underline"
            style={{ color: "var(--text-primary)" }}
          >
            {faq.q}
          </AccordionTrigger>
          <AccordionContent
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

