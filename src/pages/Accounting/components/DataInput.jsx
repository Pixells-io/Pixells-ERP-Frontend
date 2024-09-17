import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputForm from "@/components/InputForm/InputForm";

const FormInputs = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="mb-2 rounded-xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 border p-4 rounded-xl">
        <InputForm
          name="folio"
          placeholder="folio"
        />
        <InputForm
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          name="fecha"
          placeholder="Fecha"
        />
        <InputForm
          name="numeracion"
          placeholder="Numeracion"
        />
        <Select name="tipoasiento" className=" min-w-0 flex-1">
          <SelectTrigger className="h-[32px] rounded rounded-xl border border-gris2-transparent font-roboto text-[14px] text-[#44444f] placeholder:text-[#44444f] focus:ring-2 focus:ring-primarioBotones focus:border-transparent">
            <SelectValue placeholder="Tipo de asiento contable" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Select name="codigo" className="h-10 min-w-0 flex-1">
          <SelectTrigger className="h-[32px] rounded rounded-xl border border-gris2-transparent font-roboto text-[14px] text-[#44444f] placeholder:text-[#44444f] focus:ring-2 focus:ring-primarioBotones focus:border-transparent">
            <SelectValue placeholder="Codigo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FormInputs;
