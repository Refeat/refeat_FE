import { NextRequest, NextResponse } from "next/server";
import signOut from "./utils/signOut";
import { locales, localePrefix } from "@/lib/i18n/config";
import createIntlMiddleware from "next-intl/middleware";
export default async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const token = req.cookies.has("token");
  const handleI18nRouting = createIntlMiddleware({
    defaultLocale: "en",
    locales,
    localePrefix,
  });
  const response = handleI18nRouting(req);
  //   if (!token) {
  //     return signOut(req);
  //   }
  return response;
}

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    // "/",
    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(ko|en)/:path*",
    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
