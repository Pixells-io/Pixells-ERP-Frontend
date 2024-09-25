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
import InputForm from "@/components/InputForm/InputForm";

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
    "h-[32px] w-full rounded-[10px] rounded-xl border border-[#D7D7D7] bg-inherit font-roboto text-sm font-light text-[#44444f] placeholder:text-[#44444f] focus:border-transparent focus:ring-2 focus:ring-primarioBotones";

  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Primera columna */}
      <div className="space-y-4">
        <h2 className="mb-4 font-roboto text-[16px] text-gris2">
          Método de valoración
        </h2>

        <div className="flex flex-col">
          <p className="mb-1 text-[10px] font-normal text-grisText">
            Agregar Método
          </p>
          <Select
            name="metodoValoracion"
            value={formData.metodoValoracion}
            onValueChange={(value) =>
              handleSelectChange("metodoValoracion", value)
            }
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

        <InputForm
          name="costo"
          type="number"
          placeholder="Costo"
          value={formData.costo}
          onChange={handleChange}
          className={
            "w-full rounded-xl border-none bg-grisBg font-roboto text-xs font-light text-grisHeading placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones"
          }
          readOnly
        />
      </div>

      {/* Segunda columna */}
      <div className="space-y-4">
        <h2 className="mb-4 font-roboto text-[16px] text-grisSubText">
          NIVEL DE INVENTARIO
        </h2>

        <div className="flex w-full gap-4">
          <InputForm
            id="stockMinimo"
            name="stockMinimo"
            type="number"
            value={formData.stockMinimo}
            onChange={handleChange}
            placeholder="Mínimo"
          />

          <InputForm
            id="stockMaximo"
            name="stockMaximo"
            type="number"
            value={formData.stockMaximo}
            onChange={handleChange}
            placeholder="Máximo"
          />
        </div>
      </div>
    </div>
  );
};

export default InventoryForm;
