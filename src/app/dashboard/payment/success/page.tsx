import { CheckCircle2, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function PaymentSuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 animate-in fade-in zoom-in duration-500">
      <div className="size-24 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-sm border-4 border-white">
        <CheckCircle2 size={48} />
      </div>
      
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-black text-slate-900">Payment Successful!</h1>
        <p className="text-slate-500 text-lg max-w-md">
          Thank you for registering. Your conference pass is now active and your camera-ready portal is unlocked.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
         <Button className="flex-1 h-12 rounded-xl font-bold bg-slate-900">
            <Link href="/dashboard/camera-ready" className="flex items-center justify-center w-full h-full">
               Continue to Camera-Ready <ArrowRight size={18} className="ml-2" />
            </Link>
         </Button>
         <Button variant="outline" className="flex-1 h-12 rounded-xl font-bold">
            <Download size={18} className="mr-2" /> Receipt PDF
         </Button>
      </div>

      <Card className="border-none bg-slate-50 shadow-none rounded-[2rem] w-full max-w-md">
         <CardContent className="p-6 text-center">
            <p className="text-sm text-slate-400">
               A confirmation email has been sent to your registered address. For any issues, contact <span className="text-primary font-medium">support@confflow.org</span>
            </p>
         </CardContent>
      </Card>
    </div>
  );
}
