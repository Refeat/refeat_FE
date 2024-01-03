import React, { ComponentProps } from "react";

export default function Button({
  children,
  onClick,
}: ComponentProps<"button">) {
  return (
    <button
      className="w-[320px] h-[50px] bg-black text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
