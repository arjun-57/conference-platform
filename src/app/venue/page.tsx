import { MapPin, Plane, Hotel, Navigation } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function VenuePage() {
  return (
    <div className="container py-20 space-y-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">The Venue</h1>
        <p className="text-xl text-muted-foreground">
          Join us in Bangalore, the Silicon Valley of Asia.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 overflow-hidden h-[500px] border-none shadow-xl relative">
          <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
             <p className="text-slate-500 font-medium">[Interactive Map Placeholder - Bangalore Tech Park]</p>
          </div>
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg border">
            <div className="flex gap-4">
              <div className="p-3 bg-primary rounded-xl text-white h-fit">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl">Tech Park Convention Center</h3>
                <p className="text-slate-600">Electronics City Phase 1, Bangalore, Karnataka 560100</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="bg-slate-50 border-none shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Plane className="text-primary" /> Getting There
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 leading-relaxed">
              Kempegowda International Airport (BLR) is well-connected to all major cities globally. From the airport, we recommend using pre-paid taxis or ride-sharing services like Uber/Ola.
            </CardContent>
          </Card>

          <Card className="bg-slate-50 border-none shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Hotel className="text-primary" /> Accommodation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 leading-relaxed">
              We have partnered with several 4 and 5-star hotels near the venue. Registered attendees get a 20% discount. Check our list of recommended partners.
            </CardContent>
          </Card>

          <Card className="bg-slate-50 border-none shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Navigation className="text-primary" /> Visa Information
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 leading-relaxed">
              International participants may require a conference visa. Please request an invitation letter during the registration process to assist your application.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
