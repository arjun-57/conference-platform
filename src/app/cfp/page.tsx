import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Download,
  ExternalLink,
  FileText,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { DeadlinesTable } from "@/components/sections/DeadlinesTable";
import {
  conference,
  isSubmissionOpen,
  publication,
  submission,
  tracks,
} from "@/config";

export const metadata: Metadata = {
  title: "Call for Papers",
  description: `Call for papers for ${conference.name}. Conference tracks, submission guidelines, Springer LNEE template and the Morressier submission portal (https://www.morressier.com).`,
};

const guidelines = [
  "Submit an IEEE single-column PDF not exceeding four A4 pages and 2 MB.",
  "The digest may be submitted to any relevant conference track.",
  "The digest will undergo single-blind review; author names and affiliations must be included.",
  "Include an abstract of about 200 words and a maximum of five keywords.",
  "Digests with a plagiarism similarity score of 30% or above may be rejected without further review.",
  "Review results will be sent by email.",
  "Accepted authors must incorporate reviewer suggestions and submit the camera-ready paper by the deadline.",
  "Authors cannot be added or removed after a digest is accepted.",
];

export default function CallForPapersPage() {
  return (
    <div>
      <PageHero
        eyebrow="For Authors"
        title="Call for Papers"
        description={`We invite prospective authors to submit original research papers in any relevant ${conference.name} track.`}
      />

      {/* Submission portal + deadlines */}
      <section className="container grid gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div>
          <SectionHeading
            eyebrow="Submission workflow"
            title="Submissions and review through Morressier"
          />
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            {submission.platform} (https://www.morressier.com) manages digest submission, reviewer
            communication, decisions and camera-ready uploads.
          </p>

          {/* Submission portal call-to-action */}
          <div className="mt-7 rounded-2xl border border-brand/25 bg-brand-light/20 p-6">
            <p className="flex items-center gap-3 font-bold text-brand-dark">
              <ExternalLink className="size-5 text-brand" />
              {submission.platform}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {submission.status}
            </p>
            {isSubmissionOpen ? (
              <a
                href={submission.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand"
              >
                Submit Paper <ExternalLink className="size-4" />
              </a>
            ) : (
              <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-muted px-6 py-2.5 text-sm font-bold text-muted-foreground">
                Portal link — Coming Soon
              </span>
            )}
          </div>

          {/* Template */}
          <div className="mt-5 rounded-2xl border border-brand/15 bg-white p-6 shadow-sm">
            <p className="flex items-center gap-3 font-bold text-brand-dark">
              <Download className="size-5 text-brand" />
              Paper Template
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Use the official Springer LNEE template for your submission.
              LaTeX and Microsoft Word versions are both available.
            </p>
            <a
              href={submission.templateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-dark transition-colors hover:text-brand"
            >
              Download Springer LNEE Template <ExternalLink className="size-4" />
            </a>
          </div>

          <p className="mt-6 text-sm leading-6 text-muted-foreground">
            Registration and payment open only after acceptance. Accepted authors
            receive instructions separately.
          </p>
        </div>

        <DeadlinesTable />
      </section>

      {/* Theme and tracks */}
      <section className="bg-muted/55 py-16 lg:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Theme"
            title="Conference Tracks & Domains"
            description="Original, unpublished research is invited in the following areas."
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tracks.map((track) => (
              <article
                key={track}
                className="content-card flex items-start gap-4 p-5"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
                  <Zap className="size-5" />
                </div>
                <h3 className="pt-1.5 font-bold text-brand-dark">{track}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Submission guidelines */}
      <section className="container py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Requirements"
            title="Paper Submission Guidelines"
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {guidelines.map((item) => (
              <p
                key={item}
                className="content-card flex gap-3 p-4 text-sm leading-7 text-muted-foreground"
              >
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-brand" />
                {item}
              </p>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-xl bg-muted/60 px-5 py-4 text-sm leading-7 text-muted-foreground">
            <FileText className="mt-0.5 size-5 shrink-0 text-brand" />
            <p>
              Detailed camera-ready instructions, the copyright form and
              presentation guidelines are published on the{" "}
              <Link
                href="/authors"
                className="font-semibold text-brand-dark hover:underline"
              >
                For Authors
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      {/* Publication */}
      <section className="container pb-20 lg:pb-24">
        <div className="rounded-3xl bg-brand-dark p-8 text-white sm:p-10">
          <ShieldCheck className="size-9 text-brand-light" />
          <h2 className="mt-5 text-2xl font-black">Publication Opportunities</h2>
          <p className="mt-4 max-w-4xl leading-8 text-white/75">
            {publication.summary}
          </p>
        </div>
      </section>
    </div>
  );
}
