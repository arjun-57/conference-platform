"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { conferenceConfig } from "@/config/conference";
import { createRegistration } from "@/lib/payment-actions";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const handleRegister = async () => {
    if (!selected) return;
    setLoading(true);
    const amount = (conferenceConfig.fees as any)[selected];
    const res = await createRegistration(selected, amount);
    if (res.success && res.redirectUrl) {
       router.push(res.redirectUrl);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold">Registration & Payment</h1>
        <p className="text-slate-500">Complete your registration to attend the conference and present your work.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
         <Card className="border-none shadow-sm overflow-hidden">
            <CardHeader className="bg-slate-900 text-white">
               <CardTitle className="text-white">Registration Portal</CardTitle>
               <CardDescription className="text-slate-400 font-medium">Select your package and proceed to secure checkout.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
               <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 border-l-4 border-primary pl-3">Available Packages</h4>
                  <div className="grid gap-3">
                     {Object.entries(conferenceConfig.fees).map(([type, amount]) => (
                       <div 
                         key={type} 
                         onClick={() => setSelected(type)}
                         className={`flex items-center justify-between p-5 border-2 rounded-2xl transition-all cursor-pointer group ${selected === type ? 'border-primary bg-primary/5 shadow-inner' : 'hover:border-slate-300'}`}
                       >
                          <div className="capitalize">
                             <p className={`font-bold transition-colors ${selected === type ? 'text-primary' : ''}`}>
                                {type.replace(/([A-Z])/g, ' $1').trim()}
                             </p>
                             <p className="text-xs text-slate-400">Standard registration</p>
                          </div>
                          <div className="text-right">
                             <p className="font-bold text-2xl">${amount as number}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               
               <Button className="w-full h-14 rounded-2xl font-bold mt-4 text-lg shadow-lg shadow-primary/20" disabled={!selected || loading} onClick={handleRegister}>
                 {loading ? <Loader2 className="animate-spin" /> : "Proceed to Payment"}
               </Button>
            </CardContent>
         </Card>

         <div className="space-y-8">
            <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
               <h3 className="text-xl font-bold text-slate-900">Why register?</h3>
               <ul className="space-y-4">
                  {[
                    "Full access to all technical sessions",
                    "Conference proceedings and abstract book",
                    "Networking dinner and coffee breaks",
                    "Certificate of presentation/attendance"
                  ].map((tip) => (
                    <li key={tip} className="flex items-center gap-3 text-slate-600">
                       <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                       {tip}
                    </li>
                  ))}
               </ul>
            </div>
            
            <div className="p-8 bg-amber-50 rounded-[2.5rem] border border-amber-100 text-sm text-amber-900 leading-relaxed italic">
               &quot;At least one author of each accepted paper must register at the Regular/Student Author rate to include their paper in the final proceedings.&quot;
            </div>
         </div>
      </div>
    </div>
  );
}
