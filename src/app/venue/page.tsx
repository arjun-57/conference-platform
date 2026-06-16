import { MapPin, Plane, Hotel, Navigation } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { conferenceConfig } from "@/config/conference";
import { PageHero } from "@/components/layout/PageHero";

export default function VenuePage() {
  return (
    <div className="flex flex-col">
      <PageHero eyebrow="Location" title="Conference Venue" description={conferenceConfig.location} />

      <div className="container py-16 lg:py-20 space-y-12">
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
          {conferenceConfig.venueNote}
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 overflow-hidden min-h-[420px] border-brand/15 shadow-lg relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light flex items-center justify-center">
              <MapPin className="size-20 text-white/20" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-6 rounded-2xl shadow-lg border border-brand/15">
              <div className="flex gap-4">
                <div className="p-3 bg-brand-dark rounded-xl text-white h-fit">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-brand-dark">SRM IST, Kattankulathur Campus</h3>
                  <p className="text-muted-foreground">
                    Kattankulathur, Chengalpattu District, Tamil Nadu 603203, India
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-5">
            <Card className="bg-muted/40 border-brand/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-brand-dark">
                  <Plane className="text-brand" /> Getting There
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Chennai International Airport (MAA) is the nearest major airport, approximately
                45 km from the campus. Taxis, ride-sharing, and pre-paid transport are readily
                available from the airport.
              </CardContent>
            </Card>

            <Card className="bg-muted/40 border-brand/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-brand-dark">
                  <Hotel className="text-brand" /> Accommodation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                A range of hotels and guest accommodations are available in Chennai and near
                Kattankulathur. Details on recommended partners will be announced closer to the
                conference date.
              </CardContent>
            </Card>

            <Card className="bg-muted/40 border-brand/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-brand-dark">
                  <Navigation className="text-brand" /> Visa Information
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                International participants may require a conference visa. Invitation-letter
                guidance for accepted authors and confirmed attendees will be announced later.
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
