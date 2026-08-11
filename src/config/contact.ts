import type { Person } from "./types";

/**
 * SINGLE SOURCE OF TRUTH for every address and phone number on the site.
 *
 * ── TO UPDATE THE CONFERENCE EMAIL ──────────────────────────────────────────
 * Change `helpDesk` below. The footer, every `mailto:` link and every contact
 * block on all 9 pages read from here, so one edit updates the whole site.
 * ────────────────────────────────────────────────────────────────────────────
 */
export const contact = {
  /**
   * Primary public contact, shown first in the footer and used as the default
   * "Contact" address across the site.
   */
  helpDesk: "aisgeconference@gmail.com",

  /** Institutional address of the organising department. */
  official: "aisgeconference@gmail.com",

  /** Conference coordinators — shown on the Program page and in the footer. */
  coordinators: [
    {
      name: null,
      role: "Conference Coordinator",
      email: null,
      phone: null,
    },
    {
      name: null,
      role: "Conference Coordinator",
      email: null,
      phone: null,
    },
  ] satisfies Person[],

  convener: {
    name: null,
    role: "Convener, AI-SGE 2027",
    email: null,
    phone: null,
  } satisfies Person,

  address: {
    venue: "Dr. T.P Ganesan Auditorium",
    institution: "SRM Institute of Science and Technology",
    lines: [
      "R2FW+WM3, Intra College Rd, Potheri",
      "SRM Nagar, Kattankulathur, Tamil Nadu 603203",
    ],
    /** Used by the Google Maps links and embeds. */
    mapsUrl: "https://maps.app.goo.gl/HKZ4CWzYybqrTgY69",
    mapsQuery: "Dr.+T.P+Ganesan+Auditorium,+SRM+Institute+of+Science+and+Technology,+Kattankulathur",
  },
} as const;

/** Every address the site should expose, in the order the footer lists them. */
export const contactEmails = [
  { label: "Help Desk", email: contact.helpDesk },
  { label: "Conference Office", email: contact.official },
] as const;
