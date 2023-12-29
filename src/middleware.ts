import { NextRequest, NextResponse } from "next/server";
import signOut from "./utils/signOut";

export default async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const token = req.cookies.has("token");

  //   if (!token) {
  //     return signOut(req);
  //   }
  return NextResponse.next();
}
