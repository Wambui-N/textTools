import { AdUnit } from "./AdUnit";

export function AdBanner({ className = "" }: { className?: string }) {
  const slot = process.env.NEXT_PUBLIC_AD_SLOT_LEADERBOARD || "";
  return (
    <div className={`w-full ${className}`} style={{ minHeight: 100 }}>
      <AdUnit slot={slot} format="horizontal" minHeight={100} />
    </div>
  );
}
