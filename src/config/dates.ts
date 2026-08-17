import type { Deadline, Milestone } from "./types";

/**
 * India Standard Time. India does not observe daylight saving, so a fixed
 * +05:30 offset is always correct. Every timestamp below is absolute, which
 * means the countdown is accurate for a visitor in any timezone.
 */
const IST = "+05:30";

export const conferenceWindow = {
  /** Inauguration — first day of the main conference. */
  startISO: `2027-03-18T09:00:00${IST}`,
  /** Local midnight of day 1, used to compute "Day N of 2" while live. */
  dayOneMidnightISO: `2027-03-18T00:00:00${IST}`,
  /** Close of the valedictory ceremony. */
  endISO: `2027-03-19T18:00:00${IST}`,
  totalDays: 2,
  display: "18–19 March 2027",
  workshopDisplay: "13–15 March 2027",
} as const;

/**
 * Ordered chain that drives the home-page countdown. The timer shows the first
 * milestone still in the future and rolls forward automatically as each one
 * passes, so it stays meaningful for the whole life of the site.
 *
 * Must stay sorted by `iso` ascending.
 */
export const milestones: Milestone[] = [
  {
    id: "submissions-open",
    label: "Submissions open in",
    title: "Start of Digest Submission",
    iso: `2026-09-01T00:00:00${IST}`,
    display: "1 September 2026",
  },
  {
    id: "submission-deadline",
    label: "Submission deadline in",
    title: "Digest Submission Deadline",
    iso: `2027-03-01T23:59:59${IST}`,
    display: "1 March 2027",
  },
  {
    id: "acceptance",
    label: "Acceptance notification in",
    title: "Digest Acceptance Notification",
    iso: `2027-03-08T23:59:59${IST}`,
    display: "8 March 2027",
  },
  {
    id: "camera-ready",
    label: "Camera-ready & early bird close in",
    title: "Camera-Ready Submission and Early-Bird Registration",
    iso: `2027-03-12T23:59:59${IST}`,
    display: "12 March 2027",
  },
  {
    id: "workshop",
    label: "Pre-conference workshop begins in",
    title: "Pre-Conference Workshop",
    iso: `2027-03-13T09:00:00${IST}`,
    display: "13–15 March 2027",
  },
  {
    id: "registration-close",
    label: "Registration closes in",
    title: "Registration Deadline",
    iso: `2027-03-15T23:59:59${IST}`,
    display: "15 March 2027",
  },
  {
    id: "conference",
    label: "Conference begins in",
    title: "Conference Dates",
    iso: conferenceWindow.startISO,
    display: "18–19 March 2027",
  },
];

/**
 * The deadline table shown on About and Call for Papers. Kept separate from
 * `milestones` because camera-ready and early-bird registration share a date
 * but deserve their own rows for readers.
 */
export const deadlines: Deadline[] = [
  { title: "Start of Digest Submission", display: "1 September 2026" },
  { title: "Digest Submission Deadline", display: "1 March 2027", emphasis: true },
  { title: "Digest Acceptance Notification", display: "8 March 2027" },
  { title: "Camera-Ready Paper Submission", display: "12 March 2027", emphasis: true },
  { title: "Early-Bird Registration Deadline", display: "12 March 2027" },
  { title: "Registration Deadline", display: "15 March 2027" },
  { title: "Pre-Conference Workshop", display: "13–15 March 2027" },
  { title: "Conference Dates", display: "18–19 March 2027", emphasis: true },
];

/** Flat date strings for prose and headings. */
export const dates = {
  conference: conferenceWindow.display,
  workshop: conferenceWindow.workshopDisplay,
  submissionStart: "1 September 2026",
  submissionDeadline: "1 March 2027",
  acceptanceNotification: "8 March 2027",
  cameraReady: "12 March 2027",
  earlyBird: "12 March 2027",
  registrationDeadline: "15 March 2027",
} as const;
