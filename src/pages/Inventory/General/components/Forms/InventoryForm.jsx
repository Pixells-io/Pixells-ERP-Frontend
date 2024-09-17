import React, { useState, useEffect } from "react";
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
  const [formData, setFormData] = useState({
    metodoValoracion: data.metodoValoracion || "",
    costo: data.costo || "",
    stockMinimo: data.stockMinimo || "",
    stockMaximo: data.stockMaximo || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    setData(formData);
  }, [formData, setData]);

  const inputClasses =
    "border-gris2-transparent rounded-xl border border-none bg-grisBg font-roboto text-gris2 placeholder:text-grisHeading focus-visible:ring-primarioBotones focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Primera columna */}
      <div className="space-y-4">
        <h2 className="font-roboto text-[16px] text-gris2 mb-4">Método de valoración</h2>
        <div className="grid grid-cols-2 items-center gap-y-4">
          <Label
            htmlFor="metodoValoracion"
            className="text-[14px] font-roboto text-gris2"
          >
            Método de Valoración
          </Label>
          <Select
            name="metodoValoracion"
            value={formData.metodoValoracion}
            onValueChange={(value) => handleSelectChange("metodoValoracion", value)}
          >
            <SelectTrigger className={inputClasses}>
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Medio Ponderado">Medio Ponderado</SelectItem>
              <SelectItem value="Coste Estándar">Coste Estándar</SelectItem>
              <SelectItem value="PEPS">PEPS</SelectItem>
              <SelectItem value="UEPS">UEPS</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 items-center gap-y-4">
          <Label htmlFor="costo" className="text-[14px] font-roboto text-gris2">
            Costo
          </Label>
          <Input
            id="costo"
            name="costo"
            type="number"
            value={formData.costo}
            onChange={handleChange}
            className={"w-full rounded-xl border-none bg-grisBg font-roboto text-xs font-light text-grisHeading placeholder:text-grisHeading focus:ring-2 focus:ring-primarioBotones focus:border-transparent"}
            readOnly
          />
        </div>
      </div>

      {/* Segunda columna */}
      <div className="space-y-4">
        <h2 className="font-roboto text-[16px] text-gris2 mb-4">Stock</h2>

        <div className="grid grid-cols-2 items-center gap-y-4">
          <Label htmlFor="stockMinimo" className="text-[14px] font-roboto text-gris2">
            Stock Mínimo
          </Label>
          <Input
            id="stockMinimo"
            name="stockMinimo"
            type="number"
            value={formData.stockMinimo}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div className="grid grid-cols-2 items-center gap-y-4">
          <Label htmlFor="stockMaximo" className="text-[14px] font-roboto text-gris2">
            Stock Máximo
          </Label>
          <Input
            id="stockMaximo"
            name="stockMaximo"
            type="number"
            value={formData.stockMaximo}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
      </div>
    </div>
  );
};

export default InventoryForm;
