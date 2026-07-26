import Link from "next/link";
import { Calendar, LifeBuoy, Mail, MapPin, Phone } from "lucide-react";
import {
  conference,
  contact,
  dates,
  footerLinks,
  publication,
  orTBD,
} from "@/config";

/** Coordinators and convener are only listed once they have a public address. */
const namedContacts = [...contact.coordinators, contact.convener].filter(
  (person) => person.email || person.phone
);

const importantDates = [
  ["Submission Deadline", dates.submissionDeadline],
  ["Acceptance Notification", dates.acceptanceNotification],
  ["Camera-Ready", dates.cameraReady],
  ["Pre-Conference Workshop", dates.workshop],
  ["Conference", dates.conference],
] as const;

export function Footer() {
  return (
    <footer className="w-full bg-brand-dark text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Branding */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-brand-light">{conference.name}</h2>
          <p className="text-sm leading-relaxed text-white/70">
            {conference.fullName}
          </p>
          <p className="text-xs text-brand-light/80">
            In partnership with {conference.partner}
          </p>
          <div className="space-y-1 pt-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-light/60">
              Publication
            </p>
            <p className="text-xs leading-relaxed text-white/55">
              {publication.proceedings} · Scopus-indexed journal for selected
              papers
            </p>
          </div>
        </div>

        {/* Quick links */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-light">
            Quick Links
          </h2>
          <nav className="grid gap-2">
            {footerLinks.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="text-sm text-white/70 transition-colors hover:text-brand-light"
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Important dates */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-light">
            Important Dates
          </h2>
          <div className="space-y-3">
            {importantDates.map(([label, value]) => (
              <p key={label} className="flex gap-2 text-sm text-white/70">
                <Calendar className="mt-0.5 size-4 shrink-0 text-brand" />
                <span>
                  <strong className="block font-semibold text-white/90">
                    {label}
                  </strong>
                  {value}
                </span>
              </p>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-light">
            Contact
          </h2>

          {/* Help desk is the default public contact for the conference. */}
          <a
            href={`mailto:${contact.helpDesk}`}
            className="flex gap-2 text-sm text-white/70 transition-colors hover:text-brand-light"
          >
            <LifeBuoy className="mt-0.5 size-4 shrink-0 text-brand" />
            <span>
              <strong className="block font-semibold text-white/90">
                Help Desk
              </strong>
              <span className="break-all">{contact.helpDesk}</span>
            </span>
          </a>

          {contact.official !== contact.helpDesk && (
            <a
              href={`mailto:${contact.official}`}
              className="flex gap-2 text-sm text-white/70 transition-colors hover:text-brand-light"
            >
              <Mail className="mt-0.5 size-4 shrink-0 text-brand" />
              <span>
                <strong className="block font-semibold text-white/90">
                  Conference Office
                </strong>
                <span className="break-all">{contact.official}</span>
              </span>
            </a>
          )}

          {namedContacts.map((person, i) => (
            <div key={`${person.role}-${i}`} className="flex gap-2 text-sm text-white/70">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand" />
              <span>
                <strong className="block font-semibold text-white/90">
                  {orTBD(person.name)}
                </strong>
                <span className="block text-xs text-white/50">{person.role}</span>
                {person.email && <span className="break-all">{person.email}</span>}
                {person.phone && <span className="block">{person.phone}</span>}
              </span>
            </div>
          ))}

          <p className="flex gap-2 text-sm text-white/70">
            <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
            {conference.location}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-wrap items-center justify-between gap-4 py-6 text-xs text-white/40">
          <span>
            © {conference.name}. All rights reserved.
          </span>
          <span>Organized by SRM IST &amp; UNITEN Malaysia</span>
        </div>
      </div>
    </footer>
  );
}
