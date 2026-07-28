import type { Metadata } from "next";
import { Building2, GraduationCap, Handshake, Target, Zap } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { DeadlinesTable } from "@/components/sections/DeadlinesTable";
import { conference, conferenceWindow, objectives } from "@/config";

export const metadata: Metadata = {
  title: "About the Conference",
  description: `About ${conference.name} — a joint international conference by ${conference.host} and ${conference.partner} on AI and sustainable green energy technologies.`,
};

const profiles = [
  {
    icon: Building2,
    title: "SRM Institute of Science and Technology",
    paragraphs: [
      "SRM Institute of Science and Technology, formerly known as SRM University, is a top-ranked multidisciplinary private university located on a 380-acre green campus along NH45 near Chennai, India. Established in 1985, SRM IST has evolved into a globally recognized centre of excellence across engineering, management, medicine, science, humanities, agriculture, and law.",
      "SRM IST hosts over 52,000 students and 3,200 faculty members across its campuses. It is accredited with NAAC A++ Grade and recognized as a Category I University, supported by strong global collaborations, advanced research centres, and a vibrant innovation ecosystem.",
    ],
  },
  {
    icon: Zap,
    title: "Department of Electrical and Electronics Engineering",
    paragraphs: [
      "Established in 1992, the Department of Electrical and Electronics Engineering at SRM IST offers undergraduate, postgraduate, and doctoral programmes and is committed to excellence in teaching, research, and industry collaboration.",
      "The department has over 57 highly qualified faculty members, advanced laboratories, two Centres of Excellence focused on Marine Engineering Applications and E-Mobility, and research funding exceeding INR 30 crores from prestigious agencies.",
    ],
  },
  {
    icon: GraduationCap,
    title: "Universiti Tenaga Nasional (UNITEN), Malaysia",
    paragraphs: [
      "Universiti Tenaga Nasional is a premier institution specializing in engineering, energy, and technology education. The university is known for excellence in power engineering, smart grids, renewable energy systems, and sustainable technologies.",
      "Its modern infrastructure, advanced research facilities, strong industry linkages, and global collaborations make UNITEN a valuable partner in promoting sustainable and intelligent energy solutions.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About the conference"
        title={conference.name}
        description={`${conference.fullName} (${conference.edition})`}
      />

      {/* Background and objective */}
      <section className="container py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow="Background"
              title="A premier international platform"
            />
            <div className="mt-5 space-y-5 text-lg leading-8 text-muted-foreground">
              <p>
                The conference provides a platform for researchers, academicians,
                and industry professionals to share recent advancements in power
                electronics, renewable energy, smart grids, energy storage,
                electric mobility, hydrogen energy, and artificial intelligence in
                energy systems.
              </p>
              <p>
                {conference.name} promotes innovation, interdisciplinary
                collaboration, and sustainable technological development for
                future electrification. Original, unpublished research papers
                within the conference themes are invited for presentation and
                possible publication.
              </p>
            </div>
          </div>

          <aside className="content-card bg-brand-light/20 p-8">
            <Handshake className="size-9 text-brand" />
            <h2 className="mt-5 text-2xl font-black text-brand-dark">
              International partnership
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Held on{" "}
              <strong className="text-brand-dark">
                {conferenceWindow.display}
              </strong>{" "}
              at {conference.location}, in partnership with{" "}
              <strong className="text-brand-dark">{conference.partner}</strong>.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              This collaboration combines the academic strengths of two leading
              institutions across India and Malaysia to advance research in AI
              and sustainable energy technologies.
            </p>
          </aside>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-muted/55 py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-start gap-5">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-dark text-white">
                <Target className="size-7" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-brand">
                  Objectives
                </p>
                <h2 className="mt-2 text-2xl font-black text-brand-dark">
                  Conference Goals
                </h2>
                <ul className="mt-5 space-y-3 text-muted-foreground">
                  {objectives.map((objective) => (
                    <li key={objective} className="flex gap-3">
                      <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-brand" />
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration details */}
      <section className="py-16 lg:py-20">
        <div className="container space-y-8">
          <SectionHeading
            eyebrow="Collaboration"
            title="The institutions behind AI-SGE 2027"
            align="center"
          />
          {profiles.map((profile) => (
            <article
              key={profile.title}
              className="content-card grid gap-6 p-7 md:grid-cols-[auto_1fr] md:p-9"
            >
              <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-dark text-white">
                <profile.icon className="size-7" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-brand-dark">
                  {profile.title}
                </h3>
                {profile.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 leading-8 text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Important deadlines */}
      <section className="bg-muted/55 py-16 lg:py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Plan ahead" title="Important Deadlines" />
            <p className="mt-5 leading-7 text-muted-foreground">
              Submission and review are managed through Morressier.
              Registration and payment information will be shared after paper
              acceptance.
            </p>
          </div>
          <DeadlinesTable />
        </div>
      </section>

      {/* Invitation */}
      <section className="container py-16 text-center lg:py-20">
        <h2 className="text-3xl font-black text-brand-dark">Invitation</h2>
        <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-muted-foreground">
          We warmly invite researchers, academicians, industry professionals, and
          students to participate in {conference.name} and contribute to
          advancing research and innovation in sustainable energy and future
          electrification technologies.
        </p>
      </section>
    </div>
  );
}
