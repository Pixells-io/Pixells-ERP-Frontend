import * as React from "react";

import Select from "react-select";

function SelectRouter({ options, name, placeholder }) {
  return (
    <Select
      className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-full"
      name={name}
      options={options}
      placeholder={placeholder}
    />
  );
}

export default SelectRouter;
