import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const InputsGroup = ({ initialValues }) => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value, name) => {
    setValues({ ...values, [name]: value });
  };

  const commonStyle =
    "w-full rounded-xl border border-gris2-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  return (
    <div className="grid grid-cols-3 gap-4 bg-white p-4">
      <div>
        <Input
          type="text"
          name="clientNumber"
          placeholder="Código de Cliente"
          value={values?.clientNumber}
          onChange={handleInputChange}
          className="w-full rounded-xl border border-[#696974] font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus-visible:ring-primarioBotones focus:border-transparent"
          />
      </div>
      <div>
        <Select
          value={values.clientType}
          onValueChange={(value) => handleSelectChange(value, "clientType")}
        >
          <SelectTrigger className={commonStyle}>
            <SelectValue placeholder="Tipo de cliente" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="local">Local</SelectItem>
            <SelectItem value="international">Internacional</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Input
          type="text"
          name="socialNumber"
          placeholder="Nombre o razón social"
          value={values.socialNumber}
          onChange={handleInputChange}
          className="w-full rounded-xl border border-[#696974] font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus-visible:ring-primarioBotones focus:border-transparent"
          />
      </div>
      <div>
        <Input
          type="text"
          name="rfc"
          placeholder="RFC"
          value={values.rfc}
          onChange={handleInputChange}
          className="w-full rounded-xl border border-[#696974] font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus-visible:ring-primarioBotones focus:border-transparent"
          />
      </div>
      <div>
        <Select
          value={values.clientGroup}
          onValueChange={(value) => handleSelectChange(value, "clientGroup")}
        >
          <SelectTrigger className={commonStyle}>
            <SelectValue placeholder="Grupo de Clientes" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="group1">Grupo 1</SelectItem>
            <SelectItem value="group2">Grupo 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Select
          value={values.currency}
          onValueChange={(value) => handleSelectChange(value, "currency")}
        >
          <SelectTrigger className={commonStyle}>
            <SelectValue placeholder="Moneda" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="usd">USD</SelectItem>
            <SelectItem value="eur">EUR</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Select
          value={values.CFDI}
          onValueChange={(value) => handleSelectChange(value, "CFDI")}
        >
          <SelectTrigger className={commonStyle}>
            <SelectValue placeholder="Uso de CFDI" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cfdi1">CFDI 1</SelectItem>
            <SelectItem value="cfdi2">CFDI 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default InputsGroup;
