import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, Handshake, Mail, Star } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { conference, contact, sponsors } from "@/config";

export const metadata: Metadata = {
  title: "Sponsors & Partners",
  description: `Meet the organisations and institutions supporting ${conference.name} — technical co-sponsors, supporting bodies, and exhibition partners.`,
};

export default function SponsorsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our Partners"
        title="Sponsors & Partners"
        description="We gratefully acknowledge the organisations and institutions whose support makes this conference possible."
      />

      {/* Current sponsors */}
      <section className="container py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Supporting Organisations"
            title="Our Sponsors"
            description="The following organisations proudly support AISGE 2027 as technical co-sponsors and supporting bodies."
            align="center"
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {sponsors.map((sponsor) => (
              <article
                key={sponsor.name}
                className="group relative flex flex-col items-center gap-6 rounded-3xl border border-brand/15 bg-white p-8 shadow-sm transition-all duration-300 hover:border-brand/35 hover:shadow-xl"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-light/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Logo */}
                <div className="relative flex h-40 w-40 shrink-0 items-center justify-center rounded-2xl bg-muted/40 p-4 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    width={160}
                    height={160}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Info */}
                <div className="relative text-center">
                  <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand">
                    {sponsor.role}
                  </span>
                  <h2 className="mt-3 text-xl font-black text-brand-dark leading-snug">
                    {sponsor.name}
                  </h2>

                  {sponsor.url && (
                    <a
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-dark hover:underline"
                    >
                      Visit Website <ExternalLink className="size-3.5" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Become a sponsor */}
      <section className="bg-muted/55 py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              {/* Text */}
              <div>
                <SectionHeading
                  eyebrow="Partner with us"
                  title="Become a Sponsor"
                  description="Align your organisation with cutting-edge research in AI and sustainable green energy by sponsoring AISGE 2027."
                />
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  {[
                    "Promote your products to an international research audience",
                    "Brand visibility across all conference materials and digital channels",
                    "Exhibition space in the conference venue",
                    "Complimentary delegate registrations based on tier",
                    "Recognition in the programme booklet and website",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm">
                      <Star className="mt-0.5 size-4 shrink-0 text-brand" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA card */}
              <div className="rounded-3xl bg-brand-dark p-8 text-white text-center sm:p-10">
                <Handshake className="mx-auto size-10 text-brand-light" />
                <h3 className="mt-5 text-2xl font-black">
                  Interested in sponsoring?
                </h3>
                <p className="mx-auto mt-4 max-w-xs leading-7 text-white/75 text-sm">
                  Write to us for the full sponsorship prospectus, exhibition
                  packages, and tier details.
                </p>
                <a
                  href={`mailto:${contact.helpDesk}?subject=${encodeURIComponent(
                    `${conference.name} Sponsorship Enquiry`
                  )}`}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-light px-7 py-3 font-bold text-brand-dark transition-colors hover:bg-white"
                >
                  <Mail className="size-4" />
                  Email the Sponsorship Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
