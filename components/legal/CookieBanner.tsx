"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getConsent, setConsent, type ConsentChoice } from "@/lib/consent";
import { GA_MEASUREMENT_ID } from "@/lib/legal";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    adsbygoogle: unknown[];
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent() === null) {
      setVisible(true);
    }
  }, []);

  function updateConsentMode(choice: ConsentChoice) {
    if (typeof window === "undefined" || !window.gtag) return;
    if (choice === "all") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
      window.gtag("config", GA_MEASUREMENT_ID);
    }
    // For "essential" the defaults (denied) remain in place - no update needed
  }

  function handleAccept() {
    setConsent("all");
    updateConsentMode("all");
    setVisible(false);
    // Trigger a page reload so AdSense script and AdUnit components pick up consent
    window.location.reload();
  }

  function handleReject() {
    setConsent("essential");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t px-4 py-4 shadow-lg"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          We use cookies for site analytics (Google Analytics) and to serve ads (Google AdSense).
          Your text input is never collected.{" "}
          <Link
            href="/privacy"
            className="underline"
            style={{ color: "var(--accent)" }}
          >
            Privacy Policy
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleReject}
            style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
          >
            Reject non-essential
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            style={{ backgroundColor: "var(--accent)", color: "#fff" }}
          >
            Accept all
          </Button>
        </div>
      </div>
    </div>
  );
}
