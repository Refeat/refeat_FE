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
  const fontFamily = isTitle ? "font-title" : "font-typo";
  const fontWeight = isTitle ? "font-bold" : "font-medium";
  // const typoSize = sizes[type as keyof typeof sizes];
  // const typoHeight = heights[type as keyof typeof heights];
  // const isDecoration = type.includes("link") ? true : false;

  return (
    <span className={`${className} ${fontFamily} ${fontWeight}`}>
      {children}
    </span>
  );
}
