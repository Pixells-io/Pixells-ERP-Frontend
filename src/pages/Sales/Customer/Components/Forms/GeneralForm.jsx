import React from "react";
import SelectField from "@/layouts/Masters/FormComponents/SelectField";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import InputRouter from "@/layouts/Masters/FormComponents/input";

const GralFormSupplier = ({ generalData, setGeneralData }) => {
  const handleInputChange = (e) => {
    setGeneralData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (value, name) => {
    setGeneralData({ ...generalData, [name]: value });
  };

  const handleCheckboxChange = (name) => {
    setGeneralData({ ...generalData, [name]: !generalData[name] });
  };

  const inputClass =
    "rounded-xl border border-gris2-transparent font-roboto text-xs text-grisText font-lights placeholder:text-grisHeading focus-visible:ring-primarioBotones border-none bg-grisBg";
  const selectClass =
    "rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones border-none bg-grisBg";

  return (
    <div className="flex justify-between">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Label
              htmlFor="calle"
              className="w-32 font-roboto text-sm text-grisText"
            >
              Calle:
            </Label>
            <InputRouter
              name="calle"
              placeholder="Ingresa"
              value={generalData.calle || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Label
              htmlFor="colonia"
              className="w-32 font-roboto text-sm text-grisText"
            >
              Colonia:
            </Label>
            <InputRouter
              name="colonia"
              placeholder="Ingresa"
              value={generalData.colonia}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Label
              htmlFor="estado"
              className="w-32 font-roboto text-sm text-grisText"
            >
              Estado:
            </Label>
            <InputRouter
              name="estado"
              placeholder="Ingresa"
              value={generalData.estado}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Label
              htmlFor="encargadoCompras"
              className="w-32 font-roboto text-sm text-grisText"
            >
              Encargado de Compras:
            </Label>
            <SelectField
              name="encargadoCompras"
              placeholder="Selecciona"
              value={generalData.encargadoCompras}
              onChange={(value) =>
                handleSelectChange(value, "encargadoCompras")
              }
              options={[
                { value: "juan", label: "Juan Pérez" },
                { value: "maria", label: "María Gómez" },
                { value: "carlos", label: "Carlos Rodríguez" },
              ]}
            />
          </div>
          <div className="flex items-start space-x-4">
            <Label
              htmlFor="activo"
              className="w-32 font-roboto text-sm text-grisText"
            >
              Activo
            </Label>
            <Checkbox
              name="activo"
              checked={generalData.activo}
              className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
              onCheckedChange={() => handleCheckboxChange("activo")}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Label
              htmlFor="inactivo"
              className="w-32 font-roboto text-sm text-grisText"
            >
              Inactivo
            </Label>
            <Checkbox
              name="inactivo"
              checked={generalData.inactivo}
              className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
              onCheckedChange={() => handleCheckboxChange("inactivo")}
            />
          </div>

          <div className="flex items-center space-x-4 space-y-4">
            <Label
              htmlFor="desde"
              className="w-32 font-roboto text-sm text-grisText"
            >
              Desde:
            </Label>
            <InputRouter
              type="date"
              name="desde"
              id="desde"
              className="w-64"
              placeholder="Ingresa"
              value={generalData.desde}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Label
              htmlFor="numeroInterno"
              className="w-32 font-roboto text-sm text-grisText"
            >
              Número Interno:
            </Label>
            <InputRouter
              name="numeroInterno"
              placeholder="Ingresa"
              value={generalData.numeroInterno}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Label
              htmlFor="codigoPostal"
              className="w-32 font-roboto text-sm text-grisText"
            >
              Código Postal:
            </Label>
            <InputRouter
              name="codigoPostal"
              placeholder="Ingresa"
              value={generalData.codigoPostal}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Label
              htmlFor="pais"
              className="w-32 font-roboto text-sm text-grisText"
            >
              País:
            </Label>
            <InputRouter
              name="pais"
              placeholder="Ingresa"
              value={generalData.pais}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Label
              htmlFor="comentarios"
              className="w-32 font-roboto text-sm text-grisText"
            >
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

          <div className="flex items-center space-x-4 space-y-4 pt-4">
            <Label
              htmlFor="hasta"
              className="w-32 pt-4 font-roboto text-sm text-grisText"
            >
              Hasta:
            </Label>
            <InputRouter
              type="date"
              name="hasta"
              id="hasta"
              className="w-64"
              placeholder="Ingresa"
              value={generalData.hasta}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="ml-4 flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <Label
            htmlFor="numeroExterior"
            className="w-32 font-roboto text-sm text-grisText"
          >
            Número Exterior:
          </Label>
          <InputRouter
            name="numeroExterior"
            placeholder="Ingresa"
            value={generalData.numeroExterior}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center space-x-4">
          <Label
            htmlFor="ciudad"
            className="w-32 font-roboto text-sm text-grisText"
          >
            Ciudad:
          </Label>
          <InputRouter
            name="ciudad"
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
