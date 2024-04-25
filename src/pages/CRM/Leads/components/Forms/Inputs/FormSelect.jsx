import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function FormSelect() {
  return (
    <Select name="type">
      <SelectTrigger className="border-0 border-b-2 rounded-none aria-[expanded=true]:border-b-2 aria-[expanded=true]:border-primario focus:border-primario !ring-0 !ring-offset-0 p-4 text-gris2">
        <SelectValue
          placeholder="Channel of meet"
          className="text-grisText placeholder:font-light placeholder:text-grisSubText placeholder:text-[10px]"
        />
      </SelectTrigger>
      <SelectContent className="shadow-none">
        <SelectItem
          value="1"
          className="focus:bg-blancoBox2 text-grisText font-medium text-sm"
        >
          Facebook
        </SelectItem>
        <SelectItem
          className="focus:bg-blancoBox2 text-grisText font-medium text-sm"
          value="2"
        >
          Instagram
        </SelectItem>
        <SelectItem
          className="focus:bg-blancoBox2 text-grisText font-medium text-sm"
          value="3"
        >
          WhatsApp
        </SelectItem>
        <SelectItem
          className="focus:bg-blancoBox2 text-grisText font-medium text-sm"
          value="4"
        >
          Google
        </SelectItem>
        <SelectItem
          className="focus:bg-blancoBox2 text-grisText font-medium text-sm"
          value="5"
        >
          Recomendation
        </SelectItem>
        <SelectItem
          className="focus:bg-blancoBox2 text-grisText font-medium text-sm"
          value="6"
        >
          Face to Face
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export default FormSelect;
