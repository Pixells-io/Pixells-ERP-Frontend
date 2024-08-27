import React from "react";
import { Input } from "@/components/ui/input";

const Inputs = ({ formData, handleInputChange }) => {
  return (
    <div className="w-full rounded-xl bg-white p-4">
      <div className="flex flex-row space-x-4">
        <div className="flex-1">
          <Input
            type="text"
            name="code"
            placeholder="Código de Almacén"
            className="w-full rounded-xl border border-gris2-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus-visible:ring-primarioBotones focus:border-transparent"
            value={formData.code}
            onChange={handleInputChange}
            disabled
          />
        </div>
        <div className="flex-1">
          <Input
            type="text"
            name="name"
            placeholder="Nombre o Descripción"
            className="w-full rounded-xl border border-gris2-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus-visible:ring-primarioBotones focus:border-transparent"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Inputs;