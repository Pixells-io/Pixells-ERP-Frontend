import React, { useState, useEffect } from "react";


function SelectServices({ data }) {

  return (
    <div>
        {data?.map((service, i) => (
                <label htmlFor={service.id}>
                    <input type="radio" id={service.id} name="service[]" value={service.id} />
                    <div className="bg-transparent border-2 font-roboto text-xs font-medium text-grisSubText rounded-2xl py-2 px-3 border-grisSubText hover:text-[#00A9B3] hover:border-[#00A9B3] hover:bg-[#00A9B326] set-data:bg-[#00A9B326]">
                        <span>
                            {service.name}
                        </span>
                    </div>
                </label>
        ))}
    </div>
  );
}

export default SelectServices;
