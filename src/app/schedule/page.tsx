import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const schedule = [
  { day: "Day 1: Monday, June 15", sessions: [
    { time: "09:00 - 10:00", title: "Registration & Welcome Breakfast", room: "Grand Hall" },
    { time: "10:00 - 11:30", title: "Keynote: The Future of Generative Models", speaker: "Dr. Elena Rossi", room: "Ballroom A" },
    { time: "11:30 - 12:30", title: "Paper Session: AI & Machine Learning", room: "Room 101" },
  ]},
  { day: "Day 2: Tuesday, June 16", sessions: [
    { time: "10:00 - 11:30", title: "Keynote: Distributed Computing at Scale", speaker: "Marcus Chen", room: "Ballroom A" },
    { time: "11:30 - 13:00", title: "Paper Session: Cloud & Cybersecurity", room: "Room 102" },
  ]},
];

export default function SchedulePage() {
  return (
    <div className="container py-20 space-y-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Conference Schedule</h1>
        <p className="text-xl text-muted-foreground">
          Plan your conference experience with our detailed session schedule.
        </p>
      </div>

      <div className="space-y-12">
        {schedule.map((day, i) => (
          <div key={i} className="space-y-6">
            <h2 className="text-2xl font-bold bg-slate-100 px-6 py-3 rounded-2xl w-fit">{day.day}</h2>
            <div className="grid gap-4">
              {day.sessions.map((session, j) => (
                <Card key={j} className="hover:border-primary transition-colors border-l-4 border-l-primary">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 px-6">
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-primary">{session.time}</p>
                      <CardTitle className="text-xl">{session.title}</CardTitle>
                      {session.speaker && <CardDescription className="text-base font-medium text-slate-700">Speaker: {session.speaker}</CardDescription>}
                    </div>
                    <Badge variant="secondary">{session.room}</Badge>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white p-12 rounded-[3rem] text-center space-y-4">
        <h3 className="text-2xl font-bold">Full Program PDF</h3>
        <p className="text-slate-400">Download the comprehensive program overview with all abstracts and workshop details.</p>
        <Button variant="secondary" className="mt-4 rounded-full px-8">Coming Soon</Button>
      </div>
    </div>
  );
}
