import {
  Select as SelectInter,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

import Select, { components } from "react-select";

function SelectShareSettings({
  options,
  name,
  placeholder,
  isMulti,
  disabled,
  defaultValue,
  value,
  onChange,
  getOptionValue,
  getOptionLabel,
  filterOption,
  isClearable,
}) {
  const CustomControl = ({ children, ...props }) => (
    <components.Control {...props} className="flex flex-row items-center">
      {children}
      <div className="mr-1 flex h-full items-center">
        <SelectInter defaultValue="view" name="actions" required >
          <SelectTrigger className="h-[26px] w-full rounded-[6px] border border-[#D7D7D7] bg-inherit font-roboto text-xs font-normal text-grisHeading placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones p-0 min-w-[86px] px-1">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="view">Can View</SelectItem>
            <SelectItem value="edit">Can Edit</SelectItem>
          </SelectContent>
        </SelectInter>
      </div>
    </components.Control>
  );

  return (
    <Select
      options={options}
      components={{
        Control: CustomControl,
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      value={value}
      placeholder={placeholder}
      name={name}
      isClearable={isClearable}
      className="flex-1 rounded-xl"
      getOptionLabel={getOptionLabel}
      filterOption={filterOption}
      getOptionValue={getOptionValue}
      onChange={onChange}
      isDisabled={disabled}
      defaultValue={defaultValue}
      isMulti={isMulti}
      menuPortalTarget={document.body}
      styles={{
        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        control: (baseStyles, state) => ({
          ...baseStyles,
          background: "white",
          borderRadius: "10px",
          padding: "0px 0px 0px 0px",
          // boxShadow: "0px 0px 8px 1px rgba(0,0,0,0.2)",
          marginTop: "0px",
          minHeight: "32px",
          maxHeight: "auto",
          border: "1px solid #5B89FF",
        }),
        menu: (base) => ({
          ...base,
          marginTop: "-1px",
          boxShadow: "0px 4px 8px -2px rgba(0,0,0,0.2)",
          borderRadius: "0px 0px 10px 10px",
        }),
        input: (baseStyles) => ({
          ...baseStyles,
          color: "#696974",
          fontSize: "12px",
          fontFamily: "roboto",
          fontWeight: 400,
        }),
        placeholder: (baseStyles) => ({
          ...baseStyles,
          color: "#696974",
          fontSize: "12px",
          fontFamily: "roboto",
          fontWeight: 400,
          padding: "0px",
        }),
        menuList: (baseStyles) => ({
          ...baseStyles,
          color: "#696974",
          fontSize: "12px",
          fontFamily: "roboto",
          fontWeight: 400,
        }),
        multiValueLabel: (baseStyles) => ({
          ...baseStyles,
          color: "red",
          fontSize: "12px",
          fontFamily: "roboto",
          fontWeight: 400,
          height: "26px",
          display: "flex",
          alignItems: "center",
        }),
        multiValue: (baseStyles) => ({
          ...baseStyles,
          borderRadius: "6px",
          padding: "0px",
        }),
      }}
    />
  );
}

export default SelectShareSettings;
