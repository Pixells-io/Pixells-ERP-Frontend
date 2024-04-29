import React from "react";
import { Input } from "@/components/ui/input";

function FormInput({ name, type, placeholder, value, onChange, ...props }) {
  return (
    <Input
      value={value}
      onChange={onChange}
      name={name}
      type={type}
      placeholder={placeholder}
      className="border-0 border-b border-grisSubText focus:border-primarioBotones focus:border-b-2 rounded-none bg-transparent !ring-0 !ring-offset-0"
      {...props}
    />
  );
}

export default FormInput;
