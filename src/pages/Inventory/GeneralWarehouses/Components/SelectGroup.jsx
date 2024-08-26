import React, { useState } from "react";
import { Input } from "@/components/ui/input";

const Inputs = () => {
  const [inputsData, setInputsData] = useState({
    codArt: "",
    descrp: "",
  });

  // Manejo del cambio de los campos de entrada
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full rounded-xl bg-white p-4">
      <div className="flex flex-row space-x-4">
        <div className="flex-1">
          <Input
            type="text"
            name="codArt"
            placeholder="Código de Almacén"
            className="w-full rounded-xl border border-gris2-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus-visible:ring-primarioBotones focus:border-transparent"
            value={inputsData.codArt}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div className="flex-1">
          <Input
            type="text"
            name="descrp"
            placeholder="Nombre o Descripción"
            className="w-full rounded-xl border border-gris2-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus-visible:ring-primarioBotones focus:border-transparent"
            value={inputsData.descrp}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Inputs;
