import React, { useState, useEffect } from "react";

function SelectServices({ service }) {
  const [isactive, setActive] = useState(false);

  return (
    <label
      htmlFor={service.id}
      onClick={() => setActive(isactive ? false : true)}
      className={`${
        isactive
          ? "text-[#00A9B3] border-[#00A9B3] bg-[#00A9B326]"
          : "bg-transparent  text-grisSubText  border-grisSubText"
      } font-roboto text-xs font-medium truncate border-2 rounded-2xl py-2 px-3 `}
    >
      <input
        type="checkbox"
        className="invisible"
        id={service.id}
        name="service"
        value={service.id}
      />
      <span title={service.name}>{service.name}</span>
    </label>
  );
}

export default SelectServices;
