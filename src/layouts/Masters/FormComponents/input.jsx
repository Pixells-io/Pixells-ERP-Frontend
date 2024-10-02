import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

function InputRouter({
  type,
  name,
  placeholder,
  defaultVal,
  disabled,
  value,
  onChange,
  required,
  className,
}) {
  return (
    <Label className="flex w-full flex-col">
      <p className="mb-1 text-[10px] font-normal text-grisText">
        {type !== "password" && placeholder} {required && "*"}
      </p>
      <Input
        type={type}
        className={cn(
          "h-[32px] rounded-[10px] border border-[#D7D7D7] text-sm text-[#44444f]",
          className,
        )}
        name={name}
        // placeholder={placeholder}
        defaultValue={defaultVal}
        disabled={disabled}
        value={value}
        onChange={onChange}
        required={required}
      />
    </Label>
  );
}

export default InputRouter;
