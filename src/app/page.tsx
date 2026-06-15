import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { conferenceConfig } from "@/config/conference";
import {
  Calendar,
  MapPin,
  Mic2,
  Presentation,
  GraduationCap,
  Building2,
  ArrowRight,
  Sparkles,
  Zap,
  Leaf,
  Brain,
  Grid3x3,
} from "lucide-react";

const trackIcons = [Zap, Leaf, Sparkles, Zap, Brain, Grid3x3];

const importantDates = [
  { label: "Start of Digest Submission", date: conferenceConfig.dates.digestSubmissionStart },
  { label: "Digest Submission Deadline", date: conferenceConfig.dates.digestSubmissionDeadline },
  { label: "Digest Acceptance Notification", date: conferenceConfig.dates.digestAcceptanceNotification },
  { label: "Camera-Ready Paper Submission", date: conferenceConfig.dates.cameraReady },
  { label: "Early Bird Registration Deadline", date: conferenceConfig.dates.earlyBirdRegistration },
  { label: "Conference Dates", date: conferenceConfig.dates.conference, highlight: true },
];

const featureIcons = [Mic2, Presentation, GraduationCap, Building2];

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#74A8A4_0%,_transparent_50%)] opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#B6D9E0_0%,_transparent_45%)] opacity-20" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand via-brand-light to-brand" />

        <div className="container relative z-10 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge className="bg-white/10 text-brand-light border-brand/40 text-sm px-4 py-1.5 backdrop-blur-sm">
              1st Edition · In partnership with {conferenceConfig.partner}
            </Badge>

            <div className="space-y-4">
              <p className="text-brand-light text-lg font-medium tracking-wide uppercase">
                {conferenceConfig.name}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold leading-tight tracking-tight">
                {conferenceConfig.fullName}
              </h1>
            </div>

            <div className="flex flex-wrap gap-6 text-brand-light/90">
              <div className="flex items-center gap-2">
                <Calendar className="size-5 text-brand" />
                <span className="font-medium">{conferenceConfig.dates.conference}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-5 text-brand" />
                <span>{conferenceConfig.location}</span>
              </div>
            </div>

            <p className="text-lg text-white/80 leading-relaxed max-w-3xl">
              {conferenceConfig.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="bg-brand hover:bg-brand/90 text-white rounded-full px-8 h-12 text-base shadow-lg shadow-brand/25"
                render={<Link href="/auth/signup" />}
              >
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-12 text-base border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
                render={<Link href="/cfp" />}
              >
                Submit Digest
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Conference Features */}
      <section className="container py-20 lg:py-24">
        <div className="text-center space-y-4 mb-14">
          <p className="text-brand font-semibold text-sm uppercase tracking-widest">What to Expect</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark">Conference Highlights</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {conferenceConfig.features.map((feature, i) => {
            const Icon = featureIcons[i];
            return (
              <div
                key={feature}
                className="group relative p-6 rounded-2xl bg-white border border-border hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300"
              >
                <div className="mb-4 inline-flex p-3 rounded-xl bg-brand-light/50 text-brand-dark group-hover:bg-brand group-hover:text-white transition-colors">
                  <Icon className="size-6" />
                </div>
                <h3 className="font-semibold text-brand-dark text-lg leading-snug">{feature}</h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* Research Areas */}
      <section className="w-full bg-muted/60 py-20 lg:py-24">
        <div className="container space-y-14">
          <div className="max-w-2xl">
            <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">Focus Areas</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
              Knowledge Exchange in Emerging Areas
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The conference provides a premier platform for cutting-edge research and innovation
              in sustainable energy and future electrification systems.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {conferenceConfig.tracks.map((track, i) => {
              const Icon = trackIcons[i];
              return (
                <div
                  key={track}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-border/80 hover:border-brand transition-colors"
                >
                  <div className="flex-shrink-0 p-2.5 rounded-lg bg-brand-dark/5 text-brand-dark">
                    <Icon className="size-5" />
                  </div>
                  <span className="font-medium text-brand-dark leading-snug pt-1">{track}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="container py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-light">
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="size-24 text-white/20" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-brand-dark/90 to-transparent">
              <p className="text-white font-semibold text-lg">SRM IST, Kattankulathur</p>
              <p className="text-brand-light/90 text-sm">Chennai, India</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-brand font-semibold text-sm uppercase tracking-widest">Venue</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark">
              A Vibrant Academic Environment
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {conferenceConfig.venueNote}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We warmly welcome you to AI-SGE 2027 — an excellent opportunity to engage with
              cutting-edge research and innovation in sustainable energy and electrification.
            </p>
            <Button
              variant="outline"
              className="rounded-full border-brand text-brand-dark hover:bg-brand-light/30"
              render={<Link href="/venue" />}
            >
              Explore Venue
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="w-full bg-brand-dark text-white py-20 lg:py-24">
        <div className="container space-y-14">
          <div className="text-center space-y-4">
            <p className="text-brand-light font-semibold text-sm uppercase tracking-widest">Plan Ahead</p>
            <h2 className="text-3xl lg:text-4xl font-bold">Important Dates</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {importantDates.map((item) => (
              <div
                key={item.label}
                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-5 rounded-xl border transition-colors ${
                  item.highlight
                    ? "bg-brand/20 border-brand/40"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <span className="font-medium text-white/90">{item.label}</span>
                <span className={`font-semibold ${item.highlight ? "text-brand-light" : "text-brand"}`}>
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20 lg:py-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-light via-white to-brand-light/30 border border-brand/20 p-10 lg:p-16 text-center space-y-6">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark relative">
            Ready to contribute to sustainable electrification?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto relative">
            Submit your digest, register early, and join researchers and industry leaders from
            around the world at AI-SGE 2027.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2 relative">
            <Button
              size="lg"
              className="rounded-full px-10 bg-brand-dark hover:bg-brand-dark/90"
              render={<Link href="/cfp" />}
            >
              Call for Papers
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white"
              render={<Link href="/committee" />}
            >
              Organizing Committee
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
