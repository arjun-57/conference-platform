import type { CommitteeSection, Person } from "./types";

/**
 * Committee roster, grouped into the four sections shown on /committee.
 *
 * Members whose names are not yet public are NOT listed as placeholder cards.
 * Instead each group carries a `pending` count, which renders as a single
 * "N members to be announced" note. To publish a name, add it to `members`
 * and decrement `pending`.
 */

const chiefPatron: Person[] = [
  { name: "Dr. T. R. Paarivendhar", role: "Chancellor, SRMIST" },
];

const patrons: Person[] = [
  { name: "Dr. P. Ravi Pachaimuthu", role: "Pro-Chancellor (Administration), SRMIST" },
  { name: "Dr. Sathyanarayanan", role: "Pro-Chancellor (Academics), SRMIST" },
];

const honoraryChairs: Person[] = [
  { name: "Dr. C. Muthamizhchelvan", role: "Vice Chancellor, SRMIST" },
  { name: "Dr. S. Ponnusamy", role: "Registrar, SRMIST" },
  { name: "Dr. Leenus Jesu Martin M", role: "Dean, Faculty of Engineering & Technology, SRMIST" },
  { name: "Dr. Vijayakumar", role: "Chairperson, School of Electrical Engineering, SRMIST" },
];

const generalChairs: Person[] = [
  { name: "Dr. R Shridhar", role: "HOD/EEE, SRMIST" },
  {
    name: "Dr. Vigna K Ramachandramurthy",
    role: "Pro-VC (Research & Innovation), UNITEN, Malaysia",
  },
];

const technicalProgrammeChairs: Person[] = [
  { name: "Dr. M Jagabar Sathik", role: "SRMIST" },
  { name: "Dr. R Narayamoorthi", role: "SRMIST" },
  { name: "Dr. U Sowwmiya", role: "SRMIST" },
];

const plenaryCommittee: Person[] = [
  { name: "Dr. A Rathinam", role: "SRMIST" },
  { name: "Dr. Preetha Roselyn", role: "SRMIST" },
  { name: "Dr. C Bharathiraja", role: "SRMIST" },
  { name: "Dr. N Chellammal", role: "SRMIST" },
  { name: "Dr. D Suchitra", role: "SRMIST" },
];

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

export const committeeSections: CommitteeSection[] = [
  {
    id: "patrons",
    title: "Chief Patron & Patrons",
    description:
      "The conference is held under the patronage of the senior leadership of SRM Institute of Science and Technology.",
    groups: [
      { title: "Chief Patron", members: chiefPatron },
      { title: "Patrons", members: patrons },
    ],
  },
  {
    id: "convener",
    title: "Convener",
    description:
      "The convener leads the organisation and delivery of AI-SGE 2027.",
    groups: [{ title: "Convener", members: [], pending: 1 }],
  },
  {
    id: "organizing",
    title: "Organizing Committee",
    description:
      "Jointly constituted by SRM Institute of Science and Technology, Universiti Tenaga Nasional (Malaysia), and Prince Mohammad Bin Fahd University (Saudi Arabia).",
    groups: [
      // One honorary chair seat (Vice Chancellor, UNITEN) is not yet named.
      { title: "Honorary Chairs", members: honoraryChairs, pending: 1 },
      { title: "General Chairs", members: generalChairs },
      { title: "Plenary Committee", members: plenaryCommittee },
      { title: "Publication Committee", members: [], pending: 3 },
      { title: "Finance Committee", members: [], pending: 2 },
      { title: "Registration Committee", members: [], pending: 6 },
      { title: "Publicity Committee", members: [], pending: 8 },
      { title: "Industry Engagement and Sponsorship Committee", members: [], pending: 4 },
      { title: "Local Hospitality Committee", members: [], pending: 8 },
    ],
  },
  {
    id: "advisory",
    title: "Advisory & Technical Programme Committee",
    description:
      "Distinguished researchers from leading institutions across India, Europe, North America, Asia and Australia.",
    groups: [
      // Two technical programme chair seats (UNITEN) are not yet named.
      {
        title: "Technical Programme Chairs",
        members: technicalProgrammeChairs,
        pending: 2,
      },
      { title: "International Advisory Committee", members: advisoryCommittee },
    ],
  },
];

/** Short leadership preview shown on the home page. */
export const committeePreview: (Person & { tag: string })[] = [
  { ...chiefPatron[0], tag: "Chief Patron" },
  { ...honoraryChairs[0], tag: "Honorary Chair" },
  { ...generalChairs[0], tag: "General Chair" },
  { ...generalChairs[1], tag: "General Chair" },
];
