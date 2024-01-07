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
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
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
        {!isSignUp ? (
          <>
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
                  <div
                    className=" text-blue-600 hover:cursor-pointer"
                    onClick={() => setIsSignUp(true)}
                  >
                    회원가입
                  </div>
                </div>
                <div className="mb-8">OR</div>
                <button className="w-full h-[63px] rounded-xl border border-zinc-300">
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
          </>
        ) : (
          // <>
          //   <div className="my-5 text-body7">지금 레핏에 가입하세요</div>
          //   <div>가입 시 이메일 인증이 필요합니다.</div>
          //   <div className="mb-7">
          //     보안을 위해 본인 확인용으로만 사용됩니다.
          //   </div>
          //   <input
          //     className="w-full h-[51px] rounded-xl border border-zinc-300 px-3  mb-6"
          //     name="email"
          //     value={signInData.email}
          //     onChange={signInChangeHandler}
          //     placeholder="이메일 주소"
          //     maxLength={30}
          //   />
          //   <button
          //     onClick={checkEmailHandler}
          //     className="w-full h-[51px] bg-[#125084] rounded-xl text-white text-body4 mb-7"
          //   >
          //     다음
          //   </button>
          //   <div className="flex gap-9 mb-7">
          //     <div>이미 계정이 있으신가요?</div>
          //     <div
          //       className=" text-blue-600 hover:cursor-pointer"
          //       onClick={() => setIsSignUp(false)}
          //     >
          //       로그인
          //     </div>
          //   </div>
          //   <div className="mb-8">OR</div>
          //   <button className="w-full h-[63px] rounded-xl border border-zinc-300">
          //     <div className="flex items-center pl-4 gap-20">
          //       <Image src={GoogleLogo} alt="ReFeatFullLogo" />
          //       <span> 구글 계정으로 시작하기 </span>
          //     </div>
          //   </button>
          //   <div className="flex absolute bottom-4 text-zinc-500 items-center">
          //     <div className="text-black">
          //       가입하시려면 이용약관과 개인정보 처리방침에 동의해야 합니다.
          //     </div>
          //     <Link href={"/"}>이용 약관</Link>
          //     <div className="border-r border-zinc-500 mx-2 h-4" />
          //     <Link href={"/"}>개인정보 처리방침</Link>
          //   </div>
          // </>
          // *이메일 인증
          // <>
          //   <div className="my-5 text-body7">이메일 인증</div>
          //   <div className="mb-7 text-body1">
          //     가입 시 이메일 인증이 필요합니다. 보안을 위해 본인 확인용으로만
          //     사용됩니다.
          //   </div>
          //   <div className="flex gap-9 w-full mb-7 ">
          //     <input className="flex-grow-[0.8] h-10 rounded-lg border border-zinc-300" />
          //     <button className="flex-grow-[0.2] h-10 bg-sky-800 rounded-lg text-white">
          //       인증요청
          //     </button>
          //   </div>
          //   <div className="flex gap-9 w-full">
          //     <input className="flex-grow-[0.8] h-10 rounded-lg border border-zinc-300" />
          //     <button className="flex-grow-[0.2] h-10 bg-sky-800 rounded-lg text-white">
          //       인증요청
          //     </button>
          //   </div>
          //   <div className="flex gap-9 mt-7">
          //     <div>이미 계정이 있으신가요?</div>
          //     <div
          //       className=" text-blue-600 hover:cursor-pointer"
          //       onClick={() => setIsSignUp(false)}
          //     >
          //       로그인
          //     </div>
          //   </div>
          //   <div className="flex absolute bottom-4 text-zinc-500 items-center">
          //     <div className="text-black">
          //       가입하시려면 이용약관과 개인정보 처리방침에 동의해야 합니다.
          //     </div>
          //     <Link href={"/"}>이용 약관</Link>
          //     <div className="border-r border-zinc-500 mx-2 h-4" />
          //     <Link href={"/"}>개인정보 처리방침</Link>
          //   </div>
          // </>
          //*비밀번호설정
          <>
            <div className="my-5 text-body7">비밀번호를 설정해주세요</div>
            <div className="mb-7 text-body1">
              비밀번호가 필요합니다. 8자 이상의 비밀번호를 입력해 주세요.
            </div>

            <input className="w-full h-10 rounded-lg border border-zinc-300 mb-7" />

            <input className="w-full h-10 rounded-lg border border-zinc-300 mb-10" />

            <button className="w-full h-10 bg-sky-800 rounded-lg text-white">
              다음
            </button>
            <div className="flex absolute bottom-4 text-zinc-500 items-center">
              <div className="text-black">
                가입하시려면 이용약관과 개인정보 처리방침에 동의해야 합니다.
              </div>
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
