import React from "react";
import ProfileImage from "../ProfileImage/ProfileImage";
import Typo from "@/components/Atom/Typo/Typo";
import Flex from "@/components/Atom/Flex/Flex";

interface ProfileCardProps {
  imgUrl?: string;
  name: string;
}

export default function ProfileCard({ imgUrl, name }: ProfileCardProps) {
  return (
    <Flex
      ai="center"
      className="max-w-[300px] gap-2.5 border rounded-2xl mx-4 p-[12px]"
    >
      <ProfileImage size="small" imgUrl={imgUrl} />
      <Typo>{name}</Typo>
    </Flex>
  );
}
