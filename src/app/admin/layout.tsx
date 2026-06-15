import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { 
  Users, 
  FileText, 
  Settings, 
  ShieldCheck, 
  Home,
  LogOut,
  ChevronRight,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  const isAdmin = ["admin", "general_chair", "program_chair", "track_chair"].includes(profile?.role || "");

  if (!isAdmin) {
    redirect("/dashboard");
  }

  const navItems = [
    { name: "Overview", href: "/admin", icon: Home },
    { name: "Submissions", href: "/admin/submissions", icon: FileText },
    { name: "Reviews", href: "/admin/reviews", icon: Users },
    { name: "Statistics", href: "/admin/stats", icon: BarChart3 },
    { name: "Configuration", href: "/admin/config", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-slate-900 transition-transform">
        <div className="flex h-full flex-col p-6 text-white">
          <div className="mb-10">
            <Link href="/" className="flex items-center space-x-2">
              <ShieldCheck className="text-primary h-8 w-8" />
              <span className="font-bold text-xl">Admin Panel</span>
            </Link>
          </div>

          <nav className="flex-1 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center rounded-xl px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
              >
                <item.icon className="mr-3 h-5 w-5 text-slate-500 group-hover:text-primary" />
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-4 pt-6">
             <div className="rounded-2xl bg-slate-800 p-4 border border-slate-700">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Role</p>
                <p className="text-sm font-bold text-primary capitalize">{profile?.role.replace('_', ' ')}</p>
             </div>
             <form action="/api/auth/signout" method="POST">
                <Button variant="ghost" className="w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800" type="submit">
                  <LogOut className="mr-3 h-5 w-5" />
                  Sign Out
                </Button>
             </form>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64">
        <div className="px-8 py-10">
          <header className="mb-10 flex items-center justify-between">
             <div className="flex items-center space-x-2 text-sm text-slate-400">
                <Link href="/dashboard" className="hover:text-slate-900">Dashboard</Link>
                <ChevronRight size={14} />
                <span className="text-slate-900 font-medium">Admin</span>
             </div>
             <Button variant="outline" className="rounded-xl border-slate-200">
                <Link href="/dashboard">Exit Admin</Link>
             </Button>
          </header>
          {children}
        </div>
      </main>
    </div>
  );
}
