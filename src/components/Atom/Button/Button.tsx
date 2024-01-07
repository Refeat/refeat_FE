"use client";

import { useRouter } from "@/lib/i18n/navigation";
import React, { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  href?: string;
  func?: () => void;
}

export default function Button({
  children,
  // onClick,
  href,
  func,
  className,
}: ButtonProps) {
  const router = useRouter();

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    func && func();
    href && router.push(href);
  };
  return (
    <button
      className={`w-[200px] h-[40px] text-white border-black ${className}`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
