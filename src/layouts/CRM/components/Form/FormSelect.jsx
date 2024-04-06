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
      <SelectTrigger className="border-0 border-b-2 rounded-none focus:border-blue-500 bg-[#F6F6F6] !ring-0 !ring-offset-0 p-4 text-gris2">
        <SelectValue placeholder="Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Person</SelectItem>
        <SelectItem value="2">Corp</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default FormSelect;
