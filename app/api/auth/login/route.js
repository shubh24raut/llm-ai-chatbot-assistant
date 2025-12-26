import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function POST(req) {
  const { email, password } = await req.json();

  // Create a response that can store cookies
  const res = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY,
    {
      cookies: {
        get(name) {
          return req.cookies.get(name)?.value;
        },
        set(name, value, options) {
          res.cookies.set(name, value, options); // 🔥 Set cookies on RESPONSE
        },
        remove(name, options) {
          res.cookies.set(name, "", { ...options, maxAge: 0 });
        },
      },
    }
  );

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }

  // 🔥 Redirect after successful login WITH COOKIES
  return NextResponse.redirect(new URL("/chat", req.url), {
    headers: res.headers, // ⬅️ THIS ensures cookies go to browser
  });
}
