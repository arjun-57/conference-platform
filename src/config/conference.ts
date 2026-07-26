export const conferenceConfig = {
  name: "AI-SGE 2027",
  fullName:
    "International Conference on Artificial Intelligence and Sustainable Green Energy Technologies for Future Electrification",
  shortName: "AI-SGE '27",
  edition: "1st Edition",
  description:
    "AI-SGE 2027 brings together researchers, academicians, and industry professionals from across the world to exchange ideas and present innovations in artificial intelligence, sustainable energy technologies, and future electrification systems.",
  location: "SRM Institute of Science and Technology, Kattankulathur Campus, Chennai, India",
  partner: "Universiti Tenaga Nasional (UNITEN), Malaysia",
  dates: {
    /** ISO 8601 — used by the countdown clock */
    conferenceStartISO: "2027-03-15T09:00:00+05:30",
    conference: "15–18 March 2027",
    workshopDates: "13–15 March 2027",
    digestSubmissionStart: "1 September 2026",
    digestSubmissionDeadline: "1 December 2026",
    digestAcceptanceNotification: "15 January 2027",
    cameraReady: "10 February 2027",
    earlyBirdRegistration: "10 February 2027",
    registrationDeadline: "28 February 2027",
  },
  submission: {
    platform: "Microsoft CMT",
    portalUrl: "", // Fill in the actual CMT URL when available
    status: "The Microsoft CMT submission link will be published here when submissions open.",
  },
  publication:
    "All accepted and presented papers will be submitted for publication in Lecture Notes on Electrical Engineering (Springer). Selected extended versions of high-quality papers will be considered for publication in Scopus-indexed journals post peer-review.",
  features: [
    "Distinguished Keynote Lectures",
    "Technical Paper Presentations",
    "Special Sessions and Tutorials",
    "Industry Exhibitions",
  ],
  tracks: [
    "Power Electronics and Energy Conversion",
    "Electric Vehicles and Electrified Transportation",
    "Renewable Energy Systems",
    "Hydrogen Energy Technologies",
    "Artificial Intelligence in Energy Systems",
    "Smart Grid and Energy Storage",
  ],
  venueNote:
    "Located near Chennai, one of India's major educational and technological hubs, the SRM IST Kattankulathur campus offers a vibrant academic environment with world-class infrastructure.",
  contact: {
    email: "aisge-eee@srmist.edu.in",
    helpdesk: "aisge-eee@srmist.edu.in", // Update with dedicated helpdesk email if different
    coordinators: [
      {
        name: "[Coordinator Name 1]",
        designation: "Conference Coordinator",
        email: "coordinator1@srmist.edu.in",
        phone: "+91-XXXXX-XXXXX",
      },
      {
        name: "[Coordinator Name 2]",
        designation: "Conference Coordinator",
        email: "coordinator2@srmist.edu.in",
        phone: "+91-XXXXX-XXXXX",
      },
    ],
    convener: {
      name: "[Convener Name]",
      designation: "Convener, AI-SGE 2027",
      email: "convener@srmist.edu.in",
      phone: "+91-XXXXX-XXXXX",
    },
  },
  registration: {
    fees: [
      { category: "Indian – Student (UG/PG)", early: "₹[TBD]", regular: "₹[TBD]" },
      { category: "Indian – Research Scholar (PhD)", early: "₹[TBD]", regular: "₹[TBD]" },
      { category: "Indian – Faculty / Academic", early: "₹[TBD]", regular: "₹[TBD]" },
      { category: "Indian – Industry Professional", early: "₹[TBD]", regular: "₹[TBD]" },
      { category: "Foreign – Student / Scholar", early: "USD [TBD]", regular: "USD [TBD]" },
      { category: "Foreign – Faculty / Industry", early: "USD [TBD]", regular: "USD [TBD]" },
    ],
    note:
      "Registration fees are exclusive of 18% GST. Payment link will be shared with accepted authors. Attendee registration (non-presenting) details will be announced separately.",
    earlyBirdCutoff: "10 February 2027",
  },
  program: {
    workshopNote:
      "A pre-conference workshop will be conducted from 13–15 March 2027 by eminent professors from UK universities. The workshop focuses on advanced topics in sustainable energy and AI applications.",
    brochureUrl: "", // Populate with actual PDF URL when available
    schedule: [
      {
        day: "Day 0 – 13 March 2027",
        label: "Pre-Conference Workshop (Day 1)",
        sessions: ["Workshop Session — Morning", "Workshop Session — Afternoon"],
      },
      {
        day: "Day 0 – 14 March 2027",
        label: "Pre-Conference Workshop (Day 2)",
        sessions: ["Workshop Session — Morning", "Workshop Session — Afternoon"],
      },
      {
        day: "Day 0 – 15 March 2027",
        label: "Pre-Conference Workshop (Day 3) & Inauguration",
        sessions: ["Workshop Session — Morning", "Inaugural Ceremony — Afternoon"],
      },
      {
        day: "Day 1 – 16 March 2027",
        label: "Technical Sessions",
        sessions: [
          "Keynote Address 1",
          "Technical Session I — Power Electronics & Energy Conversion",
          "Technical Session II — Renewable Energy Systems",
        ],
      },
      {
        day: "Day 2 – 17 March 2027",
        label: "Technical Sessions",
        sessions: [
          "Keynote Address 2",
          "Technical Session III — Electric Vehicles & Electrified Transportation",
          "Technical Session IV — AI in Energy Systems",
        ],
      },
      {
        day: "Day 3 – 18 March 2027",
        label: "Closing Day",
        sessions: [
          "Technical Session V — Smart Grid & Energy Storage",
          "Panel Discussion",
          "Valedictory Ceremony & Award Distribution",
        ],
      },
    ],
  },
  newsTicker: [
    "🎉 AI-SGE 2027 — 1st International Conference organized by SRM IST & UNITEN Malaysia",
    "📅 Conference Dates: 15–18 March 2027 | Pre-Conference Workshop: 13–15 March 2027",
    "📝 Paper Submission Open — Submit via Microsoft CMT",
    "📖 Accepted papers to be published in Springer LNEE (Scopus / ESCI indexed)",
    "🌍 Selected papers invited for Scopus-indexed journal publication post peer-review",
    "🗓️ Abstract Submission Deadline: 1 December 2026",
    "📍 Venue: SRM IST Kattankulathur Campus, Chennai, India",
  ],
  organizingCommittee: {
    patrons: [
      { name: "Dr. T. R. Paarivendhar", role: "Chancellor, SRMIST" },
      { name: "Dr. P. Ravi Pachaimuthu", role: "Pro-Chancellor (Administration), SRMIST" },
      { name: "Dr. Sathyanarayanan", role: "Pro-Chancellor (Academics), SRMIST" },
    ],
    honoraryChairs: [
      { name: "Dr. C. Muthamizhchelvan", role: "Vice Chancellor, SRMIST" },
      { name: "Dr. XXXXX", role: "Vice Chancellor, UNITEN, Malaysia" },
      { name: "Dr. S. Ponnusamy", role: "Registrar, SRMIST" },
      { name: "Dr. Leenus Jesu Martin M", role: "Dean, Faculty of E & T, SRMIST" },
      { name: "Dr. Vijayakumar", role: "Chairperson, SoEE, SRMIST" },
    ],
    generalChairs: [
      { name: "Dr. R Shridhar", role: "HOD/EEE, SRMIST" },
      { name: "Dr. Vigna K Ramachandramurthy", role: "Pro-VC (Research & Innovation), UNITEN, Malaysia" },
    ],
    technicalProgramChairs: [
      { name: "Dr. M Jagabar Sathik", role: "SRMIST" },
      { name: "Dr. R Narayamoorthi", role: "SRMIST" },
      { name: "Dr. U Sowwmiya", role: "SRMIST" },
      { name: "Dr. XXXXXX", role: "UNITEN, Malaysia" },
      { name: "Dr. XXXXXX", role: "UNITEN, Malaysia" },
    ],
    publicationCommittee: [
      { name: "Dr. XXXXXX", role: "SRMIST" },
      { name: "Dr. XXXXXX", role: "SRMIST" },
      { name: "Dr. XXXXXX", role: "UNITEN, Malaysia" },
    ],
    plenaryCommittee: [
      { name: "Dr. A Rathinam", role: "SRMIST" },
      { name: "Dr. Preetha Roselyn", role: "SRMIST" },
      { name: "Dr. C Bharathiraja", role: "SRMIST" },
      { name: "Dr. N Chellammal", role: "SRMIST" },
      { name: "Dr. D Suchitra", role: "SRMIST" },
    ],
    financeCommittee: Array.from({ length: 2 }, () => ({ name: "Dr. XXXXXX", role: "SRMIST" })),
    registrationCommittee: Array.from({ length: 6 }, () => ({ name: "Dr. XXXXXX", role: "SRMIST" })),
    publicityCommittee: Array.from({ length: 8 }, () => ({ name: "Dr. XXXXXX", role: "SRMIST" })),
    industryEngagementCommittee: Array.from({ length: 4 }, () => ({ name: "Dr. XXXXXX", role: "SRMIST" })),
    localHospitalityCommittee: Array.from({ length: 8 }, () => ({ name: "Dr. XXXXXX", role: "SRMIST" })),
  },
  advisoryCommittee: [
    "Prof. Krishna Vasudevan, IIT Madras, India", "Prof. Bhim Singh, IIT Delhi, India",
    "Prof. Pramod Agarwal, IIT Roorkee, India", "Prof. Marco Liserre, University of Kiel, Germany",
    "Prof. B. G. Fernandes, IIT Bombay, India", "Prof. Vivek Agarwal, IIT Bombay, India",
    "Prof. K Gopakumar, IISC Bangalore, India", "Prof. Frede Blaabjerg, Aalborg University, Denmark",
    "Prof. Prasad Enjeti, Texas A&M University, USA", "Prof. Kamal Al Haddad, Ecole de Technologie Superieure, Canada",
    "Prof. Ambrish Chandra, Ecole de Technologie Superieure, Canada", "Prof. Mahesh Kumar Mishra, IIT Madras, India",
    "Prof. Joachim Holtz, University of Wuppertal, Germany", "Prof. Jose Rodriguez, Universidad San Sebastian, Chile",
    "Prof. Chandan Chakraborty, IIT Kharagpur, India", "Prof. Kouki Matsuse, Meiji University, Japan",
    "Prof. Praveen Jain, Queen's University, Canada", "Prof. Kaushik Rajashekara, University of Houston, USA",
    "Prof. Milos Manic, Virginia Commonwealth University, USA",
    "Prof. Anurag Srivastava, West Virginia University and Washington State University, USA",
    "Prof. Yang Shi, University of Victoria, Canada", "Prof. Santanu Mishra, IIT Delhi, India",
    "Prof. Gao Huijun, Harbin Institute of Technology, China",
    "Prof. Samir Kouro, Universidad Tecnica Federico Santa Maria, Chile",
    "Prof. Subhashish Bhattacharya, North Carolina State University, USA",
    "Prof. Mariusz Malinowski, Warsaw University of Technology, Poland",
    "Prof. Dehong (Mark) Xu, Zhejiang University, China",
    "Prof. Joseph Olorunfemi Ojo, Tennessee Technological University, USA",
    "Prof. Arindam Ghosh, Curtin University, Australia",
  ],
};

