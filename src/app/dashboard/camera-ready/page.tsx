import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, FileCheck, AlertCircle } from "lucide-react";
import Link from "next/link";

export default async function CameraReadyPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: submissions } = await supabase
    .from("submissions")
    .select("*")
    .eq("author_id", user?.id)
    .eq("status", "accepted");

  const hasAcceptedSubmissions = submissions && submissions.length > 0;

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold">Camera-Ready Submission</h1>
        <p className="text-slate-500">Submit the final version of your accepted papers.</p>
      </div>

      {!hasAcceptedSubmissions ? (
        <Card className="border-none shadow-sm bg-slate-50">
           <CardContent className="py-16 text-center space-y-6">
              <ShieldCheck className="mx-auto h-20 w-20 text-slate-200" />
              <div className="space-y-2">
                 <h3 className="text-xl font-bold text-slate-900">No Accepted Papers Yet</h3>
                 <p className="text-slate-500 max-w-sm mx-auto">
                    Camera-ready submission is only available for papers that have been officially accepted after the review process.
                 </p>
              </div>
              <Button variant="outline" className="rounded-xl px-8">
                 <Link href="/dashboard/submissions">Check Submission Status</Link>
              </Button>
           </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
           {submissions.map((sub) => (
             <Card key={sub.id} className="border-none shadow-sm overflow-hidden">
                <CardHeader className="bg-primary/5 border-b border-primary/10">
                   <CardTitle className="text-lg">{sub.title}</CardTitle>
                   <CardDescription>ID: {sub.id}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                   <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-2xl border border-amber-100">
                      <AlertCircle className="text-amber-600 shrink-0 mt-0.5" />
                      <div className="text-sm text-amber-900">
                         <p className="font-bold">Instructions:</p>
                         <ul className="list-disc ml-4 mt-2 space-y-1 opacity-80">
                            <li>Ensure all author names and affiliations are correct.</li>
                            <li>Minimum 4 pages, Maximum 8 pages.</li>
                            <li>PDF must be IEEE Xplore compatible.</li>
                            <li>Registration fee must be paid before camera-ready submission.</li>
                         </ul>
                      </div>
                   </div>
                   <Button className="w-full h-12 rounded-xl font-bold flex items-center gap-2">
                      <FileCheck size={18} /> Upload Camera-Ready PDF
                   </Button>
                </CardContent>
             </Card>
           ))}
        </div>
      )}
    </div>
  );
}
