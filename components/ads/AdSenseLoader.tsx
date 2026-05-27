"use client";

import { useEffect } from "react";
import { hasMarketingConsent } from "@/lib/consent";

interface AdSenseLoaderProps {
  publisherId: string;
}

/**
 * Dynamically injects the AdSense script only when the user has granted
 * marketing consent. Renders nothing visible.
 */
export function AdSenseLoader({ publisherId }: AdSenseLoaderProps) {
  useEffect(() => {
    if (!publisherId || !hasMarketingConsent()) return;
    if (document.querySelector('script[src*="adsbygoogle"]')) return; // already loaded

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }, [publisherId]);

  return null;
}
