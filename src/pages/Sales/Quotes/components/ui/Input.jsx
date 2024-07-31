import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Using input for id document
 * Label: no document
 * onChange: change in id document or another value
 *
 * @returns Input
 */

const InputField = ({
  label,
  id,
  value,
  onChange,
  readOnly = false,
  placeholder,
}) => (
  <div className="flex flex-col">
    <Label htmlFor={id} className="mb-1 font-roboto text-sm text-grisText">
      {label}
    </Label>
    <Input
      id={id}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      placeholder={placeholder}
      className="border-gris-transparent w-full rounded border placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones"
    />
  </div>
);

export default InputField;
