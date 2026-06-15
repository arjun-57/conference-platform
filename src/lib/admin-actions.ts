"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function assignReviewer(submissionId: string, reviewerId: string) {
  const supabase = await createClient();
  
  const { error } = await supabase
    .from('reviews')
    .insert({
      submission_id: submissionId,
      reviewer_id: reviewerId,
      status: 'assigned'
    });

  if (error) throw new Error(error.message);
  
  // Update submission status to under_review if it was just submitted
  await supabase
    .from('submissions')
    .update({ status: 'under_review' })
    .eq('id', submissionId)
    .eq('status', 'submitted');

  revalidatePath(`/admin/submissions/${submissionId}`);
}

export async function removeReviewer(submissionId: string, reviewerId: string) {
  const supabase = await createClient();
  
  const { error } = await supabase
    .from('reviews')
    .delete()
    .eq('submission_id', submissionId)
    .eq('reviewer_id', reviewerId);

  if (error) throw new Error(error.message);
  revalidatePath(`/admin/submissions/${submissionId}`);
}

export async function makeDecision(submissionId: string, status: string, note: string) {
  const supabase = await createClient();
  
  const { error } = await supabase
    .from('submissions')
    .update({
      status: status,
      decision_note: note,
      updated_at: new Date().toISOString()
    })
    .eq('id', submissionId);

  if (error) throw new Error(error.message);
  
  // TODO: Trigger email to authors via Resend
  
  revalidatePath(`/admin/submissions/${submissionId}`);
}
