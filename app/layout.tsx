import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shelfcue.com";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ShelfCue — Free Online Text Tools",
    template: "%s | ShelfCue",
  },
  description:
    "Every text tool you reach for, finally in one place. Free online tools for counting, cleaning, converting, and analyzing text. No signup required.",
  keywords: ["text tools", "online text tools", "free text tools", "word counter", "character counter"],
  openGraph: {
    siteName: "ShelfCue",
    type: "website",
    url: SITE_URL,
    images: [{ url: "/og/default.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {ADSENSE_CLIENT && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col" style={{ backgroundColor: "var(--bg-primary)" }}>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
