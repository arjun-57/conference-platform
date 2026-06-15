import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Download, 
  UserPlus, 
  CheckCircle, 
  XCircle, 
  Clock,
  AlertCircle,
  FileText
} from "lucide-react";
import Link from "next/link";
import { ReviewerAssignment } from "@/components/admin/ReviewerAssignment";
import { AdminDecision } from "@/components/admin/AdminDecision";

export default async function AdminSubmissionDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const supabase = await createClient();

  // Fetch submission with author info
  const { data: submission } = await supabase
    .from('submissions')
    .select('*, author:profiles(*)')
    .eq('id', id)
    .single();

  if (!submission) {
    notFound();
  }

  // Fetch reviews for this submission
  const { data: reviews } = await supabase
    .from('reviews')
    .select('*, reviewer:profiles(full_name, email)')
    .eq('submission_id', id);

  // Fetch all potential reviewers
  const { data: reviewers } = await supabase
     .from('profiles')
     .select('id, full_name, email')
     .eq('role', 'reviewer');

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="rounded-full">
           <Link href="/admin/submissions" className="flex items-center justify-center w-full h-full"><ArrowLeft size={18} /></Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">{submission.title}</h1>
          <p className="text-slate-500">
            ID: {submission.id} • Submitted by {(submission.author as any)?.full_name}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           {/* Abstract & Meta */}
           <Card className="border-none shadow-sm">
              <CardHeader>
                 <CardTitle>Abstract</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                 <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">
                    {submission.abstract}
                 </p>
                 <div className="flex flex-wrap gap-2">
                    {submission.keywords.map((kw: string) => (
                      <Badge key={kw} variant="secondary">{kw}</Badge>
                    ))}
                 </div>
              </CardContent>
           </Card>

           {/* Review History */}
           <Card className="border-none shadow-sm">
              <CardHeader>
                 <CardTitle className="flex items-center justify-between">
                    <span>Reviews & Assessments</span>
                    <Badge variant="outline">{reviews?.length || 0} Assigned</Badge>
                 </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 {reviews && reviews.length > 0 ? (
                   <div className="divide-y">
                      {reviews.map((rev) => (
                        <div key={rev.id} className="py-4 first:pt-0 last:pb-0 space-y-3">
                           <div className="flex items-center justify-between">
                              <p className="font-bold text-sm">{(rev.reviewer as any)?.full_name}</p>
                              <Badge variant={rev.status === 'completed' ? 'default' : 'secondary'}>
                                 {rev.status}
                              </Badge>
                           </div>
                           {rev.status === 'completed' ? (
                             <div className="grid grid-cols-4 gap-2">
                                <div className="text-center p-2 bg-slate-50 rounded-lg">
                                   <p className="text-[10px] text-slate-400 uppercase">Qual</p>
                                   <p className="font-bold">{rev.quality}/5</p>
                                </div>
                                <div className="text-center p-2 bg-slate-50 rounded-lg">
                                   <p className="text-[10px] text-slate-400 uppercase">Orig</p>
                                   <p className="font-bold">{rev.originality}/5</p>
                                </div>
                                <div className="text-center p-2 bg-slate-50 rounded-lg">
                                   <p className="text-[10px] text-slate-400 uppercase">Rel</p>
                                   <p className="font-bold">{rev.relevance}/5</p>
                                </div>
                                <div className="text-center p-2 bg-slate-50 rounded-lg">
                                   <p className="text-[10px] text-slate-400 uppercase">Clar</p>
                                   <p className="font-bold">{rev.clarity}/5</p>
                                </div>
                             </div>
                           ) : (
                             <p className="text-sm text-slate-400 italic">Review in progress...</p>
                           )}
                        </div>
                      ))}
                   </div>
                 ) : (
                   <div className="text-center py-10 bg-slate-50 rounded-2xl">
                      <AlertCircle className="mx-auto text-slate-300 mb-2" />
                      <p className="text-sm text-slate-500">No reviewers assigned yet.</p>
                   </div>
                 )}
              </CardContent>
           </Card>

           <ReviewerAssignment submissionId={submission.id} reviewers={reviewers || []} currentAssignments={reviews || []} />
        </div>

        <div className="space-y-6">
           <Card className="border-none shadow-sm">
              <CardHeader>
                 <CardTitle>Decision Control</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                 <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Current Status</span>
                    <Badge className="capitalize">{submission.status.replace('_', ' ')}</Badge>
                 </div>
                 <Separator />
                 <AdminDecision submissionId={submission.id} currentStatus={submission.status} />
              </CardContent>
           </Card>

           <Card className="border-none shadow-sm h-fit">
              <CardContent className="p-6">
                 <Button className="w-full h-12 rounded-xl font-bold flex items-center gap-2">
                    <a href={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/papers/${submission.pdf_path}`} target="_blank" rel="noreferrer" className="flex items-center justify-center w-full h-full gap-2">
                       <FileText size={18} /> View Publication PDF
                    </a>
                 </Button>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
