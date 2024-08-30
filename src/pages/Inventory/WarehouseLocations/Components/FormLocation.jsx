import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Form, useLoaderData } from "react-router-dom";

const FormLocation = () => {
  const selectClasses =
    "w-full rounded-xl border border-gris2-transparent text-[14px] font-roboto text-[#8F8F8F] placeholder:text-[#44444F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";
  const { subLocationData, warehousesData } = useLoaderData();
  const [selectedInventoryId, setSelectedInventoryId] = useState("");
  const [selectedSubLocation, setSelectedSubLocation] = useState(null);
  const [slotInputs, setSlotInputs] = useState([]);
  const [value,setValue]=useState("");
  const handleSubLocationChange = (subLocationId) => {
    const subLocation = subLocationData.data.find(
      (sl) => sl.id === subLocationId,
    );
    setSelectedSubLocation(subLocation);
    if (subLocation) {
      setSlotInputs(
        subLocation.slots.map((slot) => ({
          id: slot.id,
          name: slot.name,
          from: "",
          to: "",
        })),
      );
    } else {
      setSlotInputs([]);
    }
  };

 

  useEffect(() => {
    const randomValue = Math.floor(Math.random() * 10); // Número aleatorio entre 0 y 9
    setValue(randomValue);
  }, []); 

  return (
    <div className="w-full space-y-4 overflow-auto rounded-xl bg-white px-6 py-6">
      <Form id="form-location"action={"/inventory/warehouse-locations/create"} method="POST">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1">
            <Label
              htmlFor="inventory"
              className="font-roboto text-[14px] text-gris2"
            >
              Selecciona Almacén
            </Label>
            <Select onValueChange={(value) => setSelectedInventoryId(value)}>
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
            <input
              type="hidden"
              name="inventory_id"
              value={selectedInventoryId}
            />
          </div>
          <div className="flex-1">
            <Label
              htmlFor="location_name"
              className="font-roboto text-[14px] text-gris2"
            >
              Descripción de la ubicación
            </Label>
            <Input
              type="text"
              id="location_name"
              name="location_name"
              className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
            />
          </div>
          {/*<div className="flex-1">
          <Label
            htmlFor="subLocation"
            className="font-roboto text-[14px] text-gris2"
          >
            Selecciona Sub-Ubicación
          </Label>
          <Select onValueChange={handleSubLocationChange}>
            <SelectTrigger name="subLocation" className={selectClasses}>
              <SelectValue placeholder="Selecciona una sub-ubicación" />
            </SelectTrigger>
            <SelectContent>
              { subLocationData.data.map((subLocation) => (
                <SelectItem
                  key={subLocation.id}
                  value={subLocation.id}
                >
                  {subLocation.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>*/}
        </div>
        {/*
      {slotInputs.length > 0 && (
        <div className="space-y-4">
          <Label className="font-roboto text-[14px] text-gris2">Slots</Label>
          {slotInputs.map((slot, index) => (
            <div key={slot.id} className="flex items-center gap-4">
              <Label className="w-32 font-roboto text-[14px] text-gris2">
                {slot.name}
              </Label>
              <Input
                name={`from[${slot.id}]`}
                placeholder="Desde"
                value={slot.from}
                onChange={(e) => {
                  const newSlotInputs = [...slotInputs];
                  newSlotInputs[index].from = e.target.value;
                  setSlotInputs(newSlotInputs);
                }}
                className="border-gris2-transparent flex-1 rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
              />
              <Input
                name={`to[${slot.id}]`}
                placeholder="Hasta"
                value={slot.to}
                onChange={(e) => {
                  const newSlotInputs = [...slotInputs];
                  newSlotInputs[index].to = e.target.value;
                  setSlotInputs(newSlotInputs);
                }}
                className="border-gris2-transparent flex-1 rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
              />
              <input type="hidden" name={`var_id[${slot.id}]`} value={slot.id} />
            </div>
          ))}
        </div>
      )}*/}

        <div className="space-y-4">
          <div className="flex items-center">
            <Label className="w-32 pt-6 font-roboto text-[14px] text-gris2">
              AREA
            </Label>
            <div className="flex flex-grow gap-4">
              <div className="flex-1">
                <Label className="pb-2 font-roboto text-[14px] text-gris2">
                  Desde
                </Label>
                <Input
                  type="text"
                  name={"from[]"}
                  className="border-gris2-transparent ml-[-40px] w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
                />
              </div>
              <div className="flex-1">
                <Label className="pb-2 font-roboto text-[14px] text-gris2">
                  Hasta
                </Label>
                <Input
                  type="text"
                  name={"to[]"}
                  className="border-gris2-transparent ml-[-40px] w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
                />
              </div>
            </div>
          </div>

          {["PASILLO", "ESTANTE"].map((field, index) => (
            <div key={index} className="flex items-center">
              <Label className="w-32 font-roboto text-[14px] text-gris2">
                {field}
              </Label>
              <div className="flex flex-grow gap-4">
                <div className="flex-1">
                  <Input
                    type="text"
                    name={"from[]"}
                    className="border-gris2-transparent ml-[-40px] w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
                  />
                </div>
                <div className="flex-1">
                  <Input
                    type="text"
                    name={"to[]"}
                    className="border-gris2-transparent ml-[-40px] w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
                  />
                </div>
              </div>
            </div>
          ))}
          <input type="hidden" name="var_id[]" value={value} />
        </div>
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
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
            />
          </div>
        </div>

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
            className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
          />
        </div>
        <div className="flex justify-end p-4">
          <Button className="rounded-full bg-primarioBotones px-8 py-3 hover:bg-none">
            Crear
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormLocation;

