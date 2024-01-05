import Image from "next/image";
import React from "react";

interface ProfileImageProps {
  imgUrl?: string;
  className?: string;
  size: "small" | "medium";
}

export default function ProfileImage({
  imgUrl,
  className,
  size = "small",
}: ProfileImageProps) {
  const sizeMap = new Map([
    ["small", "size-10"],
    ["medium", "size-16"],
  ]);

  return (
    <div className={`${sizeMap.get(size)}`}>
      {imgUrl ? (
        <Image
          src={imgUrl}
          alt=""
          width={100}
          height={100}
          className={`size-full rounded-full ${className}`}
        />
      ) : (
        <div className={`size-full rounded-full bg-slate-400 ${className}`} />
      )}
    </div>
  );
}
