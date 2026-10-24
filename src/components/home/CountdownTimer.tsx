import { useEffect, useState } from "react";
import { useT } from "@/lib/preferences";

const TARGET_MS = 1000 * 60 * 60 * 24 * 47;

export function CountdownTimer() {
  const t = useT();
  const [target] = useState(() => Date.now() + TARGET_MS);
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff / 3_600_000) % 24);
  const mins = Math.floor((diff / 60_000) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  const items: Array<[string, number]> = [
    [t("countdownDays"), days],
    [t("countdownHours"), hours],
    [t("countdownMinutes"), mins],
    [t("countdownSeconds"), secs],
  ];
  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-4">
      {items.map(([label, value]) => (
        <div
          key={label}
          className="relative overflow-hidden rounded-2xl border border-white/25 bg-white/10 p-3 text-center backdrop-blur-xl sm:p-5"
        >
          <div className="text-3xl font-bold tabular-nums text-white sm:text-5xl">
            {String(value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-xs">
            {label}
          </div>
          <div className="pointer-events-none absolute inset-x-0 -bottom-8 h-16 bg-gradient-pink opacity-40 blur-2xl" />
        </div>
      ))}
    </div>
  );
}