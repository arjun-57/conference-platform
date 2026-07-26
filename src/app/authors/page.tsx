import { CheckCircle2, Download, FileText, Mic2, PresentationIcon, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { conferenceConfig } from "@/config/conference";

const cameraReadySteps = [
  "Incorporate all reviewer comments and revisions in the final paper.",
  "Ensure the paper strictly follows the Springer LNEE author guidelines.",
  "Final paper must not exceed the permitted page limit (to be confirmed by the publication committee).",
  "Check that all references are complete and correctly formatted.",
  "Verify author names, affiliations, and email addresses are accurate — no changes after submission.",
  "Run a final plagiarism check (similarity score must be below 30%).",
  "Submit the camera-ready paper and source files through Microsoft CMT before the deadline.",
  "Complete the copyright transfer form (IEEE / Springer as applicable) — submit via CMT.",
];

const formattingChecklist = [
  "Use the official Springer LNEE LaTeX or Word template.",
  "Set paper size to A4; do not change margins.",
  "Use Times New Roman, 10pt (body text) as per template.",
  "Figures must be high resolution (≥ 300 dpi) and embedded in the document.",
  "Equations must be numbered and clearly labelled.",
  "Abstract: 150–250 words; Keywords: 4–6 terms.",
  "Author names and affiliations must appear on the first page.",
  "References follow the Springer reference style; use [1], [2], … numbering.",
];

const presentationGuidelines = [
  {
    icon: Mic2,
    title: "Oral Presentation",
    points: [
      "Presentation duration: 15 minutes + 5 minutes Q&A (exact time will be confirmed in the program).",
      "Use the conference-provided laptop and projector.",
      "Submit your presentation slides (PDF or PPTX) to the session chair at least 30 minutes before your session.",
      "Presenters are requested to report to their assigned session room 15 minutes early.",
    ],
  },
  {
    icon: PresentationIcon,
    title: "Poster Presentation",
    points: [
      "Poster size: A0 portrait (841 mm × 1189 mm).",
      "Bring a printed poster — digital-only displays are not available.",
      "Posters must be mounted before the poster session begins.",
      "Authors should be present at their poster during the designated poster session.",
    ],
  },
];

export default function AuthorsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Accepted Authors"
        title="For Authors"
        description="Instructions for camera-ready submission, copyright, formatting, and presentation guidelines for AI-SGE 2027."
      />

      {/* Camera-ready instructions */}
      <section className="container py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">Final Submission</p>
          <h2 className="mt-3 text-3xl font-black text-brand-dark">Camera-Ready Paper Instructions</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Camera-ready papers must be submitted by{" "}
            <strong className="text-brand-dark">{conferenceConfig.dates.cameraReady}</strong> through
            Microsoft CMT. Please follow the steps below.
          </p>
          <div className="mt-8 space-y-3">
            {cameraReadySteps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl border border-brand/15 bg-white p-4 shadow-sm"
              >
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-dark text-xs font-black text-white">
                  {i + 1}
                </div>
                <p className="text-sm leading-7 text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Copyright + template download */}
      <section className="bg-muted/55 py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-2">
            <div className="content-card p-8">
              <ShieldCheck className="size-9 text-brand" />
              <h3 className="mt-5 text-xl font-black text-brand-dark">Copyright Transfer Form</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Authors of accepted papers must complete and submit the copyright transfer / consent-to-publish
                form. The form will be made available in Microsoft CMT after acceptance.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-muted px-5 py-2.5 text-sm font-bold text-muted-foreground">
                <Download className="size-4" /> Available via CMT (post-acceptance)
              </span>
            </div>
            <div className="content-card p-8">
              <FileText className="size-9 text-brand" />
              <h3 className="mt-5 text-xl font-black text-brand-dark">Paper Template</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Use the official Springer LNEE template for your camera-ready submission. Both
                LaTeX and Microsoft Word versions are available.
              </p>
              <a
                href="https://www.springer.com/gp/authors-editors/book-authors-editors/manuscript-preparation/5636"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-dark px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand"
              >
                <Download className="size-4" /> Springer LNEE Template
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formatting checklist */}
      <section className="container py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">Checklist</p>
          <h2 className="mt-3 text-3xl font-black text-brand-dark">Final Formatting Checklist</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Verify all items below before uploading your camera-ready paper to Microsoft CMT.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {formattingChecklist.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-brand/15 bg-white p-4 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
                <p className="text-sm leading-7 text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presentation guidelines */}
      <section className="bg-muted/55 py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">At the Conference</p>
            <h2 className="mt-3 text-3xl font-black text-brand-dark">Presentation Guidelines</h2>
            <div className="mt-10 grid gap-7 sm:grid-cols-2">
              {presentationGuidelines.map(({ icon: Icon, title, points }) => (
                <div key={title} className="content-card p-8">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-dark text-white">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-brand-dark">{title}</h3>
                  <ul className="mt-4 space-y-3">
                    {points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                        <span className="mt-2 block size-2 shrink-0 rounded-full bg-brand" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-20 lg:pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-brand-dark p-8 text-center text-white sm:p-10">
          <h2 className="text-2xl font-black">Submission Portal</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
            {conferenceConfig.submission.status}
          </p>
          {conferenceConfig.submission.portalUrl ? (
            <a
              href={conferenceConfig.submission.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-brand-light px-7 py-3 font-bold text-brand-dark transition-colors hover:bg-white"
            >
              Open CMT Portal →
            </a>
          ) : (
            <span className="mt-7 inline-flex rounded-full bg-white/10 px-7 py-3 font-bold text-white/50">
              CMT Link — Coming Soon
            </span>
          )}
        </div>
      </section>
    </div>
  );
}
