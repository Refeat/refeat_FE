"use client";

import { useRouter } from "next/navigation";
import React, { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  href?: string;
}

export default function Button({ children, onClick, href }: ButtonProps) {
  const router = useRouter();

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
    href && router.push(href);
  };
  return (
    <button
      className="w-3/5 h-[40px] bg-black text-white"
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
