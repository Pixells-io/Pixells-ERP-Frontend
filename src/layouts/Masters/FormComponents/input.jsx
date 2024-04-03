import * as React from "react";
import { Input } from "@/components/ui/input";

function InputRouter({ type, name, placeholder }) {
  return (
    <Input
      type={type}
      className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-full"
      name={name}
      placeholder={placeholder}
    />
  );
}

export default InputRouter;
