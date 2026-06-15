import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare, Globe } from "lucide-react";
import { conferenceConfig } from "@/config/conference";

export default function ContactPage() {
  return (
    <div className="container py-20 space-y-16">
       <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Contact Us</h1>
        <p className="text-xl text-muted-foreground">
          Have questions? Our team is here to help you.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <div className="space-y-6">
               <div className="flex gap-4">
                 <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                 </div>
                 <div>
                    <p className="font-bold">Email</p>
                    <a href={`mailto:${conferenceConfig.contact.email}`} className="text-slate-600 hover:text-primary transition-colors">{conferenceConfig.contact.email}</a>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                 </div>
                 <div>
                    <p className="font-bold">Twitter</p>
                    <p className="text-slate-600">{conferenceConfig.contact.twitter}</p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={24} />
                 </div>
                 <div>
                    <p className="font-bold">Technical Support</p>
                    <p className="text-slate-600">Available 24/7 during the conference period.</p>
                 </div>
               </div>
            </div>
          </div>

          <div className="p-8 bg-slate-900 text-white rounded-[2rem] space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <Globe size={20} className="text-primary" /> Global Office
            </h3>
            <p className="text-slate-400">{conferenceConfig.location}</p>
          </div>
        </div>

        <div className="bg-white border p-10 rounded-[2rem] shadow-sm space-y-6">
          <h2 className="text-2xl font-bold">Send a Message</h2>
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
               <div className="space-y-2">
                 <label className="text-sm font-medium">Name</label>
                 <input type="text" className="w-full h-11 px-4 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Your Name" />
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-medium">Email</label>
                 <input type="email" className="w-full h-11 px-4 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Email Address" />
               </div>
            </div>
            <div className="space-y-2">
               <label className="text-sm font-medium">Subject</label>
               <input type="text" className="w-full h-11 px-4 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="How can we help?" />
            </div>
            <div className="space-y-2">
               <label className="text-sm font-medium">Message</label>
               <textarea className="w-full h-32 p-4 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Describe your inquiry..." />
            </div>
            <Button size="lg" className="w-full rounded-xl py-6 mt-4">Send Message</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
