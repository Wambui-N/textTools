import { AD_SLOT_SIDEBAR } from "@/lib/adsense";
import { AdUnit } from "./AdUnit";

export function AdSidebar({ className = "" }: { className?: string }) {
  const slot = AD_SLOT_SIDEBAR;
  return (
    <div className={`w-full ${className}`} style={{ minHeight: 260 }}>
      <AdUnit slot={slot} format="rectangle" minHeight={260} />
    </div>
  );
}
