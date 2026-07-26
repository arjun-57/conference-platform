import { MapPin, Plane, Hotel, Navigation, Train, Bus } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { conferenceConfig } from "@/config/conference";

const howToReach = [
  {
    icon: Plane,
    title: "By Air",
    body: "Chennai International Airport (MAA) — approximately 45 km from campus. Taxis, Ola/Uber, and pre-paid airport taxis are readily available. Journey time: ~60–90 minutes.",
  },
  {
    icon: Train,
    title: "By Rail",
    body: "Guduvanchery Railway Station (~6 km) and Chengalpattu Junction (~15 km) are nearest. Chennai Central (~45 km) is served by all major trains.",
  },
  {
    icon: Bus,
    title: "By Road / Bus",
    body: "SRM IST is on NH45. Regular SETC and private buses run from Chennai Koyambedu CMBT to Kattankulathur. Cab services are available throughout the day.",
  },
  {
    icon: Navigation,
    title: "Navigation",
    body: 'Search "SRM Institute of Science and Technology, Kattankulathur" on Google Maps or Apple Maps for turn-by-turn directions.',
  },
];

export default function VenuePage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Location"
        title="Conference Venue"
        description={conferenceConfig.location}
      />

      {/* Overview + address */}
      <div className="container py-16 lg:py-20 space-y-10">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand">About the Venue</p>
            <h2 className="mt-3 text-3xl font-black text-brand-dark">SRM IST, Kattankulathur Campus</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {conferenceConfig.venueNote}
            </p>
          </div>

          <div className="content-card p-7">
            <div className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
                <MapPin className="size-6" />
              </div>
              <div>
                <h3 className="font-black text-brand-dark">Venue Address</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  SRM Institute of Science and Technology<br />
                  Kattankulathur, Chengalpattu District<br />
                  Tamil Nadu – 603203, India
                </p>
                <a
                  href="https://maps.google.com/?q=SRM+Institute+of+Science+and+Technology+Kattankulathur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-dark px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-brand"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps embed */}
        <div className="overflow-hidden rounded-2xl border border-brand/15 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.052186614263!2d80.04163767507576!3d12.823112687440878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f712b82a78b9%3A0x6b1bc38c42504af6!2sSRM%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SRM IST Kattankulathur Campus — Google Maps"
          />
        </div>
      </div>

      {/* How to reach */}
      <div className="bg-muted/55 py-16 lg:py-20">
        <div className="container space-y-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand">Directions</p>
            <h2 className="mt-3 text-3xl font-black text-brand-dark">How to Reach</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {howToReach.map(({ icon: Icon, title, body }) => (
              <div key={title} className="content-card p-7">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-dark text-white">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 font-black text-brand-dark">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accommodation */}
      <div className="container py-16 lg:py-20">
        <div className="content-card p-8 md:p-10">
          <Hotel className="size-9 text-brand" />
          <h2 className="mt-5 text-2xl font-black text-brand-dark">Accommodation</h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            A variety of hotels and guesthouses are available near the venue in Kattankulathur,
            Guduvanchery, and Chengalpattu, as well as in Chennai city for those preferring a city
            stay. Recommended accommodation partners and group-booking arrangements will be
            announced closer to the conference date.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            For accommodation assistance, contact:{" "}
            <a
              href={`mailto:${conferenceConfig.contact.email}`}
              className="font-medium text-brand-dark hover:underline"
            >
              {conferenceConfig.contact.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
