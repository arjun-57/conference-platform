import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Presentation, BookOpen, Building2, Mic2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImportantDates } from "@/components/sections/ImportantDates";
import { conferenceConfig } from "@/config/conference";

const featureIcons = [Mic2, Presentation, BookOpen, Building2];

export default function HomePage() {
  return (
    <div>
      <section className="page-hero flex min-h-[680px] items-center py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand-light">{conferenceConfig.edition}</p>
            <h1 className="mt-5 text-6xl font-black tracking-tight sm:text-7xl lg:text-8xl">{conferenceConfig.name}</h1>
            <p className="mx-auto mt-6 max-w-4xl text-xl font-semibold leading-relaxed text-white/90">{conferenceConfig.fullName}</p>
            <div className="mx-auto mt-9 grid max-w-4xl gap-4 rounded-2xl border border-white/20 bg-brand-dark/75 p-6 text-left shadow-2xl backdrop-blur sm:grid-cols-2">
              <p className="flex gap-3"><CalendarDays className="mt-0.5 size-5 shrink-0 text-brand-light" /><span><strong className="block text-brand-light">Conference dates</strong>{conferenceConfig.dates.conference}</span></p>
              <p className="flex gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-brand-light" /><span><strong className="block text-brand-light">Hosted at</strong>{conferenceConfig.location}</span></p>
              <p className="border-t border-white/15 pt-4 text-center text-sm text-white/80 sm:col-span-2">In partnership with {conferenceConfig.partner}</p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="h-12 rounded-full bg-brand-light px-8 font-bold text-brand-dark hover:bg-white" render={<Link href="/cfp" />} nativeButton={false}>For Authors <ArrowRight className="ml-2 size-4" /></Button>
              <Button size="lg" variant="outline" className="h-12 rounded-full border-white/60 bg-transparent px-8 font-bold text-white hover:bg-white hover:text-brand-dark" render={<Link href="/about" />} nativeButton={false}>Explore Conference</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">Welcome to AI-SGE 2027</p>
          <h2 className="mt-3 text-3xl font-black text-brand-dark sm:text-4xl">Advancing sustainable energy and future electrification</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">{conferenceConfig.description}</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {conferenceConfig.features.map((feature, index) => {
            const Icon = featureIcons[index];
            return <article key={feature} className="content-card p-6 text-center"><div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-brand-light/45 text-brand-dark"><Icon className="size-6" /></div><h3 className="mt-4 font-bold leading-snug text-brand-dark">{feature}</h3></article>;
          })}
        </div>
      </section>

      <section className="bg-muted/60 py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-widest text-brand">Conference themes</p><h2 className="mt-3 text-3xl font-black text-brand-dark sm:text-4xl">Knowledge exchange in emerging areas</h2></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {conferenceConfig.tracks.map((track) => <article key={track} className="content-card flex items-start gap-4 p-6"><div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white"><Zap className="size-5" /></div><h3 className="pt-2 font-bold text-brand-dark">{track}</h3></article>)}
          </div>
        </div>
      </section>

      <section className="container grid gap-12 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:py-24">
        <div><p className="text-sm font-bold uppercase tracking-widest text-brand">Plan ahead</p><h2 className="mt-3 text-3xl font-black text-brand-dark sm:text-4xl">Important dates</h2><p className="mt-5 leading-7 text-muted-foreground">Submission and review will be managed through Microsoft CMT. Registration and payment information will be shared only after paper acceptance.</p></div>
        <ImportantDates />
      </section>

      <section className="container pb-20 lg:pb-24">
        <div className="rounded-3xl bg-brand-dark p-8 text-center text-white shadow-xl sm:p-12"><h2 className="text-3xl font-black">We warmly welcome you to AI-SGE 2027</h2><p className="mx-auto mt-4 max-w-3xl leading-8 text-white/75">{conferenceConfig.venueNote} Join us to engage with cutting-edge research and innovation.</p><Button className="mt-7 rounded-full bg-brand-light px-7 font-bold text-brand-dark hover:bg-white" render={<Link href="/venue" />} nativeButton={false}>Explore the Venue <ArrowRight className="ml-2 size-4" /></Button></div>
      </section>
    </div>
  );
}
