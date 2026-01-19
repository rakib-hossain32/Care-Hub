import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const { pathname } = req.nextUrl;

    // Protect service details and my-bookings routes
    if (pathname.startsWith("/services/") || pathname.startsWith("/my-bookings")) {
        if (!token) {
            const url = new URL("/login", req.url);
            url.searchParams.set("callbackUrl", pathname);
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/services/:path*", "/my-bookings/:path*"],
};