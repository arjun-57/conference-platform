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
        description={
          <div className="space-y-1 text-center">
            <p className="text-xl font-bold text-white">18–19 March 2027</p>
            <p className="text-base font-semibold text-brand-light">
              Pre-Conference Workshop: 15–16 March 2027
            </p>
          </div>
        }
      />

      {/* Pre-conference workshop */}
      <section className="bg-muted/55 py-16 lg:py-20">
        <div className="container">
          <div className="content-card grid gap-8 p-8 md:grid-cols-[auto_1fr] md:p-10">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-dark text-white">
              <Users className="size-7" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-brand-dark">
                PRECONFERENCE WORKSHOP (15th–16th March 2027)
              </h2>
              <p className="mt-4 text-lg font-bold leading-relaxed text-brand-dark">
                SPARC Sponsored International Workshop “AI-Enabled Power Electronics and Hydrogen–Battery Hybrid Electric Drives for Sustainable Mobility”
              </p>
              <p className="mt-2 text-base font-semibold text-brand">
                (Free for all registered AI-SGE 2027 participants)
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

      {/* Schedule */}
      <section className="container py-16 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading eyebrow="Schedule" title="Day-Wise Program" align="center" />
          <div className="mt-10 rounded-3xl border border-dashed border-brand/30 bg-muted/40 p-10 sm:p-14">
            <CalendarDays className="mx-auto size-12 text-brand" />
            <h3 className="mt-4 text-2xl font-black text-brand-dark">
              Schedule yet to be posted
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Detailed session timings, keynote addresses, room assignments, and speaker schedules will be updated here once finalized by the technical programme committee.
            </p>
          </div>
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
