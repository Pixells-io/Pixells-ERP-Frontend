import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StyleSelect = "w-full rounded-xl border border-transparent bg-grisBg placeholder:text-grisHeading placeholder:text-xs text-grisSubText focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

function SelectField({ name, placeholder, options, value, onValueChange, isDisabled }) {
  // Manejar el cambio internamente
  const handleChange = (selectedValue) => {
    if (onValueChange) {
      onValueChange(selectedValue);
    }
  };

  return (
    <Select
      name={name}
      value={value}
      onValueChange={handleChange}
      disabled={isDisabled}
    >
      <SelectTrigger className={StyleSelect}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SelectField;

