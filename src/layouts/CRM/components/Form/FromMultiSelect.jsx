import React from "react";

import Select from "react-select";

function FromMultiSelect({ services }) {
  let options = [];
  services.data.map((service, i) => {
    let newObj = { value: service.id, label: service.name };
    options.push(newObj);
  });
  return (
    <Select
      options={options}
      isMulti
      name="services"
      placeholder="Service Interest"
    />
  );
}

export default FromMultiSelect;
