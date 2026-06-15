"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Send } from "lucide-react";
import { submitReview } from "@/lib/reviewer-actions";

export function ReviewSubmissionForm({ review }: { review: any }) {
  const [loading, setLoading] = useState(false);
  const isCompleted = review.status === 'completed';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    formData.append("reviewId", review.id);
    formData.append("submissionId", review.submission_id);
    
    await submitReview(formData);
    setLoading(false);
    window.location.reload();
  };

  const scores = ["1 - Very Poor", "2 - Poor", "3 - Average", "4 - Good", "5 - Excellent"];

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle>Evaluation Metrics</CardTitle>
          <CardDescription>Rate the paper based on the following criteria (1-5).</CardDescription>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-2">
            <Label>Originality</Label>
            <Select name="originality" required defaultValue={review.originality?.toString()} disabled={isCompleted}>
              <SelectTrigger className="h-11 rounded-xl"><SelectValue placeholder="Rate originality" /></SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((s) => <SelectItem key={s} value={s.toString()}>{scores[s-1]}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Technical Quality</Label>
            <Select name="quality" required defaultValue={review.quality?.toString()} disabled={isCompleted}>
              <SelectTrigger className="h-11 rounded-xl"><SelectValue placeholder="Rate quality" /></SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((s) => <SelectItem key={s} value={s.toString()}>{scores[s-1]}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Relevance</Label>
            <Select name="relevance" required defaultValue={review.relevance?.toString()} disabled={isCompleted}>
              <SelectTrigger className="h-11 rounded-xl"><SelectValue placeholder="Rate relevance" /></SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((s) => <SelectItem key={s} value={s.toString()}>{scores[s-1]}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Clarity</Label>
            <Select name="clarity" required defaultValue={review.clarity?.toString()} disabled={isCompleted}>
              <SelectTrigger className="h-11 rounded-xl"><SelectValue placeholder="Rate clarity" /></SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((s) => <SelectItem key={s} value={s.toString()}>{scores[s-1]}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm">
         <CardHeader>
            <CardTitle>Recommendation</CardTitle>
         </CardHeader>
         <CardContent>
            <Select name="recommendation" required defaultValue={review.recommendation} disabled={isCompleted}>
               <SelectTrigger className="h-11 rounded-xl"><SelectValue placeholder="Make a recommendation" /></SelectTrigger>
               <SelectContent>
                  <SelectItem value="strong_accept">Strong Accept</SelectItem>
                  <SelectItem value="accept">Accept</SelectItem>
                  <SelectItem value="weak_accept">Weak Accept</SelectItem>
                  <SelectItem value="borderline">Borderline</SelectItem>
                  <SelectItem value="weak_reject">Weak Reject</SelectItem>
                  <SelectItem value="reject">Reject</SelectItem>
                  <SelectItem value="strong_reject">Strong Reject</SelectItem>
               </SelectContent>
            </Select>
         </CardContent>
      </Card>

      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle>Detailed Feedback</CardTitle>
          <CardDescription>Provide specific comments for authors and private notes for chairs.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="reviewer_comments">Comments for Authors (Anonymized)</Label>
            <Textarea
              id="reviewer_comments"
              name="reviewer_comments"
              placeholder="What could be improved? What are the strengths?"
              required
              className="min-h-[150px] rounded-xl"
              defaultValue={review.reviewer_comments}
              disabled={isCompleted}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confidential_comments">Confidential Comments for Chairs</Label>
            <Textarea
              id="confidential_comments"
              name="confidential_comments"
              placeholder="Private notes for the program committee..."
              className="min-h-[100px] rounded-xl"
              defaultValue={review.confidential_comments}
              disabled={isCompleted}
            />
          </div>
        </CardContent>
      </Card>

      {!isCompleted && (
        <div className="flex justify-end">
          <Button type="submit" className="h-12 px-12 rounded-xl font-bold bg-primary hover:bg-primary/90" disabled={loading}>
            {loading ? <Loader2 className="animate-spin mr-2" /> : <><Send size={18} className="mr-2" /> Submit Review</>}
          </Button>
        </div>
      )}
    </form>
  );
}
