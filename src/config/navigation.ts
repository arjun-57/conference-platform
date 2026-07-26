/**
 * The 9 pages of the site, in the order they appear in the header.
 *
 * This is the single list that drives the navbar, the mobile menu, the footer
 * quick links and the sitemap — adding a route here wires it into all four.
 */
export type Route = {
  /** Label used in navigation. */
  label: string;
  href: string;
  /** Full page title used for metadata and the sitemap. */
  title: string;
};

export const routes: Route[] = [
  { label: "Home", href: "/", title: "Home" },
  { label: "About", href: "/about", title: "About the Conference" },
  { label: "Committee", href: "/committee", title: "Committee Members" },
  { label: "Program", href: "/program", title: "Conference Program" },
  { label: "Venue", href: "/venue", title: "Venue" },
  { label: "Call for Papers", href: "/cfp", title: "Call for Papers" },
  { label: "For Attendees", href: "/attendees", title: "For Attendees" },
  {
    label: "Registration",
    href: "/registration",
    title: "Registration, Accommodation & Travel",
  },
  { label: "For Authors", href: "/authors", title: "For Authors" },
];

/** Header links — the home page is reached through the logo instead. */
export const navItems = routes.filter((route) => route.href !== "/");

/** Footer quick links include Home. */
export const footerLinks = routes;

/**
 * Public origin, used for canonical URLs, Open Graph tags and the sitemap.
 * Set NEXT_PUBLIC_SITE_URL in the Vercel project settings to the production
 * domain; the fallback keeps local development working.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";
