import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const CheckForm = ({ suppliers, data, setData, isEdit = false }) => {
  // Inicializa el estado local con los datos proporcionados
  const [formData, setFormData] = useState({
    proveedor: data.proveedor || "",
  });

  // Maneja los cambios en el select
  const handleSelectChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      proveedor: value,
    }));
  };

  // Sincroniza el estado local con el estado global
  useEffect(() => {
    setData(formData);
  }, [formData, setData]);

  const selectClasses =
    "h-[32px] w-full rounded-[10px] rounded-xl border border-[#D7D7D7] bg-inherit font-roboto text-sm font-light text-[#44444f] placeholder:text-[#44444f] focus:border-transparent focus:ring-2 focus:ring-primarioBotones";

  return (
    <div className="flex w-full flex-col">
      <p className="mb-1 text-[10px] font-normal text-grisText">
        Proveedor predeterminado
      </p>
      <Select
        name="proveedor"
        value={formData.proveedor}
        onValueChange={handleSelectChange}
      >
        <SelectTrigger className={selectClasses}>
          <SelectValue placeholder="Seleccionar" />
        </SelectTrigger>
        <SelectContent>
          {suppliers?.data?.map((proveedor) => (
            <SelectItem key={proveedor.id} value={proveedor.id.toString()}>
              {proveedor.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CheckForm;
