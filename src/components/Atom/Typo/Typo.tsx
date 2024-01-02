import React, { ComponentPropsWithoutRef } from "react";

interface TypoProps extends ComponentPropsWithoutRef<"span"> {
  type?: string;
}

export default function Typo({ children, type, className }: TypoProps) {
  return <span className={`${className}`}>{children}</span>;
}
