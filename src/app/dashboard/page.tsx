import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Plus, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  CreditCard
} from "lucide-react";
import Link from "next/link";
import { conferenceConfig } from "@/config/conference";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return null; // Handle unauthorized or redirect
  }

  const { data: submissions } = await supabase
    .from("submissions")
    .select("*")
    .eq("author_id", user?.id)
    .order("created_at", { ascending: false });

  const hasSubmissions = submissions && submissions.length > 0;
  const recentSubmission = hasSubmissions ? submissions[0] : null;

  const { data: registration } = await supabase
    .from('registrations')
    .select('status')
    .eq('user_id', user.id)
    .single();

  const isRegistered = registration?.status === 'paid';

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold">Welcome back!</h1>
        <p className="text-slate-500">Here's what's happening with your conference participation.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Quick Stats */}
        <Card className="border-none shadow-sm bg-primary text-primary-foreground">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium opacity-80 text-white">Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-white">{submissions?.length || 0}</div>
            <p className="text-sm opacity-70 mt-1">Total papers submitted</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-slate-500">Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
               {recentSubmission ? (
                 <>
                   <Clock className="text-amber-500 h-6 w-6" />
                   <span className="text-2xl font-bold capitalize">{recentSubmission.status.replace("_", " ")}</span>
                 </>
               ) : (
                 <>
                   <AlertCircle className="text-slate-300 h-6 w-6" />
                   <span className="text-2xl font-bold text-slate-400">No Submissions</span>
                 </>
               )}
            </div>
            <p className="text-sm text-slate-400 mt-1">Current state of latest paper</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-slate-500">Deadline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">
              {new Date(conferenceConfig.dates.submissionDeadline).toLocaleDateString("en-US", { month: 'short', day: 'numeric' })}
            </div>
            <p className="text-sm text-slate-400 mt-1">Time remaining: {Math.max(0, Math.ceil((new Date(conferenceConfig.dates.submissionDeadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)))} days</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Recent Activity / Submissions */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Recent Submissions</h2>
            <Button variant="ghost" size="sm">
              <Link href="/dashboard/submissions" className="flex items-center gap-1">
                View all <ArrowRight size={14} />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            {hasSubmissions ? (
              <>
                <Card className={`border-none shadow-sm ${isRegistered ? 'bg-green-50' : 'bg-slate-50'}`}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm text-slate-500 font-medium tracking-wide uppercase">Registration</p>
                        <h3 className={`text-2xl font-black ${isRegistered ? 'text-green-600' : 'text-slate-900'}`}>
                          {isRegistered ? 'Active' : 'Not Registered'}
                        </h3>
                      </div>
                      <div className={`size-12 rounded-2xl flex items-center justify-center ${isRegistered ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-500'}`}>
                        {isRegistered ? <ShieldCheck size={24} /> : <CreditCard size={24} />}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {submissions.slice(0, 3).map((sub) => (
                  <Card key={sub.id} className="border-none shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="p-4 flex flex-row items-center justify-between space-y-0">
                      <div className="space-y-1">
                        <CardTitle className="text-base line-clamp-1">{sub.title}</CardTitle>
                        <CardDescription className="text-xs">ID: {sub.id.substring(0, 8)}</CardDescription>
                      </div>
                      <Badge variant={sub.status === 'accepted' ? 'default' : 'secondary'}>
                        {sub.status}
                      </Badge>
                    </CardHeader>
                  </Card>
                ))}
              </>
            ) : (
              <div className="text-center py-12 bg-white rounded-[2rem] border border-dashed border-slate-200">
                 <FileText className="mx-auto h-12 w-12 text-slate-200 mb-4" />
                 <h3 className="text-lg font-medium text-slate-900">No submissions yet</h3>
                 <p className="text-slate-500 mb-6">Ready to share your research with the world?</p>
                 <Button className="rounded-xl">
                    <Link href="/dashboard/submissions/new" className="flex items-center gap-2">
                      <Plus size={16} /> New Submission
                    </Link>
                 </Button>
              </div>
            )}
          </div>
        </div>

        {/* Notifications / Next Steps */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Next Steps</h2>
          <div className="space-y-4">
            <Card className="bg-blue-50 border-blue-100 border shadow-none">
              <CardHeader className="p-4">
                <CardTitle className="text-base flex items-center gap-2 text-blue-900">
                  <CheckCircle2 size={18} /> Complete your profile
                </CardTitle>
                <CardDescription className="text-blue-700/70">
                  Ensure your institution and ORCID info are up to date for official certificates.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                 <Button variant="link" className="p-0 h-auto text-blue-700 font-bold">
                   <Link href="/dashboard/profile">Go to Profile →</Link>
                 </Button>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-100 border shadow-none">
              <CardHeader className="p-4">
                <CardTitle className="text-base flex items-center gap-2 text-amber-900">
                  <AlertCircle size={18} /> Review Guidelines
                </CardTitle>
                <CardDescription className="text-amber-700/70">
                  Make sure your paper follows the IEEE double-column format before uploading.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                 <Button variant="link" className="p-0 h-auto text-amber-700 font-bold">
                   <Link href="/cfp">View Guidelines →</Link>
                 </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
