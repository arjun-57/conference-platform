/**
 * Conference identity and headline content.
 * Committee, program, registration and contact data live in sibling modules.
 */

export const conference = {
  name: "AISGE2027",
  shortName: "AISGE2027",
  fullName:
    "International Conference on Artificial Intelligence and Sustainable Green Energy Technologies for Future Electrification",
  edition: "1st Edition",
  description:
    "AISGE2027 brings together researchers, academicians, and industry professionals from across the world to exchange ideas and present innovations in artificial intelligence, sustainable energy technologies, and future electrification systems.",
  host: "SRM Institute of Science and Technology",
  location:
    "Dr. T.P Ganesan Auditorium, SRM Institute of Science and Technology, Kattankulathur Campus, Chennai, India",
  locationShort: "Dr. T.P Ganesan Auditorium, SRM IST Kattankulathur, Chennai",
  partner:
    "Universiti Tenaga Nasional (UNITEN) Malaysia, Prince Mohammad Bin Fahd University (PMU) Saudi Arabia & Universitas Ahmad Dahlan (UAD) Indonesia",
  partners: [
    "Universiti Tenaga Nasional (UNITEN), Malaysia",
    "Prince Mohammad Bin Fahd University (PMU), Saudi Arabia",
    "Universitas Ahmad Dahlan (UAD), Indonesia",
  ],
  venueNote:
    "Hosted at Dr. T.P Ganesan Auditorium within the SRM IST Kattankulathur campus near Chennai, one of India's major educational and technological hubs, offering a vibrant academic environment with world-class infrastructure.",
  cmtAcknowledgment:
    "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.",
} as const;

/**
 * ── MICROSOFT CMT PORTAL ──────────────────────────────────────────────────
 * Submission portal configured for the conference.
 * ────────────────────────────────────────────────────────────────────────────
 */
export const submission = {
  platform: "Microsoft CMT",
  portalUrl: "#",
  status:
    "Paper submissions and peer review are managed through Microsoft CMT. Submit your digest through the official portal.",
  /** Official Springer LNEE manuscript preparation guidelines. */
  templateUrl:
    "https://www.springer.com/gp/authors-editors/book-authors-editors/manuscript-preparation/5636",
} as const;

/** True when the submission portal is live. Drives every submission button's state. */
export const isSubmissionOpen = Boolean(submission.portalUrl);

export const publication = {
  headline: "Springer LNEE and Scopus-Indexed Publication",
  proceedings: "Lecture Notes on Electrical Engineering (Springer)",
  summary:
    "All accepted and presented papers will be submitted for publication in Lecture Notes on Electrical Engineering (Springer). Selected extended versions of high-quality papers will be considered for publication in Scopus-indexed journals post peer-review.",
} as const;

export const tracks = [
  "Power Electronics and Energy Conversion",
  "Electric Vehicles and Electrified Transportation",
  "Renewable Energy Systems",
  "Hydrogen Energy Technologies",
  "Artificial Intelligence in Energy Systems",
  "Smart Grid and Energy Storage",
] as const;

export const features = [
  "Distinguished Keynote Lectures",
  "Technical Paper Presentations",
  "Special Sessions and Tutorials",
  "Industry Exhibitions",
] as const;

export const objectives = [
  "Provide a global forum for researchers and practitioners to present original research.",
  "Foster interdisciplinary collaboration between academia, industry, and research organizations.",
  "Advance knowledge in AI applications, sustainable energy, and future electrification.",
  "Promote technology transfer and commercialization of research outcomes.",
  "Build lasting professional networks among the global engineering community.",
] as const;

/** Scrolling announcement strip on the home page. */
export const newsTicker = [
  "🎉 AISGE2027 — 1st International Conference organized by SRM IST, UNITEN Malaysia, PMU Saudi Arabia & UAD Indonesia",
  "📅 Conference Dates: 18-19 March 2027 | Pre-Conference Workshop: 13–15 March 2027",
  "📝 Paper Submission via Microsoft CMT",
  "📖 Accepted papers to be published in Springer LNEE (Scopus / ESCI indexed)",
  "🌍 Selected papers invited for Scopus-indexed journal publication post peer-review",
  "🗓️ Digest Submission Deadline: 1 March 2027",
  "📍 Venue: SRM Tech Park, SRM IST Kattankulathur Campus, Chennai, India",
] as const;
