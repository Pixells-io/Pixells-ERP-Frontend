import React from "react";
import { Input } from "@/components/ui/input";

/**
 * Using input with style in ring 
 * 
 *
 * @returns Input
 */

const InputField = ({
  type,
  name,
  value,
  readOnly,
  placeholder,
}) => (
  <div > 
    <Input
      type={type}
      name={name}
      value={value}
      readOnly={readOnly}
      placeholder={placeholder}
      className="rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones"
    />
  </div>
);

export default InputField;
