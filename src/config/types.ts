/**
 * Shared content types for the conference site.
 *
 * Fields typed `string | null` are values that are not yet confirmed. Use
 * `orTBD()` when rendering them so unfilled content shows "To be announced"
 * instead of leaking a placeholder like "Dr. XXXXXX" to the public site.
 */

export const TBD = "To be announced";

/** Render helper: falls back to "To be announced" for empty/unset values. */
export function orTBD(value: string | null | undefined): string {
  return value && value.trim() ? value : TBD;
}

/** True when a value still needs to be filled in by the organisers. */
export function isPending(value: string | null | undefined): boolean {
  return !value || !value.trim();
}

export type Person = {
  /** `null` until the name is confirmed. */
  name: string | null;
  /** Designation and/or institution, e.g. "HOD/EEE, SRMIST". */
  role: string;
  email?: string | null;
  phone?: string | null;
};

export type CommitteeGroup = {
  title: string;
  members: Person[];
  /**
   * Seats that exist on the committee but are not yet publicly named.
   * Rendered as a single "N members to be announced" note rather than N
   * empty cards.
   */
  pending?: number;
};

export type CommitteeSection = {
  id: string;
  title: string;
  description?: string;
  groups: CommitteeGroup[];
};

export type Milestone = {
  id: string;
  /** Short phrase used by the countdown, e.g. "Submission deadline in". */
  label: string;
  /** Full label used in the deadlines table. */
  title: string;
  /** Absolute IST timestamp. Drives the countdown. */
  iso: string;
  /** Human-readable date shown to visitors. */
  display: string;
};

export type Deadline = {
  title: string;
  display: string;
  /** Marks the row as the most time-critical one in the table. */
  emphasis?: boolean;
};

export type FeeRow = {
  category: string;
  early: string | null;
  regular: string | null;
};

export type SponsorTier = {
  tier: string;
  amount: string;
  booth: string;
};

export type Hotel = {
  name: string | null;
  distance: string | null;
  price: string | null;
  url?: string | null;
};

export type ScheduleDay = {
  day: string;
  label: string;
  sessions: string[];
};

export type TravelRoute = {
  /** lucide-react icon name resolved by the page. */
  title: string;
  body: string;
};
