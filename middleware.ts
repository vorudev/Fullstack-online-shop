
import { betterFetch } from "@better-fetch/fetch";
import { NextResponse, type NextRequest } from "next/server";
import type { Session } from "@/lib/auth";
import { auth } from "@/lib/auth";
import { getCookieCache } from "better-auth/cookies";

const authRoutes = ["/login", "/signup"];
const passwordRoutes = ["/reset-password", "/forgot-password"];
const adminRoutes = ["/dashboard"];
const publicRoutes = ["/" ];


export default async function authMiddleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const isAuthRoute = authRoutes.includes(pathName);
  const isPasswordRoute = passwordRoutes.includes(pathName);
  const isAdminRoute = adminRoutes.includes(pathName);
const isPublicRoute = publicRoutes.includes(pathName);
  const isProductPage = pathName.startsWith("/product/");

const session = await getCookieCache(request);

  if (!session) {
    if (isAuthRoute || isPasswordRoute || isPublicRoute || isProductPage) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuthRoute || isPasswordRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isAdminRoute && session.user.role !== "admin") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.svg$).*)'],
};