"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Loader2, UploadCloud, CheckCircle2 } from "lucide-react";
import { updateSubmissionRevision } from "@/lib/submission-actions";

export function RevisionUpload({ submissionId }: { submissionId: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    formData.append("submissionId", submissionId);

    const result = await updateSubmissionRevision(formData);
    if (result?.error) {
      setError(result.error);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Card className="border-green-100 bg-green-50 shadow-none">
        <CardContent className="pt-6 text-center space-y-3">
          <div className="size-12 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto">
            <CheckCircle2 size={24} />
          </div>
          <h3 className="text-lg font-bold text-green-900">Revision Uploaded Successfully</h3>
          <p className="text-sm text-green-700">Your paper has been resubmitted for re-evaluation. Our committee will notify you once the status changes.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-amber-100 bg-amber-50 shadow-none">
      <CardHeader>
        <CardTitle className="text-amber-900 flex items-center gap-2">
          <UploadCloud size={20} /> Upload Revised Paper
        </CardTitle>
        <CardDescription className="text-amber-700/70">
          Please upload the updated manuscript addressing the reviewer's feedback.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleUpload} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="revised_pdf" className="sr-only">Revised PDF</Label>
            <Input
              id="revised_pdf"
              name="revised_pdf"
              type="file"
              accept=".pdf"
              required
              className="bg-white rounded-xl h-11"
              onChange={(e) => {
                const fileName = e.target.files?.[0]?.name;
                const btn = document.getElementById("rev-btn");
                if (btn && fileName) btn.innerText = `Update with ${fileName}`;
              }}
            />
          </div>
          {error && <p className="text-sm text-red-500 font-medium">{error}</p>}
          <Button id="rev-btn" type="submit" className="w-full h-12 rounded-xl font-bold bg-amber-600 hover:bg-amber-700" disabled={loading}>
            {loading ? <Loader2 size={18} className="animate-spin mr-2" /> : "Resubmit Paper"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
