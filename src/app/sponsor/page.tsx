import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { conferenceConfig } from "@/config/conference";
import { ArrowRight, BadgeIndianRupee, Building2, Mail, Sparkles, Users } from "lucide-react";

const sponsorshipPackages = [
  { title: "Title Sponsor", amount: "INR 1 Lakh", registrations: "10 free registrations", booth: "40 m² exhibition booth" },
  { title: "Diamond", amount: "INR 50K", registrations: "7 free registrations", booth: "30 m² exhibition booth" },
  { title: "Platinum", amount: "INR 25K", registrations: "5 free registrations", booth: "20 m² exhibition booth" },
  { title: "Gold", amount: "INR 20K", registrations: "4 free registrations", booth: "15 m² exhibition booth" },
  { title: "Silver", amount: "INR 10K", registrations: "3 free registrations", booth: "10 m² exhibition booth" },
  { title: "Bronze", amount: "INR 5K", registrations: "2 free registrations", booth: "6 m² exhibition booth" },
];

const benefits = [
  "A valuable platform to promote your products and services to a large number of conference delegates.",
  "Enhanced visibility and brand recognition at a premium international conference.",
  "Opportunity to gain insights into emerging power electronics technologies.",
  "A chance to build meaningful connections with professionals and peers having similar interests.",
];

const registrationNotes = [
  "With one full registration, a maximum of two papers can be presented, with a page limit of 6 pages.",
  "Additional page charges apply for extra pages, limited to 2 additional pages.",
  "Student registration is not valid for inclusion of papers in the conference proceedings.",
  "To present a paper, a full registration is required.",
];

export default function SponsorPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-brand-dark text-white py-16 lg:py-20">
        <div className="container space-y-4 max-w-4xl">
          <p className="text-brand-light text-sm font-semibold uppercase tracking-widest">
            Partnership Opportunities
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold">Sponsorship Call</h1>
          <p className="text-white/75 text-lg leading-relaxed">
            {conferenceConfig.name} invites organizations to partner with us for the 1st edition
            of the International Conference on Artificial Intelligence and Sustainable Green Energy
            Technologies for Future Electrification.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button
              className="rounded-full bg-brand hover:bg-brand/90 text-white"
              render={<Link href={`mailto:${conferenceConfig.contact.email}`} />}
            >
              <Mail className="size-4 mr-2" />
              Contact Sponsorship Team
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white/20 text-white bg-transparent hover:bg-white/10 hover:text-white"
              render={<Link href="#packages" />}
            >
              View Sponsorship Packages
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-16 lg:py-20 space-y-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-brand font-semibold text-sm uppercase tracking-widest">
              <Sparkles className="size-4" />
              About the Conference
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The 1st edition of the International Conference on Artificial Intelligence and
              Sustainable Green Energy Technologies for Future Electrification will be held on
              18th and 19th March 2027 at SRM Institute of Science and Technology, Kattankulathur,
              Chennai, India, in partnership with {conferenceConfig.partner}.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              AI-SGE 2027 provides a premier international platform for researchers,
              academicians, and industry professionals to exchange knowledge and present
              innovations in power electronics, electric drives, renewable energy systems,
              hydrogen energy technologies, artificial intelligence in energy systems, and
              sustainable electrification.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The conference will feature keynote lectures, technical paper presentations,
              tutorials, and special sessions designed to foster collaboration between academia,
              industry, and research organizations.
            </p>
          </div>

          <Card className="border-brand/15 shadow-lg bg-gradient-to-br from-brand-light/40 to-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-brand-dark">
                <Building2 className="text-brand" />
                Why Sponsor AI-SGE 2027
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3">
                  <div className="mt-1 size-2.5 rounded-full bg-brand shrink-0" />
                  <p className="leading-relaxed">{benefit}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div id="packages" className="space-y-8">
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 text-brand font-semibold text-sm uppercase tracking-widest">
              <BadgeIndianRupee className="size-4" />
              Sponsorship Packages
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark">
              Partner at the level that fits your goals
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sponsorshipPackages.map((pkg) => (
              <Card key={pkg.title} className="border-border/80 hover:border-brand/40 hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between gap-3 text-brand-dark">
                    <span>{pkg.title}</span>
                    <span className="text-sm font-semibold text-brand">{pkg.amount}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>{pkg.registrations}</p>
                  <p>{pkg.booth}</p>
                  <p>Logo inclusion on website, program booklet, and banner.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <Card className="border-brand/15 bg-brand-dark text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="text-brand-light" />
                Registration Rates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-white/80">
              <p>Sponsorship rates are exclusive of 18% GST and payment gateway charges.</p>
              <p>Registration fee is non-refundable.</p>
              <p className="text-brand-light">For any query, contact {conferenceConfig.contact.email}.</p>
            </CardContent>
          </Card>

          <div className="space-y-6 rounded-3xl bg-muted/40 border border-brand/15 p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-brand-dark">Conference Registration Notes</h2>
            <div className="space-y-4">
              {registrationNotes.map((note) => (
                <div key={note} className="flex gap-3 text-muted-foreground">
                  <div className="mt-1 size-2.5 rounded-full bg-brand shrink-0" />
                  <p className="leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="rounded-[2rem] bg-gradient-to-br from-brand-light via-white to-brand-light/30 border border-brand/20 p-8 lg:p-12 text-center space-y-5">
          <p className="text-brand font-semibold text-sm uppercase tracking-widest">Next Step</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark">Request sponsorship details</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            If you want this page connected to a downloadable brochure later, I can wire the file
            once you add the PDF asset to the workspace.
          </p>
          <Button
            className="rounded-full bg-brand-dark hover:bg-brand-dark/90 text-white"
            render={<Link href={`mailto:${conferenceConfig.contact.email}`} />}
          >
            Email the Organizing Team
            <ArrowRight className="size-4 ml-2" />
          </Button>
        </section>
      </section>
    </div>
  );
}