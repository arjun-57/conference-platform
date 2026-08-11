"use client";

import * as React from "react";
import { conferenceWindow, milestones } from "@/config";

const MS_PER_DAY = 86_400_000;

const CONFERENCE_START = new Date(conferenceWindow.startISO).getTime();
const CONFERENCE_END = new Date(conferenceWindow.endISO).getTime();
const DAY_ONE_MIDNIGHT = new Date(conferenceWindow.dayOneMidnightISO).getTime();
/** Precomputed milestone chain the countdown rolls through, in date order. */
const MILESTONE_TARGETS = milestones.map((milestone) => ({
  label: milestone.label,
  time: new Date(milestone.iso).getTime(),
}));

type Phase =
  | { kind: "upcoming"; label: string; parts: [number, number, number, number] }
  | { kind: "live"; day: number }
  | { kind: "ended" };

function resolvePhase(now: number): Phase {
  if (now >= CONFERENCE_END) return { kind: "ended" };

  if (now >= CONFERENCE_START) {
    const elapsed = Math.floor((now - DAY_ONE_MIDNIGHT) / MS_PER_DAY) + 1;
    const day = Math.min(conferenceWindow.totalDays, Math.max(1, elapsed));
    return { kind: "live", day };
  }

  const next =
    MILESTONE_TARGETS.find((milestone) => milestone.time > now) ?? {
      label: "Conference begins in",
      time: CONFERENCE_START,
    };

  const diff = Math.max(0, next.time - now);
  return {
    kind: "upcoming",
    label: next.label,
    parts: [
      Math.floor(diff / MS_PER_DAY),
      Math.floor(diff / 3_600_000) % 24,
      Math.floor(diff / 60_000) % 60,
      Math.floor(diff / 1000) % 60,
    ],
  };
}

/** Ticks once a second. Returns `null` on the server so SSR output is stable. */
function subscribe(onStoreChange: () => void) {
  const id = setInterval(onStoreChange, 1000);
  return () => clearInterval(id);
}
const getSnapshot = () => Math.floor(Date.now() / 1000);
const getServerSnapshot = () => null;

const UNITS = ["Days", "Hours", "Minutes", "Seconds"] as const;

function Segment({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex h-16 min-w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-3 text-3xl font-black tabular-nums text-white backdrop-blur sm:h-20 sm:min-w-20 sm:text-4xl">
        {String(value).padStart(2, "0")}
      </div>
      <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-brand-light/80">
        {label}
      </span>
    </div>
  );
}

/**
 * Auto-advancing conference countdown.
 *
 * Counts down to the next milestone in the timeline, rolling forward as each
 * passes. During 15–18 March 2027 it switches to a live "Day N of 4" state,
 * and afterwards to a closing message.
 */
export function MilestoneCountdown() {
  const tick = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  // Server render and first hydration pass: reserve the layout, show nothing.
  if (tick === null) {
    return (
      <div
        className="flex items-start justify-center gap-3 opacity-0 sm:gap-4"
        aria-hidden="true"
      >
        {UNITS.map((unit) => (
          <Segment key={unit} value={0} label={unit} />
        ))}
      </div>
    );
  }

  const phase = resolvePhase(tick * 1000);

  if (phase.kind === "ended") {
    return (
      <p className="text-center text-lg font-bold text-brand-light">
        Thank you to everyone who joined us at AI-SGE 2027.
      </p>
    );
  }

  if (phase.kind === "live") {
    return (
      <div className="space-y-2 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light/70">
          Happening now
        </p>
        <p className="text-3xl font-black text-white sm:text-4xl">
          Day {phase.day} of {conferenceWindow.totalDays}
        </p>
        <p className="text-sm text-white/60">
          {conferenceWindow.display} · {conferenceWindow.workshopDisplay} workshop
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light/70">
        {phase.label}
      </p>
      <div className="flex items-start justify-center gap-3 sm:gap-4">
        {phase.parts.map((value, i) => (
          <React.Fragment key={UNITS[i]}>
            {i > 0 && (
              <span
                aria-hidden="true"
                className="mt-5 text-2xl font-black text-white/40 sm:mt-6"
              >
                :
              </span>
            )}
            <Segment value={value} label={UNITS[i]} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
