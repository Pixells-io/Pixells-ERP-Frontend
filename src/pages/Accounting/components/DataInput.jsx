import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormInputs = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="mb-2 rounded-xl bg-white p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
        <Input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          name="fecha"
          placeholder="Fecha"
          className="rounded-xl border border-[#696974]"
        />
        <Input
          name="numeracion"
          placeholder="Numeracion"
          className="rounded-xl border border-[#696974]"
        />
        <Select name="tipoasiento" className="h-10 min-w-0 flex-1">
          <SelectTrigger className="h-full rounded rounded-xl border border-[#696974]">
            <SelectValue placeholder="Tipo de asiento contable" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Select name="codigo" className="h-10 min-w-0 flex-1">
          <SelectTrigger className="h-full rounded rounded-xl border border-[#696974]">
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
