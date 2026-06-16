# AI-SGE 2027 Conference Website

Public information website for the International Conference on Artificial Intelligence and Sustainable Green Energy Technologies for Future Electrification.

## Workflow

- Conference content, author instructions, committee, sponsorship, venue, and contact information are published here.
- Digest submission, review, decisions, and camera-ready submission will be handled through Microsoft CMT.
- Registration and payment will open only after paper acceptance.
- A future Supabase schema is retained under `supabase/migrations` for post-acceptance registration.

## Development

Use Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Hero Image

Add the approved conference background image at:

```text
public/images/conference-hero.jpg
```

The UI applies a dark overlay so hero text remains readable.
