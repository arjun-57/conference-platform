import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ExternalLink,
  FileText,
  MapPin,
  ShieldCheck,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AnnouncementPopup } from "@/components/sections/AnnouncementPopup";
import { HeroBackground } from "@/components/sections/HeroBackground";
import { MilestoneCountdown } from "@/components/sections/MilestoneCountdown";
import { NewsTicker } from "@/components/sections/NewsTicker";
import { getCampusImages, getCampusVideo } from "@/lib/media";
import {
  committeePreview,
  conference,
  conferenceWindow,
  isSubmissionOpen,
  orTBD,
  publication,
  submission,
  tracks,
} from "@/config";

/** The three quick-access cards beneath the countdown. */
const quickAccess = [
  {
    icon: ExternalLink,
    title: "Submission Portal",
    subtitle: submission.platform,
    description:
      "Submit your research paper through the official Morressier portal (https://www.morressier.com).",
    href: submission.portalUrl || "/cfp",
    label: isSubmissionOpen ? "Submit Now" : "Coming Soon",
    external: isSubmissionOpen,
    disabled: !isSubmissionOpen,
  },
  {
    icon: BookOpen,
    title: "Conference Theme",
    subtitle: "AI & Sustainable Green Energy",
    description:
      "Explore the conference scope, research tracks, and submission guidelines.",
    href: "/cfp",
    label: "View Tracks",
    external: false,
    disabled: false,
  },
  {
    icon: UserCheck,
    title: "Registration",
    subtitle: "Fees, Accommodation & Travel",
    description:
      "Find registration categories, fees, accommodation and travel information.",
    href: "/registration",
    label: "View Registration",
    external: false,
    disabled: false,
  },
];

export default function HomePage() {
  // Discovered at build time — drop files into public/ and redeploy.
  const campusImages = getCampusImages();
  const campusVideo = getCampusVideo();

  return (
    <div>
      <AnnouncementPopup />

      {/* ── HERO ── */}
      <section className="relative isolate flex min-h-[680px] items-center overflow-hidden py-20 text-white">
        <HeroBackground images={campusImages} video={campusVideo} />

        <div className="container">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand-light">
              {conference.edition}
            </p>
            <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              {conference.name}
            </h1>
            <p className="mx-auto mt-5 max-w-4xl text-lg font-semibold leading-relaxed text-white/90">
              {conference.fullName}
            </p>

            <div className="mx-auto mt-8 grid max-w-3xl gap-3 rounded-2xl border border-white/20 bg-brand-dark/75 p-5 text-left shadow-2xl backdrop-blur sm:grid-cols-2">
              <p className="flex gap-3">
                <CalendarDays className="mt-0.5 size-5 shrink-0 text-brand-light" />
                <span>
                  <strong className="block text-brand-light">
                    Conference Dates
                  </strong>
                  {conferenceWindow.display}
                </span>
              </p>
              <p className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand-light" />
                <span>
                  <strong className="block text-brand-light">Hosted at</strong>
                  {conference.location}
                </span>
              </p>
              <p className="border-t border-white/15 pt-3 text-center text-sm text-white/75 sm:col-span-2">
                In partnership with{" "}
                <strong className="text-brand-light">{conference.partner}</strong>
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/cfp"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-light px-8 font-bold text-brand-dark transition-colors hover:bg-white"
              >
                For Authors <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex h-12 items-center rounded-full border border-white/60 px-8 font-bold text-white transition-colors hover:bg-white hover:text-brand-dark"
              >
                Explore Conference
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWS TICKER ── */}
      <NewsTicker />

      {/* ── LIVE COUNTDOWN ── */}
      <section className="bg-brand-dark py-14">
        <div className="container flex flex-col items-center gap-8">
          <MilestoneCountdown />
          <p className="text-center text-sm text-white/50">
            {conferenceWindow.display} · {conference.location}
          </p>
        </div>
      </section>

      {/* ── QUICK ACCESS ── */}
      <section className="container py-20 lg:py-24">
        <SectionHeading
          eyebrow="Quick Access"
          title="Everything you need in one place"
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {quickAccess.map((card) => (
            <article
              key={card.title}
              className={`content-card flex flex-col items-center p-8 text-center ${card.disabled ? "opacity-70" : ""
                }`}
            >
              <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-dark text-white">
                <card.icon className="size-7" />
              </div>
              <h3 className="mt-5 text-xl font-black text-brand-dark">
                {card.title}
              </h3>
              <p className="mt-1 text-sm font-semibold text-brand">
                {card.subtitle}
              </p>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                {card.description}
              </p>

              {card.disabled ? (
                <span className="mt-6 inline-flex rounded-full bg-muted px-6 py-2.5 text-sm font-bold text-muted-foreground">
                  {card.label}
                </span>
              ) : card.external ? (
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand"
                >
                  {card.label} <ExternalLink className="size-4" />
                </a>
              ) : (
                <Link
                  href={card.href}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand"
                >
                  {card.label} <ArrowRight className="size-4" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ── PUBLICATION ── */}
      <section className="bg-muted/60 py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="content-card grid gap-6 p-8 md:grid-cols-[auto_1fr] md:p-10">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-dark text-white">
                <ShieldCheck className="size-7" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-brand">
                  Publication
                </p>
                <h2 className="mt-2 text-2xl font-black text-brand-dark">
                  {publication.headline}
                </h2>
                <p className="mt-4 leading-8 text-muted-foreground">
                  Accepted and presented papers will be published in{" "}
                  <strong className="text-brand-dark">
                    {publication.proceedings}
                  </strong>
                  . Extended versions of selected papers will be invited for
                  publication in a{" "}
                  <strong className="text-brand-dark">
                    Scopus-indexed journal
                  </strong>{" "}
                  following an independent peer-review process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ORGANIZING COMMITTEE PREVIEW ── */}
      <section className="container py-20 lg:py-24">
        <SectionHeading
          eyebrow="Leadership"
          title="Organizing Committee"
          description={`${conference.name} is jointly organized by SRMIST and UNITEN Malaysia under distinguished academic leadership.`}
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {committeePreview.map((member) => (
            <article
              key={`${member.name}-${member.tag}`}
              className="content-card p-6 text-center"
            >
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-light/40 text-brand-dark">
                <Users className="size-5" />
              </div>
              <span className="mt-4 inline-block rounded-full bg-brand-light/30 px-3 py-0.5 text-xs font-bold text-brand-dark">
                {member.tag}
              </span>
              <h3 className="mt-2 font-bold leading-snug text-brand-dark">
                {orTBD(member.name)}
              </h3>
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

      {/* ── CONFERENCE TRACKS ── */}
      <section className="bg-muted/60 py-16 lg:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Research Areas"
            title="Conference Tracks"
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tracks.map((track) => (
              <article key={track} className="content-card flex items-start gap-4 p-5">
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
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About the Conference"
              title="A premier international platform for energy research"
            />
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {conference.description}
            </p>
            <p className="mt-4 leading-8 text-muted-foreground">
              The conference brings together the academic strengths of{" "}
              <strong className="text-brand-dark">{conference.host}</strong> and{" "}
              <strong className="text-brand-dark">{conference.partner}</strong>,
              fostering a global dialogue on sustainable energy and AI.
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
            <h2 className="mt-5 text-2xl font-black">
              We warmly welcome you to {conference.name}
            </h2>
            <p className="mt-4 leading-8 text-white/70">
              {conference.venueNote} Join us to engage with cutting-edge research
              and innovation in AI and sustainable green energy technologies.
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
