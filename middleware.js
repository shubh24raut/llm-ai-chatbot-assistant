import { NextResponse } from "next/server";
import { createMiddlewareClient } from "./supabase/middleware";

export async function middleware(request) {
  const { supabase, response } = createMiddlewareClient(request);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && request.nextUrl.pathname.startsWith("/chat")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/chat/:path*"],
};
