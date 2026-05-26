import { AdUnit } from "./AdUnit";

export function AdSidebar({ className = "" }: { className?: string }) {
  const slot = process.env.NEXT_PUBLIC_AD_SLOT_SIDEBAR || "";
  return (
    <div className={`w-full ${className}`} style={{ minHeight: 260 }}>
      <AdUnit slot={slot} format="rectangle" minHeight={260} />
    </div>
  );
}
