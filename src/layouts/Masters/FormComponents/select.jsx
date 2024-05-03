import * as React from "react";

import Select from "react-select";

function SelectRouter({ options, name, placeholder }) {
  return <Select options={options} name={name} placeholder={placeholder} />;
}

export default SelectRouter;
