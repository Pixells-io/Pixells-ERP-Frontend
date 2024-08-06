import { Label } from "@/components/ui/label";
import * as React from "react";

import Select from "react-select";

function SelectRouter({
  options,
  name,
  placeholder,
  isMulti,
  disabled,
  defaultVal,
  value,
  onChange,
}) {
  // console.log(value);
  return (
    <Label className="flex w-full flex-col gap-2">
      <p className="pl-1 text-[11px] font-light text-grisHeading">
        {placeholder}
      </p>
      <Select
        options={options}
        name={name}
        // placeholder={placeholder}
        className="w-full text-sm font-light"
        isMulti={isMulti}
        isDisabled={disabled}
        defaultValue={defaultVal}
        value={value}
        onChange={onChange}
      />
    </Label>
  );
}

export default SelectRouter;
