import React from "react";
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
import InputForm from "@/components/InputForm/InputForm";

const Inputs = ({ categories, warehouses, inputsData, setInputsData }) => {
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
    "h-[32px] w-full rounded-[10px] rounded-xl border border-[#D7D7D7] bg-inherit font-roboto text-sm font-light text-[#44444f] placeholder:text-[#44444f] focus:border-transparent focus:ring-2 focus:ring-primarioBotones";
  // "w-full rounded-xl border border-gris2-transparent text-[14px] font-roboto text-[#8F8F8F] placeholder:text-[#44444F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  return (
    <div className="w-full rounded-xl bg-white p-4">
      <div className="flex w-full flex-wrap gap-4">
        <div className="flex w-full flex-col gap-6">
          <div className="flex w-full gap-6">
            {/* Código de Artículo */}
            <InputForm
              type="text"
              placeholder="Código de Artículo"
              name="codigoDeArticulo"
              value={inputsData?.codigoDeArticulo || ""}
              onChange={handleInputChange}
            />

            {/* Nombre o Descripción */}
            <InputForm
              type="text"
              placeholder="Nombre o descripción"
              name="nombreODescripcion"
              value={inputsData?.nombreODescripcion || ""}
              onChange={handleInputChange}
            />
          </div>

          {/* Categoría */}
          <div className="flex flex-col">
            <p className="mb-1 text-[10px] font-normal text-grisText">
              Categoría
            </p>
            <Select
              name="categoria"
              value={inputsData?.categoria || ""}
              onValueChange={(value) => handleSelectChange("categoria", value)}
            >
              <SelectTrigger className={selectClasses}>
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                {Array.isArray(categories?.data) &&
                  categories?.data.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex w-full flex-col gap-3">
            <div className="border-b border-grisDisabled">
              <p className="px-4 py-2 text-[10px] text-grisSubText">
                TIPO DE ARTÍCULO
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              {/* Checkbox Inventario */}
              <div className="flex border-b border-grisDisabled">
                <div className="flex items-center px-4 py-2">
                  <Checkbox
                    id="inventario"
                    name="inventario"
                    checked={inputsData?.inventario || false}
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
              </div>

              {/* Checkbox Compra */}
              <div className="flex border-b border-grisDisabled">
                <div className="flex items-center px-4 py-2">
                  <Checkbox
                    id="compra"
                    name="compra"
                    checked={inputsData?.compra || false}
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
              </div>

              {/* Checkbox Venta */}
              <div className="flex border-b border-grisDisabled">
                <div className="flex items-center px-4 py-2">
                  <Checkbox
                    id="venta"
                    name="venta"
                    checked={inputsData?.venta || false}
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
              </div>
            </div>
          </div>

          {/* Precio unitario */}
          <InputForm
            type="number"
            placeholder="Precio unitario"
            name="precio"
            min="0"
            step="0.1"
            value={inputsData?.precio || ""}
            onChange={handleInputChange}
          />

          <div className="flex">
            {/* Unidades de Medida */}
            <InputForm
              placeholder="Unidades de Medida"
              name="unidadesDeMedida"
              value={inputsData?.unidadesDeMedida || ""}
              readOnly
            />
            {/* Unidades de Medida Modal */}
            <div className="ml-0 pl-0 pt-4">
              <UnitMeasure
                onSelect={handleUnitMeasureSelect}
                initialValue={inputsData?.unidadesDeMedida || ""}
              />
            </div>
          </div>

          {/* Centro de Costos */}
          <div className="flex flex-col">
            <p className="mb-1 text-[10px] font-normal text-grisText">
              Centro de Costos
            </p>
            <Select
              name="centroDeCostos"
              value={inputsData?.centroDeCostos || ""}
              onValueChange={(value) =>
                handleSelectChange("centroDeCostos", value)
              }
            >
              <SelectTrigger className={selectClasses}>
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Lista de Precios */}
          <div className="flex flex-col">
            <p className="mb-1 text-[10px] font-normal text-grisText">
              Lista de Precios
            </p>
            <Select
              name="listaDePrecios"
              value={inputsData?.listaDePrecios || ""}
              onValueChange={(value) =>
                handleSelectChange("listaDePrecios", value)
              }
            >
              <SelectTrigger className={selectClasses}>
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Almacén */}
          <div className="flex flex-col">
            <p className="mb-1 text-[10px] font-normal text-grisText">
              Almacén
            </p>
            <Select
              name="almacen"
              value={inputsData?.almacen || ""}
              onValueChange={(value) => handleSelectChange("almacen", value)}
            >
              <SelectTrigger className={selectClasses}>
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                {Array.isArray(warehouses?.data) &&
                  warehouses?.data.map((warehouse) => (
                    <SelectItem key={warehouse?.id} value={warehouse?.id}>
                      {warehouse?.name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>

          {/* Código de Barras */}
          <InputForm
            placeholder="Código de barras"
            name="codigoDeBarras"
            value={inputsData?.codigoDeBarras || ""}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Inputs;
