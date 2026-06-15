import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { User, Mail, School, MapPin, Hash } from "lucide-react";

export default async function ProfilePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user?.id)
    .single();

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Your Profile</h1>
        <p className="text-slate-500">Manage your personal information and conference role.</p>
      </div>

      <div className="grid gap-8">
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>This information will be used for your certificates and badges.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="full_name" className="flex items-center gap-2">
                    <User size={14} className="text-slate-400" /> Full Name
                  </Label>
                  <Input id="full_name" name="full_name" defaultValue={profile?.full_name} className="h-11 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail size={14} className="text-slate-400" /> Email Address
                  </Label>
                  <Input id="email" name="email" defaultValue={profile?.email} disabled className="h-11 rounded-xl bg-slate-50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="institution" className="flex items-center gap-2">
                    <School size={14} className="text-slate-400" /> Institution
                  </Label>
                  <Input id="institution" name="institution" defaultValue={profile?.institution} className="h-11 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country" className="flex items-center gap-2">
                    <MapPin size={14} className="text-slate-400" /> Country
                  </Label>
                  <Input id="country" name="country" defaultValue={profile?.country} className="h-11 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="orcid" className="flex items-center gap-2">
                    <Hash size={14} className="text-slate-400" /> ORCID (Optional)
                  </Label>
                  <Input id="orcid" name="orcid" defaultValue={profile?.orcid} placeholder="0000-0000-0000-0000" className="h-11 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-slate-400">
                    Role
                  </Label>
                   <div className="h-11 rounded-xl border bg-slate-50 flex items-center px-4 font-medium text-slate-600 capitalize">
                    {profile?.role}
                   </div>
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <Button className="h-11 px-8 rounded-xl font-bold">Update Profile</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card className="border-red-100 bg-red-50/30">
          <CardHeader>
            <CardTitle className="text-red-900">Security</CardTitle>
            <CardDescription>Manage your account security and password.</CardDescription>
          </CardHeader>
          <CardContent>
             <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 h-11 rounded-xl">
               Change Password
             </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
