import { AD_SLOT_LEADERBOARD } from "@/lib/adsense";
import { AdUnit } from "./AdUnit";

export function AdBanner({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full ${className}`} style={{ minHeight: 50 }}>
      <AdUnit slot={AD_SLOT_LEADERBOARD} format="auto" minHeight={50} />
    </div>
  );
}
