import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectRouter({ options, name, placeholder }) {
  return (
    <Select name={name}>
      <SelectTrigger className="bg-transparent focus:border-primarioBotones w-full text-xs font-roboto !ring-0 !ring-offset-0 text-grisSubText font-light border-0 border-b rounded-none m-4 border-gris2">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option, i) => (
          <SelectItem key={i} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SelectRouter;
