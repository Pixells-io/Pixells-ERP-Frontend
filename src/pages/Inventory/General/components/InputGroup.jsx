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

  const selectClasses = "w-full rounded-xl border border-gris2-transparent placeholder:text-grisHeading focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  return (
    <div className="flex justify-center items-start w-full">
      <div className="w-full max-w-7xl bg-white rounded-xl p-6">
        <div className="flex flex-col md:flex-row justify-stretch space-y-6 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-75 grid grid-cols-1 md:grid-cols-3 gap-4 font-roboto">
            <Input
              type="text"
              className="w-full rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones"
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
          <div className="w-full md:w-1/4 flex justify-center md:justify-start">
            <div className="flex flex-row space-x-4">
              <div className="flex flex-col space-y-4">
                <label htmlFor="inventario" className="text-sm font-roboto text-gris2">Inventario</label>
                <label htmlFor="compra" className="text-sm font-roboto text-gris2">Compra</label>
                <label htmlFor="venta" className="text-sm font-roboto text-gris2">Venta</label>
              </div>
              <div className="flex flex-col space-y-4">
                <Checkbox
                  id="inventario"
                  name="inventario"
                  checked={inputsData.inventario}
                  onCheckedChange={(checked) => handleCheckboxChange("inventario", checked)}
                  className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
                />
                <Checkbox
                  id="compra"
                  name="compra"
                  checked={inputsData.compra}
                  onCheckedChange={(checked) => handleCheckboxChange("compra", checked)}
                  className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
                />
                <Checkbox
                  id="venta"
                  name="venta"
                  checked={inputsData.venta}
                  onCheckedChange={(checked) => handleCheckboxChange("venta", checked)}
                  className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inputs;