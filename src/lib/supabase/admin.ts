import { createClient } from "@supabase/supabase-js";

// This client should ONLY be used in server-side code (API routes/Server Actions)
// It bypasses RLS and should be used with extreme caution.
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}
