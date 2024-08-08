import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectsQuote = () => {
  const [inputValue, setInputValue] = useState("");
  const [select1Value, setSelect1Value] = useState("");
  const [select2Value, setSelect2Value] = useState("");
  const [select3Value, setSelect3Value] = useState("");

  const selectTriggerClass = "flex rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus:ring-2 focus:ring-primarioBotones";
  const selectContentClass = "border border-gris2-transparent bg-white";

  return (
    <div className="rounded-xl bg-white p-4">
      <div className="flex space-x-3 justify-center items-center">
        <Input 
          name="list"
          className="flex rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones"
          placeholder="Lista de precios"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        
        <Select name="user" value={select1Value} onValueChange={setSelect1Value}>
          <SelectTrigger className={selectTriggerClass}>
            <SelectValue placeholder="Usuario" />
          </SelectTrigger>
          <SelectContent className={selectContentClass}>
            <SelectGroup>
              <SelectItem value="option1">usuario 1</SelectItem>
              <SelectItem value="option2">usuario 2</SelectItem>
              <SelectItem value="option3">usuario 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select name="ccost" value={select2Value} onValueChange={setSelect2Value}>
          <SelectTrigger className={selectTriggerClass}>
            <SelectValue placeholder="Centro de Costos" />
          </SelectTrigger>
          <SelectContent className={selectContentClass}>
            <SelectGroup>
              <SelectItem value="option1">Centro de costos 1</SelectItem>
              <SelectItem value="option2">Centro de costos 2</SelectItem>
              <SelectItem value="option3">Centro de costos 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select name="stored" value={select3Value} onValueChange={setSelect3Value}>
          <SelectTrigger className={selectTriggerClass}>
            <SelectValue placeholder="Almacén" />
          </SelectTrigger>
          <SelectContent className={selectContentClass}>
            <SelectGroup>
              <SelectItem value="option1">Almacen Norte</SelectItem>
              <SelectItem value="option2">Almacen Sur</SelectItem>
              <SelectItem value="option3">Almacen Este</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectsQuote;
