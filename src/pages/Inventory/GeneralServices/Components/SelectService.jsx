import React, { useState, useEffect } from "react";

function SelectServices({ service }) {
  const [isActive, setActive] = useState(false);
  const [servideId, setServiceId] = useState("0");

  useEffect(() => {
    if (isActive === true) {
      setServiceId(service.id);
    } else {
      setServiceId("0");
    }
  }, [isActive]);

  return (
    <button
      type="button"
      htmlFor={service.id}
      onClick={() => setActive(!isActive)}
      className={`${
        isActive
          ? "text-[#00A9B3] border-[#00A9B3] bg-[#00A9B326]"
          : "bg-transparent  text-grisSubText  border-grisSubText"
      } font-roboto text-xs font-medium truncate border-2 rounded-2xl py-2 px-3 `}
    >
      <input
        className="hidden"
        id={service.id}
        name="service"
        value={servideId}
        readOnly
      />
      <span title={service.name}>{service.name}</span>
    </button>
  );
}

export default SelectServices;