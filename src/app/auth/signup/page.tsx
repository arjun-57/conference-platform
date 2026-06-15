"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Globe, Mail, AlertCircle, CheckCircle } from "lucide-react";
import { useState } from "react";
import { signup } from "@/lib/auth-actions";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
    
    const formData = new FormData(e.currentTarget);
    const result = await signup(formData);
    
    if (result?.error) {
      setError(result.error);
    } else if (result?.success) {
      setMessage(result.success);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-8 text-center sm:text-left">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Create Account</h1>
        <p className="text-muted-foreground">
          Join us today and start your submission.
        </p>
      </div>

      <div className="space-y-6">
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {message && (
          <Alert className="border-green-500 bg-green-500/10 text-green-500">
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2 text-left">
            <Label htmlFor="full_name">Full Name</Label>
            <Input id="full_name" name="full_name" placeholder="John Doe" required className="h-11 rounded-xl" />
          </div>
          <div className="space-y-2 text-left">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="name@example.com" required className="h-11 rounded-xl" />
          </div>
          <div className="space-y-2 text-left">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" placeholder="••••••••" required className="h-11 rounded-xl" />
          </div>
          <Button type="submit" className="w-full h-11 rounded-xl font-bold" disabled={loading}>
            {loading ? "Creating account..." : "Sign Up"}
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-11 rounded-xl">
             <Globe className="mr-2 h-4 w-4" />
             Google
          </Button>
          <Button variant="outline" className="h-11 rounded-xl">
             <Mail className="mr-2 h-4 w-4" />
             Email
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-bold text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
