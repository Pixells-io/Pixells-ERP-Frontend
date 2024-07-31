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

  const SelectItemClass = "w-1/4 rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones";

  return (
    <div className="rounded-xl bg-white p-4">
      <div className="flex space-x-3 justify-center items-center">
        <Input 
          className={SelectItemClass}
          placeholder="Ingrese texto"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        
        <Select value={select1Value} onValueChange={setSelect1Value}>
          <SelectTrigger className={SelectItemClass}>
            <SelectValue placeholder="Select 1" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select 1</SelectLabel>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
              <SelectItem value="option4">Option 4</SelectItem>
              <SelectItem value="option5">Option 5</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select value={select2Value} onValueChange={setSelect2Value}>
          <SelectTrigger className={SelectItemClass}>
            <SelectValue placeholder="Select 2" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select 2</SelectLabel>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
              <SelectItem value="option4">Option 4</SelectItem>
              <SelectItem value="option5">Option 5</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select value={select3Value} onValueChange={setSelect3Value}>
          <SelectTrigger className={SelectItemClass}>
            <SelectValue placeholder="Select 3" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select 3</SelectLabel>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
              <SelectItem value="option4">Option 4</SelectItem>
              <SelectItem value="option5">Option 5</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectsQuote;