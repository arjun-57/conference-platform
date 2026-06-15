import { createClient } from "@/lib/supabase/server";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  MessageSquare, 
  Clock, 
  CheckCircle,
  ExternalLink,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default async function AdminReviewsPage() {
  const supabase = await createClient();

  // Fetch reviews with submission titles and reviewer names
  const { data: reviews } = await supabase
    .from('reviews')
    .select(`
      *,
      submission:submissions(id, title),
      reviewer:profiles(full_name, email)
    `)
    .order('assigned_at', { ascending: false });

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Review Management</h1>
          <p className="text-slate-500">Track and manage the progress of all peer reviews.</p>
        </div>
        <div className="relative w-full sm:w-64">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
           <Input placeholder="Search reviews..." className="pl-10 h-11 rounded-xl" />
        </div>
      </div>

      <div className="grid gap-6">
         {reviews?.map((rev) => (
           <Card key={rev.id} className="border-none shadow-sm hover:shadow-md transition-all group">
              <CardContent className="p-6">
                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-3 flex-1">
                       <div className="flex items-center gap-2">
                          <Badge variant={rev.status === 'completed' ? 'default' : 'secondary'} className="capitalize">
                             {rev.status}
                          </Badge>
                          <span className="text-xs text-slate-400">• Assigned on {new Date(rev.assigned_at).toLocaleDateString()}</span>
                       </div>
                       <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                          {(rev.submission as any)?.title}
                       </h3>
                       <div className="flex items-center gap-4 text-sm text-slate-500">
                          <span className="flex items-center gap-1.5"><Users size={14} /> {(rev.reviewer as any)?.full_name}</span>
                          {rev.status === 'completed' && (
                            <span className="flex items-center gap-1.5 font-bold text-green-600">
                               <CheckCircle size={14} /> Scored
                            </span>
                          )}
                       </div>
                    </div>
                    <div className="flex items-center gap-2">
                       <Button variant="outline" size="sm" className="rounded-lg">
                          <Link href={`/admin/submissions/${(rev.submission as any)?.id}`}>
                             View Paper
                          </Link>
                       </Button>
                       <Button variant="ghost" size="icon" className="rounded-lg">
                          <MessageSquare size={18} />
                       </Button>
                    </div>
                 </div>
              </CardContent>
           </Card>
         ))}
         {(!reviews || reviews.length === 0) && (
           <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed text-slate-400">
              <Clock className="mx-auto mb-4 opacity-20" size={48} />
              <p>No reviews have been assigned yet.</p>
           </div>
         )}
      </div>
    </div>
  );
}
