import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  History, 
  ExternalLink, 
  UserPlus, 
  Mail,
  MoreVertical,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default async function AdminSubmissionsPage() {
  const supabase = await createClient();

  const { data: submissions } = await supabase
    .from('submissions')
    .select('*, author:profiles(full_name, email)')
    .order('submitted_at', { ascending: false });

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Manage Submissions</h1>
          <p className="text-slate-500">View, assign reviewers, and make decisions on papers.</p>
        </div>
        <div className="relative w-full sm:w-64">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
           <Input placeholder="Search papers..." className="pl-10 h-11 rounded-xl" />
        </div>
      </div>

      <div className="bg-white rounded-[3rem] shadow-sm border border-slate-100 overflow-hidden">
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                     <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">ID & Track</th>
                     <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Paper Title & Author</th>
                     <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                     <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                  {submissions?.map((sub) => (
                    <tr key={sub.id} className="hover:bg-slate-50/50 transition-colors">
                       <td className="px-6 py-6">
                          <div className="space-y-1">
                             <p className="text-xs font-bold text-slate-400">#{sub.id.substring(0, 8)}</p>
                             <Badge variant="outline" className="bg-white border-primary/20 text-primary text-[10px] uppercase">
                                {sub.track}
                             </Badge>
                          </div>
                       </td>
                       <td className="px-6 py-6">
                          <div className="space-y-1">
                             <p className="font-bold text-slate-900 line-clamp-1">{sub.title}</p>
                             <p className="text-xs text-slate-500">{(sub.author as any)?.full_name} • {(sub.author as any)?.email}</p>
                          </div>
                       </td>
                       <td className="px-6 py-6">
                          <Badge variant={sub.status === 'accepted' ? 'default' : 'secondary'} className="capitalize">
                             {sub.status.replace('_', ' ')}
                          </Badge>
                       </td>
                       <td className="px-6 py-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                             <Button variant="ghost" size="icon" className="rounded-lg">
                                <Link href={`/admin/submissions/${sub.id}`} className="flex items-center justify-center">
                                   <ExternalLink size={16} />
                                </Link>
                             </Button>
                             <Button variant="ghost" size="icon" className="rounded-lg">
                                <UserPlus size={16} />
                             </Button>
                             <Button variant="ghost" size="icon" className="rounded-lg">
                                <MoreVertical size={16} />
                             </Button>
                          </div>
                       </td>
                    </tr>
                  ))}
                  {(!submissions || submissions.length === 0) && (
                    <tr>
                       <td colSpan={4} className="px-6 py-20 text-center text-slate-400 italic">
                          No submissions found in the database.
                       </td>
                    </tr>
                  )}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
}
