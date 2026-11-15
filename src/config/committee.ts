import type { CommitteeSection, Person } from "./types";

/**
 * Committee roster, grouped into sections shown on /committee.
 *
 * Members whose names are not yet public are NOT listed as placeholder cards.
 * Instead each group carries a `pending` count, which renders as a single
 * "N members to be announced" note. To publish a name, add it to `members`
 * and decrement `pending`.
 */

// ── CHIEF PATRONS ──────────────────────────────────────────────────────────
const chiefPatrons: Person[] = [
  { name: "Dr. T. R. Paarivendhar", role: "Chancellor, SRMIST" },
  { name: "Dr. P. Ravi Pachaimuthu", role: "Pro-Chancellor (Administration), SRMIST" },
  { name: "Dr. Sathyanarayanan", role: "Pro-Chancellor (Academics), SRMIST" },
];

// ── PATRONS ────────────────────────────────────────────────────────────────
const patrons: Person[] = [
  { name: "Prof. C. Muthamizhchelvan", role: "Vice Chancellor, SRMIST" },
  { name: "Prof. S. Ponnusamy", role: "Registrar, SRMIST" },
  { name: "Prof. M. Leenus Jesu Martin", role: "Dean, Faculty of Engineering & Technology, SRMIST" },
  { name: "Prof. B. Neppolian", role: "Dean Research, SRMIST" },
];

// ── CONFERENCE CHAIRS ──────────────────────────────────────────────────────
const conferenceChairs: Person[] = [
  { name: "Prof. K. Vijayakumar", role: "Chairperson, School of EEE, SRMIST" },
  {
    name: "Prof. Ir. Dr. Vigna Kumaran Ramachandaramurthy",
    role: "Deputy Vice-Chancellor (Research and Innovation), UNITEN, Malaysia",
  },
  {
    name: "Prof. Dr. Ir. Sunardi",
    role: "Professor and Vice Rector of Academic Affairs, UAD, Indonesia",
  },
];

// ── CONVENERS ──────────────────────────────────────────────────────────────
const conveners: Person[] = [
  { name: "Prof. R. Sridhar", role: "Professor and Head, Dept of EEE, SRMIST – KTR" },
  { name: "Prof. G. Joselin Retna Kumar", role: "Professor and Head, Dept of EIE, SRMIST" },
  { name: "Ir. Ts. Dr. Prem Gunnasegaran", role: "Senior Lecturer, Dept of Mechanical Engineering, UNITEN, Malaysia" },
  {
    name: "Prof. Dr. Ir. Tole Sutikno",
    role: "Professor and Head, Master Program of Electrical Engineering, UAD, Indonesia",
  },
];

// ── CO-CONVENERS ───────────────────────────────────────────────────────────
const coConveners: Person[] = [
  { name: "Dr. R. Narayanamoorthi", role: "Associate Professor, Dept of EEE, SRMIST" },
  { name: "Dr. U. Sowmmiya", role: "Associate Professor, Dept of EEE, SRMIST" },
  { name: "Dr. M. N. M. Ansari", role: "Associate Professor, Dept of Mechanical Engineering, UNITEN, Malaysia" },
  {
    name: "Dr. Ir. Imam Riadi",
    role: "Professor and Secretary, Doctoral Program of Informatics, UAD, Indonesia",
  },
];

// ── ORGANISING COMMITTEE ───────────────────────────────────────────────────
const organisingCommittee: Person[] = [
  { name: "Dr. A. Rathinam", role: "Professor, Dept of EEE, SRMIST" },
  { name: "Dr. C. Bharathi Raja", role: "Professor, Dept of EEE, SRMIST" },
  { name: "Dr. J. Preetha Roselyn", role: "Professor, Dept of EEE, SRMIST" },
  { name: "Dr. N. Chellammal", role: "Professor, Dept of EEE, SRMIST" },
  { name: "Dr. D. Suchitra", role: "Professor, Dept of EEE, SRMIST" },
  { name: "Dr. A. Vimala Juliet", role: "Professor, Dept of EIE, SRMIST" },
  { name: "Dr. Vignesh Vicki Wanatasanappan", role: "Senior Lecturer, Dept of Mechanical Engineering, UNITEN, Malaysia" },
  {
    name: "Dr. Ir. Abdul Fadlil",
    role: "Professor and Head, Doctoral Program of Informatics, UAD, Indonesia",
  },
  {
    name: "Dr. Ir. Anton Yudhana",
    role: "Professor and Director, Institute for Research and Community Service, UAD, Indonesia",
  },
];

