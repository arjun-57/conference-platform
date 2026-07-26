"use client";

import * as React from "react";
import { conferenceConfig } from "@/config/conference";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

function calcTimeLeft(): TimeLeft {
  const target = new Date(conferenceConfig.dates.conferenceStartISO).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  };
}

function Segment({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-3xl font-black tabular-nums backdrop-blur sm:h-20 sm:w-20 sm:text-4xl"
        style={{ animation: "count-pulse 1s ease-in-out infinite" }}
      >
        {display}
      </div>
      <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-brand-light/80">{label}</span>
    </div>
  );
}

export function CountdownTimer() {
  const [time, setTime] = React.useState<TimeLeft | null>(null);

  React.useEffect(() => {
    // Run on client only — prevents SSR/client mismatch
    setTime(calcTimeLeft());
    const id = setInterval(() => setTime(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  // Render a stable placeholder during SSR hydration
  if (!time) {
    return (
      <div className="flex items-start justify-center gap-3 sm:gap-4 opacity-0 select-none" aria-hidden>
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-3xl font-black tabular-nums sm:h-20 sm:w-20 sm:text-4xl">
              00
            </div>
            <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-brand-light/80">{label}</span>
          </div>
        ))}
      </div>
    );
  }

  if (time.expired) {
    return (
      <p className="text-lg font-bold text-brand-light">
        🎉 The conference is now underway!
      </p>
    );
  }

  return (
    <div className="space-y-3 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light/70">
        Conference begins in
      </p>
      <div className="flex items-start justify-center gap-3 sm:gap-4">
        <Segment value={time.days} label="Days" />
        <span className="mt-5 text-2xl font-black text-white/40 sm:mt-6">:</span>
        <Segment value={time.hours} label="Hours" />
        <span className="mt-5 text-2xl font-black text-white/40 sm:mt-6">:</span>
        <Segment value={time.minutes} label="Minutes" />
        <span className="mt-5 text-2xl font-black text-white/40 sm:mt-6">:</span>
        <Segment value={time.seconds} label="Seconds" />
      </div>
    </div>
  );
}
