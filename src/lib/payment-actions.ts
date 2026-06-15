"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createRegistration(packageType: string, amount: number) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  // Check if already registered
  const { data: existing } = await supabase
    .from('registrations')
    .select('id, status')
    .eq('user_id', user.id)
    .single();

  if (existing && existing.status === 'paid') {
     return { error: "You are already registered." };
  }

  // Insert or Update pending registration
  const { error } = await supabase
    .from('registrations')
    .upsert({
      user_id: user.id,
      package_type: packageType,
      amount: amount,
      status: 'pending'
    });

  if (error) throw new Error(error.message);

  // Simulation: Redirect to a mock payment success page
  // In a real app, you'd redirect to Stripe Checkout URL
  revalidatePath("/dashboard/payment");
  return { success: true, redirectUrl: "/dashboard/payment/success" };
}

export async function confirmPayment(paymentId: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const { error } = await supabase
    .from('registrations')
    .update({
      status: 'paid',
      payment_id: paymentId,
      paid_at: new Date().toISOString()
    })
    .eq('user_id', user.id);

  if (error) throw new Error(error.message);
  
  revalidatePath("/dashboard/payment");
  revalidatePath("/dashboard/camera-ready");
}
