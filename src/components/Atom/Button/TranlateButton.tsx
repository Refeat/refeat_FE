// test버튼입니다 예시로써 나중에 리팩토링or 삭제를 해야함
"use client";

import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { useLocale } from "next-intl";

interface TranlateButtonProps {
  children: React.ReactNode;
}

const TranlateButton = ({ children }: TranlateButtonProps) => {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const ChangeLocalHandler = () => {
    if (locale == "en") {
      router.replace(pathname, { locale: "ko" });
    } else {
      router.replace(pathname, { locale: "en" });
    }
  };
  return (
    <button className="bg-black text-white" onClick={ChangeLocalHandler}>
      {children}
    </button>
  );
};

export default TranlateButton;
