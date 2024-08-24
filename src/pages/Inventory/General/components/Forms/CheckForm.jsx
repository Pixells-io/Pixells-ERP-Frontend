import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const CheckForm = ({ data, setData }) => {
  const selectClasses =
    "border-gris2-transparent ml-4 w-[50px] rounded-xl border border-none bg-grisBg font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones sm:w-96 lg:w-[500px] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  const handleSelectChange = (name, value) => {
    setData({
      ...data,
      [name]: value
    });
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Primera columna */}
      <div className="space-y-4">
        <div className="flex items-center">
          <Label
            htmlFor="proveedor"
            className="text-[14px] mb-1 mr-4 w-50 font-roboto text-gris2"
          >
            Proveedor predeterminado
          </Label>
          <Select 
            name="proveedor" 
            value={data.proveedor}
            onValueChange={(value) => handleSelectChange("proveedor", value)}
          >
            <SelectTrigger className={selectClasses}>
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default CheckForm;