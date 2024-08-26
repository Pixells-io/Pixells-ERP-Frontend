import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import InputRouter from "@/layouts/Masters/FormComponents/input";

const GeneralForm = ({ data, setData }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="grid grid-cols-3 gap-5 pl-4">
      {/* Checkbox Group */}
      <div className="col-span-1 flex justify-between gap-2">
        <div className="flex items-center">
          <Label htmlFor="active" className="w-36 font-roboto text-[14px] text-gris2">
            Activo
          </Label>
          <Checkbox
            id="active"
            name="active"
            checked={data.active}
            onCheckedChange={(checked) => setData({ ...data, active: checked })}
            className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
          />
        </div>
        <div className="flex items-center">
          <Label htmlFor="inactive" className="w-36 font-roboto text-[14px] text-gris2">
            Inactivo
          </Label>
          <Checkbox
            id="inactive"
            name="inactive"
            checked={data.inactive}
            onCheckedChange={(checked) => setData({ ...data, inactive: checked })}
            className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
          />
        </div>
      </div>
      <div className="col-span-2"></div>

      {/* Form Fields */}
      {[
        { id: 'calle', label: 'Calle', type: 'text' },
        { id: 'numInt', label: 'Número Interior', type: 'number' },
        { id: 'numExt', label: 'Número Exterior', type: 'number' },
        { id: 'col', label: 'Colonia', type: 'text' },
        { id: 'cp', label: 'Código postal', type: 'number' },
        { id: 'city', label: 'Ciudad', type: 'text' },
        { id: 'state', label: 'Estado', type: 'text' },
        { id: 'country', label: 'País', type: 'text' }
      ].map(({ id, label, type }) => (
        <div key={id} className="col-span-1 flex items-center">
          <Label htmlFor={id} className="mt-2 mr-[2px] w-36 whitespace-nowrap font-roboto text-[14px] text-gris2">
            {label}:
          </Label>
          <InputRouter
            id={id}
            type={type}
            name={id}
            value={data[id]}
            onChange={handleChange}
          />
        </div>
      ))}
    </div>
  );
};

export default GeneralForm;
