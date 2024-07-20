import React, {useState} from 'react';
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormInputs = () =>{
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event) => {
      setSelectedDate(event.target.value);
    };

    return (
        <div className="rounded-xl bg-white p-4 mb-2">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            
            <Input type="date"
                value={selectedDate}
                onChange={handleDateChange} name="fecha"placeholder="Fecha" />
            <Input name="numeracion"placeholder="Numeracion" />
            <Select name="tipoasiento"className="h-10 min-w-0 flex-1">
              <SelectTrigger className="h-full rounded border">
                <SelectValue placeholder="Tipo de asiento contable" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Select name="codigo"className="h-10 min-w-0 flex-1">
              <SelectTrigger className="h-full rounded border">
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
}

export default FormInputs;