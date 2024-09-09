import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import React from "react";

import Select, { components } from "react-select";

function SelectSearch({
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
}) {
  const CustomControl = ({ children, ...props }) => (
    <components.Control
      {...props}
      className="flex flex-row-reverse items-center"
    >
      {children}
      <IonIcon icon={searchOutline} className="h-6 w-6 text-grisText"></IonIcon>
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
      className="flex-1 rounded-2xl"
      getOptionLabel={getOptionLabel}
      filterOption={filterOption}
      getOptionValue={getOptionValue}
      onChange={onChange}
      isDisabled={disabled}
      defaultValue={defaultValue}
      isMulti={isMulti}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          border: "none",
          background: "white",
          borderRadius: state.menuIsOpen ? "20px 20px 0px 0px" : "20px",
          padding: "0px 10px 0px 10px",
          boxShadow: "0px 0px 8px 1px rgba(0,0,0,0.2)",
          marginTop: "0px",
        }),
        menu: (base) => ({
          ...base,
          marginTop: "-1px",
          boxShadow: "0px 4px 8px -2px rgba(0,0,0,0.2)",
          borderRadius: "0px 0px 20px 20px",
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
          color: "#696974", 
          fontSize: "12px", 
          fontFamily: "roboto",
          fontWeight: 400,
        }),
      }}
    />
  );
}

export default SelectSearch;
