import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("better-auth.session_token");
  const url = req.nextUrl.clone();
  const pathname = req.nextUrl.pathname;

  if (token || pathname === "/login" || pathname === "/signup") {
    return NextResponse.next();
  }

  // If no token, redirect to login page.
  url.pathname = "/login";
  return NextResponse.redirect(url);
}

export const config = {
  // Apply middleware to ALL routes except static files and Next.js internals.
  matcher: ["/((?!_next|favicon.ico|api/auth).*)"],
};