export type CommitteeMember = { name: string; role: string };
export type CommitteeSection = { title: string; members: CommitteeMember[] };

export const committeeSections: CommitteeSection[] = [
  { title: "Patrons", members: conferenceConfig.organizingCommittee.patrons },
  { title: "Honorary Chairs", members: conferenceConfig.organizingCommittee.honoraryChairs },
  { title: "General Chairs", members: conferenceConfig.organizingCommittee.generalChairs },
  { title: "Technical Programme Chairs", members: conferenceConfig.organizingCommittee.technicalProgramChairs },
  { title: "Publication Committee", members: conferenceConfig.organizingCommittee.publicationCommittee },
  { title: "Plenary Committee", members: conferenceConfig.organizingCommittee.plenaryCommittee },
  { title: "Finance Committee", members: conferenceConfig.organizingCommittee.financeCommittee },
  { title: "Registration Committee", members: conferenceConfig.organizingCommittee.registrationCommittee },
  { title: "Publicity Committee", members: conferenceConfig.organizingCommittee.publicityCommittee },
  { title: "Industry Engagement and Sponsorship Committee", members: conferenceConfig.organizingCommittee.industryEngagementCommittee },
  { title: "Local Hospitality Committee", members: conferenceConfig.organizingCommittee.localHospitalityCommittee },
];
