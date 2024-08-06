import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
    <Label className="flex w-full flex-col gap-2">
      <p className="pl-1 text-[11px] font-light text-grisHeading">{name}</p>
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
    </Label>
  );
}

export default InputRouter;
