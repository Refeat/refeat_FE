import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "ko"] as const;

export const pathnames = {
  "/": "/",
  "/profile": {
    en: "/profile",
    ko: "/profile",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
