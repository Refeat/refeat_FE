import React from "react";
import RefeatLogo from "@/asset/refeat-logo.png";
import Image from "next/image";

interface LogoProps {
  size: number;
  className?: string;
}

export default function Logo({ size = 40, className }: LogoProps) {
  const logoSize = `h-[46px] w-[168px]`;
  return (
    <Image
      src={RefeatLogo}
      alt=""
      // width={168}
      // height={46}
      className={`${logoSize} ${className}`}
    />
  );
}
