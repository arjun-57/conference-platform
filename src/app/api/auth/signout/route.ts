import { signOut } from "@/lib/auth-actions";
import { AlertCircle, CheckCircle } from "lucide-react";
import { NextResponse } from "next/server";

export async function POST() {
  await signOut();
  return NextResponse.redirect(new URL("/", process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"));
}

export const dynamic = 'force-dynamic';
