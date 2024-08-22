import React from "react";
import SelectField from "@/layouts/Masters/FormComponents/SelectField";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import InputRouter from "@/layouts/Masters/FormComponents/input";

const GralFormSupplier = ({ generalData, setGeneralData, isDisabled }) => {
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
    "w-full rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones border-none bg-grisBg";
  return (
    <div className="flex justify-between">
      <div className="grid w-full grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="flex w-full items-center space-x-4">
            <Label
              htmlFor="street"
               className="w-full font-roboto text-[14px] text-gris2"
            >
              Calle:
            </Label>
            <InputRouter
              name="street"
              placeholder="Ingresa"
              value={generalData.street}
              onChange={handleInputChange}
              disabled={isDisabled}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Label
              htmlFor="cologne"
              className="w-full font-roboto text-[14px] text-gris2"
            >
              Colonia:
            </Label>
            <InputRouter
              name="cologne"
              placeholder="Ingresa"
              value={generalData.cologne}
              onChange={handleInputChange}
              disabled={isDisabled}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Label
              htmlFor="state"
              className="w-full font-roboto text-[14px] text-gris2"
            >
              Estado:
            </Label>
            <InputRouter
              name="state"
              placeholder="Ingresa"
              value={generalData.state}
              onChange={handleInputChange}
              disabled={isDisabled}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Label
              htmlFor="shopping_person"
              className="w-32 font-roboto text-[14px] text-gris2"
            >
              Encargado de Compras:
            </Label>
            <SelectField
              name="shopping_person"
              placeholder="Selecciona"
              value={generalData.shopping_person}
              disabled={isDisabled}
              onValueChange={(value) =>
                handleSelectChange(value, "shopping_person")
              }
              options={[
                { value: "juan", label: "Juan Pérez" },
                { value: "maria", label: "María Gómez" },
                { value: "carlos", label: "Carlos Rodríguez" },
              ]}
              className="flex-grow min-w-[200px]"
            />
          </div>
          <div className="flex items-start space-x-4">
            <Label
              htmlFor="status"
               className="w-full font-roboto text-[14px] text-gris2"
            >
              Activo
            </Label>
            <Checkbox
              name="status"
              id="status"
              value={generalData.status}
              checked={generalData.status}
              disabled={isDisabled}
              className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
              onCheckedChange={() => handleCheckboxChange("status")}
            />
          </div>
          <div className="flex items-center space-x-4">
          </div>

          <div className="flex items-center space-x-4 space-y-4">
            <Label
              htmlFor="start"
             className="w-full font-roboto text-[14px] text-gris2"
            >
              Desde:
            </Label>
            <InputRouter
              type="date"
              name="start"
              id="start"
              className="w-64"
              placeholder="Ingresa"
              value={generalData.start}
              disabled={isDisabled}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Label
              htmlFor="int"
              className="w-full font-roboto text-[14px] text-gris2"
            >
              Número Interno:
            </Label>
            <InputRouter
              name="int"
              placeholder="Ingresa"
              value={generalData.int}
              disabled={isDisabled}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Label
              htmlFor="cp"
              className="w-full font-roboto text-[14px] text-gris2"
            >
              Código Postal:
            </Label>
            <InputRouter
              name="cp"
              placeholder="Ingresa"
              value={generalData.cp}
              disabled={isDisabled}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Label
              htmlFor="country"
             className="w-full font-roboto text-[14px] text-gris2"
            >
              País:
            </Label>
            <InputRouter
              name="country"
              placeholder="Ingresa"
              value={generalData.country}
              disabled={isDisabled}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Label
              htmlFor="comment"
              className="w-full font-roboto text-[14px] text-gris2"
            >
              Comentarios:
            </Label>
            <Textarea
              name="comment"
              className={inputClass}
              placeholder="Ingresa"
              value={generalData.comment}
              disabled={isDisabled}
              onChange={handleInputChange}
              rows={4}
            />
          </div>

          <div className="flex items-center space-x-4 space-y-4">
            <Label
              htmlFor="end"
               className="w-full font-roboto text-[14px] text-gris2"
            >
              Hasta:
            </Label>
            <InputRouter
              type="date"
              name="end"
              id="end"
              className="w-64"
              placeholder="Ingresa"
              value={generalData.end}
              disabled={isDisabled}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="ml-4 flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <Label
            htmlFor="ext"
           className="w-full font-roboto text-[14px] text-gris2"
          >
            Número Exterior:
          </Label>
          <InputRouter
            name="ext"
            placeholder="Ingresa"
            value={generalData.ext}
            disabled={isDisabled}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center space-x-4">
          <Label
            htmlFor="city"
            className="w-full font-roboto text-[14px] text-gris2"
          >
            Ciudad:
          </Label>
          <InputRouter
            name="city"
            placeholder="Ingresa"
            value={generalData.city}
            disabled={isDisabled}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default GralFormSupplier;
