import { CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";
import { deadlines } from "@/config";

/** Important dates table, shared by the About and Call for Papers pages. */
export function DeadlinesTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand/20 bg-white shadow-sm">
      {deadlines.map((deadline) => (
        <div
          key={deadline.title}
          className={cn(
            "grid gap-2 border-b border-brand/15 px-5 py-5 last:border-0 sm:grid-cols-[1fr_auto] sm:items-center sm:px-7",
            deadline.emphasis && "bg-brand-light/15"
          )}
        >
          <p className="flex items-center gap-3 font-semibold text-brand-dark">
            <CalendarDays className="size-5 shrink-0 text-brand" />
            {deadline.title}
          </p>
          <p className="pl-8 font-bold text-brand-dark sm:pl-0">
            {deadline.display}
          </p>
        </div>
      ))}
    </div>
  );
}
