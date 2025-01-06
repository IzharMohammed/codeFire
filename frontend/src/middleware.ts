import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// Middleware function to handle authentication and redirection
export async function middleware(req: any) {
  // Retrieve the authentication token (if any) from the request
  const token = await getToken({ req });
  console.log('token', token);

  // Check if the current request is for the sign-in page
  const isAuthPage = req.nextUrl.pathname.startsWith("/auth/signIn");
  console.log('isAuthPage', isAuthPage);
    
  // If the user is authenticated and tries to access the sign-in page, redirect them to the home page
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // If the user is not authenticated and tries to access a protected route, redirect them to the sign-in page
  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL("/auth/signIn", req.url));
  }

  // If none of the above conditions are met, allow the request to proceed as normal
  return NextResponse.next();
}

// Define the routes for which the middleware should be applied
export const config = {
  matcher: ["/protected-route", "/another-protected-route", "/auth/signIn", "/"], // Specify the routes to match
};
