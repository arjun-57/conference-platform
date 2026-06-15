export const conferenceConfig = {
  name: "AI-SGE 2027",
  fullName:
    "International Conference on Artificial Intelligence and Sustainable Green Energy Technologies for Future Electrification",
  shortName: "AI-SGE '27",
  description:
    "The 1st edition of AI-SGE 2027 will bring together researchers, academicians, and industry professionals from across the world to exchange ideas and present innovations in artificial intelligence, sustainable energy technologies, and future electrification systems.",
  location: "SRM Institute of Science and Technology, Kattankulathur Campus, Chennai, India",
  partner: "Universiti Tenaga Nasional (UNITEN), Malaysia",
  dates: {
    conference: "18–19 March 2027",
    digestSubmissionStart: "1 September 2026",
    digestSubmissionDeadline: "1 December 2026",
    digestAcceptanceNotification: "15 January 2027",
    cameraReady: "10 February 2027",
    earlyBirdRegistration: "10 February 2027",
    // ISO strings for platform logic
    submissionDeadline: "2026-12-01T23:59:59Z",
    reviewNotification: "15 January 2027",
  },
  features: [
    "Distinguished Keynote Lectures",
    "Technical Paper Presentations",
    "Special Sessions and Tutorials",
    "Industry Exhibitions",
  ],
  tracks: [
    "Power Electronics",
    "Electric Vehicles",
    "Renewable Energy",
    "Hydrogen Energy",
    "Artificial Intelligence in Energy Systems",
    "Smart Grid Technologies",
  ],
  venueNote:
    "Located near Chennai, one of India's major educational and technological hubs, the SRM IST Kattankulathur campus offers a vibrant academic environment with world-class infrastructure.",
  fees: {
    studentAuthor: 250,
    regularAuthor: 450,
    attendeeOnly: 150,
  },
  contact: {
    email: "aisge2027@srmist.edu.in",
    twitter: "@AISGE2027",
  },
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
    financeCommittee: [
      { name: "Dr. XXXXXX", role: "SRMIST" },
      { name: "Dr. XXXXXX", role: "SRMIST" },
    ],
    registrationCommittee: Array.from({ length: 6 }, (_, i) => ({
      name: `Dr. XXXXXX`,
      role: "SRMIST",
    })),
    publicityCommittee: Array.from({ length: 8 }, (_, i) => ({
      name: `Dr. XXXXXX`,
      role: "SRMIST",
    })),
    industryEngagementCommittee: Array.from({ length: 4 }, (_, i) => ({
      name: `Dr. XXXXXX`,
      role: "SRMIST",
    })),
    localHospitalityCommittee: Array.from({ length: 8 }, (_, i) => ({
      name: `Dr. XXXXXX`,
      role: "SRMIST",
    })),
  },
  advisoryCommittee: [
    "Prof. Krishna Vasudevan, IIT Madras, India",
    "Prof. Bhim Singh, IIT Delhi, India",
    "Prof. Pramod Agarwal, IIT Roorkee, India",
    "Prof. Marco Liserre, University of Kiel, Germany",
    "Prof. B. G. Fernandes, IIT Bombay, India",
    "Prof. Vivek Agarwal, IIT Bombay, India",
    "Prof. K Gopakumar, IISC Bangalore, India",
    "Prof. Frede Blaabjerg, Aalborg University, Denmark",
    "Prof. Prasad Enjeti, Texas A&M University, USA",
    "Prof. Kamal Al Haddad, École de Technologie Superieure, Canada",
    "Prof. Ambrish Chandra, École de Technologie Superieure, Canada",
    "Prof. Mahesh Kumar Mishra, IIT Madras, India",
    "Prof. Joachim Holtz, University of Wuppertal, Germany",
    "Prof. Jose Rodriguez, Universidad San Sebastian, Chile",
    "Prof. Chandan Chakraborty, IIT Kharagpur, India",
    "Prof. Kouki Matsuse, Meiji University, Japan",
    "Prof. Praveen Jain, Queen's University, Canada",
    "Prof. Kaushik Rajashekara, University of Houston, USA",
    "Prof. Milos Manic, Virginia Commonwealth University, USA",
    "Prof. Anurag Srivastava, West Virginia University and Washington State University, USA",
    "Prof. Yang Shi, University of Victoria, Canada",
    "Prof. Santanu Mishra, IIT Delhi, India",
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

export type CommitteeSection = {
  title: string;
  members: CommitteeMember[];
};

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
