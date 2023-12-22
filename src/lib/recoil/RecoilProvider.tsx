"use client";

import React from "react";
import { RecoilRoot } from "recoil";

type RecoilRootProps = {
  children: React.ReactNode;
};

export default function RecoilProvider({ children }: RecoilRootProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
