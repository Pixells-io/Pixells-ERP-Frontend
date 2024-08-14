import React, { useState } from "react";
import InputField from "@/layouts/Masters/FormComponents/InputField";

const Inputs = () => {
  const [inputsData, setInputsData] = useState({
    codArt: "",
    descrp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const selectClasses =
    "w-full rounded-xl border border-gris2-transparent placeholder:text-grisHeading focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  return (
    <div className="flex w-full flex-row space-x-4 rounded-xl bg-white p-4">
      <div className="flex-1">
        <InputField
          type="text"
          name="namList"
          placeholder="Nombre"
          className="w-full"
          value={inputsData.name}
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
        <InputField
          type="number"
          name="indRef"
          placeholder="Indice Refact."
          className="w-full"
          value={inputsData.indRef}
          onChange={handleChange}
        />
      </div>
      <div className="flex-1">
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
      <div className="flex-1">
        <Select
          name="roundList"
          value={inputsData.roundList}
          onValueChange={(value) => handleSelectChange("roundList", value)}
        >
          <SelectTrigger className={selectClasses}>
            <SelectValue placeholder="Método de redondeo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Truncar</SelectItem>
            <SelectItem value="option2">Redondear</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-1 flex-col">
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
          htmlFor="rounded"
          className="ml-2 font-roboto text-sm text-gris2"
        >
          Activo
        </label>
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
  );
};

export default Inputs;
