import Link from "next/link";
import {
  ArrowRight, CalendarDays, MapPin, ExternalLink, BookOpen, Users,
  FileText, UserCheck, Zap, ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { conferenceConfig } from "@/config/conference";
import { CountdownTimer } from "@/components/sections/CountdownTimer";
import { AnnouncementPopup } from "@/components/sections/AnnouncementPopup";
import { NewsTicker } from "@/components/sections/NewsTicker";

const ctaCards = [
  {
    icon: ExternalLink,
    title: "Submission Portal",
    subtitle: "Microsoft CMT",
    description: "Submit your research paper through the official CMT portal.",
    href: conferenceConfig.submission.portalUrl || "#",
    label: conferenceConfig.submission.portalUrl ? "Submit Now" : "Coming Soon",
    disabled: !conferenceConfig.submission.portalUrl,
  },
  {
    icon: BookOpen,
    title: "Conference Theme",
    subtitle: "AI & Sustainable Green Energy",
    description: "Explore the conference scope, tracks, and research domains.",
    href: "/cfp",
    label: "View Tracks",
    disabled: false,
  },
  {
    icon: UserCheck,
    title: "Registration",
    subtitle: "Fees & Accommodation",
    description: "Find registration categories, fees, and accommodation info.",
    href: "/registration",
    label: "Register Now",
    disabled: false,
  },
];

const previewCommittee = [
  { name: "Dr. T. R. Paarivendhar", role: "Chancellor, SRMIST", tag: "Chief Patron" },
  { name: "Dr. C. Muthamizhchelvan", role: "Vice Chancellor, SRMIST", tag: "Honorary Chair" },
  { name: "Dr. R Shridhar", role: "HOD/EEE, SRMIST", tag: "General Chair" },
  { name: "Dr. Vigna K Ramachandramurthy", role: "Pro-VC (Research & Innovation), UNITEN", tag: "General Chair" },
];

export default function HomePage() {
  return (
    <div>
      {/* Announcement popup — client component */}
      <AnnouncementPopup />

      {/* ── HERO ── */}
      <section className="page-hero flex min-h-[680px] items-center py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand-light">
              {conferenceConfig.edition}
            </p>
            <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              {conferenceConfig.name}
            </h1>
            <p className="mx-auto mt-5 max-w-4xl text-lg font-semibold leading-relaxed text-white/90">
              {conferenceConfig.fullName}
            </p>

            {/* Key info pills */}
            <div className="mx-auto mt-8 grid max-w-3xl gap-3 rounded-2xl border border-white/20 bg-brand-dark/75 p-5 text-left shadow-2xl backdrop-blur sm:grid-cols-2">
              <p className="flex gap-3">
                <CalendarDays className="mt-0.5 size-5 shrink-0 text-brand-light" />
                <span>
                  <strong className="block text-brand-light">Conference Dates</strong>
                  {conferenceConfig.dates.conference}
                </span>
              </p>
              <p className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand-light" />
                <span>
                  <strong className="block text-brand-light">Hosted at</strong>
                  {conferenceConfig.location}
                </span>
              </p>
              <p className="border-t border-white/15 pt-3 text-center text-sm text-white/75 sm:col-span-2">
                In partnership with{" "}
                <strong className="text-brand-light">{conferenceConfig.partner}</strong>
              </p>
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="h-12 rounded-full bg-brand-light px-8 font-bold text-brand-dark hover:bg-white"
                render={<Link href="/cfp" />}
                nativeButton={false}
              >
                For Authors <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/60 bg-transparent px-8 font-bold text-white hover:bg-white hover:text-brand-dark"
                render={<Link href="/about" />}
                nativeButton={false}
              >
                Explore Conference
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWS TICKER ── */}
      <NewsTicker />

      {/* ── COUNTDOWN CLOCK ── */}
      <section className="bg-brand-dark py-14">
        <div className="container flex flex-col items-center gap-8">
          <CountdownTimer />
          <p className="text-sm text-white/50">
            Target: {conferenceConfig.dates.conference} · {conferenceConfig.location}
          </p>
        </div>
      </section>

      {/* ── 3 CTA ICON CARDS ── */}
      <section className="container py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">Quick Access</p>
          <h2 className="mt-3 text-3xl font-black text-brand-dark sm:text-4xl">
            Everything you need in one place
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {ctaCards.map(({ icon: Icon, title, subtitle, description, href, label, disabled }) => (
            <article
              key={title}
              className={`content-card flex flex-col items-center p-8 text-center ${disabled ? "opacity-70" : ""}`}
            >
              <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-dark text-white">
                <Icon className="size-7" />
              </div>
              <h3 className="mt-5 text-xl font-black text-brand-dark">{title}</h3>
              <p className="mt-1 text-sm font-semibold text-brand">{subtitle}</p>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{description}</p>
              {disabled ? (
                <span className="mt-6 inline-flex rounded-full bg-muted px-6 py-2.5 text-sm font-bold text-muted-foreground">
                  {label}
                </span>
              ) : (
                <Link
                  href={href}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand"
                >
                  {label} <ArrowRight className="size-4" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ── PUBLICATION NOTE ── */}
      <section className="bg-muted/60 py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="content-card grid gap-6 p-8 md:grid-cols-[auto_1fr] md:p-10">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-dark text-white">
                <ShieldCheck className="size-7" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-brand">Publication</p>
                <h2 className="mt-2 text-2xl font-black text-brand-dark">
                  Springer & Scopus-Indexed Publication
                </h2>
                <p className="mt-4 leading-8 text-muted-foreground">
                  Accepted and presented papers will be published in the{" "}
                  <strong className="text-brand-dark">
                    Lecture Notes on Electrical Engineering (Springer)
                  </strong>
                  . Extended versions of selected papers will be invited for publication in a{" "}
                  <strong className="text-brand-dark">Scopus-indexed journal</strong> following an
                  independent peer-review process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ORGANIZING COMMITTEE PREVIEW ── */}
      <section className="container py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">Leadership</p>
          <h2 className="mt-3 text-3xl font-black text-brand-dark sm:text-4xl">
            Organizing Committee
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            AI-SGE 2027 is jointly organized by SRMIST and UNITEN Malaysia under distinguished academic leadership.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {previewCommittee.map((member) => (
            <article key={member.name} className="content-card p-6 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-light/40 text-brand-dark">
                <Users className="size-5" />
              </div>
              <span className="mt-4 inline-block rounded-full bg-brand-light/30 px-3 py-0.5 text-xs font-bold text-brand-dark">
                {member.tag}
              </span>
              <h3 className="mt-2 font-bold leading-snug text-brand-dark">{member.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/committee"
            className="inline-flex items-center gap-2 font-bold text-brand-dark transition-colors hover:text-brand"
          >
            View full committee <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* ── CONFERENCE THEMES PREVIEW ── */}
      <section className="bg-muted/60 py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">Research Areas</p>
            <h2 className="mt-3 text-3xl font-black text-brand-dark sm:text-4xl">
              Conference Tracks
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {conferenceConfig.tracks.map((track) => (
              <article
                key={track}
                className="content-card flex items-start gap-4 p-5"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
                  <Zap className="size-5" />
                </div>
                <h3 className="pt-1.5 font-bold text-brand-dark">{track}</h3>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/cfp"
              className="inline-flex items-center gap-2 font-bold text-brand-dark transition-colors hover:text-brand"
            >
              View full call for papers <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT OVERVIEW ── */}
      <section className="container py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand">About the Conference</p>
            <h2 className="mt-3 text-3xl font-black text-brand-dark sm:text-4xl">
              A premier international platform for energy research
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {conferenceConfig.description}
            </p>
            <p className="mt-4 leading-8 text-muted-foreground">
              The conference brings together the academic strengths of{" "}
              <strong className="text-brand-dark">SRM Institute of Science and Technology</strong>{" "}
              and{" "}
              <strong className="text-brand-dark">
                Universiti Tenaga Nasional (UNITEN), Malaysia
              </strong>
              , fostering a global dialogue on sustainable energy and AI.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 font-bold text-brand-dark transition-colors hover:text-brand"
            >
              Read more about the conference <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="rounded-3xl bg-brand-dark p-8 text-white sm:p-10">
            <FileText className="size-9 text-brand-light" />
            <h3 className="mt-5 text-2xl font-black">
              We warmly welcome you to {conferenceConfig.name}
            </h3>
            <p className="mt-4 leading-8 text-white/70">
              {conferenceConfig.venueNote} Join us to engage with cutting-edge research and
              innovation in AI and sustainable green energy technologies.
            </p>
            <Link
              href="/venue"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-light px-7 py-3 font-bold text-brand-dark transition-colors hover:bg-white"
            >
              Explore the Venue <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