// ── SUB-COMMITTEES ─────────────────────────────────────────────────────────
const publicationCommittee: Person[] = [
  { name: "Dr. J. Divyanavamani", role: "Associate Professor, Dept of EEE, SRMIST" },
  { name: "Dr. A. Lavanya", role: "Associate Professor, Dept of EEE, SRMIST" },
  { name: "Dr. R. Uthra", role: "Associate Professor, Dept of EEE, SRMIST" },
  { name: "Dr. D. Anitha", role: "Associate Professor, Dept of EEE, SRMIST" },
];

const financeCommittee: Person[] = [
  { name: "Dr. R. Palanisamy", role: "Associate Professor, Dept of EEE, SRMIST" },
];

const registrationCommittee: Person[] = [
  { name: "Dr. A. Geetha", role: "Associate Professor, Dept of EEE, SRMIST" },
  { name: "Dr. S. Usha", role: "Associate Professor, Dept of EEE, SRMIST" },
  { name: "Dr. T. Thamizh Thendral", role: "Associate Professor, Dept of EEE, SRMIST" },
];

const publicityCommittee: Person[] = [
  { name: "Dr. V. Pradeep", role: "Associate Professor, Dept of EEE, SRMIST" },
  { name: "Dr. D. Selvabharathi", role: "Assistant Professor, Dept of EEE, SRMIST" },
];

const industryEngagementCommittee: Person[] = [
  { name: "Dr. K. Saravanan", role: "Associate Professor, Dept of EEE, SRMIST" },
  { name: "Dr. D. Karthikeyan", role: "Associate Professor, Dept of EEE, SRMIST" },
];

const localHospitalityCommittee: Person[] = [
  { name: "Dr. C. S. Bhoopathi", role: "Associate Professor, Dept of EEE, SRMIST" },
  { name: "Dr. K. Selvakumar", role: "Associate Professor, Dept of EEE, SRMIST" },
];

const venueManagementCommittee: Person[] = [
  { name: "Dr. D. Suchitra", role: "Professor, Dept of EEE, SRMIST" },
  { name: "Dr. N. Kalaiarasi", role: "Associate Professor, Dept of EEE, SRMIST" },
];

// ── ADVISORY COMMITTEE ─────────────────────────────────────────────────────
/** International Advisory Committee — 29 confirmed members. */
const advisoryCommittee: Person[] = [
  { name: "Prof. Krishna Vasudevan", role: "IIT Madras, India" },
  { name: "Prof. Bhim Singh", role: "IIT Delhi, India" },
  { name: "Prof. Pramod Agarwal", role: "IIT Roorkee, India" },
  { name: "Prof. Marco Liserre", role: "University of Kiel, Germany" },
  { name: "Prof. B. G. Fernandes", role: "IIT Bombay, India" },
  { name: "Prof. Vivek Agarwal", role: "IIT Bombay, India" },
  { name: "Prof. K Gopakumar", role: "IISc Bangalore, India" },
  { name: "Prof. Frede Blaabjerg", role: "Aalborg University, Denmark" },
  { name: "Prof. Prasad Enjeti", role: "Texas A&M University, USA" },
  { name: "Prof. Kamal Al Haddad", role: "Ecole de Technologie Superieure, Canada" },
  { name: "Prof. Ambrish Chandra", role: "Ecole de Technologie Superieure, Canada" },
  { name: "Prof. Mahesh Kumar Mishra", role: "IIT Madras, India" },
  { name: "Prof. Joachim Holtz", role: "University of Wuppertal, Germany" },
  { name: "Prof. Jose Rodriguez", role: "Universidad San Sebastian, Chile" },
  { name: "Prof. Chandan Chakraborty", role: "IIT Kharagpur, India" },
  { name: "Prof. Kouki Matsuse", role: "Meiji University, Japan" },
  { name: "Prof. Praveen Jain", role: "Queen's University, Canada" },
  { name: "Prof. Kaushik Rajashekara", role: "University of Houston, USA" },
  { name: "Prof. Milos Manic", role: "Virginia Commonwealth University, USA" },
  {
    name: "Prof. Anurag Srivastava",
    role: "West Virginia University and Washington State University, USA",
  },
  { name: "Prof. Yang Shi", role: "University of Victoria, Canada" },
  { name: "Prof. Santanu Mishra", role: "IIT Delhi, India" },
  { name: "Prof. Gao Huijun", role: "Harbin Institute of Technology, China" },
  { name: "Prof. Samir Kouro", role: "Universidad Tecnica Federico Santa Maria, Chile" },
  { name: "Prof. Subhashish Bhattacharya", role: "North Carolina State University, USA" },
  { name: "Prof. Mariusz Malinowski", role: "Warsaw University of Technology, Poland" },
  { name: "Prof. Dehong (Mark) Xu", role: "Zhejiang University, China" },
  { name: "Prof. Joseph Olorunfemi Ojo", role: "Tennessee Technological University, USA" },
  { name: "Prof. Arindam Ghosh", role: "Curtin University, Australia" },
];

