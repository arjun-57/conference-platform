import Link from "next/link";
import { conferenceConfig } from "@/config/conference";
import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-brand-dark text-white py-16 lg:py-20">
        <div className="container space-y-4 max-w-3xl">
          <p className="text-brand-light text-sm font-semibold uppercase tracking-widest">About</p>
          <h1 className="text-3xl lg:text-5xl font-bold">{conferenceConfig.name}</h1>
          <p className="text-white/75 text-lg leading-relaxed">{conferenceConfig.fullName}</p>
        </div>
      </section>

      <section className="container py-16 lg:py-20 space-y-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-brand font-semibold text-sm uppercase tracking-widest">
              <Target className="size-4" />
              Our Mission
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {conferenceConfig.description}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The conference will provide a premier platform for knowledge exchange in emerging
              areas including power electronics, electric vehicles, renewable and hydrogen energy,
              artificial intelligence in energy systems, and smart grid technologies.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-brand-light/40 to-muted p-8 lg:p-10 space-y-6 border border-brand/20">
            <div className="inline-flex items-center gap-2 text-brand-dark font-semibold">
              <Handshake className="size-5 text-brand" />
              Partnership
            </div>
            <p className="text-brand-dark leading-relaxed">
              AI-SGE 2027 is organized by{" "}
              <span className="font-semibold">SRM Institute of Science and Technology</span> in
              partnership with{" "}
              <span className="font-semibold">{conferenceConfig.partner}</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">{conferenceConfig.venueNote}</p>
          </div>
        </div>

        <div className="rounded-3xl bg-brand-dark text-white p-10 lg:p-14 space-y-8">
          <h2 className="text-2xl lg:text-3xl font-bold">Why Attend AI-SGE 2027?</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Engage with distinguished keynote speakers and plenary sessions.",
              "Present and discuss technical papers with global peers.",
              "Participate in special sessions, tutorials, and workshops.",
              "Explore industry exhibitions and collaboration opportunities.",
              "Network with researchers, academicians, and industry professionals.",
              "Discover innovations in AI, green energy, and future electrification.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 size-7 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-white/85">{item}</span>
              </li>
            ))}
          </ul>
          <Button
            className="rounded-full bg-brand hover:bg-brand/90 text-white"
            render={<Link href="/committee" />}
          >
            View Organizing Committee
            <ArrowRight className="size-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
