"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Plus, X, FileText, Loader2 } from "lucide-react";
import { conferenceConfig } from "@/config/conference";
import { submitPaper } from "@/lib/submission-actions";

export function SubmissionForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [coAuthors, setCoAuthors] = useState<{ name: string; email: string; institution: string }[]>([]);
  
  const [newAuthor, setNewAuthor] = useState({ name: "", email: "", institution: "" });

  const addAuthor = () => {
    if (newAuthor.name && newAuthor.email) {
      setCoAuthors([...coAuthors, newAuthor]);
      setNewAuthor({ name: "", email: "", institution: "" });
    }
  };

  const removeAuthor = (index: number) => {
    setCoAuthors(coAuthors.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    formData.append("co_authors", JSON.stringify(coAuthors));

    const result = await submitPaper(formData);
    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle>Paper Metadata</CardTitle>
          <CardDescription>Fill in the basic details of your research paper.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Paper Title</Label>
            <Input id="title" name="title" placeholder="Enter the full title of your paper" required className="h-11 rounded-xl" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="abstract">Abstract</Label>
            <Textarea
              id="abstract"
              name="abstract"
              placeholder="Provide a concise summary (max 300 words)"
              required
              className="min-h-[150px] rounded-xl"
            />
            <p className="text-xs text-slate-400 text-right">Words: 0 / 300</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="track">Conference Track</Label>
              <Select name="track" required>
                <SelectTrigger className="h-11 rounded-xl">
                  <SelectValue placeholder="Select a track" />
                </SelectTrigger>
                <SelectContent>
                  {conferenceConfig.tracks.map((track) => (
                    <SelectItem key={track} value={track}>
                      {track}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="keywords">Keywords</Label>
              <Input id="keywords" name="keywords" placeholder="AI, Machine Learning, Cloud (comma separated)" required className="h-11 rounded-xl" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle>Co-Authors</CardTitle>
          <CardDescription>Add all contributors to this research paper.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid sm:grid-cols-3 gap-4 p-4 bg-slate-50 rounded-2xl border border-dashed">
            <div className="space-y-2">
              <Input
                placeholder="Name"
                value={newAuthor.name}
                onChange={(e) => setNewAuthor({ ...newAuthor, name: e.target.value })}
                className="h-10 rounded-lg bg-white"
              />
            </div>
            <div className="space-y-2">
              <Input
                placeholder="Email"
                type="email"
                value={newAuthor.email}
                onChange={(e) => setNewAuthor({ ...newAuthor, email: e.target.value })}
                className="h-10 rounded-lg bg-white"
              />
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Institution"
                value={newAuthor.institution}
                onChange={(e) => setNewAuthor({ ...newAuthor, institution: e.target.value })}
                className="h-10 rounded-lg bg-white flex-1"
              />
              <Button type="button" size="icon" onClick={addAuthor} variant="secondary" className="shrink-0">
                 <Plus size={18} />
              </Button>
            </div>
          </div>

          {coAuthors.length > 0 && (
            <div className="space-y-2">
              {coAuthors.map((author, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white border rounded-xl">
                  <div className="text-sm">
                    <span className="font-bold">{author.name}</span>
                    <span className="text-slate-400 mx-2">•</span>
                    <span className="text-slate-600">{author.email}</span>
                    <span className="text-slate-400 mx-2">•</span>
                    <span className="text-slate-500 italic">{author.institution}</span>
                  </div>
                  <Button type="button" variant="ghost" size="icon" onClick={() => removeAuthor(index)} className="text-slate-400 hover:text-red-500">
                    <X size={16} />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle>File Upload</CardTitle>
          <CardDescription>Upload your paper in PDF format (Max 20MB).</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative group">
            <Input
              id="pdf"
              name="pdf"
              type="file"
              accept=".pdf"
              required
              className="hidden"
              onChange={(e) => {
                const fileName = e.target.files?.[0]?.name;
                const fileLabel = document.getElementById("file-label");
                if (fileLabel && fileName) fileLabel.innerText = fileName;
              }}
            />
            <label
              htmlFor="pdf"
              className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-slate-200 rounded-3xl hover:border-primary hover:bg-primary/5 transition-all cursor-pointer"
            >
              <div className="p-4 bg-primary/10 rounded-full text-primary mb-4">
                <FileText size={32} />
              </div>
              <p className="font-bold text-lg" id="file-label">Click to upload or drag and drop</p>
              <p className="text-sm text-slate-400 mt-1">IEEE Double Column Format PDF only</p>
            </label>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Button variant="ghost" className="h-12 px-8 rounded-xl">
           <Link href="/dashboard/submissions">Cancel</Link>
        </Button>
        <Button type="submit" className="h-12 px-10 rounded-xl font-bold" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Paper"
          )}
        </Button>
      </div>
    </form>
  );
}

import Link from "next/link";
