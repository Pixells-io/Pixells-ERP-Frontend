import React from "react";
import { Input } from "@/components/ui/input";

function FormInput({ name, type, placeholder }) {
  return (
    <Input
      name={name}
      type={type}
      placeholder={placeholder}
      className="border-0 border-b border-grisSubText focus:border-primarioBotones focus:border-b rounded-none bg-transparent !ring-0 !ring-offset-0"
    />
  );
}

export default FormInput;
