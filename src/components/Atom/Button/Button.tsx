"use client";

import { useRouter } from "next/navigation";
import React, { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  href?: string;
}

export default function Button({
  children,
  onClick,
  href,
  className,
}: ButtonProps) {
  // const router = useRouter();

  // const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   onClick && onClick(e);
  //   href && router.push(href);
  // };
  return (
    <button
      className={`w-[200px] h-[40px] text-white border-black ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
