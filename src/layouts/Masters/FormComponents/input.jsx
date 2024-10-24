import * as React from "react";
import { Input } from "@/components/ui/input";

function InputRouter({
  type,
  name,
  placeholder,
  defaultVal,
  disabled,
  value,
  onChange,
  required,
}) {
  return (
    <Input
      type={type}
      className="w-full border-none bg-grisBg font-roboto text-xs font-light text-grisHeading placeholder:text-grisHeading focus-visible:ring-primarioBotones"
      name={name}
      placeholder={placeholder}
      defaultValue={defaultVal}
      disabled={disabled}
      require={required}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputRouter;
