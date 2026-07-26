import Link from "next/link";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import { conferenceConfig } from "@/config/conference";

const quickLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Committee", "/committee"],
  ["Program", "/program"],
  ["Call for Papers", "/cfp"],
  ["For Attendees", "/attendees"],
  ["Registration", "/registration"],
  ["For Authors", "/authors"],
  ["Venue", "/venue"],
  ["Sponsorship", "/sponsor"],
];

export function Footer() {
  return (
    <footer className="w-full bg-brand-dark text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Branding */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-brand-light">{conferenceConfig.name}</h3>
          <p className="text-sm leading-relaxed text-white/70">{conferenceConfig.fullName}</p>
          <p className="text-xs text-brand-light/80">In partnership with {conferenceConfig.partner}</p>
          <div className="pt-2 space-y-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-light/60">Publication</p>
            <p className="text-xs leading-relaxed text-white/55">
              Springer Lecture Notes on Electrical Engineering · Scopus-indexed journal (selected papers)
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-light">Quick Links</h3>
          <nav className="grid grid-cols-1 gap-2">
            {quickLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-white/70 transition-colors hover:text-brand-light"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Important Dates */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-light">Important Dates</h3>
          <div className="space-y-3">
            <p className="flex gap-2 text-sm text-white/70">
              <Calendar className="mt-0.5 size-4 shrink-0 text-brand" />
              <span><strong className="block text-white/90">Submission Deadline</strong>{conferenceConfig.dates.digestSubmissionDeadline}</span>
            </p>
            <p className="flex gap-2 text-sm text-white/70">
              <Calendar className="mt-0.5 size-4 shrink-0 text-brand" />
              <span><strong className="block text-white/90">Camera-Ready</strong>{conferenceConfig.dates.cameraReady}</span>
            </p>
            <p className="flex gap-2 text-sm text-white/70">
              <Calendar className="mt-0.5 size-4 shrink-0 text-brand" />
              <span><strong className="block text-white/90">Conference</strong>{conferenceConfig.dates.conference}</span>
            </p>
            <p className="flex gap-2 text-sm text-white/70">
              <Calendar className="mt-0.5 size-4 shrink-0 text-brand" />
              <span><strong className="block text-white/90">Workshop</strong>{conferenceConfig.dates.workshopDates}</span>
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-light">Contact</h3>
          <p className="flex gap-2 text-sm text-white/70">
            <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
            {conferenceConfig.location}
          </p>
          <a
            href={`mailto:${conferenceConfig.contact.email}`}
            className="flex gap-2 text-sm text-white/70 transition-colors hover:text-brand-light"
          >
            <Mail className="mt-0.5 size-4 shrink-0 text-brand" />
            <span>
              <strong className="block text-white/90">Official Email</strong>
              {conferenceConfig.contact.email}
            </span>
          </a>
          <a
            href={`mailto:${conferenceConfig.contact.helpdesk}`}
            className="flex gap-2 text-sm text-white/70 transition-colors hover:text-brand-light"
          >
            <Mail className="mt-0.5 size-4 shrink-0 text-brand" />
            <span>
              <strong className="block text-white/90">Help Desk</strong>
              {conferenceConfig.contact.helpdesk}
            </span>
          </a>
          {conferenceConfig.contact.coordinators.map((coord) => (
            <div key={coord.name} className="flex gap-2 text-sm text-white/70">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand" />
              <span>
                <strong className="block text-white/90">{coord.name}</strong>
                {coord.phone}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-wrap items-center justify-between gap-4 py-6 text-xs text-white/40">
          <span>© {new Date().getFullYear()} {conferenceConfig.name}. All rights reserved.</span>
          <span>Organized by SRM IST & UNITEN Malaysia</span>
        </div>
      </div>
    </footer>
  );
}
