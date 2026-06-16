import { Building2, GraduationCap, Handshake, Zap } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { conferenceConfig } from "@/config/conference";

const profiles = [
  {
    icon: Building2,
    title: "About SRM Institute of Science and Technology",
    paragraphs: [
      "SRM Institute of Science and Technology, formerly known as SRM University, is a top-ranked multidisciplinary private university located on a 380-acre green campus along NH45 near Chennai, India. Established in 1985, SRM IST has evolved into a globally recognized centre of excellence across engineering, management, medicine, science, humanities, agriculture, and law.",
      "SRM IST hosts over 52,000 students and 3,200 faculty members across its campuses. It is accredited with NAAC A++ Grade and recognized as a Category I University, supported by strong global collaborations, advanced research centres, and a vibrant innovation ecosystem.",
    ],
  },
  {
    icon: Zap,
    title: "About the Department of Electrical and Electronics Engineering",
    paragraphs: [
      "Established in 1992, the Department of Electrical and Electronics Engineering at SRM IST offers undergraduate, postgraduate, and doctoral programmes and is committed to excellence in teaching, research, and industry collaboration.",
      "The department has over 57 highly qualified faculty members, advanced laboratories, two Centres of Excellence focused on Marine Engineering Applications and E-Mobility, and research funding exceeding INR 30 crores from prestigious agencies.",
    ],
  },
  {
    icon: GraduationCap,
    title: "About UNITEN, Malaysia",
    paragraphs: [
      "Universiti Tenaga Nasional is a premier institution specializing in engineering, energy, and technology education. The university is known for excellence in power engineering, smart grids, renewable energy systems, and sustainable technologies.",
      "Its modern infrastructure, advanced research facilities, strong industry linkages, and global collaborations make UNITEN a valuable partner in promoting sustainable and intelligent energy solutions.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero eyebrow="About the conference" title={conferenceConfig.name} description={`${conferenceConfig.fullName} (${conferenceConfig.edition})`} />
      <section className="container py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-lg leading-8 text-muted-foreground">
            <h2 className="text-3xl font-black text-brand-dark">A premier international platform</h2>
            <p>The conference provides a platform for researchers, academicians, and industry professionals to share recent advancements in power electronics, renewable energy, smart grids, energy storage, electric mobility, hydrogen energy, and artificial intelligence in energy systems.</p>
            <p>AI-SGE 2027 promotes innovation, interdisciplinary collaboration, and sustainable technological development for future electrification. Original, unpublished research papers within the conference themes are invited for presentation and possible publication.</p>
          </div>
          <aside className="content-card bg-brand-light/20 p-8">
            <Handshake className="size-9 text-brand" />
            <h2 className="mt-5 text-2xl font-black text-brand-dark">International partnership</h2>
            <p className="mt-4 leading-7 text-muted-foreground">Held on {conferenceConfig.dates.conference} at {conferenceConfig.location}, in partnership with {conferenceConfig.partner}.</p>
          </aside>
        </div>
      </section>
      <section className="bg-muted/55 py-16 lg:py-20">
        <div className="container space-y-8">
          {profiles.map(({ icon: Icon, title, paragraphs }) => (
            <article key={title} className="content-card grid gap-6 p-7 md:grid-cols-[auto_1fr] md:p-9">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-dark text-white"><Icon className="size-7" /></div>
              <div><h2 className="text-2xl font-black text-brand-dark">{title}</h2>{paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 leading-8 text-muted-foreground">{paragraph}</p>)}</div>
            </article>
          ))}
        </div>
      </section>
      <section className="container py-16 text-center lg:py-20"><h2 className="text-3xl font-black text-brand-dark">Invitation</h2><p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-muted-foreground">We warmly invite researchers, academicians, industry professionals, and students to participate in AI-SGE 2027 and contribute to advancing research and innovation in sustainable energy and future electrification technologies.</p></section>
    </div>
  );
}
