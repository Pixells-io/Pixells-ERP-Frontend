import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectTrigger, SelectItem, SelectValue } from "@/components/ui/select";

const InputsGroup = () => {
  const [values, setValues] = useState({
    noSupp: "", rfc: "", nCompany: "",
    type: "", group: "", currency: "", cfdi: "",
  });

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value, name) => {
    setValues({ ...values, [name]: value });
  };

  const selectStyle = "w-full rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones";

  return (
    <div className="w-full bg-white rounded-xl p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Primera fila */}
        <div>
          <Input
            name="noSupp"
            className="w-full rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones"
            placeholder="Numero de proveedor"
            value={values.noSupp}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Select onValueChange={(value) => handleSelectChange(value, "type")}>
            <SelectTrigger name="type" className={selectStyle}>
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Opción 1</SelectItem>
              <SelectItem value="option2">Opción 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Input
            name="nCompany"
             className="w-full rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones"
            placeholder="Nombre o Razón Social"
            value={values.nCompany}
            onChange={handleInputChange}
          />
        </div>

        {/* Segunda fila */}
        <div>
          <Input
            name="rfc"
             className="w-full rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones"
            placeholder="RFC"
            value={values.rfc}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Select onValueChange={(value) => handleSelectChange(value, "group")}>
            <SelectTrigger name="group" className={selectStyle}>
              <SelectValue placeholder="Grupo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Opción 1</SelectItem>
              <SelectItem value="option2">Opción 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select onValueChange={(value) => handleSelectChange(value, "currency")}>
            <SelectTrigger name="currency" className={selectStyle}>
              <SelectValue placeholder="Moneda" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Opción 1</SelectItem>
              <SelectItem value="option2">Opción 2</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tercera fila */}
        <div>
          <Select onValueChange={(value) => handleSelectChange(value, "cfdi")}>
            <SelectTrigger name="cfdi" className={selectStyle}>
              <SelectValue placeholder="Uso de CFDI" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Opción 1</SelectItem>
              <SelectItem value="option2">Opción 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default InputsGroup;