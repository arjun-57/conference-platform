import { Mail, MapPin, MessageSquare } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { conferenceConfig } from "@/config/conference";

export default function ContactPage() {
  return (
    <div>
      <PageHero eyebrow="Get in touch" title="Contact AI-SGE 2027" description="Contact the organizing team for conference, author, venue, or sponsorship enquiries." />
      <section className="container py-16 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <article className="content-card p-7"><Mail className="size-7 text-brand" /><h2 className="mt-5 text-xl font-black text-brand-dark">Email</h2><a href={`mailto:${conferenceConfig.contact.email}`} className="mt-3 block break-all leading-7 text-muted-foreground hover:text-brand">{conferenceConfig.contact.email}</a></article>
          <article className="content-card p-7"><MapPin className="size-7 text-brand" /><h2 className="mt-5 text-xl font-black text-brand-dark">Venue</h2><p className="mt-3 leading-7 text-muted-foreground">{conferenceConfig.location}</p></article>
          <article className="content-card p-7"><MessageSquare className="size-7 text-brand" /><h2 className="mt-5 text-xl font-black text-brand-dark">Partnership</h2><p className="mt-3 leading-7 text-muted-foreground">{conferenceConfig.partner}</p></article>
        </div>
        <div className="mx-auto mt-10 max-w-5xl rounded-3xl bg-brand-dark p-8 text-center text-white sm:p-12"><h2 className="text-3xl font-black">How can we help?</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">Use the official conference email for the fastest response. Please include a clear subject such as Author Enquiry, Sponsorship Enquiry, or Venue Enquiry.</p><a href={`mailto:${conferenceConfig.contact.email}?subject=AI-SGE%202027%20Enquiry`} className="mt-7 inline-flex rounded-full bg-brand-light px-7 py-3 font-bold text-brand-dark transition-colors hover:bg-white">Compose Email</a></div>
      </section>
    </div>
  );
}
