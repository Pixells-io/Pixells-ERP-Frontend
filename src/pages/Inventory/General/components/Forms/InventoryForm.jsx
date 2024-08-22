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
  const inputClasses =
    "border-gris2-transparent ml-4 w-full rounded-xl border border-none bg-grisBg font-roboto text-gris2 placeholder:text-grisHeading focus-visible:ring-primarioBotones focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

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
    <div className="grid grid-cols-2 gap-4 space-x-6">
      {/* Primera columna */}
      <div className="w-[420px] space-y-4">
        <h2 className="font-roboto text-[16px] text-gris2">Método de valoración</h2>
        <div className="flex items-center">
          <Label
            htmlFor="costeo"
            className="text-[14px] mb-1 mr-4 w-32 font-roboto text-gris2"
          >
            Método de Valoración
          </Label>
          <Select 
            name="costeo" 
            value={data.costeo} 
            onValueChange={(value) => handleSelectChange("costeo", value)}
          >
            <SelectTrigger className={inputClasses}>
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Medio Ponderado</SelectItem>
              <SelectItem value="option2">Coste Estándar</SelectItem>
              <SelectItem value="option3">PEPS</SelectItem>
              <SelectItem value="option4">Lote/Serie</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center">
          <Label
            htmlFor="costo"
            className="text-[14px] mb-1 mr-4 w-32 font-roboto text-gris2"
          >
            Costo
          </Label>
          <Input
            type="text"
            name="costo"
            value={data.costo}
            onChange={handleChange}
            placeholder="Ingresa"
            className={`${inputClasses} bg-[#E0E0E0]`}
            readOnly
          />
        </div>
      </div>

      {/* Segunda columna */}
      <div className="w-[420px] space-y-4">
        <h2 className="font-roboto text-gris2">Nivel de inventario</h2>
        <div className="flex items-center">
          <Label
            htmlFor="minimo"
            className="text-[14px] mb-1 mr-4 w-32 font-roboto text-gris2"
          >
            Mínimo
          </Label>
          <Input
            type="text"
            name="minimo"
            value={data.minimo}
            onChange={handleChange}
            placeholder="Ingresa"
            className={inputClasses}
          />
        </div>

        <div className="flex items-center">
          <Label
            htmlFor="maximo"
            className="text-[14px] mb-1 mr-4 w-32 font-roboto text-gris2"
          >
            Máximo
          </Label>
          <Input
            type="text"
            name="maximo"
            value={data.maximo}
            onChange={handleChange}
            placeholder="Ingresa"
            className={inputClasses}
          />
        </div>
      </div>
    </div>
  );
};

export default InventoryForm;