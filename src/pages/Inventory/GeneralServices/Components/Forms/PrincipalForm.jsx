import React, { useState } from "react";
import { Form } from "react-router-dom";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import UnitMeasureButton from "../UnitMeasure";
import { Checkbox } from "@/components/ui/checkbox";
import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { closeCircle } from "ionicons/icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const PrincipalForm = ({ whareHouses, costCenter, priceList }) => {
  const [inputsData, setInputsData] = useState({
    codigoDeArticulo: "",
    nombreODescripcion: "",
    categoria: "",
    compra: false,
    venta: false,
    unidadesDeMedida: "",
    precio: "",
    centroDeCostos: "",
    listaDePrecios: "",
    almacen: "",
    codigoDeBarras: "",
    color: "#FF00FF", // Default color
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setInputsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name, checked) => {
    setInputsData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };
  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setInputsData((prevData) => ({ ...prevData, color: newColor }));
  };

  const handleUnitMeasureSelect = (value) => {
    setInputsData((prevData) => ({ ...prevData, unidadesDeMedida: value }));
  };
  const [isColorPopoverOpen, setIsColorPopoverOpen] = useState(false);

  const handleClosePopover = () => {
    setIsColorPopoverOpen(false);
  };

  return (
    <Form
      className="flex h-full w-full flex-col py-4"
      action={``}
      method="post"
    >
      <div className="lg:max-h-[485px] md:max-h-[205px] overflow-auto px-6">
        <h2 className="font-poppins text-sm font-medium text-[#44444F]">
          PRINCIPAL
        </h2>
        <div className="mt-8 grid w-full grid-cols-12 gap-x-8 gap-y-6">
          <div className="col-span-4">
            {/* Código de Artículo */}
            <InputForm
              type="text"
              placeholder="Código de Servicio"
              name="codigoDeArticulo"
              value={inputsData?.codigoDeArticulo || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-8">
            {/* Nombre o Descripción */}
            <InputForm
              type="text"
              placeholder="Nombre o descripción"
              name="nombreODescripcion"
              value={inputsData?.nombreODescripcion || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="col-span-12">
            <SelectRouter
              name="name"
              type="text"
              placeholder={"Categoria"}
              value={inputsData?.categoria}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-12">
            <div className="border-b border-grisDisabled">
              <p className="px-4 py-2 text-[10px] text-grisSubText">
                TIPO DE SERVICIO
              </p>
            </div>
            <div className="flex flex-col space-y-4">
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
          <div className="col-span-12">
            <InputForm
              type="number"
              placeholder="Precio unitario"
              name="precio"
              min="0"
              step="0.1"
              value={inputsData?.precio || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-10">
            {/* Unidades de Medida */}
            <InputForm
              placeholder="Unidades de Medida"
              name="unidadesDeMedida"
              value={inputsData?.unidadesDeMedida || ""}
              onChange={handleInputChange} // Added onChange handler for consistency
              readOnly
            />
          </div>
          <div className="col-span-2 pt-4">
            {/* Unidades de Medida Modal */}
            <UnitMeasureButton
              onSelect={handleUnitMeasureSelect}
              initialValue={inputsData?.unidadesDeMedida || ""}
            />
          </div>
          <div className="col-span-12">
            <SelectRouter
              name="name"
              type="text"
              placeholder={"Centro de Costos"}
              value={inputsData?.categoria}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-12">
            <SelectRouter
              name="name"
              type="text"
              placeholder={"Lista de precios"}
              value={inputsData?.categoria}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-12">
            <SelectRouter
              name="name"
              type="text"
              placeholder={"Almacén"}
              value={inputsData?.categoria}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-12">
            <InputForm
              placeholder="Codigo de barras"
              name="unidadesDeMedida"
              readOnly
            />
          </div>
          <div className="col-span-12">
            <p className="px-4 py-2 text-[10px] text-grisSubText">COLOR</p>
          </div>
          <div className="col-span-12 flex items-center border-b border-t">
            <div
              className="ml-4 mr-4 size-[20px] rounded-[6px]"
              style={{ backgroundColor: inputsData?.color || "#FF00FF" }}
            ></div>
            <div className="flex flex-1 items-end justify-end pt-4">
              <Popover
                open={isColorPopoverOpen}
                onOpenChange={setIsColorPopoverOpen}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={
                      "mb-4 flex justify-end rounded-[10px] bg-[#E0E0E0] text-[#44444F] hover:bg-[#E0E0E0]"
                    }
                  >
                    Selecciona
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Escoge un color</div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleClosePopover}
                        className="absolute right-2 top-2"
                      >
                        <IonIcon icon={closeCircle} className="h-4 w-4" />
                      </Button>
                    </div>
                    <input
                      type="color"
                      name="color"
                      value={inputsData?.color || "#FF00FF"}
                      onChange={handleColorChange}
                      className="h-8 w-full"
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex w-full flex-1 items-end px-6">
        <div className="flex w-full justify-between">
          <label className="text-xs font-light text-[#8F8F8F]">
            Actualizado 07 septiembre 2024
          </label>
          <Button
            className="h-[31px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default PrincipalForm;
