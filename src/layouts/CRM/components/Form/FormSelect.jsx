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
      <SelectTrigger className="rounded-none border-0 border-b-2 bg-[#F6F6F6] p-4 text-gris2 !ring-0 !ring-offset-0 focus:border-blue-500">
        <SelectValue placeholder="Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Individual</SelectItem>
        <SelectItem value="2">Business</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default FormSelect;
