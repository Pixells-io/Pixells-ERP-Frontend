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
  getOptionValue,
  getOptionLabel,
  filterOption
}) {
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
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        filterOption={filterOption}
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: "10px",
            padding: "0px",
            margin: "0px",
            height: "32px",
            minHeight: "32px"
          }),
          input: (baseStyles) => ({
            ...baseStyles,
            color: "#44444f", 
            fontSize: "14px", 
            fontFamily: "roboto",
            fontWeight: 400,
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: "#44444f", 
            fontSize: "14px", 
            fontFamily: "roboto",
            fontWeight: 400,
          }),
          menuList: (baseStyles) => ({
            ...baseStyles,
            color: "#44444f", 
            fontSize: "14px", 
            fontFamily: "roboto",
            fontWeight: 400,
          }),
          multiValueLabel: (baseStyles) => ({
            ...baseStyles,
            color: "#44444f", 
            fontSize: "14px", 
            fontFamily: "roboto",
            fontWeight: 400,
          }),
        }}
      />
    </Label>
  );
}

export default SelectRouter;
