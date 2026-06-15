import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { 
  LayoutDashboard, 
  FileText, 
  CreditCard, 
  User, 
  LogOut,
  ChevronRight,
  ShieldCheck,
  ClipboardCheck,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default async function DashboardLayout({
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
    .select("role, full_name")
    .eq("id", user.id)
    .single();

  const isAdmin = ["admin", "general_chair", "program_chair", "track_chair"].includes(profile?.role || "");

  const navItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "My Submissions", href: "/dashboard/submissions", icon: FileText, roles: ["author", "admin"] },
    { name: "Reviews", href: "/dashboard/reviews", icon: ClipboardCheck, roles: ["reviewer", "admin"] },
    { name: "Camera Ready", href: "/dashboard/camera-ready", icon: ShieldCheck, roles: ["author", "admin"] },
    { name: "Payment", href: "/dashboard/payment", icon: CreditCard, roles: ["author", "admin"] },
    { name: "Profile", href: "/dashboard/profile", icon: Settings },
  ];

  const filteredNavItems = navItems.filter(item => 
    !item.roles || item.roles.includes(profile?.role || "author")
  );

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-white transition-transform">
        <div className="flex h-full flex-col p-6">
          <div className="mb-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">ConfFlow</span>
            </Link>
          </div>

          <nav className="flex-1 space-y-1">
            {filteredNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-primary/5 hover:text-primary transition-all"
              >
                <item.icon className="mr-3 h-5 w-5 text-slate-400 group-hover:text-primary" />
                {item.name}
              </Link>
            ))}
            
            {isAdmin && (
              <>
                <Separator className="my-4" />
                <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Admin</p>
                <Link
                  href="/admin"
                  className="group flex items-center rounded-xl px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all"
                >
                  <ShieldCheck className="mr-3 h-5 w-5 text-slate-400 group-hover:text-red-500" />
                  Admin Panel
                </Link>
              </>
            )}
          </nav>

          <div className="mt-auto space-y-4 pt-6">
             <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-medium text-slate-500">Logged in as</p>
                <p className="text-sm font-bold text-slate-900 truncate">{profile?.full_name || user.email}</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-tighter">{profile?.role}</p>
             </div>
             <form action="/api/auth/signout" method="POST">
                <Button variant="ghost" className="w-full justify-start text-slate-600 hover:text-red-500 hover:bg-red-50" type="submit">
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
                <Link href="/" className="hover:text-slate-900">ConfFlow</Link>
                <ChevronRight size={14} />
                <span className="text-slate-900 font-medium">Dashboard</span>
             </div>
          </header>
          {children}
        </div>
      </main>
    </div>
  );
}
