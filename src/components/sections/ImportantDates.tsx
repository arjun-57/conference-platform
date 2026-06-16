import { CalendarDays } from "lucide-react";
import { conferenceConfig } from "@/config/conference";

const dates = [
  ["Start of Digest Submission", conferenceConfig.dates.digestSubmissionStart],
  ["Digest Submission Deadline", conferenceConfig.dates.digestSubmissionDeadline],
  ["Digest Acceptance Notification", conferenceConfig.dates.digestAcceptanceNotification],
  ["Camera-Ready Paper Submission Deadline", conferenceConfig.dates.cameraReady],
  ["Early Bird Registration Deadline", conferenceConfig.dates.earlyBirdRegistration],
  ["Conference Dates", conferenceConfig.dates.conference],
];

export function ImportantDates() {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand/20 bg-white shadow-sm">
      {dates.map(([label, date]) => (
        <div key={label} className="grid gap-2 border-b border-brand/15 px-5 py-5 last:border-0 sm:grid-cols-[1fr_auto] sm:items-center sm:px-7">
          <p className="flex items-center gap-3 font-semibold text-brand-dark"><CalendarDays className="size-5 shrink-0 text-brand" />{label}</p>
          <p className="pl-8 font-bold text-brand-dark sm:pl-0">{date}</p>
        </div>
      ))}
    </div>
  );
}
