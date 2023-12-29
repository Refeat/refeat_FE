import { NextRequest, NextResponse } from "next/server";

export default function signOut(req: NextRequest) {
  const response = NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}`);

  response.cookies.set({
    name: "token",
    value: "",
    path: "/",
    maxAge: 0,
  });

  return response;
}
