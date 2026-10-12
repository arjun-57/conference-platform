import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeIndianRupee,
  Bus,
  CheckCircle2,
  CreditCard,
  ExternalLink,
  Hotel,
  Info,
  Mail,
  MapPin,
  Plane,
  Train,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/layout/SectionHeading";
import {
  accommodation,
  chennaiattractions,
  conference,
  contact,
  orTBD,
  registration,
  sponsorship,
  travelRoutes,
} from "@/config";

export const metadata: Metadata = {
  title: "Registration, Accommodation & Travel",
  description: `Registration categories and fees, accommodation near the venue, travel information and sponsorship packages for ${conference.name}.`,
};

const ROUTE_ICONS: Record<string, LucideIcon> = {
  "By Air": Plane,
  "By Rail": Train,
  "By Road": Bus,
};

const hasHotels = accommodation.hotels.some((hotel) => hotel.name);

export default function RegistrationPage() {
  return (
    <div>
      <PageHero
        eyebrow="Participate"
        title="Registration, Accommodation & Travel"
        description="Registration categories and fees, accommodation options near the venue, and travel information."
      />

      {/* Registration fees */}
      <section className="container py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Fees" title="Registration Fees" />
          <p className="mt-4 leading-7 text-muted-foreground">
            {registration.currencyNote}
          </p>

          {/* Horizontally scrollable so the table never clips on mobile. */}
          <div className="mt-8 overflow-x-auto rounded-2xl border border-brand/20 shadow-sm">
            <table className="w-full min-w-125 text-sm">
              <caption className="sr-only">
                Registration fees by participant category
              </caption>
              <thead>
                <tr className="bg-brand-dark text-left text-white">
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {registration.fees.map((row, i) => {
                  const isAttendee = row.category === "Attendee / Author";
                  return (
                    <tr
                      key={row.category}
                      className={`border-b border-brand/10 last:border-0 ${
                        isAttendee
                          ? "bg-brand-light/20"
                          : i % 2 === 0
                          ? "bg-white"
                          : "bg-muted/30"
                      }`}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 text-left font-medium text-brand-dark"
                      >
                        <span className="flex items-center gap-2">
                          {row.category}
                          {isAttendee && (
                            <span className="rounded-full bg-brand px-2.5 py-0.5 text-xs font-semibold text-white">
                              Free Workshop
                            </span>
                          )}
                        </span>
                      </th>
                      <td className="px-6 py-4 text-muted-foreground">
                        {orTBD(row.cost)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Free pre-conference workshop note */}
          <div className="mt-5 flex items-start gap-3 rounded-xl bg-brand/10 px-5 py-4 text-sm leading-7 text-brand-dark border border-brand/25">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
            <p>
              <strong>Free Pre-Conference Workshop:</strong>{" "}
              {registration.workshopNote}
            </p>
          </div>

          <div className="mt-4 flex items-start gap-3 rounded-xl bg-muted/60 px-5 py-4 text-sm leading-7 text-muted-foreground">
            <Info className="mt-0.5 size-5 shrink-0 text-brand" />
            <p>
              {registration.taxNote} {registration.paymentNote}
            </p>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="bg-muted/55 py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="content-card p-8 md:p-10">
              <Hotel className="size-9 text-brand" />
              <p className="mt-5 text-sm font-bold uppercase tracking-widest text-brand">
                Stay
              </p>
              <h2 className="mt-2 text-2xl font-black text-brand-dark">
                Accommodation
              </h2>
              <p className="mt-4 leading-8 text-muted-foreground">
                {accommodation.intro}
              </p>

              {hasHotels ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {accommodation.hotels
                    .filter((hotel) => hotel.name)
                    .map((hotel) => (
                      <div
                        key={hotel.name}
                        className="flex flex-col justify-between rounded-xl border border-brand/15 bg-white p-5 shadow-sm transition-all hover:border-brand/30 hover:shadow-md"
                      >
                        <div>
                          <p className="font-bold text-brand-dark">{hotel.name}</p>
                          <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="size-4 shrink-0 text-brand" />
                            <span>{orTBD(hotel.distance)}</span>
                          </p>
                          <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-brand">
                            <CreditCard className="size-4 shrink-0 text-brand" />
                            <span>{orTBD(hotel.price)}</span>
                          </p>
                        </div>
                        {hotel.url && (
                          <a
                            href={hotel.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-brand transition-colors hover:text-brand-dark hover:underline"
                          >
                            View Location / Details <ExternalLink className="size-3.5" />
                          </a>
                        )}
                      </div>
                    ))}
                </div>
              ) : (
                <p className="mt-6 rounded-xl border border-dashed border-brand/30 bg-muted/40 px-5 py-4 text-sm text-muted-foreground">
                  Recommended hotels and group-booking rates will be published
                  here once confirmed.
                </p>
              )}

              <p className="mt-5 text-sm text-muted-foreground">
                For accommodation enquiries, contact{" "}
                <a
                  href={`mailto:${contact.helpDesk}`}
                  className="font-medium text-brand-dark hover:underline"
                >
                  {contact.helpDesk}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel */}
      <section className="container py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Travel" title="Getting to the venue" />
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {travelRoutes.map((route) => {
              const Icon = ROUTE_ICONS[route.title] ?? MapPin;
              return (
                <div key={route.title} className="content-card p-7">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-dark text-white">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-black text-brand-dark">
                    {route.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {route.body}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Full directions and the campus map are on the{" "}
            <Link
              href="/venue"
              className="font-medium text-brand-dark hover:underline"
            >
              venue page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Chennai tourist attractions */}
      <section className="bg-muted/55 py-16 lg:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Explore Chennai"
            title="Places to Visit Nearby"
            description="Make the most of your trip! Chennai and its surroundings offer a rich blend of heritage, beaches, temples, and culture."
            align="center"
          />

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {chennaiattractions.map((spot) => {
              const badgeColors: Record<string, string> = {
                Heritage: "bg-amber-100 text-amber-800",
                Beach: "bg-sky-100 text-sky-800",
                Temple: "bg-orange-100 text-orange-800",
                Museum: "bg-purple-100 text-purple-800",
                Park: "bg-green-100 text-green-800",
                Shopping: "bg-pink-100 text-pink-800",
              };
              const dotColors: Record<string, string> = {
                Heritage: "bg-amber-400",
                Beach: "bg-sky-400",
                Temple: "bg-orange-400",
                Museum: "bg-purple-400",
                Park: "bg-green-400",
                Shopping: "bg-pink-400",
              };
              return (
                <a
                  key={spot.name}
                  href={spot.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-2xl border border-brand/10 bg-white p-5 shadow-sm transition-all duration-200 hover:border-brand/30 hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                        badgeColors[spot.category] ?? "bg-muted text-muted-foreground"
                      }`}
                    >
                      {spot.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <span
                        className={`inline-block size-1.5 rounded-full ${
                          dotColors[spot.category] ?? "bg-muted"
                        }`}
                      />
                      {spot.distance}
                    </span>
                  </div>
                  <h3 className="mt-3 font-black text-brand-dark group-hover:text-brand transition-colors">
                    {spot.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                    {spot.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand group-hover:underline">
                    View on Maps <ExternalLink className="size-3" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visa */}
      <section className="container pb-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-brand-dark p-8 text-white sm:p-10">
          <h2 className="text-2xl font-black">Visa Information</h2>
          <p className="mt-4 leading-8 text-white/75">
            International participants may require a conference visa to enter
            India. An official invitation letter for confirmed attendees and
            accepted authors is provided by the organizing committee on request.
            Please write to{" "}
            <a
              href={`mailto:${contact.helpDesk}`}
              className="text-brand-light underline"
            >
              {contact.helpDesk}
            </a>{" "}
            for visa invitation letter requests.
          </p>
        </div>
      </section>

      {/* Sponsorship */}
      <section className="bg-muted/55 py-16 lg:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Partnership"
            title="Sponsorship & Exhibition"
            description={sponsorship.intro}
            align="center"
          />

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {sponsorship.benefits.map((benefit) => (
              <p
                key={benefit}
                className="flex gap-3 text-sm leading-7 text-muted-foreground"
              >
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-brand" />
                {benefit}
              </p>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sponsorship.tiers.map((tier) => (
              <article key={tier.tier} className="content-card p-6">
                <BadgeIndianRupee className="size-7 text-brand" />
                <div className="mt-5 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-black text-brand-dark">
                    {tier.tier}
                  </h3>
                  <span className="rounded-full bg-brand-light/40 px-3 py-1 text-sm font-bold text-brand-dark">
                    {tier.amount}
                  </span>
                </div>
                <p className="mt-5 text-muted-foreground">{tier.booth}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {sponsorship.inclusion}
                </p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-3xl bg-brand-dark p-8 text-center text-white sm:p-10">
            <Mail className="mx-auto size-9 text-brand-light" />
            <h3 className="mt-5 text-2xl font-black">
              Request sponsorship details
            </h3>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
              {sponsorship.taxNote}
            </p>
            <a
              href={`mailto:${contact.helpDesk}?subject=${encodeURIComponent(
                `${conference.name} Sponsorship Enquiry`
              )}`}
              className="mt-7 inline-flex rounded-full bg-brand-light px-7 py-3 font-bold text-brand-dark transition-colors hover:bg-white"
            >
              Email the Sponsorship Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
