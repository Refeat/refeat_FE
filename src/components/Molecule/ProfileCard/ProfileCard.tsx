import React from "react";
import ProfileImage from "../ProfileImage/ProfileImage";
import Typo from "@/components/Atom/Typo/Typo";
import Flex from "@/components/Atom/Flex/Flex";

interface ProfileCardProps {
  imgUrl?: string;
  name: string;
  className?: string;
}

export default function ProfileCard({
  imgUrl,
  name,
  className,
}: ProfileCardProps) {
  return (
    <Flex
      ai="center"
      className={`w-[200px] gap-2 rounded-2xl mx-4 p-[8px] shadow-[0_0_7px_0_#D2DCE7] ${className}`}
    >
      <ProfileImage size="small" imgUrl={imgUrl} />
      <span className="text-subhead2 font-semibold">{name}</span>
      <Flex
        jc="center"
        className="w-[34px] h-[14px] py-[1px] bg-[#ADD3FF] rounded-xl"
      >
        <Typo type="body0" className="text-[#0074FB]">
          Beta
        </Typo>
      </Flex>
    </Flex>
  );
}
