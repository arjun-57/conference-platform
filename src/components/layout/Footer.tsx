import Link from "next/link";
import { Calendar, Mail, MapPin } from "lucide-react";
import { conferenceConfig } from "@/config/conference";

export function Footer() {
  return (
    <footer className="w-full bg-brand-dark text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-brand-light">{conferenceConfig.name}</h3>
          <p className="text-sm leading-relaxed text-white/70">{conferenceConfig.fullName}</p>
          <p className="text-xs text-brand-light/80">In partnership with {conferenceConfig.partner}</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-light">Explore</h3>
          <nav className="flex flex-col gap-2.5">
            {[
              ["About", "/about"], ["Organizing Committee", "/committee"], ["For Authors", "/cfp"],
              ["Sponsorship", "/sponsor"], ["Venue", "/venue"], ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-sm text-white/70 transition-colors hover:text-brand-light">{label}</Link>
            ))}
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-light">Important Dates</h3>
          <p className="flex gap-2 text-sm text-white/70"><Calendar className="mt-0.5 size-4 shrink-0 text-brand" />Digest deadline: {conferenceConfig.dates.digestSubmissionDeadline}</p>
          <p className="flex gap-2 text-sm text-white/70"><Calendar className="mt-0.5 size-4 shrink-0 text-brand" />Conference: {conferenceConfig.dates.conference}</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-light">Contact</h3>
          <p className="flex gap-2 text-sm text-white/70"><MapPin className="mt-0.5 size-4 shrink-0 text-brand" />{conferenceConfig.location}</p>
          <a href={`mailto:${conferenceConfig.contact.email}`} className="flex gap-2 text-sm text-white/70 transition-colors hover:text-brand-light"><Mail className="size-4 shrink-0 text-brand" />{conferenceConfig.contact.email}</a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-6 text-center text-sm text-white/50">Copyright {new Date().getFullYear()} {conferenceConfig.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}
