import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useLoaderData } from "react-router-dom";

const FormLocation = ({ formData, setFormData }) => {
  const { subLocationData, warehousesData } = useLoaderData();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubLocationChange = (subLocationId) => {
    const subLocation = subLocationData.data.find(sl => sl.id === subLocationId);
    setFormData(prevData => ({
      ...prevData,
      var_id: subLocation ? [subLocationId] : [],
      slots: subLocation ? subLocation.slots.map(slot => ({
        ...slot,
        from: "",
        to: "",
        subLocationId,
      })) : [],
    }));
  };

  const renderInputField = (label, name, type = "text") => (
    <div className="flex-1">
      <Label htmlFor={name} className="font-roboto text-[14px] text-gris2">{label}</Label>
      <Input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
      />
    </div>
  );

  return (
    <div className="w-full space-y-4 overflow-auto rounded-xl bg-white px-6 py-6">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1">
          <Label htmlFor="inventory" className="font-roboto text-[14px] text-gris2">Selecciona Almacén</Label>
          <Select onValueChange={(value) => setFormData(prevData => ({ ...prevData, inventory_id: value }))}>
            <SelectTrigger name="inventory" className="w-full rounded-xl border border-gris2-transparent text-[14px] font-roboto text-[#8F8F8F] placeholder:text-[#44444F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent">
              <SelectValue placeholder="Selecciona un inventario" />
            </SelectTrigger>
            <SelectContent>
              {warehousesData.data.map(inventory => (
                <SelectItem key={inventory.id} value={inventory.id}>{inventory.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {renderInputField("Descripción de la ubicación", "subLocation")}
        <div className="flex-1">
          <Label htmlFor="subLocationSelect" className="font-roboto text-[14px] text-gris2">Selecciona Sub-Ubicación</Label>
          <Select onValueChange={handleSubLocationChange}>
            <SelectTrigger name="subLocationSelect" className="w-full rounded-xl border border-gris2-transparent text-[14px] font-roboto text-[#8F8F8F] placeholder:text-[#44444F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent">
              <SelectValue placeholder="Selecciona una sub-ubicación" />
            </SelectTrigger>
            <SelectContent>
              {subLocationData.data.map(subLocation => (
                <SelectItem key={subLocation.id} value={subLocation.id}>{subLocation.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {formData.slots.length > 0 && (
        <div className="w-[550px] flex flex-col pt-4 space-y-4">
          <div className="flex justify-evenly">
            <Label className="font-roboto text-[14px] text-gris2">Desde</Label>
            <Label className="font-roboto text-[14px] text-gris2">Hasta</Label>
          </div>
          {formData.slots.map((slot, index) => (
            <div key={slot.id} className="flex items-center gap-4">
              <Label className="w-32 font-roboto text-[14px] text-gris2">{slot.name}</Label>
              {['from', 'to'].map(field => (
                <Input
                  key={field}
                  type="date"
                  name={`${field}[${slot.id}]`}
                  value={slot[field]}
                  onChange={(e) => {
                    const newSlots = [...formData.slots];
                    newSlots[index][field] = e.target.value;
                    setFormData(prevData => ({ ...prevData, slots: newSlots }));
                  }}
                  className="border-gris2-transparent flex-1 rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
                />
              ))}
              <input type="hidden" name={`var_id[${slot.id}]`} value={slot.id} />
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 pt-4 flex gap-4">
        {['activo', 'inactivo', 'Disponible para venta'].map(checkboxName => (
          <div key={checkboxName} className="flex items-center gap-2">
            <Label htmlFor={checkboxName} className="font-roboto text-[14px] text-gris2">
              {checkboxName.charAt(0).toUpperCase() + checkboxName.slice(1)}
            </Label>
            <Checkbox
              id={checkboxName}
              name={checkboxName}
              checked={formData[checkboxName]}
              onCheckedChange={(checked) => setFormData(prevData => ({ ...prevData, [checkboxName]: checked }))}
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        {renderInputField("Cantidad mínima", "cantidadMinima")}
        {renderInputField("Cantidad máxima", "cantidadMaxima")}
      </div>

      {renderInputField("Peso Máximo", "pesoMaximo", "number")}
      {renderInputField("Código de Barras", "codigoBarras", "number")}
    </div>
  );
};

export default FormLocation;