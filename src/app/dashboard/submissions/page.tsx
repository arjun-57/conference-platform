import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Plus, ExternalLink, Calendar, MessageSquare } from "lucide-react";
import Link from "next/link";

export default async function SubmissionsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: submissions } = await supabase
    .from("submissions")
    .select("*")
    .eq("author_id", user?.id)
    .order("submitted_at", { ascending: false });

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">My Submissions</h1>
          <p className="text-slate-500">Manage and track your research paper submissions.</p>
        </div>
        <Button className="rounded-xl h-11 px-6">
          <Link href="/dashboard/submissions/new" className="flex items-center gap-2">
            <Plus size={18} /> New Submission
          </Link>
        </Button>
      </div>

      {!submissions || submissions.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
           <FileText className="mx-auto h-20 w-20 text-slate-100 mb-6" />
           <h3 className="text-2xl font-bold text-slate-900">No submissions yet</h3>
           <p className="text-slate-500 max-w-sm mx-auto mb-8">
             You haven't submitted any papers yet. Start your journey by clicking the button below.
           </p>
           <Button size="lg" className="rounded-2xl px-10">
              <Link href="/dashboard/submissions/new">Start First Submission</Link>
           </Button>
        </div>
      ) : (
        <div className="grid gap-6">
          {submissions.map((sub) => (
            <Card key={sub.id} className="border-none shadow-sm hover:shadow-md transition-all group">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row md:items-center p-6 gap-6">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-wider text-[10px]">
                        {sub.track}
                      </Badge>
                      <Badge variant={sub.status === 'accepted' ? 'default' : 'secondary'} className="capitalize">
                        {sub.status.replace("_", " ")}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {sub.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
                       <span className="flex items-center gap-1.5"><Calendar size={14} /> Submitted on {new Date(sub.submitted_at).toLocaleDateString()}</span>
                       <span className="flex items-center gap-1.5"><FileText size={14} /> ID: {sub.id.substring(0, 8)}</span>
                       {sub.revision_count > 0 && <span className="flex items-center gap-1.5 font-medium text-amber-600"><Plus size={14} /> {sub.revision_count} Revisions</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="rounded-lg">
                      <Link href={`/dashboard/submissions/${sub.id}`}>
                        View Details
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-lg h-9 w-9" title="Feedback">
                       <MessageSquare size={18} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
