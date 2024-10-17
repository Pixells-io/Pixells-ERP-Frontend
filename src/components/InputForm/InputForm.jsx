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
  className,
  checked,
}) {
  return (
    <div className="w-full">
      {
        (placeholder != null || !!placeholder) && (
          <p className="mb-1 text-[10px] font-normal text-grisText">
            {placeholder} {required == true ? "*" : false}
          </p>
        )
      }
      <Input
        id={id}
        type={type}
        className={cn(
          "h-[32px] rounded-[10px] border border-[#D7D7D7] text-sm text-[#44444f]",
          className,
        )}
        name={name}
        // placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        value={value}
        onChange={onChange}
        required={required}
        checked={checked}
      />
    </div>
  );
}

export default InputForm;
