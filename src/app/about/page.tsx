import { conferenceConfig } from "@/config/conference";

export default function AboutPage() {
  return (
    <div className="container py-20 space-y-12">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">About the Conference</h1>
        <p className="text-xl text-muted-foreground">
          Defining the future of technology and innovation.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-lg leading-relaxed text-slate-600">
            The {conferenceConfig.name} is a premier platform for researchers, academicians, and industry professionals to share their innovative ideas and findings. Our mission is to foster collaboration and drive excellence in the fields of {conferenceConfig.tracks.join(", ")}.
          </p>
          <p className="text-lg leading-relaxed text-slate-600">
            Established in 2020, the conference has grown to become one of the most respected events in the global technology calendar, attracting participants from over 50 countries.
          </p>
        </div>
        <div className="bg-slate-100 rounded-3xl p-8 space-y-6">
          <h2 className="text-3xl font-bold">Why Attend?</h2>
          <ul className="space-y-4">
            {[
              "Network with world-renowned experts and influencers.",
              "Gain insights into the latest research and technological trends.",
              "Participate in hands-on workshops and technical tutorials.",
              "Discover new opportunities for collaboration and funding.",
              "Present your research to a global audience of peers."
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <div className="size-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">{i+1}</div>
                <span className="text-slate-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
