import React, { useState } from "react";
import InputField from "@/layouts/Masters/FormComponents/InputField";

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
          <InputField
            type="text"
            name="codArt"
            placeholder="Código de articulo"
            className="w-full"
            value={inputsData.codArt}
            onChange={handleChange}
          />
        </div>
        <div className="flex-1">
          <InputField
            type="text"
            name="descrp"
            placeholder="Nombre o Descripción"
            className="w-full"
            value={inputsData.descrp}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Inputs;
