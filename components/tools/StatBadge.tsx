interface StatBadgeProps {
  label: string;
  value: string | number;
}

export function StatBadge({ label, value }: StatBadgeProps) {
  return (
    <div
      className="flex flex-col items-center rounded-lg px-4 py-3 text-center"
      style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
    >
      <span
        className="text-2xl font-semibold tabular-nums"
        style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
      >
        {value}
      </span>
      <span className="mt-0.5 text-xs" style={{ color: "var(--text-muted)" }}>
        {label}
      </span>
    </div>
  );
}
