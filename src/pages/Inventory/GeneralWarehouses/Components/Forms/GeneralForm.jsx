import React from "react";
import { useLocation } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import InputRouter from "@/layouts/Masters/FormComponents/input";

const GeneralForm = ({ formData, handleInputChange }) => {
  const location = useLocation();
  const isEditRoute = location.pathname.includes("/inventory/general-warehouses/edit/");

  return (
    <div className="grid grid-cols-3 gap-5 pl-4">
      {/* Checkbox Group */}
      {isEditRoute && (
        <div className="col-span-1 flex justify-between space-x-4">
          <div className="flex items-center">
            <Label
              htmlFor="active"
              className="w-36 font-roboto text-[14px] text-gris2"
            >
              Activo
            </Label>
            <Checkbox
              id="active"
              name="active"
              checked={formData.active}
              onCheckedChange={(checked) => handleInputChange({ target: { name: 'active', value: checked } })}
              className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
            />
          </div>
          <div className="flex items-center">
            <Label
              htmlFor="inactive"
              className="w-36 font-roboto text-[14px] text-gris2"
            >
              Inactivo
            </Label>
            <Checkbox
              id="inactive"
              name="inactive"
              checked={formData.inactive}
              onCheckedChange={(checked) => handleInputChange({ target: { name: 'inactive', value: checked } })}
              className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
            />
          </div>
        </div>
      )}

      {/* Form Fields*/}
      {[
        { id: "street", label: "Calle" },
        { id: "int", label: "Número Interior" },
        { id: "ext", label: "Número Exterior" },
        { id: "colony", label: "Colonia" },
        { id: "cp", label: "Código postal" },
        { id: "city", label: "Ciudad" },
        { id: "state", label: "Estado" },
        { id: "country", label: "País" },
      ].map(({ id, label }) => (
        <div key={id} className="col-span-1 flex items-center">
          <Label
            htmlFor={id}
            className="mr-[2px] mt-2 w-36 whitespace-nowrap font-roboto text-[14px] text-gris2"
          >
            {label}:
          </Label>
          <InputRouter
            id={id}
            type="text"
            name={id}
            value={formData[id]}
            onChange={handleInputChange}
          />
        </div>
      ))}
    </div>
  );
};

export default GeneralForm;