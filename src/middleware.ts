import { NextRequest, NextResponse } from "next/server";
import { COOKIE_AUTH_TOKEN } from "@shared/cookies";

export function middleware(req: NextRequest) {
  const token = req.cookies.get(COOKIE_AUTH_TOKEN);

  if (token) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_SITE_URL}/people/#token=${token.value}`
    );
  }
  return NextResponse.next();
}
