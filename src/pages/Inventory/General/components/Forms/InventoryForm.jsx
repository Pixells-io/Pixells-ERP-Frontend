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
    "border-gris2-transparent rounded-xl border border-none bg-grisBg font-roboto text-gris2 placeholder:text-grisHeading focus-visible:ring-primarioBotones focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

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
    <div className="grid grid-cols-2 gap-6">
      {/* Primera columna */}
      <div className="space-y-4">
        <h2 className="font-roboto text-[16px] text-gris2 mb-4">Método de valoración</h2>
        <div className="grid grid-cols-2 items-center gap-y-4">
          <Label
            htmlFor="costeo"
            className="text-[14px] font-roboto text-gris2"
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
              <SelectItem value="Medio Ponderado">Medio Ponderado</SelectItem>
              <SelectItem value="Coste Estandar">Coste Estándar</SelectItem>
              <SelectItem value="PEPS">PEPS</SelectItem>
              <SelectItem value="Lote/Serie">Lote/Serie</SelectItem>
            </SelectContent>
          </Select>
          <Label
            htmlFor="costo"
            className="text-[14px] font-roboto text-gris2"
          >
            Costo
          </Label>
          <Input
            type="text"
            name="costo"
            value={data.costo}
            onChange={handleChange}
            className={`${inputClasses} bg-[#E0E0E0]`}
            readOnly
          />
        </div>
      </div>

      {/* Segunda columna */}
      <div className="w-40 space-y-4">
        <h2 className="font-roboto text-gris2 mb-4">Nivel de inventario</h2>
        <div className="grid grid-cols-2 items-center gap-y-2">
          <Label
            htmlFor="minimo"
            className="text-[14px] font-roboto text-gris2"
          >
            Mínimo
          </Label>
          <Input
            type="text"
            name="minimo"
            value={data.minimo}
            onChange={handleChange}
            placeholder="Ingresa"
            className={`${inputClasses} w-[200px] mt-1`}
          />
          <Label
            htmlFor="maximo"
            className="text-[14px] font-roboto text-gris2 mt-1"
          >
            Máximo
          </Label>
          <Input
            type="text"
            name="maximo"
            value={data.maximo}
            onChange={handleChange}
            placeholder="Ingresa"
            className={`${inputClasses} w-[200px] mt-1`}
          />
        </div>
      </div>
    </div>
  );
};

export default InventoryForm;