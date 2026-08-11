# Content checklist — AI-SGE 2027

Everything on the site that still needs real data, and exactly where to put it.

Nothing here blocks deployment. Every unfilled item degrades gracefully:
names show **"To be announced"**, buttons show **"Coming Soon"**, and empty
committees show **"N members to be announced"** — no placeholder text like
`Dr. XXXXXX` or `₹[TBD]` is ever shown to visitors.

---

## ~~1. Conference email~~ ✅ Done

**File:** `src/config/contact.ts`

```ts
helpDesk: "aisge-eee@srmist.edu.in",   // ← replace with the conference Gmail
official: "aisge-eee@srmist.edu.in",   // ← institutional address
```

`helpDesk` is the default public contact. Changing that one line updates the
footer on all 9 pages, every `mailto:` link, the accommodation enquiry line,
the visa enquiry line and the sponsorship enquiry button. Nothing else to edit.

If the Gmail replaces the SRMIST address entirely, set both fields to it — the
footer automatically hides the second entry when the two are identical.

---

## ~~2. Microsoft CMT portal link~~ ✅ Done

**File:** `src/config/conference.ts`

```ts
export const submission = {
  portalUrl: "",   // ← paste the CMT URL here
```

While this is empty, all three submission call-to-action buttons (home page
icon, Call for Papers, For Authors) automatically render a disabled
**"Coming Soon"** state. Fill it in and all three become live links at once.

> CMT has no public API or embeddable widget, so this redirect is the complete
> extent of what CMT integration can be for a public website.

---

## ~~3. Registration fees~~ ✅ Done

**File:** `src/config/registration.ts` → `registration.fees`

Six categories, each needing an early-bird and a regular amount:

| Category | Needs |
|---|---|
| Indian — Student (UG/PG) | early + regular |
| Indian — Research Scholar (PhD) | early + regular |
| Indian — Faculty / Academic | early + regular |
| Indian — Industry Professional | early + regular |
| Foreign — Student / Research Scholar | early + regular |
| Foreign — Faculty / Industry | early + regular |

```ts
{ category: "Indian — Student (UG/PG)", early: "₹4,000", regular: "₹5,000" },
```

`null` renders as "To be announced", so partial fills are safe.

---

## 4. Committee names

**File:** `src/config/committee.ts`

To publish a name: add it to that group's `members` array and **decrement the
group's `pending` count by one**.

| Group | Named | Awaiting |
|---|---|---|
| Convener | 0 | **1** |
| Honorary Chairs | 4 | 1 (Vice Chancellor, UNITEN) |
| Technical Programme Chairs | 3 | 2 (UNITEN) |
| Publication Committee | 0 | 3 |
| Finance Committee | 0 | 2 |
| Registration Committee | 0 | 6 |
| Publicity Committee | 0 | 8 |
| Industry Engagement & Sponsorship | 0 | 4 |
| Local Hospitality Committee | 0 | 8 |

Already complete: Chief Patron (1), Patrons (2), General Chairs (2),
Plenary Committee (5), International Advisory Committee (29).

---

## 5. Coordinator and convener details

**File:** `src/config/contact.ts`

Two conference coordinators and the convener each need `name`, `email` and
`phone`. These appear in the **Program page contact block** and the footer.

```ts
coordinators: [
  { name: "Dr. …", role: "Conference Coordinator",
    email: "…@srmist.edu.in", phone: "+91-…" },
```

Until an individual email is set, the contact card falls back to the help-desk
address so no card is ever a dead end. Coordinators are hidden from the footer
until they have an email or phone.

---

## 6. Workshop brochure (PDF)

1. Create `public/documents/` and put the PDF there.
2. **File:** `src/config/program.ts`

```ts
brochureUrl: "/documents/ai-sge-2027-workshop-brochure.pdf",
```

Until then the Program page shows "Workshop Brochure — Coming Soon" rather
than a broken download link.

---

## 7. Campus photos (home page hero)

Create `public/images/campus/` and drop JPEGs in. **No code change needed.**

- **0 photos** → the existing `conference-hero.jpg` shows as a static hero
- **1 photo** → that photo shows as a static hero
- **2+ photos** → they become an automatic crossfading slideshow with a slow
  zoom, ordered by filename (`01-campus.jpg`, `02-library.jpg`, …)

Recommended: 1920×1080 or larger, landscape, under ~400 KB each.

The folder is scanned at **build time**, so redeploy after adding files.

---

## 8. Campus video (optional, replaces the slideshow)

Put the file at `public/videos/campus.mp4`. It is picked up automatically and
becomes the hero background, with the campus photos acting as the poster frame
and the fallback. Visitors who prefer reduced motion keep the still image.

Keep it under ~5 MB, muted, 10–20 seconds, looping cleanly.

> ⚠️ Use footage the conference owns or is licensed to use. Do not use
> downloaded drone footage from social media on an official SRMIST site.

---

## 9. Accommodation / partner hotels

**File:** `src/config/registration.ts` → `accommodation.hotels`

```ts
{ name: "Hotel …", distance: "3 km from venue", price: "₹3,500/night" },
```

While every entry has `name: null`, the page shows a single tidy note instead
of four empty cards.

---

## 10. Vercel environment variable

In the Vercel project settings add:

```
NEXT_PUBLIC_SITE_URL = https://your-production-domain
```

This sets canonical URLs, Open Graph tags, `sitemap.xml` and `robots.txt`.
Without it those fall back to `http://localhost:3000`, which will make the
sitemap useless to search engines — **set this before announcing the site.**

---

## Not required

- Conference dates, tracks, schedule, publication details, guidelines,
  presentation rules, travel directions and sponsorship tiers are all filled in.
- There is no database, no API keys and no payment integration to configure.
