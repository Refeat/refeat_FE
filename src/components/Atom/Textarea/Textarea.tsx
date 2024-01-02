import React, { ComponentPropsWithRef } from "react";

interface TextareaProps extends ComponentPropsWithRef<"textarea"> {
  disable?: boolean;
}

export default function Textarea({
  value,
  name,
  className,
  onChange,
  placeholder,
  maxLength,
}: TextareaProps) {
  return (
    <textarea
      className={`resize-none ${className} flex`}
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
    ></textarea>
  );
}
