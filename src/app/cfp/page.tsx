import { CheckCircle2, ExternalLink, FileText, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ImportantDates } from "@/components/sections/ImportantDates";
import { conferenceConfig } from "@/config/conference";

const guidelines = [
  "Submit an IEEE single-column PDF not exceeding four A4 pages and 2 MB.",
  "The digest may be submitted to any relevant conference track.",
  "The digest will undergo single-blind review; author names and affiliations must be included.",
  "Include an abstract of about 200 words and a maximum of five keywords.",
  "Digests with a plagiarism similarity score of 30% or above may be rejected without further review.",
  "Review results will be sent by email.",
  "Accepted authors must incorporate reviewer suggestions and submit the camera-ready paper by the deadline.",
  "Authors cannot be added or removed after a digest is accepted.",
];

export default function CFPPage() {
  return (
    <div>
      <PageHero eyebrow="For Authors" title="Call for Papers" description="We invite prospective authors to submit original research papers in any relevant AI-SGE 2027 track." />
      <section className="container grid gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-brand">Submission workflow</p>
          <h2 className="mt-3 text-3xl font-black text-brand-dark">Submissions and review through Microsoft CMT</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">Microsoft CMT will manage digest submission, reviewer communication, decisions, and camera-ready uploads. This website will publish the official CMT link when the portal opens.</p>
          <div className="mt-7 rounded-2xl border border-brand/25 bg-brand-light/20 p-6">
            <p className="flex items-center gap-3 font-bold text-brand-dark"><ExternalLink className="size-5 text-brand" />{conferenceConfig.submission.platform}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{conferenceConfig.submission.status}</p>
          </div>
          <p className="mt-6 text-sm leading-6 text-muted-foreground">Registration and payment will open only after acceptance. Accepted authors will receive instructions separately.</p>
        </div>
        <ImportantDates />
      </section>
      <section className="bg-muted/55 py-16 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div><p className="text-sm font-bold uppercase tracking-widest text-brand">Requirements</p><h2 className="mt-3 text-3xl font-black text-brand-dark">Digest submission instructions</h2><div className="mt-8 space-y-4">{guidelines.map((item) => <p key={item} className="content-card flex gap-3 p-4 leading-7 text-muted-foreground"><CheckCircle2 className="mt-1 size-5 shrink-0 text-brand" />{item}</p>)}</div></div>
          <div><p className="text-sm font-bold uppercase tracking-widest text-brand">Research areas</p><h2 className="mt-3 text-3xl font-black text-brand-dark">Conference tracks</h2><div className="mt-8 grid gap-4">{conferenceConfig.tracks.map((track) => <div key={track} className="content-card flex items-center gap-3 p-5 font-bold text-brand-dark"><FileText className="size-5 shrink-0 text-brand" />{track}</div>)}</div></div>
        </div>
      </section>
      <section className="container py-16 lg:py-20"><div className="rounded-3xl bg-brand-dark p-8 text-white sm:p-10"><ShieldCheck className="size-9 text-brand-light" /><h2 className="mt-5 text-2xl font-black">Publication opportunities</h2><p className="mt-4 max-w-4xl leading-8 text-white/75">{conferenceConfig.publication}</p><p className="mt-4 max-w-4xl leading-8 text-white/75">Selected high-quality papers may be invited for extended versions and considered for publication in SCIE-indexed journals. The journal list will be updated on this website.</p></div></section>
    </div>
  );
}
