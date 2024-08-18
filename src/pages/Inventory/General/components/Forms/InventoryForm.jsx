import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InventoryForm = ({ data, setData }) => {
  const selectClasses =
    "border-gris2-transparent ml-4 w-full rounded-xl border border-none bg-grisBg font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones sm:w-96 lg:w-[500px] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSelectChange = (name, value) => {
    setData({
      ...data,
      [name]: value
    });
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-2">
      {/* Primera columna */}
      <div className="space-y-4">
        <h2 className="font-roboto text-[16px] text-gris2">Método de costeo</h2>
        <div className="flex items-center">
          <Label
            htmlFor="costeo"
            className="text-[14px] mb-1 mr-4 w-auto font-roboto text-gris2"
          >
            Método de Costeo
          </Label>
          <Select 
            name="costeo" 
            value={data.costeo} 
            onValueChange={(value) => handleSelectChange("costeo", value)}
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

      {/* Segunda columna */}
      <div className="space-y-4">
        <h2 className="font-roboto text-gris2">Nivel de inventario</h2>
        <div className="flex items-center">
          <Label
            htmlFor="minimo"
            className="text-[14px] mb-1 mr-4 w-auto font-roboto text-gris2"
          >
            Mínimo
          </Label>
          <Input
            type="text"
            name="minimo"
            value={data.minimo}
            onChange={handleChange}
            placeholder="Ingresa"
            className="border-gris2-transparent ml-4 w-full rounded-xl border border-none bg-grisBg font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones sm:w-96 lg:w-[500px]"
          />
        </div>

        <div className="flex items-center">
          <Label
            htmlFor="maximo"
            className="text-[14px] mb-1 mr-4 w-auto font-roboto text-gris2"
          >
            Máximo
          </Label>
          <Input
            type="text"
            name="maximo"
            value={data.maximo}
            onChange={handleChange}
            placeholder="Ingresa"
            className="border-gris2-transparent ml-4 w-full rounded-xl border border-none bg-grisBg font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones sm:w-96 lg:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default InventoryForm;