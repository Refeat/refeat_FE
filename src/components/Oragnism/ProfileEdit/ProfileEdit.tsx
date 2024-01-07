import React from "react";

interface ProfileEditProps {
  func?: () => void;
}

export default function ProfileEdit({ func }: ProfileEditProps) {
  const trigger = () => {
    return func && func();
  };
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-3/5 bg-white rounded-md z-10">
      ProfileEdit
    </div>
  );
}
