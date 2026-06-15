"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserPlus, X, Loader2, Link } from "lucide-react";
import { assignReviewer, removeReviewer } from "@/lib/admin-actions";

interface Reviewer {
  id: string;
  full_name: string;
  email: string;
}

export function ReviewerAssignment({ 
  submissionId, 
  reviewers,
  currentAssignments 
}: { 
  submissionId: string;
  reviewers: Reviewer[];
  currentAssignments: any[];
}) {
  const [loading, setLoading] = useState(false);
  const [selectedReviewer, setSelectedReviewer] = useState<string | null>(null);

  const handleAssign = async () => {
    if (!selectedReviewer) return;
    setLoading(true);
    await assignReviewer(submissionId, selectedReviewer);
    setLoading(false);
    setSelectedReviewer(null);
    // Note: In a real app, you'd use router.refresh() or a state update
    window.location.reload();
  };

  const handleRemove = async (reviewerId: string) => {
    setLoading(true);
    await removeReviewer(submissionId, reviewerId);
    setLoading(false);
    window.location.reload();
  };

  const availableReviewers = reviewers.filter(
    (r) => !currentAssignments.some((ca) => ca.reviewer_id === r.id)
  );

  return (
    <Card className="border-none shadow-sm">
      <CardHeader>
        <CardTitle>Assign Reviewers</CardTitle>
        <CardDescription>Select qualified experts to peer review this paper.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-4">
           <Select onValueChange={(val: string | null) => setSelectedReviewer(val)}>
              <SelectTrigger className="h-11 rounded-xl flex-1 bg-slate-50">
                <SelectValue placeholder="Select a reviewer" />
              </SelectTrigger>
              <SelectContent>
                {availableReviewers.map((r) => (
                  <SelectItem key={r.id} value={r.id}>
                    {r.full_name} ({r.email})
                  </SelectItem>
                ))}
              </SelectContent>
           </Select>
           <Button className="h-11 rounded-xl px-6 font-bold" onClick={handleAssign} disabled={!selectedReviewer || loading}>
              {loading ? <Loader2 size={18} className="animate-spin" /> : <><UserPlus size={18} className="mr-2" /> Assign</>}
           </Button>
        </div>

        {currentAssignments.length > 0 && (
          <div className="space-y-2">
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Currently Assigned</p>
             {currentAssignments.map((rev) => (
               <div key={rev.id} className="flex items-center justify-between p-3 bg-white border rounded-xl">
                 <div className="text-sm">
                   <p className="font-bold">{rev.reviewer?.full_name}</p>
                   <p className="text-xs text-slate-500">{rev.reviewer?.email}</p>
                 </div>
                 <Button variant="ghost" size="icon" className="text-slate-300 hover:text-red-500" onClick={() => handleRemove(rev.reviewer_id)}>
                   <X size={16} />
                 </Button>
               </div>
             ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
