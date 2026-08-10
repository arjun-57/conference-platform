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
   *
   * TODO(organisers): replace with the dedicated conference Gmail once created.
   */
  helpDesk: "aisge-eee@srmist.edu.in",

  /** Institutional address of the organising department. */
  official: "aisge-eee@srmist.edu.in",

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
    venue: "SRM Tech Park",
    institution: "SRM Institute of Science and Technology",
    lines: [
      "SRM Tech Park, Kattankulathur Campus",
      "Chengalpattu District, Tamil Nadu – 603203, India",
    ],
    /** Used by the Google Maps links and embeds. */
    mapsQuery: "SRM Tech Park, SRM Institute of Science and Technology, Kattankulathur",
  },
} as const;

/** Every address the site should expose, in the order the footer lists them. */
export const contactEmails = [
  { label: "Help Desk", email: contact.helpDesk },
  { label: "Conference Office", email: contact.official },
] as const;
