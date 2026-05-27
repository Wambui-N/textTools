import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/legal/CookieBanner";
import { AdSenseLoader } from "@/components/ads/AdSenseLoader";
import { GA_MEASUREMENT_ID, ADSENSE_PUBLISHER_ID } from "@/lib/legal";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ShelfCue - Free Online Text Tools",
    template: "%s | ShelfCue",
  },
  description:
    "Every text tool you reach for, finally in one place. Free online tools for counting, cleaning, converting, and analyzing text. No signup required.",
  keywords: ["text tools", "online text tools", "free text tools", "word counter", "character counter"],
  openGraph: {
    siteName: "ShelfCue",
    type: "website",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Consent Mode v2 — default all non-essential signals to denied
            until the user accepts via the cookie banner. */}
        {GA_MEASUREMENT_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{
  analytics_storage:'denied',
  ad_storage:'denied',
  ad_user_data:'denied',
  ad_personalization:'denied',
  wait_for_update:500
});
gtag('js',new Date());
gtag('config','${GA_MEASUREMENT_ID}',{send_page_view:false});
`.trim(),
              }}
            />
          </>
        )}
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col" style={{ backgroundColor: "var(--bg-primary)" }}>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CookieBanner />
        </ThemeProvider>
        {/* AdSense script is loaded client-side only when marketing consent is granted */}
        <AdSenseLoader publisherId={ADSENSE_PUBLISHER_ID} />
      </body>
    </html>
  );
}
