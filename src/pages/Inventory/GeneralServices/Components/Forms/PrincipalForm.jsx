import React, { useState } from "react";
import { Form, useNavigation } from "react-router-dom";
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

const PrincipalForm = ({categories, costCenter, priceList }) => {
  const navigation = useNavigation();

  const [selectedColor, setSelectedColor] = useState("#FF00FF"); 
  const [isColorPopoverOpen, setIsColorPopoverOpen] = useState(false);
  const handleClosePopover = () => {
    setIsColorPopoverOpen(false);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <Form
      className="flex h-full w-full flex-col py-4"
      action={`/inventory/general-services/service/new`}
      method="post"
    >
      <div className="max-h-screen overflow-auto px-6">
        <h2 className="font-poppins text-sm font-medium text-[#44444F]">
          PRINCIPAL
        </h2>
        <div className="mt-8 grid w-full grid-cols-12 gap-x-8 gap-y-6">
          <div className="col-span-4">
            {/* Código de Servicio */}
            <InputForm
              type="text"
              className="border-[#D7586B]"
              placeholder="Código de Servicio"
              name="code"
            />
          </div>
          <div className="col-span-8">
            {/* Nombre o Descripción */}
            <InputForm
              className="border-[#D7586B]"
              name="description"
              type="text"
              placeholder={"Nombre o Descripción"}
              required={true}
            />
          </div>

          <div className="col-span-12">
          <SelectRouter
              name={"categories_id"}
              options={categories}
              placeholder="Categorias"
              required={true}
              getOptionValue={(e) => e.id}
              getOptionLabel={(e) => e.name}
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
                    id="shopping"
                    name="shopping"
                    className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
                  />
                  <label
                    htmlFor="shopping"
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
                    id="sale"
                    name="sale"
                    className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
                  />
                  <label
                    htmlFor="sale"
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
              name="price"
              min="0"
              step="0.1"
              className="border-[#D7586B]"
            />
          </div>

          <div className="col-span-12">
            <SelectRouter
              name={"cost_center_id"}
              options={costCenter}
              placeholder="Centro de Costos"
              required={true}
              getOptionValue={(e) => e.id}
              getOptionLabel={(e) => e.name}
            />
          </div>
          <div className="col-span-12">
            <SelectRouter
              name={"price_list_id"}
              options={priceList}
              placeholder="Lista de Precios"
              required={true}
              getOptionValue={(e) => e.id}
              getOptionLabel={(e) => e.name}
            />
          </div>

          <div className="col-span-12">
            <InputForm
              placeholder="Codigo de barras"
              name="barcode"
              type="text"
            />
          </div>
          <div className="col-span-12">
            <p className="px-4 py-2 text-[10px] text-grisSubText">COLOR</p>
          </div>
          <div className="col-span-12 flex items-center border-b border-t">
            <div
              className="ml-4 mr-4 size-[20px] rounded-[6px]"
              style={{ backgroundColor: selectedColor }}
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
                      className="h-8 w-full"
                      value={selectedColor}
                      onChange={handleColorChange}
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <input type="hidden" name="color" value={selectedColor} />
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


