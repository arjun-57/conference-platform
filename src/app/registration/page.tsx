import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeIndianRupee,
  Bus,
  CheckCircle2,
  CreditCard,
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
            Early-bird rates apply until{" "}
            <strong className="text-brand-dark">
              {registration.earlyBirdCutoff}
            </strong>
            . Regular rates apply thereafter. {registration.currencyNote}
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
                    Early Bird
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Regular
                  </th>
                </tr>
              </thead>
              <tbody>
                {registration.fees.map((row, i) => (
                  <tr
                    key={row.category}
                    className={`border-b border-brand/10 last:border-0 ${
                      i % 2 === 0 ? "bg-white" : "bg-muted/30"
                    }`}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 text-left font-medium text-brand-dark"
                    >
                      {row.category}
                    </th>
                    <td className="px-6 py-4 text-muted-foreground">
                      {orTBD(row.early)}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {orTBD(row.regular)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-xl bg-muted/60 px-5 py-4 text-sm leading-7 text-muted-foreground">
            <Info className="mt-0.5 size-5 shrink-0 text-brand" />
            <p>
              {registration.taxNote} {registration.paymentNote}
            </p>
          </div>

          <div className="mt-4 flex items-start gap-3 rounded-xl bg-brand-light/20 px-5 py-4 text-sm leading-7 text-brand-dark">
            <CreditCard className="mt-0.5 size-5 shrink-0 text-brand" />
            <p>
              <strong>Payment:</strong> The online payment link and bank transfer
              details will be shared with accepted authors after acceptance
              notifications are sent. Attendee (non-presenting) registration will
              be announced separately.
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
                        className="rounded-xl border border-brand/15 bg-white p-5 shadow-sm"
                      >
                        <p className="font-bold text-brand-dark">{hotel.name}</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {orTBD(hotel.distance)}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-brand">
                          {orTBD(hotel.price)}
                        </p>
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
