"use client";

import Image from "next/image";
import React, { useState } from "react";
import ReFeatLogo from "@/asset/refeat-icon-logo.png";
import ReFeatFullLogo from "@/asset/refeat-full-logo.png";
import GoogleLogo from "@/asset/google-logo.png";
import { Link } from "@/lib/i18n/navigation";
export default function Sign() {
  const [signInData, setSignInData] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });
  const [isEmailPass, setIsEmailPass] = useState<boolean>(false);
  const checkEmailHandler = () => {
    setIsEmailPass(true);
  };

  const signInChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center  justify-center  min-h-screen">
      <div className="w-[657px] h-[892px] bg-white rounded-2xl shadow border border-zinc-300 flex items-center flex-col pt-8 px-32 relative">
        <Image src={ReFeatLogo} alt="ReFeatLogo" />
        <Image src={ReFeatFullLogo} alt="ReFeatFullLogo" />
        <div className="mb-3">로그인 후 레핏과 함께해보세요</div>
        <input
          className="w-full h-[63px] rounded-xl border border-zinc-300 px-3  mb-6"
          name="email"
          value={signInData.email}
          onChange={signInChangeHandler}
          placeholder="이메일 주소"
          maxLength={30}
        />
        {isEmailPass && (
          <>
            <input
              className="w-full h-[63px] rounded-xl border border-zinc-300 px-3  mb-6"
              name="password"
              value={signInData.password}
              onChange={signInChangeHandler}
              placeholder="비밀번호"
              maxLength={10}
            />
            <Link href={"/"} className="ml-2 text-blue-600 self-start mb-6">
              비밀번호를 잊으셨나요?
            </Link>
          </>
        )}

        <button
          onClick={checkEmailHandler}
          className="w-full h-[63px] bg-[#125084] rounded-xl text-white text-body4 mb-7"
        >
          다음
        </button>
        {!isEmailPass && (
          <>
            <div className="flex gap-9 mb-7">
              <div>계정이 없으신가요?</div>
              <div className=" text-blue-600">회원가입</div>
            </div>
            <div className="mb-8">OR</div>
            <button className="w-[385px] h-[63px] rounded-xl border border-zinc-300">
              <div className="flex items-center pl-4 gap-20">
                <Image src={GoogleLogo} alt="ReFeatFullLogo" />
                <span> 구글 계정으로 시작하기 </span>
              </div>
            </button>
            <div className="flex absolute bottom-4 text-zinc-500 items-center">
              <Link href={"/"}>이용 약관</Link>
              <div className="border-r border-zinc-500 mx-2 h-4" />
              <Link href={"/"}>개인정보 처리방침</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
