import type { FeeRow, Hotel, SponsorTier, TravelRoute } from "./types";

/**
 * Registration fees.
 *
 * `null` amounts render as "To be announced". Fill both `early` and `regular`
 * for each category once the finance committee confirms the rates.
 */
export const registration = {
  fees: [
    { category: "Indian — Student (UG/PG)", cost: "₹6,000" },
    { category: "Indian — Research Scholar (PhD)", cost: "₹7,000" },
    { category: "Indian — Faculty / Academic", cost: "₹8,000" },
    { category: "Indian — Industry Professional", cost: "₹10,000" },
    { category: "Foreign — Student / Research Scholar", cost: "USD 250" },
    { category: "Foreign — Faculty / Industry", cost: "USD 350" },
  ] satisfies FeeRow[],

  currencyNote:
    "Fees are payable in INR by Indian participants and in USD by foreign participants.",
  taxNote:
    "Registration fees are exclusive of 18% GST.",
  paymentNote:
    "The online payment link and bank transfer details will be shared with authors after acceptance notifications are sent. Attendee (non-presenting) registration will be announced separately.",
} as const;

/**
 * Accommodation near the venue.
 * TODO(organisers): replace with the confirmed partner hotels.
 */
export const accommodation = {
  intro:
    "A range of hotels and guesthouses are available near SRM Tech Park (Kattankulathur), Guduvanchery, Maraimalai Nagar, and Chengalpattu, as well as in Chennai city. Indicative tariff and distance from the conference venue are listed below:",
  hotels: [
    {
      name: "SRM Hotel (Kattankulathur Campus)",
      distance: "On-Campus (~0.5 km from SRM Tech Park)",
      price: "₹3,500 – ₹5,000 / night",
      url: "https://www.google.com/maps/search/?api=1&query=SRM+Hotel+Kattankulathur",
    },
    {
      name: "Hotel Highway Grand (Guduvanchery)",
      distance: "~4 km from SRM Tech Park",
      price: "₹2,200 – ₹3,500 / night",
      url: "https://www.google.com/maps/search/?api=1&query=Hotel+Highway+Grand+Guduvanchery",
    },
    {
      name: "Fortune Select Grand (Maraimalai Nagar)",
      distance: "~6 km from SRM Tech Park",
      price: "₹4,500 – ₹6,500 / night",
      url: "https://www.google.com/maps/search/?api=1&query=Fortune+Select+Grand+Maraimalai+Nagar",
    },
    {
      name: "Fairfield by Marriott (Mahindra World City)",
      distance: "~12 km from SRM Tech Park",
      price: "₹5,000 – ₹7,500 / night",
      url: "https://www.google.com/maps/search/?api=1&query=Fairfield+by+Marriott+Chennai+Mahindra+World+City",
    },
    {
      name: "Budget Stays & Guest Houses (Potheri / Guduvanchery)",
      distance: "~1 – 3 km from SRM Tech Park",
      price: "₹1,200 – ₹2,500 / night",
      url: "https://www.google.com/maps/search/?api=1&query=Hotels+Guesthouses+near+SRM+Kattankulathur",
    },
  ] satisfies Hotel[],
} as const;

/**
 * Travel routes. The Venue page is authoritative for detailed directions;
 * this shortened set is what the Registration page shows.
 */
export const travelRoutes: TravelRoute[] = [
  {
    title: "By Air",
    body: "Chennai International Airport (MAA) is approximately 45 km from the campus. Taxis, app-based cabs and pre-paid airport taxis are readily available. Journey time is roughly 60–90 minutes depending on traffic.",
  },
  {
    title: "By Rail",
    body: "Guduvanchery Railway Station is the nearest suburban station (~6 km). Chengalpattu Junction (~15 km) is served by more express trains. Chennai Central and Chennai Egmore are approximately 45 km away.",
  },
  {
    title: "By Road",
    body: "SRM IST is located on NH45. The campus is well connected by SETC buses, private operators and cab services from Chennai Koyambedu (CMBT) and Chengalpattu.",
  },
];

/** Extended directions, shown on the Venue page. */
export const venueDirections: TravelRoute[] = [
  ...travelRoutes,
  {
    title: "Navigation",
    body: 'Search "SRM Institute of Science and Technology, Kattankulathur" on Google Maps or Apple Maps for turn-by-turn directions to the campus.',
  },
];

/**
 * Sponsorship and exhibition packages, shown as a section on the
 * Registration, Accommodation & Travel page.
 */
export const sponsorship = {
  intro:
    "Partner with AI-SGE 2027 to connect your organisation with an international sustainable-energy research community. Registration benefits attached to each tier will be confirmed separately by the organising committee.",
  benefits: [
    "Promote products and services to conference delegates.",
    "Enhance visibility and brand recognition at an international conference.",
    "Gain insights into emerging power electronics and sustainable energy technologies.",
    "Build meaningful connections with professionals, researchers and industry peers.",
  ],
  tiers: [
    { tier: "Title Sponsor", amount: "INR 1 Lakh", booth: "40 m² exhibition booth" },
    { tier: "Diamond", amount: "INR 50,000", booth: "30 m² exhibition booth" },
    { tier: "Platinum", amount: "INR 25,000", booth: "20 m² exhibition booth" },
    { tier: "Gold", amount: "INR 20,000", booth: "15 m² exhibition booth" },
    { tier: "Silver", amount: "INR 10,000", booth: "10 m² exhibition booth" },
    { tier: "Bronze", amount: "INR 5,000", booth: "6 m² exhibition booth" },
  ] satisfies SponsorTier[],
  inclusion: "Logo on the website, programme booklet and conference banner.",
  taxNote:
    "Sponsorship rates are exclusive of 18% GST and applicable payment gateway charges.",
} as const;
