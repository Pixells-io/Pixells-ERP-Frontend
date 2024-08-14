import React, { useState } from "react";
import InputField from "@/layouts/Masters/FormComponents/InputField";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const Inputs = ({ onRoundingChange, onIndRefChange }) => {
  const [inputsData, setInputsData] = useState({
    namList: "",
    prList: "option1",
    indRef: "2.1",
    rounded: false,
    roundList: "",
    active: false,
    inactive: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputsData((prevData) => {
      const newData = { ...prevData, [name]: value };
      if (name === 'indRef') {
        onIndRefChange(value);
      }
      return newData;
    });
  };

  const handleCheckboxChange = (name, checked) => {
    setInputsData((prevData) => {
      const newData = { ...prevData, [name]: checked };
      if (name === 'rounded') {
        onRoundingChange(checked, newData.roundList);
      }
      return newData;
    });
  };

  const handleSelectChange = (name, value) => {
    setInputsData((prevData) => {
      const newData = { ...prevData, [name]: value };
      if (name === 'roundList') {
        onRoundingChange(newData.rounded, value);
      }
      return newData;
    });
  };

  const selectClasses =
    "w-full rounded-xl border border-gris2-transparent placeholder:text-grisHeading focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  return (
    <div className="flex w-full flex-row items-center space-x-4 rounded-xl bg-white p-4">
      <div className="flex-1">
        <InputField
          type="text"
          name="namList"
          placeholder="Nombre"
          className="w-full"
          value={inputsData.namList}
          onChange={handleChange}
        />
      </div>
      <div className="flex-1">
        <Select
          name="prList"
          value={inputsData.prList}
          onValueChange={(value) => handleSelectChange("prList", value)}
        >
          <SelectTrigger className={selectClasses}>
            <SelectValue placeholder="Lista de Precios Base" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Lista de Agustin</SelectItem>
            <SelectItem value="option2">Lista de Antonio</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex-1">
        <Input
          type="number"
          name="indRef"
          placeholder="Indice Refact."
          className="w-full rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones"
          value={inputsData.indRef}
          onChange={handleChange}
          readOnly
        />
      </div>
      <div className="flex">
        <Checkbox
          id="rounded"
          name="rounded"
          checked={inputsData.rounded}
          onCheckedChange={(checked) =>
            handleCheckboxChange("rounded", checked)
          }
          className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
        />
        <label
          htmlFor="rounded"
          className="ml-2 font-roboto text-sm text-gris2"
        >
          Redondeo
        </label>
      </div>
      {inputsData.rounded && (
        <div className="flex">
          <Select
            name="roundList"
            value={inputsData.roundList}
            onValueChange={(value) => handleSelectChange("roundList", value)}
          >
            <SelectTrigger className={selectClasses}>
              <SelectValue placeholder="Método de redondeo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="truncate">Truncar</SelectItem>
              <SelectItem value="round">Redondear</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="flex pl-4 flex-1 flex-col">
        <div className="mb-2 flex items-center">
          <Checkbox
            id="active"
            name="active"
            checked={inputsData.active}
            onCheckedChange={(checked) =>
              handleCheckboxChange("active", checked)
            }
            className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
          />
          <label
            htmlFor="active"
            className="ml-2 font-roboto text-sm text-gris2"
          >
            Activo
          </label>
        </div>
        <div className="flex items-center">
          <Checkbox
            id="inactive"
            name="inactive"
            checked={inputsData.inactive}
            onCheckedChange={(checked) =>
              handleCheckboxChange("inactive", checked)
            }
            className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
          />
          <label
            htmlFor="inactive"
            className="ml-2 font-roboto text-sm text-gris2"
          >
            Inactivo
          </label>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
