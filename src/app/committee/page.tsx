import { committeeSections, conferenceConfig } from "@/config/conference";

function CommitteeGroup({
  title,
  members,
}: {
  title: string;
  members: { name: string; role: string }[];
}) {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-bold text-brand-dark border-b border-brand/30 pb-3">
        {title}
      </h2>
      <ul className="grid sm:grid-cols-2 gap-4">
        {members.map((member, i) => (
          <li
            key={`${member.name}-${i}`}
            className="p-4 rounded-xl bg-white border border-border hover:border-brand/40 transition-colors"
          >
            <p className="font-semibold text-brand-dark">{member.name}</p>
            <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CommitteePage() {
  return (
    <div className="flex flex-col">
      <section className="bg-brand-dark text-white py-16 lg:py-20">
        <div className="container space-y-4">
          <p className="text-brand-light text-sm font-semibold uppercase tracking-widest">
            {conferenceConfig.name}
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold">Organizing Committee</h1>
          <p className="text-white/75 max-w-2xl text-lg">
            Meet the team behind AI-SGE 2027, jointly organized by SRMIST and UNITEN, Malaysia.
          </p>
        </div>
      </section>

      <section className="container py-16 lg:py-20 space-y-16">
        {committeeSections.map((section) => (
          <CommitteeGroup key={section.title} title={section.title} members={section.members} />
        ))}

        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-bold text-brand-dark border-b border-brand/30 pb-3">
            International Advisory Committee
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {conferenceConfig.advisoryCommittee.map((member) => (
              <li
                key={member}
                className="px-4 py-3 rounded-lg bg-muted/50 text-sm text-brand-dark border border-transparent hover:border-brand/30 transition-colors"
              >
                {member}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
