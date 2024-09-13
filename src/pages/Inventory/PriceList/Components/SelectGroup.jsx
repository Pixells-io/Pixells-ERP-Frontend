import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import InputForm from "@/components/InputForm/InputForm";

const Inputs = ({ onIndRefChange, data, setData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);
    if (name === "index_list") {
      onIndRefChange(value);
    }
  };
  
  const handleSelectChange = (name, value) => {
    setData(name, value);
  };

  const handleSwitchChange = () => {
    setData("rounding", !data.rounding);
  };

  const inputClass = "w-full border rounded-md p-2 text-[14px] font-roboto text-[#696974] focus-visible:ring-primarioBotones";
  const selectClass = "w-full h-[32px] rounded-md border border-gris2-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#696974] focus:ring-2 focus:ring-[#5B89FF] focus:border-transparent";
  const labelClass = "text-[14px] font-roboto text-[#696974]";

  return (
    <div className="space-y-4 border p-4 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="name" className={labelClass}>
            Nombre
          </Label>
          <InputForm
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <Label htmlFor="based_list" className={labelClass}>
            Lista de Precios Base
          </Label>
          <Select
            name="based_list"
            value={data.based_list}
            onValueChange={(value) => handleSelectChange("based_list", value)}
          >
            <SelectTrigger className={selectClass}>
              <SelectValue placeholder="Seleccionar lista" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Lista 1</SelectItem>
              <SelectItem value="2">Lista 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="index_list" className={labelClass}>
            Índice de Refac.
          </Label>
          <InputForm
            id="index_list"
            name="index_list"
            value={data.index_list}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Label htmlFor="type" className={labelClass}>
              Modalidad
            </Label>
            <Select
              name="type"
              value={data.type}
              onValueChange={(value) => handleSelectChange("type", value)}
            >
              <SelectTrigger className={selectClass}>
                <SelectValue placeholder="Selecciona" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">By Date</SelectItem>
                <SelectItem value="2">Permanent</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 pt-6">
            <InputForm
              type="date"
              name="from_date"
              value={data.from_date}
              onChange={handleChange}
              disabled={data.type === "2"}
              className={`${inputClass} ${data.type === "2" ? 'bg-gray-200' : 'bg-[#F6F6F6]'} border-none`}
            />
          </div>
          <div className="flex-1 pt-6">
            <InputForm
              type="date"
              name="to_date"
              value={data.to_date}
              onChange={handleChange}
              disabled={data.type === "2"}
              className={`${inputClass} ${data.type === "2" ? 'bg-gray-200' : 'bg-[#F6F6F6]'} border-none`}
            />
          </div>
        </div>
        <div className="flex items-end gap-4">
          <div className="flex items-center space-x-2">
            <button
              type="button"
              role="switch"
              aria-checked={data.rounding}
              data-state={data.rounding ? "checked" : "unchecked"}
              className={`peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 ${
                data.rounding ? 'bg-[#5B89FF]' : 'bg-input'
              }`}
              onClick={handleSwitchChange}
            >
              <span
                data-state={data.rounding ? "checked" : "unchecked"}
                className={`pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform ${
                  data.rounding ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <Label htmlFor="rounding" className={labelClass}>
              Redondeo
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inputs;