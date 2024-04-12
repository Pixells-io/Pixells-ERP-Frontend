import React, { useState, useEffect } from "react";


function SelectServices({ data }) {

  const [isactive,setActive] = useState(false)

  return (
    <div className="flex grid grid-cols-4">
        {data?.map((service, i) => (
            <label htmlFor={service.id} onClick={()=>setActive(isactive?false:true)} className= {`${isactive?'text-[#00A9B3] border-[#00A9B3] bg-[#00A9B326]':'bg-transparent  text-grisSubText  border-grisSubText'} font-roboto text-xs font-medium truncate border-2 rounded-2xl py-2 px-3 `}>
                <input type="checkbox" id={service.id} name="service" value={service.id} />
                    <span  title={service.name}>
                        {service.name}
                    </span>
            </label>
        ))}
    </div>
  );
}

export default SelectServices;
