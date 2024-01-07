import Flex from "@/components/Atom/Flex/Flex";
import Typo from "@/components/Atom/Typo/Typo";
import ProjectCard from "@/components/Molecule/ProjectCard/ProjectCard";
import SideBar from "@/components/Oragnism/SideBar/SideBar";
import Image from "next/image";

const data = [
  { id: 0, title: "", timePassed: "" },
  { id: 1, title: "음악 생성 AI 모델", timePassed: "3일 전" },
  { id: 2, title: "전기자동차 동향", timePassed: "한달 전" },
  { id: 3, title: "생성 AI app 전망", timePassed: "한달 전" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen">
      <SideBar />
      <Flex dir="col" ai="center" className="w-full gap-[30px]">
        <Flex dir="col" ai="center">
          <Typo type="display3">Refeat</Typo>
          <Typo type="body4">
            자료 수집/정리, 팀 소통, 인사이트 도출을 한 곳에서 해결하는
          </Typo>
          <Typo type="body4">생성형 AI 기반 워크 스페이스</Typo>
        </Flex>
        <Flex dir="col" ai="start" className="gap-[13px]">
          <Typo type="body4">My Projects</Typo>
          <Flex className="flex-wrap gap-[20px]">
            {data.map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
}
