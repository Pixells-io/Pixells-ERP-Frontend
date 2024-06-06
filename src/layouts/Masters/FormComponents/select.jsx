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
}) {
  // console.log(value);
  return (
    <Select
      options={options}
      name={name}
      placeholder={placeholder}
      className="w-full text-sm font-light"
      isMulti={isMulti}
      isDisabled={disabled}
      defaultInputValue={defaultVal}
      value={value}
    />
  );
}

export default SelectRouter;
