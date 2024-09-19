import * as React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function InputForm({
  id,
  type,
  name,
  placeholder,
  defaultValue,
  disabled,
  value,
  onChange,
  required,
  className
}) {
  return (
      <Input
        id={id}
        type={type}
        className={cn("text-[#44444f] text-sm h-[32px] rounded-[10px] border border-[#D7D7D7] ", className)}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        value={value}
        onChange={onChange}
        required={required}
      />
  );
}

export default InputForm;
