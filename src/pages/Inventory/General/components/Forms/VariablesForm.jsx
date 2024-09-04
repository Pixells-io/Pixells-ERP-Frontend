import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const VariableForm = () => {
  const selectClasses =
    "border-gris2-transparent ml-4 w-[50px] rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones sm:w-96 lg:w-[500px] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  const handleSelectChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Primera columna */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Select name="proveedor">
            <SelectTrigger className={selectClasses}>
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Producto Simple</SelectItem>
            </SelectContent>
          </Select>
          <Button
            className={"rounded-full bg-[#5B89FF] px-5 py-4 hover:bg-[#5B89FF]"}
          >
            Agregar
          </Button>
        </div>
        <div className="pl-2 pt-4 pb-4 flex w-[550px] border-[#D7D7D7] border-b">
            MODEL
        </div>
        <div className="pl-2 pt-4 pb-4 flex w-[550px] border-[#D7D7D7] border-b">
            MODEL
        </div>
        <div className="pl-2 pt-4 pb-4 flex w-[550px] border-[#D7D7D7] border-b">
            MODEL
        </div> 
      </div>
    </div>
  );
};

export default VariableForm;
