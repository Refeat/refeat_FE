// import { NextRequest, NextResponse } from "next/server";
// import signOut from "./utils/signOut";

// export default async function middleware(req: NextRequest) {
//   const { pathname, search } = req.nextUrl;
//   const token = req.cookies.has("token");

//   //   if (!token) {
//   //     return signOut(req);
//   //   }
//   return NextResponse.next();
// }

//*
import createMiddleware from "next-intl/middleware";
import { pathnames, locales, localePrefix } from "@/lib/i18n/config";

export default createMiddleware({
  defaultLocale: "en",
  locales,
  pathnames,
  localePrefix,
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(ko|en)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
