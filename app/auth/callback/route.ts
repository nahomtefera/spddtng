import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the SSR package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;

  if (code) {
    const supabase = createClient();
    await supabase.auth.exchangeCodeForSession(code);

    // Fetch the user's session
    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
      // Determine the user's role
      const isAdmin = user.role === 'admin'; // Adjust this based on how you're storing user roles

      // URL to redirect to after sign up process completes
      if (isAdmin) {
        return NextResponse.redirect(`${origin}/admin`);
      } else {
        return NextResponse.redirect(`${origin}/user`);
      }
    }
  }

  // Fallback redirect if no code or user is found
  return NextResponse.redirect(`${origin}/login`);
}
