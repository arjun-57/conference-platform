import { CalendarDays, Download, Mail, MapPin, Phone, Users } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { conferenceConfig } from "@/config/conference";

export default function ProgramPage() {
  return (
    <div>
      <PageHero
        eyebrow="Schedule & Events"
        title="Conference Program"
        description={`${conferenceConfig.dates.conference} — Pre-conference workshop: ${conferenceConfig.dates.workshopDates}`}
      />

      {/* Pre-conference workshop */}
      <section className="bg-muted/55 py-16 lg:py-20">
        <div className="container">
          <div className="content-card grid gap-8 p-8 md:grid-cols-[auto_1fr] md:p-10">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-dark text-white">
              <Users className="size-7" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand">Pre-Conference</p>
              <h2 className="mt-2 text-2xl font-black text-brand-dark">
                Workshop — {conferenceConfig.dates.workshopDates}
              </h2>
              <p className="mt-4 leading-8 text-muted-foreground">
                {conferenceConfig.program.workshopNote}
              </p>
              <div className="mt-6">
                {conferenceConfig.program.brochureUrl ? (
                  <a
                    href={conferenceConfig.program.brochureUrl}
                    download
                    className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 font-bold text-white transition-colors hover:bg-brand"
                  >
                    <Download className="size-4" /> Download Workshop Brochure (PDF)
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full bg-muted px-6 py-3 text-sm font-bold text-muted-foreground">
                    <Download className="size-4" /> Workshop Brochure — Coming Soon
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Day-wise schedule */}
      <section className="container py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">Schedule</p>
          <h2 className="mt-3 text-3xl font-black text-brand-dark">Day-Wise Program</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            The detailed program with speaker names, timings, and session chairs will be published
            closer to the conference date.
          </p>

          <div className="mt-10 space-y-5">
            {conferenceConfig.program.schedule.map((day, i) => (
              <div key={i} className="content-card overflow-hidden">
                <div className="flex items-center gap-4 border-b border-brand/15 bg-brand-dark/5 px-7 py-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-sm font-black text-white">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p className="font-black text-brand-dark">{day.day}</p>
                    <p className="text-sm text-brand">{day.label}</p>
                  </div>
                </div>
                <ul className="divide-y divide-brand/10 px-7">
                  {day.sessions.map((session) => (
                    <li
                      key={session}
                      className="flex items-center gap-3 py-3.5 text-sm text-muted-foreground"
                    >
                      <CalendarDays className="size-4 shrink-0 text-brand" />
                      {session}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-xl bg-muted/60 px-5 py-4 text-sm leading-7 text-muted-foreground">
            ℹ️ All session timings, room assignments, and detailed schedule will be updated after the
            programme committee finalizes the technical programme.
          </p>
        </div>
      </section>

      {/* Contact block */}
      <section className="bg-muted/55 py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">Get in touch</p>
            <h2 className="mt-3 text-2xl font-black text-brand-dark">Program Contacts</h2>
            <p className="mt-3 text-muted-foreground">
              Reach out to the conference coordinators or convener for program-related queries.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {conferenceConfig.contact.coordinators.map((coord) => (
                <div key={coord.name} className="content-card p-6">
                  <p className="font-bold text-brand-dark">{coord.name}</p>
                  <p className="mt-1 text-sm text-brand">{coord.designation}</p>
                  <a
                    href={`mailto:${coord.email}`}
                    className="mt-3 flex items-center gap-2 text-sm text-muted-foreground hover:text-brand"
                  >
                    <Mail className="size-4 shrink-0" /> {coord.email}
                  </a>
                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="size-4 shrink-0" /> {coord.phone}
                  </div>
                </div>
              ))}
              <div className="content-card p-6 sm:col-span-2">
                <p className="font-bold text-brand-dark">{conferenceConfig.contact.convener.name}</p>
                <p className="mt-1 text-sm text-brand">{conferenceConfig.contact.convener.designation}</p>
                <a
                  href={`mailto:${conferenceConfig.contact.convener.email}`}
                  className="mt-3 flex items-center gap-2 text-sm text-muted-foreground hover:text-brand"
                >
                  <Mail className="size-4 shrink-0" /> {conferenceConfig.contact.convener.email}
                </a>
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="size-4 shrink-0" /> {conferenceConfig.contact.convener.phone}
                </div>
                <div className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 size-4 shrink-0" /> {conferenceConfig.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
