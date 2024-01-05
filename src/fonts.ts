import { Noto_Sans_KR } from "next/font/google";
import localFont from "next/font/local";

export const notoSansKR = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const pretendardM = localFont({
  src: "./asset/fonts/Pretendard-Medium.subset.woff2",
  display: "swap",
  variable: "--font-pretendard-medium",
});

export const pretendardB = localFont({
  src: "./asset/fonts/Pretendard-Bold.subset.woff2",
  display: "swap",
  variable: "--font-pretendard-bold",
});
