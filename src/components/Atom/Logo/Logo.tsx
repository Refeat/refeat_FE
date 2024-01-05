import React from "react";
import RefeatLogo from "@/asset/refeat-logo.png";
import Image from "next/image";

interface LogoProps {
  size: number;
  className?: string;
}

export default function Logo({ size = 40, className }: LogoProps) {
  const logoSize = `h-10 w-auto`;
  return (
    <Image src={RefeatLogo} alt="" className={`${logoSize} ${className}`} />
  );
}
