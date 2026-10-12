import type { Sponsor, TouristSpot } from "./types";

/**
 * Organising / supporting bodies shown on the Sponsors page.
 * Add more entries here as new partners are confirmed.
 */
export const sponsors: Sponsor[] = [
  {
    name: "The Institution of Engineers (India)",
    role: "Technical Co-Sponsor",
    logo: "/images/sponsor-ioe.png",
    url: "https://www.ieindia.org",
  },
  {
    name: "SRM IAEMP Student Chapter",
    role: "Supporting Organisation",
    logo: "/images/sponsor-srm-iaemp.png",
    url: "https://www.srmist.edu.in",
  },
];

/**
 * Nearby tourist attractions in Chennai / around the venue.
 * Shown on the Registration & Travel page to help attendees plan their trip.
 */
export const chennaiattractions: TouristSpot[] = [
  {
    name: "Marina Beach",
    description:
      "One of the longest urban beaches in the world stretching over 13 km along the Bay of Bengal. A must-visit iconic Chennai landmark at sunrise or sunset.",
    distance: "~45 km from venue",
    category: "Beach",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Marina+Beach+Chennai",
  },
  {
    name: "Kapaleeshwarar Temple",
    description:
      "A magnificent 7th-century Dravidian-style Shiva temple in Mylapore featuring stunning gopuram towers adorned with intricate sculptures.",
    distance: "~45 km from venue",
    category: "Temple",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Kapaleeshwarar+Temple+Chennai",
  },
  {
    name: "Fort St. George",
    description:
      "India's first English fortress built in 1644, housing the Tamil Nadu Legislative Assembly and a colonial-era museum with rare artefacts.",
    distance: "~46 km from venue",
    category: "Heritage",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Fort+St+George+Chennai",
  },
  {
    name: "Government Museum, Chennai",
    description:
      "One of India's oldest museums (est. 1851) with outstanding collections of Roman antiquities, bronze sculptures, and natural history exhibits.",
    distance: "~44 km from venue",
    category: "Museum",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Government+Museum+Chennai+Egmore",
  },
  {
    name: "Mahabalipuram",
    description:
      "UNESCO World Heritage Site just 28 km from the campus featuring 7th-century rock-cut shore temples, rathas and Arjuna's Penance carvings.",
    distance: "~28 km from venue",
    category: "Heritage",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Mahabalipuram+Shore+Temple",
  },
  {
    name: "Crocodile Bank",
    description:
      "Asia's largest crocodilian conservation centre home to over 2,500 crocodiles and other reptile species — a unique experience for nature lovers.",
    distance: "~20 km from venue",
    category: "Park",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Madras+Crocodile+Bank+Trust",
  },
  {
    name: "DakshinaChitra",
    description:
      "A living heritage museum on the ECR coast showcasing traditional homes, crafts and performing arts from South India's four states.",
    distance: "~25 km from venue",
    category: "Museum",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=DakshinaChitra+Museum+Chennai",
  },
  {
    name: "Express Avenue Mall",
    description:
      "Chennai's premier luxury shopping and entertainment mall with over 250 stores, multiplex cinemas, restaurants and a food court.",
    distance: "~45 km from venue",
    category: "Shopping",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Express+Avenue+Mall+Chennai",
  },
];
