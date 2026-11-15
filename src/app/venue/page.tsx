import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bus, MapPin, Navigation, Plane, Train } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { conference, contact, venueDirections } from "@/config";

export const metadata: Metadata = {
  title: "Venue",
  description: `${conference.name} will be held at ${conference.location}. Address, campus map and directions by air, rail and road.`,
};

/** Google Maps place embed for Dr. T.P Ganesan Auditorium, Kattankulathur campus. */
const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=Dr.+T.P+Ganesan+Auditorium,+SRM+Institute+of+Science+and+Technology,+Kattankulathur&t=&z=16&ie=UTF8&iwloc=&output=embed";

const MAPS_LINK = "https://maps.app.goo.gl/HKZ4CWzYybqrTgY69";

const ROUTE_ICONS: Record<string, LucideIcon> = {
  "By Air": Plane,
  "By Rail": Train,
  "By Road": Bus,
  Navigation: Navigation,
};

export default function VenuePage() {
  return (
    <div>
      <PageHero
        eyebrow="Location"
        title="Conference Venue"
        description={conference.location}
      />

      {/* Address and map */}
      <section className="container space-y-10 py-16 lg:py-20">
        <div className="content-card p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-dark text-white">
              <MapPin className="size-7" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold uppercase tracking-widest text-brand">
                Venue Address
              </p>
              <h2 className="mt-2 text-2xl font-black text-brand-dark sm:text-3xl">
                Mini Hall, Dr. T.P Ganesan Auditorium
              </h2>
              <address className="mt-4 text-base not-italic leading-8 text-muted-foreground">
                <strong className="block font-semibold text-brand-dark">
                  {contact.address.institution}
                </strong>
                {contact.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <div className="mt-6">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand"
                >
                  Open in Google Maps <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-brand/15 shadow-lg">
          <iframe
            src={MAP_EMBED_SRC}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of Mini Hall, Dr. T.P Ganesan Auditorium, SRM IST Kattankulathur Campus"
          />
        </div>
      </section>

      {/* Directions */}
      <section className="bg-muted/55 py-16 lg:py-20">
        <div className="container space-y-8">
          <SectionHeading eyebrow="Directions" title="How to Reach" />
          <div className="grid gap-5 sm:grid-cols-2">
            {venueDirections.map((route) => {
              const Icon = ROUTE_ICONS[route.title] ?? MapPin;
              return (
                <div key={route.title} className="content-card p-7">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-dark text-white">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-black text-brand-dark">
                    {route.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {route.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pointer to accommodation, which lives on the Registration page */}
      <section className="container py-16 lg:py-20">
        <div className="rounded-3xl bg-brand-dark p-8 text-white sm:p-10">
          <h2 className="text-2xl font-black">Staying near the venue?</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/75">
            Accommodation options near Kattankulathur, Guduvanchery and
            Chengalpattu — along with registration fees and travel details — are
            listed on the registration page.
          </p>
          <Link
            href="/registration"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-light px-7 py-3 font-bold text-brand-dark transition-colors hover:bg-white"
          >
            Registration, Accommodation &amp; Travel{" "}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
