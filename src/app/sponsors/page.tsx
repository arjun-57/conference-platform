import type { Metadata } from "next";
import { BadgeIndianRupee, CheckCircle2, Mail } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { conference, contact, sponsorship } from "@/config";

export const metadata: Metadata = {
  title: "Sponsors & Partners",
  description: `Sponsorship packages, exhibition tiers, and partnership opportunities for ${conference.name}.`,
};

export default function SponsorsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our Partners"
        title="Sponsors & Partners"
        description="We gratefully acknowledge the organisations and institutions whose support makes this conference possible"
      />

      {/* Partnership: Sponsorship & Exhibition */}
      <section className="container py-16 lg:py-20">
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
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-light px-7 py-3 font-bold text-brand-dark transition-colors hover:bg-white"
          >
            <Mail className="size-4" />
            Email the Sponsorship Team
          </a>
        </div>
      </section>
    </div>
  );
}
