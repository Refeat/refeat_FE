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
  const direction = `flex-${dir}`;
  const justify = `justify-${jc}`;
  const align = `items-${ai}`;
  return (
    <div
      id={id}
      onClick={onClick}
      className={`flex ${direction} ${justify} ${align} ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
