import Flex from "@/components/Atom/Flex/Flex";
import Logo from "@/components/Atom/Logo/Logo";
import React from "react";

export default function HalfHeader() {
  return (
    <Flex ai="end" className="w-1/2 h-[80px] pl-[43px] pb-[21px]">
      <Logo size={18} />
    </Flex>
  );
}
