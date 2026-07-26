import { Hotel, Plane, Train, CreditCard, Info, MapPin } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { conferenceConfig } from "@/config/conference";

const travelInfo = [
  {
    icon: Plane,
    title: "By Air",
    body: "Chennai International Airport (MAA) — approximately 45 km from the campus. Taxis, Ola/Uber, and pre-paid airport taxis are readily available. Journey time: ~60–90 minutes depending on traffic.",
  },
  {
    icon: Train,
    title: "By Rail",
    body: "Guduvanchery Railway Station is the nearest suburban station (~6 km). Chengalpattu Junction (~15 km) is served by more express trains. Chennai Central and Chennai Egmore are ~45 km away.",
  },
  {
    icon: MapPin,
    title: "By Road",
    body: "SRM IST is located on NH45 (Old Mahabalipuram Road direction). Well connected by SETC buses, private buses, and cab services from Chennai and Chengalpattu.",
  },
];

export default function RegistrationPage() {
  return (
    <div>
      <PageHero
        eyebrow="Participate"
        title="Registration, Accommodation & Travel"
        description="Find registration categories, fees, accommodation options near the venue, and travel information."
      />

      {/* Registration fee table */}
      <section className="container py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">Fees</p>
          <h2 className="mt-3 text-3xl font-black text-brand-dark">Registration Fees</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Early bird rates apply until{" "}
            <strong className="text-brand-dark">{conferenceConfig.registration.earlyBirdCutoff}</strong>.
            Regular rates apply thereafter. Fees are in INR for Indian participants and USD for
            foreign participants.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-brand/20 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-dark text-left text-white">
                  <th className="px-6 py-4 font-semibold">Category</th>
                  <th className="px-6 py-4 font-semibold">Early Bird</th>
                  <th className="px-6 py-4 font-semibold">Regular</th>
                </tr>
              </thead>
              <tbody>
                {conferenceConfig.registration.fees.map((row, i) => (
                  <tr
                    key={row.category}
                    className={`border-b border-brand/10 ${i % 2 === 0 ? "bg-white" : "bg-muted/30"}`}
                  >
                    <td className="px-6 py-4 font-medium text-brand-dark">{row.category}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.early}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.regular}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-xl bg-muted/60 px-5 py-4 text-sm leading-7 text-muted-foreground">
            <Info className="mt-0.5 size-5 shrink-0 text-brand" />
            <p>{conferenceConfig.registration.note}</p>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl bg-brand-light/20 px-5 py-4 text-sm leading-7 text-brand-dark">
            <CreditCard className="mt-0.5 size-5 shrink-0 text-brand" />
            <p>
              <strong>Payment:</strong> The online payment link and bank transfer details will be
              shared with accepted authors after acceptance notifications are sent. Attendee
              (non-presenting) registration link will be announced separately.
            </p>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="bg-muted/55 py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="content-card p-8 md:p-10">
              <Hotel className="size-9 text-brand" />
              <p className="mt-5 text-sm font-bold uppercase tracking-widest text-brand">Stay</p>
              <h2 className="mt-2 text-2xl font-black text-brand-dark">Accommodation</h2>
              <p className="mt-4 leading-8 text-muted-foreground">
                A range of hotels and guesthouses are available near Kattankulathur, Guduvanchery,
                and Chengalpattu, as well as in Chennai city for those preferring a city stay.
                Recommended accommodation partners and group-booking details will be announced
                closer to the conference date.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { name: "[Hotel Name 1]", distance: "[X] km from venue", price: "₹[TBD]/night" },
                  { name: "[Hotel Name 2]", distance: "[X] km from venue", price: "₹[TBD]/night" },
                  { name: "[Hotel Name 3]", distance: "[X] km from venue", price: "₹[TBD]/night" },
                  { name: "[Hotel Name 4]", distance: "City hotel, Chennai", price: "₹[TBD]/night" },
                ].map((h) => (
                  <div
                    key={h.name}
                    className="rounded-xl border border-brand/15 bg-white p-5 shadow-sm"
                  >
                    <p className="font-bold text-brand-dark">{h.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{h.distance}</p>
                    <p className="mt-1 text-sm font-semibold text-brand">{h.price}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                * Accommodation details will be confirmed closer to the conference. Please contact{" "}
                <a
                  href={`mailto:${conferenceConfig.contact.email}`}
                  className="font-medium text-brand-dark hover:underline"
                >
                  {conferenceConfig.contact.email}
                </a>{" "}
                for enquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel info */}
      <section className="container py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">Directions</p>
          <h2 className="mt-3 text-3xl font-black text-brand-dark">How to Reach</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {travelInfo.map(({ icon: Icon, title, body }) => (
              <div key={title} className="content-card p-7">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-dark text-white">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 font-black text-brand-dark">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-brand/15 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.052!2d80.04!3d12.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f712b82a78b9%3A0x6b1bc38c42504af6!2sSRM%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="340"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SRM IST Kattankulathur Campus Map"
            />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            SRM IST Kattankulathur Campus — NH45, Kattankulathur, Chengalpattu District,
            Tamil Nadu 603203, India
          </p>
        </div>
      </section>

      {/* Visa note */}
      <section className="container pb-20 lg:pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-brand-dark p-8 text-white sm:p-10">
          <h2 className="text-2xl font-black">Visa Information</h2>
          <p className="mt-4 leading-8 text-white/75">
            International participants may require a conference visa to enter India. An official
            invitation letter for confirmed attendees and accepted authors will be provided by the
            organizing committee upon request. Please contact{" "}
            <a
              href={`mailto:${conferenceConfig.contact.email}`}
              className="text-brand-light underline"
            >
              {conferenceConfig.contact.email}
            </a>{" "}
            for visa invitation letter requests.
          </p>
        </div>
      </section>
    </div>
  );
}
