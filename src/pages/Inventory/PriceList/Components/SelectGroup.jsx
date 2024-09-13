import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import InputForm from "@/components/InputForm/InputForm";

const Inputs = ({ onRoundingChange, onIndRefChange }) => {
  const [inputsData, setInputsData] = useState({
    nombre: "",
    listaPrecios: "",
    indiceRefac: "",
    modalidad: "",
    fechaInicio: "",
    fechaFin: "",
    metodoRedondeo: "",
    redondeoActivado: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputsData((prev) => {
      const newData = { ...prev, [name]: value };
      if (name === "indiceRefac") {
        onIndRefChange(value);
      }
      return newData;
    });
  };

  const handleSelectChange = (name, value) => {
    setInputsData((prev) => {
      const newData = { ...prev, [name]: value };
      if (name === "metodoRedondeo") {
        onRoundingChange(prev.redondeoActivado, value);
      }
      return newData;
    });
  };

  const handleSwitchChange = (checked) => {
    setInputsData((prev) => {
      const newData = { ...prev, redondeoActivado: checked };
      onRoundingChange(checked, prev.metodoRedondeo);
      return newData;
    });
  };

  const inputClass = "w-full border p-2";
  const selectClass = "w-full h-[32px] rounded-md border border-gris2-transparent font-roboto text-[14px] text-[#44444f] placeholder:text-[#44444f] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  return (
    <div className="space-y-4 border p-4 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="nombre" className="text-sm text-gray-600">
            Nombre
          </Label>
          <InputForm
            id="nombre"
            name="nombre"
            value={inputsData.nombre}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <Label htmlFor="listaPrecios" className="text-sm text-gray-600">
            Lista de Precios Base
          </Label>
          <Select
            name="listaPrecios"
            value={inputsData.listaPrecios}
            onValueChange={(value) => handleSelectChange("listaPrecios", value)}
            className={selectClass}
          >
            <SelectTrigger className={selectClass}>
              <SelectValue placeholder="Seleccionar lista" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lista1">Lista 1</SelectItem>
              <SelectItem value="lista2">Lista 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="indiceRefac" className="text-sm text-gray-600">
            Índice de Refac.
          </Label>
          <InputForm
            id="indiceRefac"
            name="indiceRefac"
            value={inputsData.indiceRefac}
            onChange={handleChange}
            className={"w-40 border p-2 "}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Label htmlFor="modalidad" className="text-sm text-gray-600">
              Modalidad
            </Label>
            <Select
              name="modalidad"
              value={inputsData.modalidad}
              onValueChange={(value) => handleSelectChange("modalidad", value)}
              className={selectClass}
            >
              <SelectTrigger className={selectClass}>
                <SelectValue placeholder="Selecciona" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="modalidad1">Modalidad 1</SelectItem>
                <SelectItem value="modalidad2">Modalidad 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 pt-6">
           
            <InputForm
              type="date"
              name="fechaInicio"
              value={inputsData.fechaInicio}
              onChange={handleChange}
              className={"w-full border-none p-2 bg-[#F6F6F6]"}
            />
          </div>
          <div className="flex-1 pt-6">
           
            <InputForm
              type="date"
              name="fechaFin"
              value={inputsData.fechaFin}
              onChange={handleChange}
              className={"w-full border-none p-2 bg-[#F6F6F6]"}
            />
          </div>
        </div>
        <div className="flex items-end gap-4">
          <div className="flex-1">
            <Label htmlFor="metodoRedondeo" className="text-sm text-gray-600">
              Método Redondeo
            </Label>
            <Select
              name="metodoRedondeo"
              value={inputsData.metodoRedondeo}
              onValueChange={(value) => handleSelectChange("metodoRedondeo", value)}
              className={selectClass}
              disabled={!inputsData.redondeoActivado}
            >
              <SelectTrigger className={selectClass}>
                <SelectValue placeholder="Seleccionar método" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="truncar">Truncar</SelectItem>
                <SelectItem value="redondear">Redondear</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="redondeo"
              checked={inputsData.redondeoActivado}
              onCheckedChange={handleSwitchChange}
              
            />
            <Label htmlFor="redondeo" className="text-sm text-gray-600">
              Redondeo
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
