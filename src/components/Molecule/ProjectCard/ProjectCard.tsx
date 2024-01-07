import Flex from "@/components/Atom/Flex/Flex";
import Typo from "@/components/Atom/Typo/Typo";
import Image from "next/image";
import React from "react";
import ProfileImage from "../ProfileImage/ProfileImage";
import ProjectDefaultImage from "@/asset/project-default.png";

interface Project {
  thumbnail?: string;
  title?: string;
  timePassed?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Flex
      dir="col"
      jc="center"
      ai="center"
      className="gap-4 p-3 w-[200px] h-[217px] border-black bg-white rounded-lg shadow-md"
    >
      <Image
        src={project?.thumbnail || ProjectDefaultImage}
        alt=""
        width={176}
        height={114}
      />

      <div className="h-[1.5px] w-[157.5px] bg-slate-300" />

      <Flex dir="col" jc="start" className="w-full gap-2">
        <Typo type="subhead4">{project?.title || "Untitled"}</Typo>
        <Flex ai="center" jc="between" className="w-full">
          <ProfileImage size="xSmall" />
          <Typo type="body0" className="text-black">
            {project.timePassed || "방금"}
          </Typo>
        </Flex>
      </Flex>
    </Flex>
  );
}
