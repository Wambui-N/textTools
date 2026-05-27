"use client";

import { useEffect, useState } from "react";
import { ADSENSE_CLIENT } from "@/lib/adsense";
import { hasMarketingConsent } from "@/lib/consent";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdUnitProps {
  slot: string;
  format?: string;
  className?: string;
  minHeight?: number;
}

export function AdUnit({ slot, format = "auto", className = "", minHeight = 90 }: AdUnitProps) {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    setConsented(hasMarketingConsent());
  }, []);

  useEffect(() => {
    if (!consented || !ADSENSE_CLIENT || !slot) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense not loaded yet
    }
  }, [consented, slot]);

  if (!consented || !ADSENSE_CLIENT || !slot) return null;

  return (
    <div className={className} style={{ minHeight }}>
      <p
        className="mb-1 text-xs uppercase tracking-widest"
        style={{ color: "var(--text-muted)" }}
      >
        Advertisement
      </p>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
