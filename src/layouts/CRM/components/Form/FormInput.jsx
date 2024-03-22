import React from "react";
import { Input } from "@/components/ui/input";

function FormInput({ name, type, placeholder }) {
  return (
    <Input
      name={name}
      type={type}
      placeholder={placeholder}
      className="border-0 border-b-2 focus:border-primarioBotones rounded-none bg-gris2 !ring-0 !ring-offset-0"
    />
  );
}

export default FormInput;
