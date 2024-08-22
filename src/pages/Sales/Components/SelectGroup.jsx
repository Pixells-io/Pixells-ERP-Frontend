import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectsQuote = ({ id, sl1, sl2, sl3, isEditable }) => {
  const [inputValue, setInputValue] = useState(id || "1");
  const [select1Value, setSelect1Value] = useState(sl1 || "");
  const [select2Value, setSelect2Value] = useState(sl2 || "");
  const [select3Value, setSelect3Value] = useState(sl3 || "");

  const handleChange = (value, name) => {
    if (isEditable) {
      switch (name) {
        case 'user':
          setSelect1Value(value);
          break;
        case 'costCenter':
          setSelect2Value(value);
          break;
        case 'stored':
          setSelect3Value(value);
          break;
        default:
          break;
      }
    }
  };

  const selectTriggerClass = "flex rounded-xl border border-grisText-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  return (
    <div className="rounded-xl bg-white p-4">
      <div className="flex space-x-3 justify-center items-center">
        <Input 
          name="list"
          className="flex rounded-xl border border-gris2-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus-visible:ring-primarioBotones focus:border-transparent"
          placeholder="Lista de precios"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          readOnly
        />
        
        <Select 
          name="user" 
          value={select1Value} 
          onValueChange={(value) => handleChange(value, 'user')}
          disabled={!isEditable}
        >
          <SelectTrigger className={selectTriggerClass}>
            <SelectValue placeholder="Usuario" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="opcion1">usuario 1</SelectItem>
              <SelectItem value="opcion2">usuario 2</SelectItem>
              <SelectItem value="opcion3">usuario 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select 
          name="ccost" 
          value={select2Value} 
          onValueChange={(value) => handleChange(value, 'costCenter')}
          disabled={!isEditable}
        >
          <SelectTrigger className={selectTriggerClass}>
            <SelectValue placeholder="Centro de Costos" />
          </SelectTrigger>
          <SelectContent >
            <SelectGroup>
              <SelectItem value="opcion1">Centro de costos 1</SelectItem>
              <SelectItem value="opcion2">Centro de costos 2</SelectItem>
              <SelectItem value="opcion3">Centro de costos 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select 
          name="stored" 
          value={select3Value} 
          onValueChange={(value) => handleChange(value, 'stored')}
          disabled={!isEditable}
        >
          <SelectTrigger className={selectTriggerClass}>
            <SelectValue placeholder="Almacén" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="opcion1">Almacen Norte</SelectItem>
              <SelectItem value="opcion2">Almacen Sur</SelectItem>
              <SelectItem value="opcion3">Almacen Este</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectsQuote;
