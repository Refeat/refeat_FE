import React, { ComponentProps } from "react";

interface FlexProps extends ComponentProps<"div"> {
  dir?: "row" | "col" | "row-reverse" | "col-reverse";
  jc?: "center" | "start" | "end" | "between" | "around";
  ai?: "center" | "start" | "end" | "stretch" | "baseline";
}

export default function Flex({
  id,
  children,
  dir = "row",
  jc,
  ai,
  className,
  onClick,
}: FlexProps) {
  const direction = dir === "col" ? "flex-col" : "flex-row";
  const justifyContent = {
    center: "justify-center",
    start: "justify-start",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
  };
  const alignItems = {
    center: "items-center",
    start: "items-start",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  };
  return (
    <div
      id={id}
      onClick={onClick}
      className={`flex ${direction} ${jc ? justifyContent[jc] : ""} ${
        ai ? alignItems[ai] : ""
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
