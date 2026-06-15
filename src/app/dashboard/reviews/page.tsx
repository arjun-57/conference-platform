import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ClipboardCheck, 
  FileText, 
  Clock, 
  AlertTriangle,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default async function ReviewerDashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Fetch reviews assigned to this reviewer
  const { data: reviews } = await supabase
    .from('reviews')
    .select(`
      *,
      submission:submissions(title, track, id)
    `)
    .eq('reviewer_id', user?.id)
    .order('assigned_at', { ascending: false });

  const pendingCount = reviews?.filter(r => r.status !== 'completed').length || 0;
  const completedCount = reviews?.filter(r => r.status === 'completed').length || 0;

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Reviewer Dashboard</h1>
          <p className="text-slate-500">Assess assigned papers and contribute to the conference quality.</p>
        </div>
        <div className="flex gap-4">
           <Card className="border-none shadow-sm bg-primary/10 text-primary px-6 py-2 flex items-center gap-3">
              <ClipboardCheck size={20} />
              <div className="text-sm">
                 <span className="font-bold">{pendingCount}</span> Pending
              </div>
           </Card>
        </div>
      </div>

      <div className="grid gap-8">
         <div className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
               <FileText className="text-primary" /> Active Assignments
            </h2>
            
            <div className="grid gap-4 md:grid-cols-2">
               {reviews?.map((rev) => (
                 <Card key={rev.id} className="border-none shadow-sm hover:shadow-md transition-all">
                    <CardHeader className="pb-3">
                       <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-[10px] uppercase tracking-widest border-primary/20 text-primary">
                             {(rev.submission as any)?.track}
                          </Badge>
                          <Badge variant={rev.status === 'completed' ? 'default' : 'secondary'} className="capitalize">
                             {rev.status}
                          </Badge>
                       </div>
                       <CardTitle className="text-lg line-clamp-2">{(rev.submission as any)?.title}</CardTitle>
                       <CardDescription>Paper ID: {(rev.submission as any)?.id.substring(0, 8)}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                       <div className="flex items-center justify-between mt-4">
                          <div className="text-xs text-slate-400 flex items-center gap-1">
                             <Clock size={12} /> Assigned {new Date(rev.assigned_at).toLocaleDateString()}
                          </div>
                          <Button variant="ghost" size="sm" className="hover:bg-primary hover:text-white transition-all h-10 px-4 rounded-xl">
                             <Link href={`/dashboard/reviews/${rev.id}`} className="flex items-center gap-2">
                               {rev.status === 'completed' ? 'View Review' : 'Start Review'} <ArrowRight size={14} />
                             </Link>
                          </Button>
                       </div>
                    </CardContent>
                 </Card>
               ))}
               
               {(!reviews || reviews.length === 0) && (
                 <div className="md:col-span-2 text-center py-20 bg-white rounded-[3rem] border border-dashed text-slate-400">
                    <AlertTriangle className="mx-auto mb-4 opacity-10" size={64} />
                    <p className="text-lg font-medium">No reviews assigned to you yet.</p>
                    <p className="text-sm">You will be notified once a chair assigns a paper to you.</p>
                 </div>
               )}
            </div>
         </div>
      </div>
    </div>
  );
}
