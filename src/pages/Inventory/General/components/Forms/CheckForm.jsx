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
    "border-gris2-transparent ml-4 w-[50px] rounded-xl border border-none bg-grisBg font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones sm:w-96 lg:w-[500px] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="space-y-4">
        <div className="flex items-center">
          <Label
            htmlFor="proveedorDefault"
            className="w-50 mb-1 mr-4 font-roboto text-[14px] text-gris2"
          >
            Proveedor predeterminado
          </Label>
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
      </div>
    </div>
  );
};

export default CheckForm;
