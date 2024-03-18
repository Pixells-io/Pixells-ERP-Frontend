import React from "react";
import { Input } from "@/components/ui/input";

function FormInput({ name, type, placeholder }) {
  return (
    <Input
      name={name}
      type={type}
      placeholder={placeholder}
      className="border-0 border-b-2 focus:border-blue-500 rounded-none bg-[#F6F6F6] !ring-0 !ring-offset-0"
    />
  );
}

export default FormInput;
