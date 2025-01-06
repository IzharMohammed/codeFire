import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: any) {
  const token = await getToken({ req });

  const isAuthPage = req.nextUrl.pathname.startsWith("/auth/signIn");

  // If the user is already authenticated, don't redirect them
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // If the user is not authenticated and not on the sign-in page, redirect them
  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL("/auth/signIn", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/protected-route", "/another-protected-route", "/auth/signIn"],
};
