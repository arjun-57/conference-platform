import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { conferenceConfig } from "@/config/conference";
import Link from "next/link";
import { FileText, Calendar, CloudUpload, CheckCircle } from "lucide-react";

const deadlines = [
  { label: "Start of Digest Submission", date: conferenceConfig.dates.digestSubmissionStart, icon: FileText },
  { label: "Digest Submission Deadline", date: conferenceConfig.dates.digestSubmissionDeadline, icon: FileText },
  { label: "Digest Acceptance Notification", date: conferenceConfig.dates.digestAcceptanceNotification, icon: Calendar },
  { label: "Camera-Ready Submission", date: conferenceConfig.dates.cameraReady, icon: CloudUpload },
  { label: "Early Bird Registration", date: conferenceConfig.dates.earlyBirdRegistration, icon: CheckCircle },
];

export default function CFPPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-brand-dark text-white py-16 lg:py-20">
        <div className="container text-center space-y-6 max-w-3xl mx-auto">
          <p className="text-brand-light text-sm font-semibold uppercase tracking-widest">Submit Your Research</p>
          <h1 className="text-3xl lg:text-5xl font-bold">Call for Papers</h1>
          <p className="text-white/75 text-lg">
            Submit your digest to {conferenceConfig.name} and contribute to the future of AI,
            sustainable green energy, and electrification.
          </p>
          <Button
            size="lg"
            className="rounded-full px-10 bg-brand hover:bg-brand/90"
            render={<Link href="/auth/signup" />}
          >
            Start Your Submission
          </Button>
        </div>
      </section>

      <div className="container py-16 lg:py-20 space-y-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-brand-dark">Submission Guidelines</h2>
            <div className="space-y-6">
              {[
                { title: "Originality", description: "Papers must be original and not concurrently submitted elsewhere." },
                { title: "Format", description: "Use the IEEE double-column format. Max 6 pages for full papers." },
                { title: "Anonymous Review", description: "Submissions must be anonymized for blind peer review." },
                { title: "File Size", description: "PDF format only, maximum file size of 20MB." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="p-2 bg-brand-light/50 rounded-lg text-brand-dark h-fit">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted/50 p-8 rounded-3xl space-y-6 border border-brand/15">
            <h2 className="text-2xl font-bold text-brand-dark">Important Deadlines</h2>
            <div className="space-y-3">
              {deadlines.map((item) => (
                <Card key={item.label} className="border-border/80 shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 py-4">
                    <div className="flex items-center gap-3">
                      <item.icon size={18} className="text-brand" />
                      <CardTitle className="text-sm font-medium">{item.label}</CardTitle>
                    </div>
                    <span className="font-semibold text-brand-dark text-sm">{item.date}</span>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-brand-dark text-center">Conference Tracks</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {conferenceConfig.tracks.map((track) => (
              <Card key={track} className="hover:border-brand/50 transition-colors border-border/80">
                <CardHeader>
                  <CardTitle className="text-brand-dark text-base">{track}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
