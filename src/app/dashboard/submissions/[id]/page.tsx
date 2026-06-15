import { createClient } from "@/lib/supabase/server";
import { notFound, redirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Calendar, Download, AlertCircle, ArrowLeft, History } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { RevisionUpload } from "@/components/dashboard/RevisionUpload";

export default async function SubmissionDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: submission } = await supabase
    .from("submissions")
    .select("*")
    .eq("id", id)
    .single();

  if (!submission) {
    notFound();
  }

  // Ensure author owns the submission
  if (submission.author_id !== user?.id) {
    // Check if user is admin
    const { data: profile } = await supabase.from("profiles").select("role").eq("id", user?.id).single();
    const adminRoles = ['admin','general_chair','program_chair','track_chair'];
    if (!adminRoles.includes(profile?.role || "")) {
      redirect("/dashboard/submissions");
    }
  }

  const isRevisionAllowed = ["minor_revision", "major_revision"].includes(submission.status);

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="rounded-full">
           <Link href="/dashboard/submissions" className="flex items-center justify-center w-full h-full"><ArrowLeft size={18} /></Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold line-clamp-1">{submission.title}</h1>
          <p className="text-slate-500 flex items-center gap-2">
            Submission ID: {submission.id} • Submitted on {new Date(submission.submitted_at).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Abstract</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">
                {submission.abstract}
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
             <CardHeader>
                <CardTitle>Co-Authors</CardTitle>
             </CardHeader>
             <CardContent>
                <div className="divide-y">
                   {submission.co_authors.map((author: any, i: number) => (
                     <div key={i} className="py-4 first:pt-0 last:pb-0">
                        <p className="font-bold">{author.name}</p>
                        <p className="text-sm text-slate-500">{author.institution} • {author.email}</p>
                     </div>
                   ))}
                </div>
             </CardContent>
          </Card>

          {submission.decision_note && (
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                   <AlertCircle size={20} /> Reviewer Feedback
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-900 font-medium italic">
                  &quot;{submission.decision_note}&quot;
                </p>
              </CardContent>
            </Card>
          )}

          {isRevisionAllowed && (
             <RevisionUpload submissionId={submission.id} />
          )}
        </div>

        <div className="space-y-6">
           <Card className="border-none shadow-sm">
              <CardHeader>
                 <CardTitle>Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                 <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Current Status</span>
                    <Badge variant={submission.status === 'accepted' ? 'default' : 'secondary'} className="capitalize bg-primary/10 text-primary border-none text-sm px-4 py-1">
                      {submission.status.replace("_", " ")}
                    </Badge>
                 </div>
                 <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Track</span>
                    <span className="font-bold text-sm uppercase tracking-wider">{submission.track}</span>
                 </div>
                 <Separator />
                 <Button className="w-full h-12 rounded-xl font-bold">
                    <a href={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/papers/${submission.pdf_path}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full h-full">
                       <Download size={18} /> Download PDF
                    </a>
                 </Button>
              </CardContent>
           </Card>

           <Card className="border-none shadow-sm bg-slate-900 text-white">
             <CardHeader>
               <CardTitle className="flex items-center gap-2 text-white">
                 <History size={18} className="text-primary" /> Timeline
               </CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
                <div className="flex gap-4">
                   <div className="size-2 rounded-full bg-primary mt-1.5" />
                   <div>
                      <p className="text-sm font-bold">Paper Submitted</p>
                      <p className="text-xs text-slate-400">{new Date(submission.submitted_at).toLocaleString()}</p>
                   </div>
                </div>
                {submission.updated_at !== submission.submitted_at && (
                    <div className="flex gap-4">
                        <div className="size-2 rounded-full bg-slate-500 mt-1.5" />
                        <div>
                            <p className="text-sm font-bold text-slate-300">Last Updated</p>
                            <p className="text-xs text-slate-500">{new Date(submission.updated_at).toLocaleString()}</p>
                        </div>
                    </div>
                )}
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
