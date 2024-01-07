import type { Metadata } from "next";

import "./globals.css";
import QueryProvider from "@/lib/tanstack/QueryProvider";
import RecoilProvider from "@/lib/recoil/RecoilProvider";
import { inter, notoSansKR, pretendardM } from "@/fonts";
import Logo from "@/components/Atom/Logo/Logo";
import HalfHeader from "@/components/Oragnism/HalfHeader/HalfHeader";

import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  title: "Refeat",
  description: "Refeat",
};

// export async function generateMetadata({
//   params: { locale },
// }: Omit<Props, "children">) {
//   const t = await getTranslations({ locale, namespace: "LocaleLayout" });

//   return {
//     title: t("title"),
//   };
// }

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body
        className={`bg-[#F8F9FC] ${notoSansKR.variable} ${pretendardM.variable} ${inter.variable}`}
      >
        <QueryProvider>
          <RecoilProvider>
            <div id="portal"></div>

            <HalfHeader />
            {children}
          </RecoilProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
