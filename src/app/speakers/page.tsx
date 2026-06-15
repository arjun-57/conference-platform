import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const speakers = [
  { name: "Dr. Elena Rossi", role: "AI Research Lead at Tech Giants", topic: "The Future of Generative Models", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" },
  { name: "Marcus Chen", role: "CTO, CloudScale Systems", topic: "Distributed Computing at Scale", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
  { name: "Sarah Williams", role: "Cybersecurity Expert", topic: "Brave New World of Zero Trust", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" },
  { name: "James Wilson", role: "Professor, Stanford University", topic: "Quantum Algorithms and Applications", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
];

export default function SpeakersPage() {
  return (
    <div className="container py-20 space-y-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Keynote & Featured Speakers</h1>
        <p className="text-xl text-muted-foreground">
          Meet the visionary leaders shaping the next generation of technology.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {speakers.map((speaker, i) => (
          <Card key={i} className="overflow-hidden border-none shadow-lg group">
            <div className="aspect-square relative overflow-hidden bg-slate-200">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src={speaker.image} alt={speaker.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
            </div>
            <CardContent className="p-6 space-y-3">
              <Badge variant="outline" className="mb-2">Keynote Speaker</Badge>
              <h3 className="text-xl font-bold">{speaker.name}</h3>
              <p className="text-sm font-medium text-primary">{speaker.role}</p>
              <p className="text-xs text-slate-500 mt-2 italic">Topic: {speaker.topic}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-primary/5 rounded-3xl p-12 text-center space-y-6">
        <h2 className="text-2xl font-bold">Interested in speaking?</h2>
        <p className="text-lg text-slate-600 max-w-xl mx-auto">
          We are still accepting applications for lightning talks and workshop facilitators. Join our prestigious lineup.
        </p>
        <Link href="/contact" className="text-primary font-bold hover:underline">Apply as a speaker →</Link>
      </div>
    </div>
  );
}

import Link from "next/link";
