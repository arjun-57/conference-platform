import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { conferenceConfig } from "@/config/conference";
import Link from "next/link";
import { FileText, Calendar, CloudUpload, CheckCircle } from "lucide-react";

export default function CFPPage() {
  return (
    <div className="container py-20 space-y-16">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Call for Papers</h1>
        <p className="text-xl text-muted-foreground">
          Submit your original research and be part of the Global Tech Conference 2026.
        </p>
        <Button size="lg" className="rounded-full px-10">
          <Link href="/auth/signup">Start Your Submission</Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Submission Guidelines</h2>
          <div className="space-y-6">
            {[
              { title: "Originality", description: "Papers must be original and not concurrently submitted elsewhere." },
              { title: "Format", description: "Use the IEEE double-column format. Max 6 pages for full papers." },
              { title: "Anonymous Review", description: "Submissions must be anonymized for blind peer review via Microsoft CMT." },
              { title: "File Size", description: "PDF format only, maximum file size of 20MB." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary h-fit">
                   <CheckCircle size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-3xl space-y-8 border">
          <h2 className="text-2xl font-bold">Important Deadlines</h2>
          <div className="space-y-4">
            {[
              { label: "Paper Submission", date: conferenceConfig.dates.submissionDeadline, icon: FileText },
              { label: "Review Decision", date: conferenceConfig.dates.reviewNotification, icon: Calendar },
              { label: "Camera-Ready", date: conferenceConfig.dates.cameraReady, icon: CloudUpload }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 py-4">
                  <div className="flex items-center gap-3">
                    <item.icon size={20} className="text-primary" />
                    <CardTitle className="text-base">{item.label}</CardTitle>
                  </div>
                  <span className="font-bold text-primary">
                    {new Date(item.date).toLocaleDateString("en-US", { month: 'short', day: 'numeric' })}
                  </span>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Tracks</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conferenceConfig.tracks.map((track, i) => (
            <Card key={i} className="hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>{track}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">Topics include but are not limited to new theories, algorithms, and practical applications in {track.toLowerCase()}.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
