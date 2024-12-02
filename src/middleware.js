import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const restrictedPaths = [
  "/login",
  "/signup",
  "/forgot_password",
  "/otp",
  "/set_password",
];

export async function middleware(request) {
  const supplier_token = cookies().get("supplier_token")?.value || "";
  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".woff2") ||
    pathname.endsWith(".css") ||
    pathname.endsWith(".js") ||
    pathname.startsWith("/success")
  ) {
    return NextResponse.next();
  }

  if (supplier_token && restrictedPaths.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!supplier_token && !restrictedPaths.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
