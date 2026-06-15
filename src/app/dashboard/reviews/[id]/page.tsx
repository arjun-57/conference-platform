import { createClient } from "@/lib/supabase/server";
import { notFound, redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Download, Star } from "lucide-react";
import Link from "next/link";
import { ReviewSubmissionForm } from "@/components/dashboard/ReviewSubmissionForm";

export default async function ReviewSubmissionPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: review } = await supabase
    .from('reviews')
    .select(`
      *,
      submission:submissions(*)
    `)
    .eq('id', id)
    .single();

  if (!review) {
    notFound();
  }

  // Security: only the assigned reviewer can access
  if (review.reviewer_id !== user?.id) {
    redirect("/dashboard/reviews");
  }

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="rounded-full">
           <Link href="/dashboard/reviews" className="flex items-center justify-center"><ArrowLeft size={18} /></Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold line-clamp-1">Review: {(review.submission as any).title}</h1>
          <p className="text-slate-500 flex items-center gap-2">
            Paper ID: {review.submission_id} • Assigned on {new Date(review.assigned_at).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <Card className="border-none shadow-sm overflow-hidden">
               <CardHeader className="bg-slate-900 text-white">
                  <CardTitle className="text-lg flex items-center gap-2 text-white">
                     <FileText size={18} className="text-primary" /> Paper Abstract
                  </CardTitle>
               </CardHeader>
               <CardContent className="pt-6">
                  <p className="text-slate-600 leading-relaxed italic">
                     &quot;{(review.submission as any).abstract}&quot;
                  </p>
               </CardContent>
            </Card>

            <ReviewSubmissionForm review={review} />
         </div>

         <div className="space-y-6">
            <Card className="border-none shadow-sm">
               <CardHeader>
                  <CardTitle>Resources</CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                  <Button className="w-full h-12 rounded-xl font-bold bg-primary hover:bg-primary/90">
                     <a href={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/papers/${(review.submission as any).pdf_path}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full h-full">
                        <Download size={18} /> Download Manuscript
                     </a>
                  </Button>
                  
                  <div className="p-6 bg-amber-50 rounded-[2rem] border border-amber-100 space-y-4">
                     <h4 className="font-bold text-amber-900 flex items-center gap-2">
                        <Star size={16} /> Reviewing Tips
                     </h4>
                     <ul className="text-xs text-amber-800 space-y-2 opacity-80 list-disc ml-4">
                        <li>Be constructive and specific.</li>
                        <li>Anonymity must be maintained.</li>
                        <li>Highlight both strengths and weaknesses.</li>
                        <li>Quality and Originality are key metrics.</li>
                     </ul>
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
