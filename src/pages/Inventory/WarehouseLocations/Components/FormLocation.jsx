import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useLoaderData } from "react-router-dom";


const FormLocation = ({ formData, setFormData }) => {
  const selectClasses =
    "w-full rounded-xl border border-gris2-transparent text-[14px] font-roboto text-[#8F8F8F] placeholder:text-[#44444F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";
 
 //LOAD DATA 
    const { subLocationData, warehousesData } = useLoaderData();

  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubLocationChange = (subLocationId) => {
    const subLocation = subLocationData.data.find(
      (sl) => sl.id === subLocationId
    );
    if (subLocation) {
      setFormData((prevData) => ({
        ...prevData,
        slots: subLocation.slots.map((slot) => ({
          id:   slot.id,
          name: slot.name,
          from: "",
          to: "",
        })),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        subLocation: "",
        slots: [],
      }));
    }
  };

  return (
    <div className="w-full space-y-4 overflow-auto rounded-xl bg-white px-6 py-6">
      <div className="flex flex-wrap gap-4">
        {/* Warehouse selection */}
        <div className="flex-1">
          <Label
            htmlFor="inventory"
            className="font-roboto text-[14px] text-gris2"
          >
            Selecciona Almacén
          </Label>
          <Select onValueChange={(value) => setFormData((prevData) => ({ ...prevData, inventory_id: value }))}>
            <SelectTrigger name="inventory" className={selectClasses}>
              <SelectValue placeholder="Selecciona un inventario" />
            </SelectTrigger>
            <SelectContent>
              {warehousesData.data.map((inventory) => (
                <SelectItem key={inventory.id} value={inventory.id}>
                  {inventory.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Location description */}
        <div className="flex-1">
          <Label
            htmlFor="subLocation"
            className="font-roboto text-[14px] text-gris2"
          >
            Descripción de la ubicación
          </Label>
          <Input
            type="text"
            id="subLocation"
            name="subLocation"
            value={formData.subLocation}
            onChange={handleInputChange}
            className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
          />
        </div>

        {/* Sub-location selection */}
        <div className="flex-1">
          <Label
            htmlFor="subLocationSelect"
            className="font-roboto text-[14px] text-gris2"
          >
            Selecciona Sub-Ubicación
          </Label>
          <Select onValueChange={handleSubLocationChange}>
            <SelectTrigger name="subLocationSelect" className={selectClasses}>
              <SelectValue placeholder="Selecciona una sub-ubicación" />
            </SelectTrigger>
            <SelectContent>
              {subLocationData.data.map((subLocation) => (
                <SelectItem
                  key={subLocation.id}
                  value={subLocation.id}
                >
                  {subLocation.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Slots */}
      {formData.slots.length > 0 && (
        <div className="space-y-4">
          <Label className="font-roboto text-[14px] text-gris2">Slots</Label>
          {formData.slots.map((slot, index) => (
            <div key={slot.id} className="flex items-center gap-4">
              <Label className="w-32 font-roboto text-[14px] text-gris2">
                {slot.name}
              </Label>
              <Input
                name={`from[${slot.id}]`}
                placeholder="Desde"
                value={slot.from}
                onChange={(e) => {
                  const newSlots = [...formData.slots];
                  newSlots[index].from = e.target.value;
                  setFormData((prevData) => ({ ...prevData, slots: newSlots }));
                }}
                className="border-gris2-transparent flex-1 rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
              />
              <Input
                name={`to[${slot.id}]`}
                placeholder="Hasta"
                value={slot.to}
                onChange={(e) => {
                  const newSlots = [...formData.slots];
                  newSlots[index].to = e.target.value;
                  setFormData((prevData) => ({ ...prevData, slots: newSlots }));
                }}
                className="border-gris2-transparent flex-1 rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
              />
              <input type="hidden" name={`var_id[${slot.id}]`} value={slot.id} />
            </div>
          ))}
        </div>
      )}

      {/* Checkboxes */}
      <div className="flex gap-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-4">
            <Label
              htmlFor="activo"
              className="font-roboto text-[14px] text-gris2"
            >
              Activo
            </Label>
            <Checkbox
              id="activo"
              name="activo"
              checked={formData.activo}
              onCheckedChange={(checked) => setFormData((prevData) => ({ ...prevData, activo: checked }))}
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
            />
          </div>
          <div className="flex items-center gap-2">
            <Label
              htmlFor="inactivo"
              className="font-roboto text-[14px] text-gris2"
            >
              Inactivo
            </Label>
            <Checkbox
              id="inactivo"
              name="inactivo"
              checked={formData.inactivo}
              onCheckedChange={(checked) => setFormData((prevData) => ({ ...prevData, inactivo: checked }))}
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Label
            htmlFor="disponible"
            className="font-roboto text-[14px] text-gris2"
          >
            Disponible para venta
          </Label>
          <Checkbox
            id="disponible"
            name="disponible"
            checked={formData.disponible}
            onCheckedChange={(checked) => setFormData((prevData) => ({ ...prevData, disponible: checked }))}
            className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
          />
        </div>
      </div>

      {/* Other inputs */}
      <div className="flex flex-wrap gap-4">
        <div className="flex-1">
          <Label
            htmlFor="cantidadMinima"
            className="font-roboto text-[14px] text-gris2"
          >
            Cantidad mínima
          </Label>
          <Input
            type="text"
            id="cantidadMinima"
            name="cantidadMinima"
            value={formData.cantidadMinima}
            onChange={handleInputChange}
            className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
          />
        </div>
        <div className="flex-1">
          <Label
            htmlFor="cantidadMaxima"
            className="font-roboto text-[14px] text-gris2"
          >
            Cantidad máxima
          </Label>
          <Input
            type="text"
            name="cantidadMaxima"
            value={formData.cantidadMaxima}
            onChange={handleInputChange}
            className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
          />
        </div>
      </div>

      <div>
        <Label
          htmlFor="pesoMaximo"
          className="font-roboto text-[14px] text-gris2"
        >
          Peso Máximo
        </Label>
        <Input
          type="text"
          name="pesoMaximo"
          value={formData.pesoMaximo}
          onChange={handleInputChange}
          className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
        />
      </div>

      <div>
        <Label
          htmlFor="codigoBarras"
          className="font-roboto text-[14px] text-gris2"
        >
          Código de Barras
        </Label>
        <Input
          id="codigoBarras"
          name="codigoBarras"
          onChange={handleInputChange}
          className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
        />
      </div>
    </div>
  );
};

export default FormLocation;