"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { conferenceConfig } from "@/config/conference";

export async function submitPaper(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  // 1. Validate Deadline
  const { data: config } = await supabase
    .from("conference_config")
    .select("value")
    .eq("key", "submission_deadline")
    .single();

  const deadline = new Date(config?.value || conferenceConfig.dates.submissionDeadline);
  if (new Date() > deadline) {
    return { error: "Submission deadline has passed." };
  }

  const title = formData.get("title") as string;
  const abstract = formData.get("abstract") as string;
  const track = formData.get("track") as string;
  const keywords = (formData.get("keywords") as string).split(",").map(k => k.trim());
  const coAuthorsRaw = formData.get("co_authors") as string;
  const coAuthors = JSON.parse(coAuthorsRaw || "[]");
  const file = formData.get("pdf") as File;

  if (!file || file.type !== "application/pdf") {
    return { error: "Please upload a valid PDF file." };
  }

  if (file.size > 20 * 1024 * 1024) {
    return { error: "File size exceeds 20MB limit." };
  }

  // 2. Upload PDF to Supabase Storage
  const fileName = `${user.id}/${Date.now()}-${file.name}`;
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from("papers")
    .upload(fileName, file);

  if (uploadError) {
    return { error: `Upload failed: ${uploadError.message}` };
  }

  // 3. Insert Row to Submissions
  const { data: submission, error: insertError } = await supabase
    .from("submissions")
    .insert({
      author_id: user.id,
      title,
      abstract,
      track,
      keywords,
      co_authors: coAuthors,
      pdf_path: uploadData.path,
      status: "submitted",
    })
    .select()
    .single();

  // 4. Trigger Email (Resend) - Implementation deferred to email module
  
  redirect("/dashboard/submissions");
}

export async function updateSubmissionRevision(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const submissionId = formData.get("submissionId") as string;
  const file = formData.get("revised_pdf") as File;

  if (!file || file.type !== "application/pdf") {
    return { error: "Please upload a valid PDF file." };
  }

  // 1. Upload Revised PDF
  const fileName = `${user.id}/REV-${Date.now()}-${file.name}`;
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from("papers")
    .upload(fileName, file);

  if (uploadError) return { error: uploadError.message };

  // 2. Update DB and reset status to under_review
  const { error: updateError } = await supabase
    .from("submissions")
    .update({
      revised_pdf_path: uploadData.path,
      status: "under_review",
      updated_at: new Date().toISOString(),
    })
    .eq("id", submissionId)
    .eq("author_id", user.id);

  if (updateError) return { error: updateError.message };

  return { success: true };
}
