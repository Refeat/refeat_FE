import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/lib/tanstack/QueryProvider";
import RecoilProvider from "@/lib/recoil/RecoilProvider";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <QueryProvider>
          <RecoilProvider>{children}</RecoilProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
