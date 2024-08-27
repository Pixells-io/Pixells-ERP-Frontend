import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/**
 * SelectField with style in ring without
 * border and background gray
 */

function SelectField({ name, placeholder, options, value, onValueChange, disabled, defaultVal, required }) {
  // Handle value change
  const handleChange = (selectedValue) => {
    if (onValueChange) {
      onValueChange(selectedValue);
    }
  };

  return (
    <Select name={name} value={value} onValueChange={handleChange} disabled={disabled} defaultValue={defaultVal} required={required}>
      <SelectTrigger className="w-full rounded-xl border-none bg-grisBg font-roboto text-xs font-light text-grisHeading placeholder:text-grisHeading focus:ring-2 focus:ring-primarioBotones focus:border-transparent">
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
