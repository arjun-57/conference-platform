import Link from "next/link";
import { conferenceConfig } from "@/config/conference";
import { Calendar, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-brand-dark text-white">
      <div className="container py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4 lg:col-span-1">
          <h3 className="text-xl font-bold text-brand-light">{conferenceConfig.name}</h3>
          <p className="text-sm text-white/70 leading-relaxed">
            {conferenceConfig.fullName}
          </p>
          <p className="text-xs text-brand-light/80">
            In partnership with {conferenceConfig.partner}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-light">
            Quick Links
          </h3>
          <nav className="flex flex-col gap-2.5">
            {[
              { label: "About", href: "/about" },
              { label: "Organizing Committee", href: "/committee" },
              { label: "Call for Papers", href: "/cfp" },
              { label: "Venue", href: "/venue" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-brand-light transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-light">
            Important Dates
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Calendar className="size-4 text-brand mt-0.5 flex-shrink-0" />
              <span>
                Digest Deadline:{" "}
                <span className="text-white">{conferenceConfig.dates.digestSubmissionDeadline}</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Calendar className="size-4 text-brand mt-0.5 flex-shrink-0" />
              <span>
                Conference:{" "}
                <span className="text-white">{conferenceConfig.dates.conference}</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-light">
            Contact
          </h3>
          <div className="space-y-3 text-sm text-white/70">
            <p className="flex items-start gap-2">
              <MapPin className="size-4 text-brand mt-0.5 flex-shrink-0" />
              {conferenceConfig.location}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="size-4 text-brand flex-shrink-0" />
              <a
                href={`mailto:${conferenceConfig.contact.email}`}
                className="hover:text-brand-light transition-colors"
              >
                {conferenceConfig.contact.email}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 text-center text-sm text-white/50">
          <p>
            © {new Date().getFullYear()} {conferenceConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
