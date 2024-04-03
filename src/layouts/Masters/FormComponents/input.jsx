import * as React from "react";
import { Input } from "@/components/ui/input";

function InputRouter({ type, name, placeholder }) {
  return (
    <Input
      type={type}
      className="bg-transparent w-full text-xs font-roboto text-grisSubText !ring-0 !ring-offset-0 font-light border-0 border-b rounded-none m-4 border-gris2"
      name={name}
      placeholder={placeholder}
    />
  );
}

export default InputRouter;
