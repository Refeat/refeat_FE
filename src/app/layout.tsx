import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/lib/tanstack/QueryProvider";
import RecoilProvider from "@/lib/recoil/RecoilProvider";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <QueryProvider>
          <RecoilProvider>
            <div id="portal"></div>
            {children}
          </RecoilProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
