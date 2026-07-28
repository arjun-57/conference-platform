# AI-SGE 2027 — Conference Website

Official website for the **1st International Conference on Artificial
Intelligence and Sustainable Green Energy Technologies for Future
Electrification**, organised by SRM Institute of Science and Technology,
Kattankulathur, in partnership with Universiti Tenaga Nasional (UNITEN),
Malaysia.

## Workflow

- Conference information, author instructions, committee, programme, venue,
  registration and sponsorship details are published here.
- Digest submission, review, decisions and camera-ready upload are handled in
  **Morressier** (https://www.morressier.com). The site links to the portal; it does not replicate it.
- Registration and payment open only after paper acceptance.

## Site structure

Nine pages, all statically generated:

| Page | Route |
|---|---|
| Home | `/` |
| About the Conference | `/about` |
| Committee Members | `/committee` |
| Conference Program | `/program` |
| Venue | `/venue` |
| Call for Papers | `/cfp` |
| For Attendees | `/attendees` |
| Registration, Accommodation & Travel | `/registration` |
| For Authors | `/authors` |

A shared footer on every page carries the help-desk email, the conference
office address and coordinator contacts.

## Editing content

**All site content lives in `src/config/`** — no page files need editing.

| File | Contains |
|---|---|
| `conference.ts` | Name, description, tracks, publication, news ticker, Morressier portal link |
| `dates.ts` | Milestone timestamps (drives the countdown) and the deadline table |
| `contact.ts` | Help-desk email, coordinators, convener, venue address |
| `committee.ts` | All committee groups |
| `program.ts` | Day-wise schedule and workshop details |
| `registration.ts` | Fees, accommodation, travel, sponsorship tiers |
| `navigation.ts` | The 9 routes (drives navbar, footer and sitemap) |

See **[CONTENT-TODO.md](./CONTENT-TODO.md)** for the checklist of values still
to be filled in.

### Home page hero media

- Drop campus photos into `public/images/campus/` — two or more become an
  automatic crossfading slideshow.
- Drop `public/videos/campus.mp4` — it becomes the hero background, with the
  photos as poster and fallback.

Both folders are scanned at build time, so redeploy after adding files.

### The countdown

The home-page clock counts down to the next milestone in `dates.ts` and rolls
forward automatically as each passes: submissions open → submission deadline →
acceptance → camera-ready → registration close → workshop → conference. During
15–18 March 2027 it switches to a live "Day N of 4" display, and afterwards to
a closing message. All timestamps are absolute IST, so it is correct for
visitors in any timezone.

## Development

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Deployment (Vercel)

The site is fully static and needs no runtime services.

1. Import the repository into Vercel — the Next.js preset is detected
   automatically, no build configuration required.
2. Set the environment variable:

   ```
   NEXT_PUBLIC_SITE_URL = https://your-production-domain
   ```

   This drives canonical URLs, Open Graph tags, `sitemap.xml` and
   `robots.txt`. Set it before announcing the site publicly.
3. Deploy.

## Tech stack

Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 ·
shadcn `base-nova` on Base UI · lucide-react

No database, no API routes, no environment secrets.
