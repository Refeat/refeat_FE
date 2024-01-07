import Button from "@/components/Atom/Button/Button";
import Flex from "@/components/Atom/Flex/Flex";
import Logo from "@/components/Atom/Logo/Logo";
// import Modal from "@/components/Atom/Modal/Modal";
import ProfileCard from "@/components/Molecule/ProfileCard/ProfileCard";
import React from "react";
import ProfileEdit from "../ProfileEdit/ProfileEdit";
import PATH from "@/data/constants/path";
import dynamic from "next/dynamic";
import Typo from "@/components/Atom/Typo/Typo";
const Modal = dynamic(() => import("@/components/Atom/Modal/Modal"), {
  ssr: false,
});

export default function SideBar() {
  return (
    <Flex
      dir="col"
      ai="center"
      jc="start"
      className="w-[296px] h-[90포] rounded-tr-xl shadow-2xl bg-white"
    >
      <Modal content={<ProfileEdit />}>
        <ProfileCard name="Sangmin Lee" className="mt-[48px]" />
      </Modal>
      <Button
        href={`${PATH.PROJECT}`}
        className="rounded-md bg-gradient-to-r from-blue-500 to-purple-700 mt-[12px]"
      >
        <Typo type="body2" className="text-white">
          + New Project
        </Typo>
      </Button>
    </Flex>
  );
}
