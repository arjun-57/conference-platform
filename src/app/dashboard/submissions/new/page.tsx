import { SubmissionForm } from "@/components/dashboard/SubmissionForm";

export default function NewSubmissionPage() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold">New Submission</h1>
        <p className="text-slate-500">Complete the form below to submit your research paper.</p>
      </div>

      <SubmissionForm />
    </div>
  );
}
