import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { conferenceConfig } from "@/config/conference";
import { Calendar, MapPin, Users, BookOpen, Award, CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-950 text-white">
        <div className="container relative z-10">
          <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/50 text-base py-1 px-4">
              {conferenceConfig.dates.conference} • {conferenceConfig.location}
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight">
              {conferenceConfig.name}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {conferenceConfig.description} Join world-class experts, researchers, and industry leaders for three days of innovation and networking.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full">
                <Link href="/auth/signup">Register Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-slate-700 hover:bg-slate-900 text-white">
                <Link href="/cfp">Submit Your Paper</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      </section>

      {/* Stats Section */}
      <section className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-slate-200">
          {[
            { label: "Speakers", value: "40+", icon: Users },
            { label: "Tracks", value: conferenceConfig.tracks.length.toString(), icon: BookOpen },
            { label: "Expected Attendees", value: "500+", icon: Award },
            { label: "Research Papers", value: "100+", icon: CheckCircle },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-2">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                <stat.icon size={24} />
              </div>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tracks Section */}
      <section className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold">Conference Tracks</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We invite original research contributions across a wide range of topics in technology and engineering.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conferenceConfig.tracks.map((track, i) => (
            <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-none bg-slate-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                   <div className="size-2 rounded-full bg-primary" />
                   {track}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Exploring the latest advancements and future trends in {track.toLowerCase()} and its impact on modern society.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Dates Section */}
      <section className="bg-slate-50 py-20">
        <div className="container space-y-12">
           <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">Important Dates</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mark your calendars with these critical deadlines for submissions and registration.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid gap-4">
            {[
              { label: "Submission Deadline", date: conferenceConfig.dates.submissionDeadline, icon: Calendar, color: "text-red-500" },
              { label: "Notification of Acceptance", date: conferenceConfig.dates.reviewNotification, icon: CheckCircle, color: "text-blue-500", isString: true },
              { label: "Camera-Ready Submission", date: conferenceConfig.dates.cameraReady, icon: Award, color: "text-green-500", isString: true },
              { label: "Conference Dates", date: conferenceConfig.dates.conference, icon: MapPin, color: "text-primary", isString: true },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full bg-slate-50 ${item.color}`}>
                    <item.icon size={24} />
                  </div>
                  <span className="font-semibold text-lg">{item.label}</span>
                </div>
                <span className="text-lg font-medium text-slate-700">
                  {item.isString ? item.date : new Date(item.date as string).toLocaleDateString("en-US", { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container">
        <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-white text-center space-y-8 relative overflow-hidden">
          <h2 className="text-4xl lg:text-6xl font-bold relative z-10">Ready to contribute?</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto relative z-10">
            Submit your research paper today and be part of the most influential technology conference of the year.
          </p>
          <div className="flex justify-center gap-4 pt-4 relative z-10">
            <Button size="lg" variant="secondary" className="text-lg px-10 py-7 rounded-full">
              <Link href="/auth/signup">Join Now</Link>
            </Button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
        </div>
      </section>
    </div>
  );
}
