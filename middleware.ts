import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookieStore = request.cookies;
  const isAuthenticated = cookieStore.get("admin_auth")?.value === "true";

  // Protect admin routes
  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
