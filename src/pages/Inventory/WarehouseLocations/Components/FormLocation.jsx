import React, { useState, useEffect } from "react";
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
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FormLocation = ({ formData, setFormData }) => {
  const { subLocationData, warehousesData } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 10;

  const [selectedSlots, setSelectedSlots] = useState({});

  useEffect(() => {
    updateFormDataWithSelectedSlots();
  }, [selectedSlots]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSlotChange = (groupId, field, value) => {
    setSelectedSlots((prevSlots) => ({
      ...prevSlots,
      [groupId]: {
        ...prevSlots[groupId],
        [field]: value,
        groupId: groupId,
      },
    }));
  };

  const updateFormDataWithSelectedSlots = () => {
    const var_id = new Set();
    const slots = [];

    Object.values(selectedSlots).forEach((slot) => {
      if (slot.from && slot.to) {
        var_id.add(slot.groupId);
        slots.push({
          from: slot.from,
          to: slot.to,
        });
      }
    });

    setFormData((prevData) => ({
      ...prevData,
      var_id: Array.from(var_id),
      slots: slots,
    }));
  };

  const renderInputField = (label, name, type = "text") => (
    <div className="flex-1">
      <Label htmlFor={name} className="font-roboto text-[14px] text-gris2">
        {label}
      </Label>
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

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentGroups = subLocationData.data.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  );

  const totalPages = Math.ceil(subLocationData.data.length / PAGE_SIZE);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="w-full space-y-4 bg-white rounded-xl overflow-auto px-6 py-6">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1">
          <Label
            htmlFor="inventory"
            className="font-roboto text-[14px] text-gris2"
          >
            Selecciona Almacén
          </Label>
          <Select
            onValueChange={(value) =>
              setFormData((prevData) => ({ ...prevData, inventory_id: value }))
            }
          >
            <SelectTrigger
              name="inventory"
              className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#8F8F8F] placeholder:text-[#44444F] focus:border-transparent focus:ring-2 focus:ring-primarioBotones"
            >
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
        {renderInputField("Descripción de la ubicación", "subLocation")}
      </div>

      <div className="w-[650px] mt-4">
        <div className="mb-2 grid grid-cols-[1fr_2fr_2fr] items-center gap-4">
          <div></div> 
          <Label className="text-center font-roboto text-[14px] text-gris2">
            Desde
          </Label>
          <Label className="text-center font-roboto text-[14px] text-gris2">
            Hasta
          </Label>
        </div>
        {currentGroups.map((group) => (
          <div
            key={group.id}
            className="mb-4 grid grid-cols-[1fr_2fr_2fr] items-center gap-4"
          >
            <Label className="font-roboto text-[14px] text-gris2">
              {group.name}
            </Label>
            <Select
              onValueChange={(value) =>
                handleSlotChange(group.id, "from", value)
              }
              value={selectedSlots[group.id]?.from || ""}
            >
              <SelectTrigger className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#8F8F8F] placeholder:text-[#44444F] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {group.slots.map((slot) => (
                  <SelectItem key={slot.id} value={slot.id.toString()}>
                    {slot.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              onValueChange={(value) => handleSlotChange(group.id, "to", value)}
              value={selectedSlots[group.id]?.to || ""}
            >
              <SelectTrigger className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#8F8F8F] placeholder:text-[#44444F] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {group.slots.map((slot) => (
                  <SelectItem key={slot.id} value={slot.id.toString()}>
                    {slot.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center space-x-2">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-full bg-primarioBotones hover:bg-none"
        >
          <ChevronLeft className="mr-2 h-5 w-5" />
        </Button>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-full bg-primarioBotones hover:bg-none"
        >
          <ChevronRight className="ml-2 h-5 w-5 rounded-full" />
        </Button>
      </div>
      <div className="mt-4 flex gap-4 pt-4">
        {["Activo", "Inactivo", "Disponible para venta"].map((checkboxName) => (
          <div key={checkboxName} className="flex items-center gap-2">
            <Label
              htmlFor={checkboxName}
              className="font-roboto text-[14px] text-gris2"
            >
              {checkboxName.charAt(0).toUpperCase() + checkboxName.slice(1)}
            </Label>
            <Checkbox
              id={checkboxName}
              name={checkboxName}
              checked={formData[checkboxName]}
              onCheckedChange={(checked) =>
                setFormData((prevData) => ({
                  ...prevData,
                  [checkboxName]: checked,
                }))
              }
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
