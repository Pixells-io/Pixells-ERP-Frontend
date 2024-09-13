import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import InputForm from "@/components/InputForm/InputForm";

const Inputs = ({ onRoundingChange, onIndRefChange, data, setData}) => {
 

  const [inputsData, setInputsData] = useState({
    nombre: data?.name ||"",
    listaPrecios: data?.based_list || "",
    indiceRefac:data?.index_list || "",
    modalidad:data?.type || "",
    fechaInicio: data?.from_date||"",
    fechaFin: data?.to_date||"",
    metodoRedondeo: data?.rounding ||"",
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

  const handleSwitchChange = () => {
    setInputsData((prev) => {
      const newRedondeoActivado = !prev.redondeoActivado;
      onRoundingChange(newRedondeoActivado, prev.metodoRedondeo);
      return { ...prev, redondeoActivado: newRedondeoActivado };
    });
  };

  const inputClass = "w-full border rounded-md p-2 text-[14px] font-roboto text-[#696974] focus-visible:ring-primarioBotones";
  const selectClass = "w-full h-[32px] rounded-md border border-gris2-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#696974] focus:ring-2 focus:ring-[#5B89FF] focus:border-transparent";
  const labelClass = "text-[14px] font-roboto text-[#696974]";

  return (
    <div className="space-y-4 border p-4 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="nombre" className={labelClass}>
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
          <Label htmlFor="listaPrecios" className={labelClass}>
            Lista de Precios Base
          </Label>
          <Select
            name="listaPrecios"
            value={inputsData.listaPrecios}
            onValueChange={(value) => handleSelectChange("listaPrecios", value)}
          >
            <SelectTrigger className={selectClass}>
              <SelectValue placeholder="Seleccionar lista" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Lista 1</SelectItem>
              <SelectItem value="lista2">Lista 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="indiceRefac" className={labelClass}>
            Índice de Refac.
          </Label>
          <InputForm
            id="indiceRefac"
            name="indiceRefac"
            value={inputsData.indiceRefac}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Label htmlFor="modalidad" className={labelClass}>
              Modalidad
            </Label>
            <Select
              name="modalidad"
              value={inputsData.modalidad}
              onValueChange={(value) => handleSelectChange("modalidad", value)}
            >
              <SelectTrigger className={selectClass}>
                <SelectValue placeholder="Selecciona" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Modalidad 1</SelectItem>
                <SelectItem value="2">Modalidad 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 pt-6">
            <InputForm
              type="date"
              name="fechaInicio"
              value={inputsData.fechaInicio}
              onChange={handleChange}
              className={`${inputClass} bg-[#F6F6F6] border-none`}
            />
          </div>
          <div className="flex-1 pt-6">
            <InputForm
              type="date"
              name="fechaFin"
              value={inputsData.fechaFin}
              onChange={handleChange}
              className={`${inputClass} bg-[#F6F6F6] border-none`}
            />
          </div>
        </div>
        <div className="flex items-end gap-4">
          <div className="flex items-center space-x-2">
            <button
              type="button"
              role="switch"
              aria-checked={inputsData.redondeoActivado}
              data-state={inputsData.redondeoActivado ? "checked" : "unchecked"}
              value="on"
              className={`peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 ${
                inputsData.redondeoActivado ? 'bg-[#5B89FF]' : 'bg-input'
              }`}
              onClick={handleSwitchChange}
            >
              <span
                data-state={inputsData.redondeoActivado ? "checked" : "unchecked"}
                className={`pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform ${
                  inputsData.redondeoActivado ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <Label htmlFor="redondeo" className={labelClass}>
              Redondeo
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inputs;