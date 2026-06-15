"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function submitReview(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const reviewId = formData.get("reviewId") as string;
  const submissionId = formData.get("submissionId") as string;
  
  const originality = parseInt(formData.get("originality") as string);
  const quality = parseInt(formData.get("quality") as string);
  const relevance = parseInt(formData.get("relevance") as string);
  const clarity = parseInt(formData.get("clarity") as string);
  
  const recommendation = formData.get("recommendation") as string;
  const reviewer_comments = formData.get("reviewer_comments") as string;
  const confidential_comments = formData.get("confidential_comments") as string;

  const overall_score = (originality + quality + relevance + clarity) / 4;

  const { error } = await supabase
    .from('reviews')
    .update({
      originality,
      quality,
      relevance,
      clarity,
      overall_score,
      recommendation,
      reviewer_comments,
      confidential_comments,
      status: 'completed',
      updated_at: new Date().toISOString()
    })
    .eq('id', reviewId)
    .eq('reviewer_id', user.id);

  if (error) throw new Error(error.message);

  revalidatePath(`/dashboard/reviews/${reviewId}`);
  revalidatePath("/dashboard/reviews");
}
