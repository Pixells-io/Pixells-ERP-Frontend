import React from "react";
import SelectField from "@/layouts/Masters/FormComponents/SelectField";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import { Button } from "@/components/ui/button";

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
    "w-full rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones border-none bg-grisBg";
  return (
    <div className="grid w-full grid-cols-12">
      <div className="col-span-9">
        <div className="grid grid-cols-3 gap-x-8 gap-y-4">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-4">
              <Label
                htmlFor="street"
                className="font-roboto text-[14px] text-gris2"
              >
                Calle:
              </Label>
            </div>
            <div className="bg-ye col-span-8">
              <InputRouter
                name="street"
                placeholder=""
                value={generalData.street}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 items-center">
            <div className="col-span-4">
              <Label
                htmlFor="int"
                className="w-full font-roboto text-[14px] text-gris2"
              >
                Número Interno:
              </Label>
            </div>
            <div className="col-span-8">
              <InputRouter
                name="int"
                placeholder=""
                value={generalData.int}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 items-center">
            <div className="col-span-4">
              <Label
                htmlFor="ext"
                className="w-full font-roboto text-[14px] text-gris2"
              >
                Número Exterior:
              </Label>
            </div>
            <div className="col-span-8">
              <InputRouter
                name="ext"
                placeholder=""
                value={generalData.ext}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 items-center">
            <div className="col-span-4">
              <Label
                htmlFor="cologne"
                className="w-full font-roboto text-[14px] text-gris2"
              >
                Colonia:
              </Label>
            </div>
            <div className="col-span-8">
              <InputRouter
                name="cologne"
                placeholder=""
                value={generalData.cologne}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 items-center">
            <div className="col-span-4">
              <Label
                htmlFor="cp"
                className="w-full font-roboto text-[14px] text-gris2"
              >
                Código Postal:
              </Label>
            </div>
            <div className="col-span-8">
              <InputRouter
                name="cp"
                placeholder=""
                value={generalData.cp}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 items-center">
            <div className="col-span-4">
              <Label
                htmlFor="city"
                className="w-full font-roboto text-[14px] text-gris2"
              >
                Ciudad:
              </Label>
            </div>
            <div className="col-span-8">
              <InputRouter
                name="city"
                placeholder=""
                value={generalData.city}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 items-center">
            <div className="col-span-4">
              <Label
                htmlFor="state"
                className="w-full font-roboto text-[14px] text-gris2"
              >
                Estado:
              </Label>
            </div>
            <div className="col-span-8">
              <InputRouter
                name="state"
                placeholder=""
                value={generalData.state}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 items-center">
            <div className="col-span-4">
              <Label
                htmlFor="country"
                className="w-full font-roboto text-[14px] text-gris2"
              >
                País:
              </Label>
            </div>
            <div className="col-span-8">
              <InputRouter
                name="country"
                placeholder=""
                value={generalData.country}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex items-center space-x-4"></div>

          <div className="grid grid-cols-12 items-center">
            <div className="col-span-4">
              <Label
                htmlFor="shopping_person"
                className="font-roboto text-[14px] text-gris2"              >
                Encargado <br />
                de Compras:
              </Label>
            </div>
            <div className="col-span-8">
              <SelectField
                name="shopping_person"
                placeholder="Selecciona"
                value={generalData.shopping_person}
                onValueChange={(value) =>
                  handleSelectChange(value, "shopping_person")
                }
                options={[
                  { value: "juan", label: "Juan Pérez" },
                  { value: "maria", label: "María Gómez" },
                  { value: "carlos", label: "Carlos Rodríguez" },
                ]}
                className="w-full flex-grow"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 items-center">
            <div className="col-span-4">
              <Label
                htmlFor="comment"
                className="font-roboto text-[14px] text-gris2"              >
                Comentarios:
              </Label>
            </div>
            <div className="col-span-8">
              <Textarea
                name="comment"
                className={inputClass}
                placeholder=""
                value={generalData.comment}
                onChange={handleInputChange}
                rows={4}
              />
            </div>
          </div>
        </div>
        {/* actives o inactives */}
        <div className="my-4 grid w-[200px] grid-cols-2 items-center gap-y-4">
          <Label
            htmlFor="status"
            className="font-roboto text-[14px] text-gris2"          >
            Activo
          </Label>
          <Checkbox
            name="status"
            id="status"
            value={generalData.status}
            checked={generalData.status}
            className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
            onCheckedChange={() => handleCheckboxChange("status")}
          />
          <Label
            htmlFor="status"
            className="font-roboto text-[14px] text-gris2"          >
            Inactivo
          </Label>
          <Checkbox
            value={!generalData.status}
            checked={!generalData.status}
            className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
            onCheckedChange={() => handleCheckboxChange("status")}
          />
        </div>

        {/* dates */}
        <div className="flex gap-x-8">
          <div className="flex items-center gap-x-4">
            <Label
              htmlFor="start"
              className="font-roboto text-[14px] text-gris2"
            >
              Desde:
            </Label>
            <div>
              <InputRouter
                type="date"
                name="start"
                id="start"
                placeholder=""
                value={generalData.start}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <Label htmlFor="end" className="font-roboto text-[14px] text-gris2">
              Hasta:
            </Label>
            <div>
              <InputRouter
                type="date"
                name="end"
                id="end"
                placeholder=""
                value={generalData.end}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex items-center pt-2">
            <Button
              type="button"
              className="h-8 rounded-full border border-primarioBotones bg-inherit px-2 text-xs font-medium text-primarioBotones hover:bg-inherit"
              onClick={() => clearDate()}
            >
              Restablecer fechas
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GralFormSupplier;
