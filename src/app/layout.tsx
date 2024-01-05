import type { Metadata } from "next";

import "./globals.css";
import QueryProvider from "@/lib/tanstack/QueryProvider";
import RecoilProvider from "@/lib/recoil/RecoilProvider";
import { notoSansKR, pretendardM } from "@/fonts";

export const metadata: Metadata = {
  title: "Refeat",
  description: "Refeat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSansKR.variable} ${pretendardM.variable}`}>
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
