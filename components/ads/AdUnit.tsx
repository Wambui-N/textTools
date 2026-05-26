"use client";

import { useEffect } from "react";

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
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  useEffect(() => {
    if (!client) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense not loaded yet
    }
  }, [client]);

  if (!client || !slot) return null;

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
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
