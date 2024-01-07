import React, { ComponentPropsWithoutRef } from "react";

interface TypoProps extends ComponentPropsWithoutRef<"span"> {
  type:
    | "body9"
    | "body8"
    | "body7"
    | "body6"
    | "body5"
    | "body4"
    | "body3"
    | "body2"
    | "body1"
    | "body0"
    | "link4"
    | "link3"
    | "link2"
    | "link1"
    | "error1"
    | "display3"
    | "display2"
    | "display1"
    | "headline2"
    | "headline1"
    | "subhead4"
    | "subhead3"
    | "subhead2"
    | "subhead1";
}

export default function Typo({ children, type, className }: TypoProps) {
  const isTitle =
    type === "display3" ||
    type === "display2" ||
    type === "display1" ||
    type === "headline2" ||
    type === "headline1" ||
    type === "subhead4" ||
    type === "subhead3" ||
    type === "subhead2" ||
    type === "subhead1";
  const isEnglish = (str: string) => {
    const koreanRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글 자모 범위
    return !koreanRegex.test(str);
  };
  const fontFamily = isEnglish(String(children)) ? "font-en" : "font-ko";
  const fontWeight = isTitle ? "font-bold" : "font-normal";
  const fontSize = new Map([
    ["body9", "text-body9"],
    ["body8", "text-body8"],
    ["body7", "text-body7"],
    ["body6", "text-body6"],
    ["body5", "text-body5"],
    ["body4", "text-body4"],
    ["body3", "text-body3"],
    ["body2", "text-body2"],
    ["body1", "text-body1"],
    ["body0", "text-body0"],
    ["link4", "text-link4"],
    ["link3", "text-link3"],
    ["link2", "text-link2"],
    ["link1", "text-link1"],
    ["error1", "text-error1"],
    ["display3", "text-display3"],
    ["display2", "text-display2"],
    ["display1", "text-display1"],
    ["headline2", "text-headline2"],
    ["headline1", "text-headline1"],
    ["subhead4", "text-subhead4"],
    ["subhead3", "text-subhead3"],
    ["subhead2", "text-subhead2"],
    ["subhead1", "text-subhead1"],
  ]);

  // const typoSize = sizes[type as keyof typeof sizes];
  // const typoHeight = heights[type as keyof typeof heights];
  // const isDecoration = type.includes("link") ? true : false;

  return (
    <span
      className={`${fontSize.get(
        type
      )} ${className} ${fontFamily} ${fontWeight}`}
    >
      {children}
    </span>
  );
}
