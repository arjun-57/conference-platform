import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, CalendarDays, CheckCircle2, FileText, Users } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { conference, conferenceWindow } from "@/config";

export const metadata: Metadata = {
  title: "For Attendees",
  description: `Information for non-presenting participants at ${conference.name} — what registration includes, schedule access and participation certificates.`,
};

const inclusions = [
  "Access to all technical sessions, keynote addresses and panel discussions",
  "Conference kit (programme booklet, badge and materials)",
  "Access to the pre-conference workshop (if registered separately)",
  "Tea/coffee breaks and conference lunch on all conference days",
  "Participation certificate issued to all registered attendees",
  "Networking sessions with researchers and industry professionals",
  "Poster and demonstration session viewing",
  "Access to conference proceedings (digital copy)",
];

const certificates = [
  {
    title: "Participation Certificate",
    description:
      "All registered non-presenting attendees receive a digitally signed certificate of participation after the event.",
  },
  {
    title: "Workshop Certificate",
    description: `Attendees who complete the pre-conference workshop (${conferenceWindow.workshopDisplay}) receive a separate workshop completion certificate.`,
  },
];

export default function AttendeesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Non-Presenting Participants"
        title="For Attendees"
        description={`Join ${conference.name} as an attendee to experience cutting-edge research, keynotes and networking without submitting a paper.`}
      />

      {/* What registration includes */}
      <section className="container py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <SectionHeading
                eyebrow="Inclusions"
                title="What attendee registration includes"
              />
              <div className="mt-8 space-y-3">
                {inclusions.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-brand/15 bg-white p-4 text-sm leading-7 text-muted-foreground shadow-sm"
                  >
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <aside className="content-card h-fit w-full p-7 lg:w-72">
              <CalendarDays className="size-8 text-brand" />
              <h2 className="mt-4 text-lg font-black text-brand-dark">
                Key Dates
              </h2>
              <dl className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground">
                <div>
                  <dt className="font-bold text-brand-dark">Main Conference</dt>
                  <dd>{conferenceWindow.display}</dd>
                </div>
                <div>
                  <dt className="font-bold text-brand-dark">
                    Pre-Conference Workshop
                  </dt>
                  <dd>{conferenceWindow.workshopDisplay}</dd>
                </div>
                <div>
                  <dt className="font-bold text-brand-dark">Venue</dt>
                  <dd>{conference.location}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* Schedule access */}
      <section className="bg-muted/55 py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="content-card grid gap-6 p-8 md:grid-cols-[auto_1fr] md:p-10">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-dark text-white">
                <FileText className="size-7" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-brand">
                  Programme Access
                </p>
                <h2 className="mt-2 text-2xl font-black text-brand-dark">
                  Schedule Access
                </h2>
                <p className="mt-4 leading-8 text-muted-foreground">
                  The full conference schedule — including session timings, room
                  assignments and speaker details — is published on this website
                  and in the conference kit distributed to all registered
                  attendees at the venue.
                </p>
                <p className="mt-4 leading-8 text-muted-foreground">
                  A digital version of the programme booklet will be available
                  for download before the conference.
                </p>
                <Link
                  href="/program"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-brand-dark transition-colors hover:text-brand"
                >
                  View the conference programme <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="container py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Certification" title="Certificates" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {certificates.map((certificate) => (
              <div key={certificate.title} className="content-card p-7">
                <Award className="size-8 text-brand" />
                <h3 className="mt-4 text-lg font-black text-brand-dark">
                  {certificate.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {certificate.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="container pb-20 lg:pb-24">
        <div className="rounded-3xl bg-brand-dark p-8 text-center text-white sm:p-12">
          <Users className="mx-auto size-9 text-brand-light" />
          <h2 className="mt-5 text-3xl font-black">Ready to join us?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
            Attendee registration details, fees and accommodation options are
            listed on the registration page. Non-presenting registration opens
            alongside author registration after acceptance notifications.
          </p>
          <Link
            href="/registration"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-light px-7 py-3 font-bold text-brand-dark transition-colors hover:bg-white"
          >
            View Registration <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
