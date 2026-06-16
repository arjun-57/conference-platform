import { BadgeIndianRupee, Building2, CheckCircle2, Mail } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { conferenceConfig } from "@/config/conference";

const packages = [
  ["Title Sponsor", "INR 1 Lakh", "40 m2 exhibition booth"],
  ["Diamond", "INR 50K", "30 m2 exhibition booth"],
  ["Platinum", "INR 25K", "20 m2 exhibition booth"],
  ["Gold", "INR 20K", "15 m2 exhibition booth"],
  ["Silver", "INR 10K", "10 m2 exhibition booth"],
  ["Bronze", "INR 5K", "6 m2 exhibition booth"],
];

const benefits = [
  "Promote products and services to conference delegates.",
  "Enhance visibility and brand recognition at an international conference.",
  "Gain insights into emerging power electronics and sustainable energy technologies.",
  "Build meaningful connections with professionals, researchers, and industry peers.",
];

export default function SponsorPage() {
  return (
    <div>
      <PageHero eyebrow="Partnership opportunities" title="Sponsorship Call" description="Partner with AI-SGE 2027 and connect your organization with an international sustainable energy research community." />
      <section className="container grid gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div className="space-y-5 text-lg leading-8 text-muted-foreground"><h2 className="text-3xl font-black text-brand-dark">About the conference</h2><p>The 1st edition of AI-SGE 2027 will be held on {conferenceConfig.dates.conference} at {conferenceConfig.location}, in partnership with {conferenceConfig.partner}.</p><p>The conference is designed to foster collaboration between academia, industry, and research organizations, with a strong emphasis on high-quality technical contributions and real-world applications.</p><p>{conferenceConfig.venueNote}</p></div>
        <aside className="content-card bg-brand-light/20 p-8"><Building2 className="size-9 text-brand" /><h2 className="mt-5 text-2xl font-black text-brand-dark">Benefits of sponsorship</h2><div className="mt-6 space-y-4">{benefits.map((benefit) => <p key={benefit} className="flex gap-3 leading-7 text-muted-foreground"><CheckCircle2 className="mt-1 size-5 shrink-0 text-brand" />{benefit}</p>)}</div></aside>
      </section>
      <section className="bg-muted/55 py-16 lg:py-20"><div className="container"><p className="text-sm font-bold uppercase tracking-widest text-brand">Packages</p><h2 className="mt-3 text-3xl font-black text-brand-dark">Sponsorship opportunities</h2><p className="mt-4 max-w-3xl leading-7 text-muted-foreground">Registration benefits are intentionally omitted for now and will be confirmed separately by the organizing committee.</p><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{packages.map(([title, amount, booth]) => <article key={title} className="content-card p-6"><BadgeIndianRupee className="size-7 text-brand" /><div className="mt-5 flex items-start justify-between gap-3"><h3 className="text-xl font-black text-brand-dark">{title}</h3><span className="rounded-full bg-brand-light/40 px-3 py-1 text-sm font-bold text-brand-dark">{amount}</span></div><p className="mt-5 text-muted-foreground">{booth}</p><p className="mt-2 text-muted-foreground">Logo on website, programme booklet, and conference banner.</p></article>)}</div></div></section>
      <section className="container py-16 lg:py-20"><div className="rounded-3xl bg-brand-dark p-8 text-center text-white sm:p-12"><Mail className="mx-auto size-9 text-brand-light" /><h2 className="mt-5 text-3xl font-black">Request sponsorship details</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">Sponsorship rates are exclusive of 18% GST and applicable payment gateway charges.</p><a href={`mailto:${conferenceConfig.contact.email}?subject=AI-SGE%202027%20Sponsorship%20Enquiry`} className="mt-7 inline-flex rounded-full bg-brand-light px-7 py-3 font-bold text-brand-dark transition-colors hover:bg-white">Email the Sponsorship Team</a></div></section>
    </div>
  );
}
