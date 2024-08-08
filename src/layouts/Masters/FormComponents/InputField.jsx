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
  name,
  value,
  readOnly,
  placeholder,
}) => (
  <div > 
    <Input
      name={name}
      value={value}
      readOnly={readOnly}
      placeholder={placeholder}
      className="rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones"
    />
  </div>
);

export default InputField;
