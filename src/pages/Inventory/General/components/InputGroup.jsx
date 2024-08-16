import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const Inputs = () => {
  const [inputsData, setInputsData] = useState({
    codigoDeArticulo: '',
    nombreODescripcion: '',
    centroDeCostos: '',
    listaDePrecios: '',
    almacen: '',
    unidadesDeMedida: '',
    categoria: '',
    codigoDeBarras: '',
    precioUnitario: '',
    inventario: false,
    compra: false,
    venta: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputsData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setInputsData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (name, checked) => {
    setInputsData(prevData => ({ ...prevData, [name]: checked }));
  };

  const selectClasses = "w-full rounded-xl border border-gris2-transparent text-xs font-light text-grisSubText placeholder:text-grisHeading focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  return (
    <div className="bg-white rounded-xl p-4 w-full">
      <div className="flex flex-wrap gap-4">
        <div className="flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              type="text"
              className="w-full rounded-xl border border-gris2-transparent font-roboto text-xs font-light text-grisSubText placeholder:text-grisHeading focus-visible:ring-primarioBotones"
              placeholder="Código de Articulo"
              name="codigoDeArticulo"
              value={inputsData.codigoDeArticulo}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              className="w-full rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones"
              placeholder="Nombre o descripcion"
              name="nombreODescripcion"
              value={inputsData.nombreODescripcion}
              onChange={handleInputChange}
            />
            <Select 
              name="centroDeCostos" 
              value={inputsData.centroDeCostos}
              onValueChange={(value) => handleSelectChange("centroDeCostos", value)}
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
              onValueChange={(value) => handleSelectChange("listaDePrecios", value)}
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
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
            <Select 
              name="unidadesDeMedida"
              value={inputsData.unidadesDeMedida}
              onValueChange={(value) => handleSelectChange("unidadesDeMedida", value)}
            >
              <SelectTrigger className={selectClasses}>
                <SelectValue placeholder="Unidades de medida" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>

            <Select 
              name="categoria"
              value={inputsData.categoria}
              onValueChange={(value) => handleSelectChange("categoria", value)}
            >
              <SelectTrigger className={selectClasses}>
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
            <Input
              className="w-full rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones"
              placeholder="Código de barras"
              name="codigoDeBarras"
              value={inputsData.codigoDeBarras}
              onChange={handleInputChange}
            />
            <Input
              className="w-full rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones"
              placeholder="Precio unitario"
              name="precioUnitario"
              value={inputsData.precioUnitario}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex-shrink-0 ml-6">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <Checkbox
                id="inventario"
                name="inventario"
                checked={inputsData.inventario}
                onCheckedChange={(checked) => handleCheckboxChange("inventario", checked)}
                className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
              />
              <label htmlFor="inventario" className="ml-2 text-sm font-roboto text-gris2">Inventario</label>
            </div>
            <div className="flex items-center">
              <Checkbox
                id="compra"
                name="compra"
                checked={inputsData.compra}
                onCheckedChange={(checked) => handleCheckboxChange("compra", checked)}
                className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
              />
              <label htmlFor="compra" className="ml-2 text-sm font-roboto text-gris2">Compra</label>
            </div>
            <div className="flex items-center">
              <Checkbox
                id="venta"
                name="venta"
                checked={inputsData.venta}
                onCheckedChange={(checked) => handleCheckboxChange("venta", checked)}
                className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
              />
              <label htmlFor="venta" className="ml-2 text-sm font-roboto text-gris2">Venta</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
