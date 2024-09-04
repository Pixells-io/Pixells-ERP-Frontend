import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UnitMeasure from "./UnitMeasureModal";
import { Checkbox } from "@/components/ui/checkbox";


const Inputs = ({data}) => {
  const {categories,warehouses} = data;
  const [inputsData, setInputsData] = useState({
    codigoDeArticulo: "",
    nombreODescripcion: "",
    centroDeCostos: "",
    listaDePrecios: "",
    almacen: "",
    unidadesDeMedida: "",
    categoria: "",
    codigoDeBarras: "",
    precioUnitario: "",
    inventario: false,
    compra: false,
    venta: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputsData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setInputsData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (name, checked) => {
    setInputsData((prevData) => ({ ...prevData, [name]: checked }));
  };

  const handleUnitMeasureSelect = (value) => {
    setInputsData((prevData) => ({ ...prevData, unidadesDeMedida: value }));
  };

  const selectClasses =
    "w-full rounded-xl border border-gris2-transparent text-[14px] font-roboto text-[#8F8F8F] placeholder:text-[#44444F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  return (
    <div className="w-full rounded-xl bg-white p-4">
      <div className="flex flex-wrap gap-4">
        <div className="flex-grow">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Input
              type="text"
              className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
              placeholder="Código de Articulo"
              name="codigoDeArticulo"
              value={inputsData.codigoDeArticulo}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
              placeholder="Nombre o descripcion"
              name="nombreODescripcion"
              value={inputsData.nombreODescripcion}
              onChange={handleInputChange}
            />
            <Select
              name="centroDeCostos"
              value={inputsData.centroDeCostos}
              onValueChange={(value) =>
                handleSelectChange("centroDeCostos", value)
              }
            >
              <SelectTrigger className={selectClasses}>
                <SelectValue placeholder="Centro de costos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>

            <Select
              name="listaDePrecios"
              value={inputsData.listaDePrecios}
              onValueChange={(value) =>
                handleSelectChange("listaDePrecios", value)
              }
            >
              <SelectTrigger className={selectClasses}>
                <SelectValue placeholder="Lista de precios" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
            <Select
              name="almacen"
              value={inputsData.almacen}
              onValueChange={(value) => handleSelectChange("almacen", value)}
            >
              <SelectTrigger className={selectClasses}>
                <SelectValue placeholder="Almacén" />
              </SelectTrigger>
              <SelectContent>
              {warehouses.data.map((warehouse) => (
                <SelectItem key={warehouse.id} value={warehouse.id}>
                  {warehouse.name}
                </SelectItem>
              ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
              placeholder="Precio unitario"
              name="precioUnitario"
              min="0"
              step="0.1"
              value={inputsData.precioUnitario}
              onChange={handleInputChange}
            />
            <Select
              name="categoria"
              value={inputsData.categoria}
              onValueChange={(value) => handleSelectChange("categoria", value)}
            >
              <SelectTrigger className={selectClasses}>
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
              {categories.data.map((categories) => (
                <SelectItem key={categories.id} value={categories.id}>
                  {categories.name}
                </SelectItem>
              ))}
              </SelectContent>
            </Select>
            <Input
              className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
              placeholder="Código de barras"
              name="codigoDeBarras"
              value={inputsData.codigoDeBarras}
              onChange={handleInputChange}
            />
            <Input
              className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
              placeholder="Unidades de Medida"
              name="unidadDeMedida"
              value={inputsData.unidadesDeMedida}
              readOnly
            />
          </div>
        </div>

        <div className="ml-6 flex-shrink-0">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <Checkbox
                id="inventario"
                name="inventario"
                checked={inputsData.inventario}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("inventario", checked)
                }
                className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
              />
              <label
                htmlFor="inventario"
                className="ml-2 font-roboto text-[14px] text-gris2"
              >
                Inventario
              </label>
            </div>
            <div className="flex items-center">
              <Checkbox
                id="compra"
                name="compra"
                checked={inputsData.compra}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("compra", checked)
                }
                className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
              />
              <label
                htmlFor="compra"
                className="ml-2 font-roboto text-[14px] text-gris2"
              >
                Compra
              </label>
            </div>
            <div className="flex items-center">
              <Checkbox
                id="venta"
                name="venta"
                checked={inputsData.venta}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("venta", checked)
                }
                className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
              />
              <label
                htmlFor="venta"
                className="ml-2 font-roboto text-[14px] text-gris2"
              >
                Venta
              </label>
            </div>
            <div className="pl-0 ml-0 pt-4">
              <UnitMeasure
                onSelect={handleUnitMeasureSelect}
                initialValue={inputsData.unidadesDeMedida}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
