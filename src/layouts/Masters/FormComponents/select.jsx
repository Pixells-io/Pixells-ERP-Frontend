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
  filterOption,
  required,
}) {
  return (
    <Label className="flex w-full flex-col gap-2">
      <p className="pl-1 text-[11px] font-light text-grisHeading">
        {placeholder} {required && "*"}
      </p>
      <Select
        required={required}
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
        maxMenuHeight={150}
        // menuPosition="fixed"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: "10px",
            padding: "0px",
            margin: "0px",
            height: "32px",
            minHeight: "32px",
            border: "1px solid #e2e8f0",
            fontWeight: 400,
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
          singleValue: (baseStyles) => ({
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