// ── TECHNICAL PROGRAMME CHAIRS ─────────────────────────────────────────────
const technicalProgrammeChairs: Person[] = [
  { name: "Dr. M. Jagabar Sathik", role: "Professor, Dept of EEE, SRMIST" },
  { name: "Dr. R. Narayanamoorthi", role: "Associate Professor, Dept of EEE, SRMIST" },
  { name: "Dr. U. Sowmmiya", role: "Associate Professor, Dept of EEE, SRMIST" },
];

// ── EXPORTED SECTIONS ──────────────────────────────────────────────────────
export const committeeSections: CommitteeSection[] = [
  {
    id: "patrons",
    title: "Chief Patrons & Patrons",
    description:
      "The conference is held under the patronage of the senior leadership of SRM Institute of Science and Technology.",
    groups: [
      { title: "Chief Patrons", members: chiefPatrons },
      { title: "Patrons", members: patrons },
    ],
  },
  {
    id: "chairs",
    title: "Conference Chairs",
    description:
      "The conference is jointly chaired by distinguished leaders from SRMIST, UNITEN (Malaysia), and UAD (Indonesia).",
    groups: [{ title: "Conference Chairs", members: conferenceChairs }],
  },
  {
    id: "conveners",
    title: "Conveners & Co-Conveners",
    description:
      "Responsible for the overall coordination and execution of AISGE2027 across all three partner institutions.",
    groups: [
      { title: "Conveners", members: conveners },
      { title: "Co-Conveners", members: coConveners },
    ],
  },
  {
    id: "organizing",
    title: "Organising Committee",
    description:
      "Jointly constituted by SRM Institute of Science and Technology, Universiti Tenaga Nasional (Malaysia), and Universitas Ahmad Dahlan (Indonesia).",
    groups: [
      { title: "Organising Committee", members: organisingCommittee },
      { title: "Publication Committee", members: publicationCommittee },
      { title: "Finance Committee", members: financeCommittee },
      { title: "Registration Committee", members: registrationCommittee },
      { title: "Publicity Committee", members: publicityCommittee },
      { title: "Industry Engagement and Sponsorship Committee", members: industryEngagementCommittee },
      { title: "Local Hospitality Committee", members: localHospitalityCommittee },
      { title: "Venue Management & Session Coordination Committee", members: venueManagementCommittee },
    ],
  },
  {
    id: "advisory",
    title: "Advisory & Technical Programme Committee",
    description:
      "Distinguished researchers from leading institutions across India, Europe, North America, Asia and Australia.",
    groups: [
      {
        title: "Technical Programme Chairs",
        members: technicalProgrammeChairs,
      },
      { title: "International Advisory Committee", members: advisoryCommittee },
    ],
  },
];

/** Short leadership preview shown on the home page. */
export const committeePreview: (Person & { tag: string })[] = [
  { ...chiefPatrons[0], tag: "Chief Patron" },
  { ...patrons[0], tag: "Patron" },
  { ...conferenceChairs[0], tag: "Conference Chair" },
  { ...conferenceChairs[1], tag: "Conference Chair" },
];
