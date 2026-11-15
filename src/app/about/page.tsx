import type { Metadata } from "next";
import { Building2, Cpu, Globe, GraduationCap, Target, Zap } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { DeadlinesTable } from "@/components/sections/DeadlinesTable";
import { conference, objectives } from "@/config";

export const metadata: Metadata = {
  title: "About the Conference",
  description: `About ${conference.name} — a joint international conference by ${conference.host} and key partner universities on AI and sustainable green energy technologies.`,
};

const profiles = [
  {
    icon: Building2,
    title: "SRM Institute of Science and Technology",
    paragraphs: [
      "SRM Institute of Science and Technology (SRM IST), formerly known as SRM University, is a top-ranked multidisciplinary private university located on a 380-acre green campus along NH45 near Chennai, India. Established in 1985 by Founder-Chancellor Dr. T. R. Paarivendhar, SRM IST has evolved into a globally recognized center of excellence in Engineering, Management, Medicine and Health Sciences, Science and Humanities, Agriculture, and Law.",
      "With campuses at Kattankulathur, Ramapuram, Vadapalani (Chennai), Tiruchirappalli, and Modinagar (Ghaziabad), SRM IST hosts over 52,000 students and 3,200 faculty members. The institution offers a wide range of Undergraduate, Postgraduate, and Doctoral programs across diverse disciplines.",
      "SRM IST is accredited with NAAC 'A++' Grade (2024) and recognized as a Category I University by UGC–MHRD. It consistently ranks among the top universities in India and features in QS World University Rankings and Times Higher Education Rankings, supported by strong global collaborations, advanced research centers, and a vibrant innovation ecosystem.",
    ],
  },
  {
    icon: Zap,
    title: "Department of Electrical and Electronics Engineering",
    paragraphs: [
      "Established in 1992, the Department of Electrical and Electronics Engineering at SRM IST offers Undergraduate, Postgraduate, and Doctoral programs and is committed to excellence in teaching, research, and industry collaboration.",
      "The department comprises over 57 highly qualified faculty members with expertise in power electronics, energy systems, control engineering, electrical machines, renewable energy, and emerging technologies. Supported by advanced laboratories and strong industry partnerships, the department has earned national and international recognition.",
      "The department houses two Centers of Excellence focused on Marine Engineering Applications and E-Mobility, fostering cutting-edge research and innovation in emerging domains. Furthermore, it has secured research funding exceeding ₹30 crores from several prestigious agencies, including DST (PURSE, ARG, TARE, and ECR), Ministry of Earth Sciences (MoES), Ministry of Education (MoE), AICTE, NIOT, DRDO, and CSIR.",
      "The flagship B.Tech. Electrical and Electronics Engineering program is accredited by ABET (EAC) and the National Board of Accreditation (NBA), India. The department has received the AICTE-CII Award for Best Industry-Linked Institute (2019–2020) and maintains a strong global presence. According to the QS World University Rankings by Subject, SRM IST is placed in the 201–250 band globally in Electrical and Electronics Engineering.",
    ],
  },
  {
    icon: Cpu,
    title: "Department of Electronics & Instrumentation Engineering",
    paragraphs: [
      "The Department of Electronics & Instrumentation Engineering was started in the year 2007-08. The scope of Electronics & Instrumentation Engineering is vast and is fast growing to cater the needs of manufacturing and process automation industries. The Department has been accredited by the IET accreditation board (UK) and has been recognized by the IASC – Sector Skill Council – Affiliated to Ministry of Skill Development and Entrepreneurship, Govt. of India in 2018.",
      "A Centre of Excellence (CoE) in Factory automation in partnership with Mitsubishi Electric and another Centre of Excellence in HMI in partnership with Schneider Electric, has been established. Our Department faculty & students have 75+ patent grants, published more than 90 patents and have received funding of about Rs.2 Cr, sanctioned through funded projects by agencies like DST, SERB, BRNS and MHRD. Student projects are channelized in to patentable products wherein students and faculty are motivated to initiate start-ups to commercialize 100+ inventions and prototype models.",
      "The department houses IoT Innovation lab sponsored by Edgate Technologies, under Texas Instruments University Program (TIUP), Automation club, Robocon Team, LabVIEW club and MEMS club to give practical training to current academic student batches for their upskill development. A strong alumni network of about 2500 students have been formed and about 300+ Alumni have successfully completed SAP program in various prestigious institutions (UC Davis, UC Berkeley, Taiwan, San Diego, Illinois to name a few).",
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
  {
    icon: Globe,
    title: "Universitas Ahmad Dahlan (UAD), Indonesia",
    paragraphs: [
      "Universitas Ahmad Dahlan (UAD) is a leading private university based in Yogyakarta, Indonesia, offering programmes across engineering, applied sciences, technology, and education, with a strong commitment to academic excellence and innovation.",
      "UAD actively engages in international research collaborations in electrical engineering, renewable energy, and intelligent systems, making it a valuable partner in advancing sustainable energy research and global academic exchange.",
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

      {/* About the Conference */}
      <section className="container py-16 lg:py-20">
        <SectionHeading
          eyebrow="About the Conference"
          title="AI and Sustainable Green Energy for Future Electrification"
        />
        <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">
          <p>
            The First International Conference on Artificial Intelligence and
            Sustainable Green Energy Technologies for Future Electrification
            aims to provide a distinguished international platform for
            researchers, academicians, industry professionals, and innovators to
            exchange knowledge, present cutting-edge research, and explore
            emerging technological advancements in sustainable energy and future
            electrification.
          </p>
          <p>
            The conference focuses on the integration of artificial intelligence
            with renewable energy systems, power electronics, smart grids,
            energy storage, electric mobility, hydrogen technologies, and
            intelligent energy management. Through technical presentations,
            expert interactions, and interdisciplinary discussions, AI-SGE 2027
            seeks to foster innovation, encourage research collaborations, and
            accelerate the development of intelligent, efficient, and
            environmentally sustainable energy solutions.
          </p>
          <p>
            Jointly organised by SRM Institute of Science and Technology, India;
            Universiti Tenaga Nasional (UNITEN), Malaysia; and Universitas Ahmad
            Dahlan (UAE), Indonesia, AI-SGE 2027 marks the beginning of a
            proposed long-term international academic collaboration. The
            conference is envisioned as a recurring event hosted by the three
            partner universities on a rotational basis, strengthening global
            research partnerships, facilitating knowledge exchange, and
            advancing sustainable energy technologies for future generations.
          </p>
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
            title={`Institutions behind ${conference.shortName}`}
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
              {conference.cmtAcknowledgment}
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
