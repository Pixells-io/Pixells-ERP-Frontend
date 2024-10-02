import React, { useState, useEffect } from "react";
import { Form, useNavigation,useLocation } from "react-router-dom";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
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

const PrincipalForm = ({ categories, costCenter, priceList, initialData = {},id }) => {
  const navigation = useNavigation();
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    code: "",
    description: "",
    categories_id: "",
    shopping: false,
    sale: false,
    price: "",
    cost_center_id: "",
    price_list_id: "",
    barcode: "",
    color: "#FF00FF",
  });

  const [isColorPopoverOpen, setIsColorPopoverOpen] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(prevData => ({
        ...prevData,
        ...initialData,
      }));
    }
  }, [initialData]);

  const handleInputChange = (name, value) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleColorChange = (e) => {
    handleInputChange("color", e.target.value);
  };

  const handleClosePopover = () => {
    setIsColorPopoverOpen(false);
  };
  const isEditMode = location.pathname.startsWith('/inventory/general-services/service/edit/');
  const formAction = isEditMode 
  ? `/inventory/general-services/service/edit/${id}`
  : '/inventory/general-services/service/new';
  return (
    <Form
      className="flex h-full w-full flex-col py-4"
      action={formAction}
      method="post"
    >
      <div className="max-h-screen overflow-auto px-6">
        <h2 className="font-poppins text-sm font-medium text-[#44444F]">
          PRINCIPAL
        </h2>
        <div className="mt-8 grid w-full grid-cols-12 gap-x-8 gap-y-6">
          <div className="col-span-4">
            <InputForm
              type="text"
              className="border-[#D7586B]"
              placeholder="Código de Servicio"
              name="code"
              value={formData.code}
              onChange={(e) => handleInputChange("code", e.target.value)}
            />
          </div>
          <div className="col-span-8">
            <InputForm
              className="border-[#D7586B]"
              name="description"
              type="text"
              placeholder="Nombre o Descripción"
              required={true}
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </div>

          <div className="col-span-12">
            <SelectRouter
              name="categories_id"
              options={categories}
              placeholder="Categorias"
              required={true}
              getOptionValue={(e) => e.id}
              getOptionLabel={(e) => e.name}
              value={categories.find(cat => cat.id === formData.categories_id)}
              onChange={(selected) => handleInputChange("categories_id", selected.id)}
            />
          </div>
          <div className="col-span-12">
            <div className="border-b border-grisDisabled">
              <p className="px-4 py-2 text-[10px] text-grisSubText">
                TIPO DE SERVICIO
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex border-b border-grisDisabled">
                <div className="flex items-center px-4 py-2">
                  <Checkbox
                    id="shopping"
                    name="shopping"
                    className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
                    checked={formData.shopping}
                    onCheckedChange={(checked) => handleInputChange("shopping", checked)}
                  />
                  <label
                    htmlFor="shopping"
                    className="ml-2 font-roboto text-[14px] text-gris2"
                  >
                    Compra
                  </label>
                </div>
              </div>

              <div className="flex border-b border-grisDisabled">
                <div className="flex items-center px-4 py-2">
                  <Checkbox
                    id="sale"
                    name="sale"
                    className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
                    checked={formData.sale}
                    onCheckedChange={(checked) => handleInputChange("sale", checked)}
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
              value={formData.price}
              onChange={(e) => handleInputChange("price", e.target.value)}
            />
          </div>

          <div className="col-span-12">
            <SelectRouter
              name="cost_center_id"
              options={costCenter}
              placeholder="Centro de Costos"
              required={true}
              getOptionValue={(e) => e.id}
              getOptionLabel={(e) => e.name}
              value={costCenter.find(cc => cc.id === formData.cost_center_id)}
              onChange={(selected) => handleInputChange("cost_center_id", selected.id)}
            />
          </div>
          <div className="col-span-12">
            <SelectRouter
              name="price_list_id"
              options={priceList}
              placeholder="Lista de Precios"
              required={true}
              getOptionValue={(e) => e.id}
              getOptionLabel={(e) => e.name}
              value={priceList.find(pl => pl.id === formData.price_list_id)}
              onChange={(selected) => handleInputChange("price_list_id", selected.id)}
            />
          </div>

          <div className="col-span-12">
            <InputForm
              placeholder="Codigo de barras"
              name="barcode"
              type="text"
              value={formData.barcode}
              onChange={(e) => handleInputChange("barcode", e.target.value)}
            />
          </div>
          <div className="col-span-12">
            <p className="px-4 py-2 text-[10px] text-grisSubText">COLOR</p>
          </div>
          <div className="col-span-12 flex items-center border-b border-t">
            <div
              className="ml-4 mr-4 size-[20px] rounded-[6px]"
              style={{ backgroundColor: formData.color }}
            ></div>
            <div className="flex flex-1 items-end justify-end pt-4">
              <Popover
                open={isColorPopoverOpen}
                onOpenChange={setIsColorPopoverOpen}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="mb-4 flex justify-end rounded-[10px] bg-[#E0E0E0] text-[#44444F] hover:bg-[#E0E0E0]"
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
                      value={formData.color}
                      onChange={handleColorChange}
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <input type="hidden" name="color" value={formData.color} />
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