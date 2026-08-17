import type { Metadata } from "next";
import { CalendarDays, Download, Mail, MapPin, Phone, Users } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/layout/SectionHeading";
import {
  conference,
  conferenceWindow,
  contact,
  orTBD,
  program,
} from "@/config";
import type { Person } from "@/config";

export const metadata: Metadata = {
  title: "Conference Program",
  description: `Day-wise schedule for ${conference.name}, ${conferenceWindow.display}, including the pre-conference workshop from ${conferenceWindow.workshopDisplay}.`,
};

/** Coordinators and convener, in the order the spec asks for. */
const programContacts: Person[] = [
  ...contact.coordinators,
  contact.convener,
];

function ContactCard({ person, wide }: { person: Person; wide?: boolean }) {
  return (
    <div className={`content-card p-6 ${wide ? "sm:col-span-2" : ""}`}>
      <p className="font-bold text-brand-dark">{orTBD(person.name)}</p>
      <p className="mt-1 text-sm text-brand">{person.role}</p>

      <div className="mt-3 space-y-2 text-sm text-muted-foreground">
        {person.email ? (
          <a
            href={`mailto:${person.email}`}
            className="flex items-center gap-2 transition-colors hover:text-brand"
          >
            <Mail className="size-4 shrink-0" /> {person.email}
          </a>
        ) : (
          <p className="flex items-center gap-2">
            <Mail className="size-4 shrink-0" />
            <a
              href={`mailto:${contact.helpDesk}`}
              className="transition-colors hover:text-brand"
            >
              {contact.helpDesk}
            </a>
          </p>
        )}

        <p className="flex items-center gap-2">
          <Phone className="size-4 shrink-0" /> {orTBD(person.phone)}
        </p>

        {wide && (
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0" /> {conference.location}
          </p>
        )}
      </div>
    </div>
  );
}

export default function ProgramPage() {
  return (
    <div>
      <PageHero
        eyebrow="Schedule & Events"
        title="Conference Program"
        description={`${conferenceWindow.display} — pre-conference workshop ${conferenceWindow.workshopDisplay}`}
      />

      {/* Pre-conference workshop */}
      <section className="bg-muted/55 py-16 lg:py-20">
        <div className="container">
          <div className="content-card grid gap-8 p-8 md:grid-cols-[auto_1fr] md:p-10">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-dark text-white">
              <Users className="size-7" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand">
                Pre-Conference
              </p>
              <h2 className="mt-2 text-2xl font-black text-brand-dark">
                {program.workshop.title} — {program.workshop.dates}
              </h2>
              <p className="mt-4 leading-8 text-muted-foreground">
                {program.workshop.note}
              </p>

              <div className="mt-6">
                {program.workshop.brochureUrl ? (
                  <a
                    href={program.workshop.brochureUrl}
                    download
                    className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 font-bold text-white transition-colors hover:bg-brand"
                  >
                    <Download className="size-4" /> Download Workshop Brochure
                    (PDF)
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full bg-muted px-6 py-3 text-sm font-bold text-muted-foreground">
                    <Download className="size-4" /> Workshop Brochure
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
          <SectionHeading eyebrow="Schedule" title="Day-Wise Program" />
          <p className="mt-4 leading-7 text-muted-foreground">
            The workshop runs {conferenceWindow.workshopDisplay}. The main
            conference runs {conferenceWindow.display}.
          </p>

          <div className="mt-10 space-y-5">
            {program.schedule.map((day, i) => (
              <div key={day.day} className="content-card overflow-hidden">
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
            {program.scheduleNote}
          </p>
        </div>
      </section>

      {/* Program contacts */}
      <section className="bg-muted/55 py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <SectionHeading eyebrow="Get in touch" title="Program Contacts" />
            <p className="mt-3 text-muted-foreground">
              Reach out to the conference coordinators or the convener for
              programme-related queries.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {programContacts.map((person, i) => (
                <ContactCard
                  key={`${person.role}-${i}`}
                  person={person}
                  wide={i === programContacts.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
