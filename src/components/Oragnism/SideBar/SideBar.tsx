import Button from "@/components/Atom/Button/Button";
import Flex from "@/components/Atom/Flex/Flex";
import Logo from "@/components/Atom/Logo/Logo";
import ProfileCard from "@/components/Molecule/ProfileCard/ProfileCard";
import React from "react";

export default function SideBar() {
  return (
    <Flex dir="col" ai="center" jc="start" className="border w-1/5">
      <Logo size={20} className="my-[40px]" />
      <ProfileCard name="Sangmin Lee" />
      <Button>+ New Project</Button>
    </Flex>
  );
}
