import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { committeeSections, conference, orTBD } from "@/config";
import type { CommitteeGroup } from "@/config";

export const metadata: Metadata = {
  title: "Committee Members",
  description: `Chief patrons, convener, organizing committee and international advisory committee of ${conference.name}.`,
};

function MemberGroup({ group }: { group: CommitteeGroup }) {
  const hasMembers = group.members.length > 0;

  return (
    <div className="space-y-4">
      <h3 className="border-b border-brand/25 pb-2 text-lg font-bold text-brand-dark">
        {group.title}
      </h3>

      {hasMembers && (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {group.members.map((member, i) => (
            <li
              key={`${member.name ?? "pending"}-${i}`}
              className="rounded-xl border border-border bg-white p-4 transition-colors hover:border-brand/40"
            >
              <p className="font-semibold text-brand-dark">
                {orTBD(member.name)}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Unnamed seats are summarised rather than shown as empty cards. */}
      {group.pending ? (
        <p className="rounded-xl border border-dashed border-brand/30 bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
          {group.pending} {group.pending === 1 ? "member" : "members"} to be
          announced.
        </p>
      ) : null}
    </div>
  );
}

export default function CommitteePage() {
  return (
    <div>
      <PageHero
        eyebrow={conference.name}
        title="Committee Members"
        description={`Meet the team behind ${conference.name}, jointly organized by SRMIST, UNITEN (Malaysia), and PMU (Saudi Arabia).`}
      />

      <section className="container space-y-16 py-16 lg:py-20">
        {committeeSections.map((section) => (
          <div key={section.id} id={section.id} className="scroll-mt-24 space-y-8">
            <div>
              <h2 className="text-2xl font-black text-brand-dark sm:text-3xl">
                {section.title}
              </h2>
              {section.description && (
                <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                  {section.description}
                </p>
              )}
            </div>

            <div className="space-y-10">
              {section.groups.map((group) => (
                <MemberGroup key={group.title} group={group} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
