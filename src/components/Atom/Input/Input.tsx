import React, { ComponentPropsWithRef } from "react";

interface InputProps extends ComponentPropsWithRef<"input"> {
  validation?: boolean;
}

export default function Input({
  type,
  value,
  checked,
  onChange,
  placeholder,
  name,
  maxLength,
  className,
  accept,
}: InputProps) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      checked={checked}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      className={`${className}`}
      accept={accept}
    />
  );
}
