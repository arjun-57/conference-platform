import { Award, CalendarDays, CheckCircle2, FileText, Users } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { conferenceConfig } from "@/config/conference";

const inclusions = [
  "Access to all technical sessions, keynote addresses, and panel discussions",
  "Conference kit (programme booklet, badge, and materials)",
  "Access to the pre-conference workshop (if registered separately)",
  "Tea/coffee breaks and conference lunch on all conference days",
  "Participation certificate issued to all registered attendees",
  "Networking sessions with researchers and industry professionals",
  "Poster and demonstration session viewing",
  "Access to conference proceedings (digital copy)",
];

const certInfo = [
  {
    title: "Participation Certificate",
    desc: "All registered non-presenting attendees will receive a digitally signed certificate of participation after the event.",
  },
  {
    title: "Workshop Certificate",
    desc: "Attendees who complete the pre-conference workshop (March 13–15) will receive a separate workshop completion certificate.",
  },
];

export default function AttendeesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Non-Presenting Participants"
        title="For Attendees"
        description="Join AI-SGE 2027 as an attendee to experience cutting-edge research, keynotes, and networking without submitting a paper."
      />

      {/* What's included */}
      <section className="container py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand">Inclusions</p>
              <h2 className="mt-3 text-3xl font-black text-brand-dark">What's included</h2>
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
              <h3 className="mt-4 text-lg font-black text-brand-dark">Conference Dates</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                <strong className="text-brand-dark">Main Conference:</strong><br />
                {conferenceConfig.dates.conference}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                <strong className="text-brand-dark">Pre-Conference Workshop:</strong><br />
                {conferenceConfig.dates.workshopDates}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                <strong className="text-brand-dark">Venue:</strong><br />
                {conferenceConfig.location}
              </p>
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
                <p className="text-sm font-bold uppercase tracking-widest text-brand">Program Access</p>
                <h2 className="mt-2 text-2xl font-black text-brand-dark">Schedule Access</h2>
                <p className="mt-4 leading-8 text-muted-foreground">
                  The full conference schedule — including session timings, room assignments, and
                  speaker details — will be published on this website and in the conference kit
                  distributed to all registered attendees at the venue.
                </p>
                <p className="mt-4 leading-8 text-muted-foreground">
                  A digital version of the programme booklet will be made available for download
                  prior to the conference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate info */}
      <section className="container py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">Certification</p>
          <h2 className="mt-3 text-3xl font-black text-brand-dark">Certificates</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {certInfo.map(({ title, desc }) => (
              <div key={title} className="content-card p-7">
                <Award className="size-8 text-brand" />
                <h3 className="mt-4 text-lg font-black text-brand-dark">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-20 lg:pb-24">
        <div className="rounded-3xl bg-brand-dark p-8 text-center text-white sm:p-12">
          <Users className="mx-auto size-9 text-brand-light" />
          <h2 className="mt-5 text-3xl font-black">Ready to join us?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
            Register as an attendee to secure your spot at AI-SGE 2027. Attendee registration
            details will be announced after the paper acceptance notifications.
          </p>
          <a
            href="/registration"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-light px-7 py-3 font-bold text-brand-dark transition-colors hover:bg-white"
          >
            View Registration →
          </a>
        </div>
      </section>
    </div>
  );
}
