import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const GralFormSupplier = ({ generalData, setGeneralData }) => {
  const handleInputChange = (e) => {
    setGeneralData({ ...generalData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value, name) => {
    setGeneralData({ ...generalData, [name]: value });
  };

  const handleCheckboxChange = (name) => {
    setGeneralData({ ...generalData, [name]: !generalData[name] });
  };

  const inputClass =
    "rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones border-none bg-grisBg";
  const selectClass =
    "rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones border-none bg-grisBg";

  return (
    <div className="flex justify-between">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Label htmlFor="calle" className="w-32">
              Calle:
            </Label>
            <Input
              name="calle"
              className={inputClass}
              placeholder="Ingresa"
              value={generalData.calle}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Label htmlFor="colonia" className="w-32">
              Colonia:
            </Label>
            <Input
              name="colonia"
              className={inputClass}
              placeholder="Ingresa"
              value={generalData.colonia}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Label htmlFor="estado" className="w-32">
              Estado:
            </Label>
            <Input
              name="estado"
              className={inputClass}
              placeholder="Ingresa"
              value={generalData.estado}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Label htmlFor="encargadoCompras" className="w-32">
              Encargado de Compras:
            </Label>
            <Select
              onValueChange={(value) =>
                handleSelectChange(value, "encargadoCompras")
              }
            >
              <SelectTrigger
                name="encargadoCompras"
                className={selectClass}
              >
                <SelectValue placeholder="Selecciona" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="juan">Juan Pérez</SelectItem>
                <SelectItem value="maria">María Gómez</SelectItem>
                <SelectItem value="carlos">Carlos Rodríguez</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-start space-x-4">
            <Checkbox
              name="activo"
              checked={generalData.activo}
              className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
              onCheckedChange={() => handleCheckboxChange("activo")}
            />
            <Label htmlFor="activo" className="w-32">
              Activo
            </Label>
          </div>
          <div className="flex items-center space-x-4">
            <Checkbox
              name="inactivo"
              checked={generalData.inactivo}
              className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
              onCheckedChange={() => handleCheckboxChange("inactivo")}
            />
            <Label htmlFor="inactivo" className="w-32">
              Inactivo
            </Label>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Label htmlFor="numeroInterno" className="w-32">
              Número Interno:
            </Label>
            <Input
              name="numeroInterno"
              className={inputClass}
              placeholder="Ingresa"
              value={generalData.numeroInterno}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Label htmlFor="codigoPostal" className="w-32">
              Código Postal:
            </Label>
            <Input
              name="codigoPostal"
              className={inputClass}
              placeholder="Ingresa"
              value={generalData.codigoPostal}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Label htmlFor="pais" className="w-32">
              País:
            </Label>
            <Input
              name="pais"
              className={inputClass}
              placeholder="Ingresa"
              value={generalData.pais}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Label htmlFor="comentarios" className="w-32">
              Comentarios:
            </Label>
            <Textarea
              name="comentarios"
              className={inputClass}
              placeholder="Ingresa"
              value={generalData.comentarios}
              onChange={handleInputChange}
              rows={4}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 space-x-12">
            <div className="flex items-center space-x-4">
              <Label htmlFor="desde" className="w-16">
                Desde:
              </Label>
              <Input
                type="date"
                name="desde"
                id="desde"
                className={inputClass}
                placeholder="Ingresa"
                value={generalData.desde}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center space-x-4">
              <Label htmlFor="hasta" className="w-16">
                Hasta:
              </Label>
              <Input
                type="date"
                name="hasta"
                id="hasta"
                className={inputClass}
                placeholder="Ingresa"
                value={generalData.hasta}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="ml-4 flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <Label htmlFor="numeroExterior" className="w-32">
            Número Exterior:
          </Label>
          <Input
            name="numeroExterior"
            className={inputClass}
            placeholder="Ingresa"
            value={generalData.numeroExterior}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center space-x-4">
          <Label htmlFor="ciudad" className="w-32">
            Ciudad:
          </Label>
          <Input
            name="ciudad"
            className={inputClass}
            placeholder="Ingresa"
            value={generalData.ciudad}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default GralFormSupplier;
