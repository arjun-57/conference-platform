import type { Metadata } from "next";
import {
  Download,
  ExternalLink,
  FileText,
  Mic2,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { conference, dates, isSubmissionOpen, submission } from "@/config";

export const metadata: Metadata = {
  title: "For Authors",
  description: `Camera-ready instructions, copyright form, and presentation guidelines for accepted authors at ${conference.name}.`,
};

const cameraReadySteps = [
  "Incorporate all reviewer comments and revisions in the final paper.",
  "Ensure the paper strictly follows the Springer LNEE author guidelines.",
  "Keep the final paper within the permitted page limit, as confirmed by the publication committee.",
  "Check that all references are complete and correctly formatted.",
  "Verify author names, affiliations and email addresses — these cannot be changed after submission.",
  "Run a final plagiarism check; the similarity score must be below 10%.",
  "Submit the camera-ready paper and source files through Microsoft CMT before the deadline.",
  "Complete the copyright transfer form and submit it via Microsoft CMT.",
];

const presentationGuidelines = [
  {
    icon: Mic2,
    title: "Oral Presentation",
    points: [
      "Presentation duration is 15 minutes plus 5 minutes for questions; exact timings are confirmed in the programme.",
      "Use the conference-provided laptop and projector.",
      "Submit slides (PDF or PPTX) to the session chair at least 30 minutes before your session.",
      "Report to your assigned session room 15 minutes early.",
    ],
  },
];

export default function AuthorsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Accepted Authors"
        title="For Authors"
        description={`Camera-ready submission, copyright, formatting and presentation instructions for ${conference.name}`}
      />

      {/* Camera-ready instructions */}
      <section className="container py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Final Submission"
            title="Camera-Ready Paper Instructions"
          />
          <p className="mt-4 leading-7 text-muted-foreground">
            Camera-ready papers must be submitted by{" "}
            <strong className="text-brand-dark">{dates.cameraReady}</strong>{" "}
            through {submission.platform}. Follow the steps below in order.
          </p>

          <ol className="mt-8 space-y-3">
            {cameraReadySteps.map((step, i) => (
              <li
                key={step}
                className="flex items-start gap-4 rounded-xl border border-brand/15 bg-white p-4 shadow-sm"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-dark text-xs font-black text-white">
                  {i + 1}
                </span>
                <p className="text-sm leading-7 text-muted-foreground">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Copyright form and template */}
      <section className="bg-muted/55 py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            <div className="content-card p-8">
              <ShieldCheck className="size-9 text-brand" />
              <h2 className="mt-5 text-xl font-black text-brand-dark">
                Copyright Transfer Form
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Authors of accepted papers must complete and submit the copyright
                transfer / consent-to-publish form. The form is made available in{" "}
                {submission.platform} after acceptance.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-muted px-5 py-2.5 text-sm font-bold text-muted-foreground">
                <Download className="size-4" /> Available via {submission.platform} after
                acceptance
              </span>
            </div>

            <div className="content-card p-8">
              <FileText className="size-9 text-brand" />
              <h2 className="mt-5 text-xl font-black text-brand-dark">
                Paper Template
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Use the official Springer LNEE template for your camera-ready
                submission. LaTeX and Microsoft Word versions are available.
              </p>
              <a
                href={submission.templateUrl}
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

      {/* Presentation guidelines */}
      <section className="container py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="At the Conference"
            title="Presentation Guidelines"
            align="center"
          />
          <div className="mx-auto mt-10 max-w-2xl">
            {presentationGuidelines.map((guideline) => (
              <div key={guideline.title} className="content-card p-8 sm:p-10">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-dark text-white">
                  <guideline.icon className="size-7" />
                </div>
                <h3 className="mt-5 text-2xl font-black text-brand-dark">
                  {guideline.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {guideline.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-7 text-muted-foreground"
                    >
                      <span className="mt-2 block size-2 shrink-0 rounded-full bg-brand" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission portal */}
      <section className="container pb-20 lg:pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-brand-dark p-8 text-center text-white sm:p-10">
          <h2 className="text-2xl font-black">Submission Portal</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
            {submission.status}
          </p>
          {isSubmissionOpen ? (
            <a
              href={submission.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-light px-7 py-3 font-bold text-brand-dark transition-colors hover:bg-white"
            >
              Open {submission.platform} Portal <ExternalLink className="size-4" />
            </a>
          ) : (
            <span className="mt-7 inline-flex rounded-full bg-white/10 px-7 py-3 font-bold text-white/50">
              Submit via {submission.platform}
            </span>
          )}
        </div>
        <p className="mx-auto mt-8 max-w-4xl">
          {conference.cmtAcknowledgment}
        </p>
      </section>
    </div>
  );
}
