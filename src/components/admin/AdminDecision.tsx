"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  RefreshCw, 
  Loader2 
} from "lucide-react";
import { makeDecision } from "@/lib/admin-actions";

export function AdminDecision({ 
  submissionId, 
  currentStatus 
}: { 
  submissionId: string;
  currentStatus: string;
}) {
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState("");

  const handleDecision = async (status: string) => {
    setLoading(true);
    await makeDecision(submissionId, status, note);
    setLoading(false);
    window.location.reload();
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="decision_note">Decision Note (Visible to Authors)</Label>
        <Textarea 
          id="decision_note" 
          placeholder="Summary of review feedback and instructions for authors..." 
          className="min-h-[120px] rounded-xl"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
         <Button 
           className="h-12 rounded-xl font-bold bg-green-600 hover:bg-green-700 text-white" 
           onClick={() => handleDecision('accepted')}
           disabled={loading}
         >
           <CheckCircle size={18} className="mr-2" /> Accept
         </Button>
         <Button 
           variant="destructive" 
           className="h-12 rounded-xl font-bold" 
           onClick={() => handleDecision('rejected')}
           disabled={loading}
         >
           <XCircle size={18} className="mr-2" /> Reject
         </Button>
         <Button 
           variant="outline" 
           className="h-12 rounded-xl font-bold border-amber-200 text-amber-700 hover:bg-amber-50" 
           onClick={() => handleDecision('minor_revision')}
           disabled={loading}
         >
           <RefreshCw size={18} className="mr-2" /> Minor Revision
         </Button>
         <Button 
           variant="outline" 
           className="h-12 rounded-xl font-bold border-red-200 text-red-700 hover:bg-red-50" 
           onClick={() => handleDecision('major_revision')}
           disabled={loading}
         >
           <AlertCircle size={18} className="mr-2" /> Major Revision
         </Button>
      </div>
      
      {loading && (
        <div className="flex items-center justify-center py-4 text-slate-400">
           <Loader2 className="animate-spin mr-2" size={18} />
           <p className="text-sm">Processing decision...</p>
        </div>
      )}
    </div>
  );
}
