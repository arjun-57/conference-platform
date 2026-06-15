import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  FileText, 
  Users, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  // Fetch basic stats
  const { count: submissionCount } = await supabase.from('submissions').select('*', { count: 'exact', head: true });
  const { count: reviewerCount } = await supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('role', 'reviewer');
  const { count: pendingReviews } = await supabase.from('reviews').select('*', { count: 'exact', head: true }).eq('status', 'assigned');
  const { count: acceptedCount } = await supabase.from('submissions').select('*', { count: 'exact', head: true }).eq('status', 'accepted');

  const stats = [
    { name: "Total Submissions", value: submissionCount || 0, icon: FileText, color: "text-blue-500", bg: "bg-blue-50" },
    { name: "Total Reviewers", value: reviewerCount || 0, icon: Users, color: "text-purple-500", bg: "bg-purple-50" },
    { name: "Pending Reviews", value: pendingReviews || 0, icon: Clock, color: "text-amber-500", bg: "bg-amber-50" },
    { name: "Accepted Papers", value: acceptedCount || 0, icon: CheckCircle, color: "text-green-500", bg: "bg-green-50" },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold">Admin Overview</h1>
        <p className="text-slate-500">Monitor conference progress and manage submissions.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name} className="border-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-500">{stat.name}</p>
                  <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="border-none shadow-sm">
          <CardHeader>
             <CardTitle>Recent Submissions</CardTitle>
             <CardDescription>Latest papers received across all tracks.</CardDescription>
          </CardHeader>
          <CardContent>
             {/* Fetch and list recent submissions here */}
             <div className="text-center py-10 text-slate-400">
                <FileText className="mx-auto mb-2 opacity-20" size={48} />
                <p>No recent submissions found.</p>
                <Button variant="ghost" className="mt-4">
                   <Link href="/admin/submissions" className="flex items-center">View All Submissions →</Link>
                </Button>
             </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
           <CardHeader>
              <CardTitle>Action Items</CardTitle>
              <CardDescription>Tasks requiring chair attention.</CardDescription>
           </CardHeader>
           <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-red-50 rounded-2xl border border-red-100">
                 <div className="flex items-center gap-3">
                    <AlertCircle className="text-red-500" />
                    <div>
                       <p className="font-bold text-red-900">Unassigned Papers</p>
                       <p className="text-sm text-red-700">12 papers need reviewers</p>
                    </div>
                 </div>
                 <Button size="sm" variant="outline" className="border-red-200 text-red-700 hover:bg-red-100">Fix Now</Button>
              </div>
              <div className="flex items-center justify-between p-4 bg-amber-50 rounded-2xl border border-amber-100">
                 <div className="flex items-center gap-3">
                    <Clock className="text-amber-500" />
                    <div>
                       <p className="font-bold text-amber-900">Overdue Reviews</p>
                       <p className="text-sm text-amber-700">5 pending past deadline</p>
                    </div>
                 </div>
                 <Button size="sm" variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-100">Remind All</Button>
              </div>
           </CardContent>
        </Card>
      </div>
    </div>
  );
}
