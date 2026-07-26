import type { ScheduleDay } from "./types";

export const program = {
  workshop: {
    title: "Pre-Conference Workshop",
    dates: "13–15 March 2027",
    note: "A pre-conference workshop will be conducted from 13–15 March 2027 by eminent professors from UK universities. The workshop focuses on advanced topics in sustainable energy and AI applications.",
    /**
     * TODO(organisers): drop the brochure PDF into `public/documents/` and set
     * this to its path, e.g. "/documents/ai-sge-2027-workshop-brochure.pdf".
     * While empty, the page shows a "Coming Soon" state instead of a dead link.
     */
    brochureUrl: "",
  },

  /**
   * Day-wise programme. The workshop runs 13–15 March; the main conference
   * opens with the inauguration on 15 March and closes on 18 March.
   */
  schedule: [
    {
      day: "13 March 2027",
      label: "Pre-Conference Workshop — Day 1",
      sessions: ["Workshop Session — Morning", "Workshop Session — Afternoon"],
    },
    {
      day: "14 March 2027",
      label: "Pre-Conference Workshop — Day 2",
      sessions: ["Workshop Session — Morning", "Workshop Session — Afternoon"],
    },
    {
      day: "15 March 2027",
      label: "Workshop Day 3 & Conference Inauguration",
      sessions: ["Workshop Session — Morning", "Inaugural Ceremony — Afternoon"],
    },
    {
      day: "16 March 2027",
      label: "Technical Sessions — Day 1",
      sessions: [
        "Keynote Address 1",
        "Technical Session I — Power Electronics & Energy Conversion",
        "Technical Session II — Renewable Energy Systems",
      ],
    },
    {
      day: "17 March 2027",
      label: "Technical Sessions — Day 2",
      sessions: [
        "Keynote Address 2",
        "Technical Session III — Electric Vehicles & Electrified Transportation",
        "Technical Session IV — AI in Energy Systems",
      ],
    },
    {
      day: "18 March 2027",
      label: "Closing Day",
      sessions: [
        "Technical Session V — Smart Grid & Energy Storage",
        "Panel Discussion",
        "Valedictory Ceremony & Award Distribution",
      ],
    },
  ] satisfies ScheduleDay[],

  scheduleNote:
    "Session timings, room assignments, speaker names and session chairs will be published once the technical programme committee finalises the programme.",
} as const;
