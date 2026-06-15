import { Button } from "@/components/ui/button";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { conferenceConfig } from "@/config/conference";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-brand-dark text-white py-16 lg:py-20">
        <div className="container text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-brand-light text-sm font-semibold uppercase tracking-widest">Get in Touch</p>
          <h1 className="text-3xl lg:text-5xl font-bold">Contact Us</h1>
          <p className="text-white/75 text-lg">
            Have questions about submissions, registration, or the conference? We are here to help.
          </p>
        </div>
      </section>

      <div className="container py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="size-12 rounded-2xl bg-brand-light/50 text-brand-dark flex items-center justify-center flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="font-bold text-brand-dark">Email</p>
                  <a
                    href={`mailto:${conferenceConfig.contact.email}`}
                    className="text-muted-foreground hover:text-brand transition-colors"
                  >
                    {conferenceConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="size-12 rounded-2xl bg-brand-light/50 text-brand-dark flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-bold text-brand-dark">Venue</p>
                  <p className="text-muted-foreground">{conferenceConfig.location}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="size-12 rounded-2xl bg-brand-light/50 text-brand-dark flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <p className="font-bold text-brand-dark">Partnership</p>
                  <p className="text-muted-foreground">{conferenceConfig.partner}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-brand-dark text-white rounded-3xl space-y-3">
              <h3 className="text-lg font-bold text-brand-light">Conference Dates</h3>
              <p className="text-white/80">{conferenceConfig.dates.conference}</p>
            </div>
          </div>

          <div className="bg-white border border-brand/15 p-8 lg:p-10 rounded-3xl shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-brand-dark">Send a Message</h2>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-dark">Name</label>
                  <input
                    type="text"
                    className="w-full h-11 px-4 rounded-xl border border-border bg-muted/30 focus:ring-2 focus:ring-brand/30 outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-dark">Email</label>
                  <input
                    type="email"
                    className="w-full h-11 px-4 rounded-xl border border-border bg-muted/30 focus:ring-2 focus:ring-brand/30 outline-none transition-all"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-dark">Subject</label>
                <input
                  type="text"
                  className="w-full h-11 px-4 rounded-xl border border-border bg-muted/30 focus:ring-2 focus:ring-brand/30 outline-none transition-all"
                  placeholder="How can we help?"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-dark">Message</label>
                <textarea
                  className="w-full h-32 p-4 rounded-xl border border-border bg-muted/30 focus:ring-2 focus:ring-brand/30 outline-none transition-all resize-none"
                  placeholder="Describe your inquiry..."
                />
              </div>
              <Button size="lg" className="w-full rounded-xl py-6 bg-brand-dark hover:bg-brand-dark/90">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
