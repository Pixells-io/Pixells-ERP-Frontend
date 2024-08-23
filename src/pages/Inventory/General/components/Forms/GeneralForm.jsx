import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const GeneralForm = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (name) => {
    setData({ ...data, [name]: !data[name] });
  };

  return (
    <div className="grid w-full grid-cols-4 grid-rows-3 gap-4 pl-4">
      <div className="col-span-1 flex items-center space-x-6">
        <Label
          htmlFor="sImpuesto"
          className="font-roboto text-[14px] text-gris2"
        >
          Sujeto a impuestos
        </Label>
        <Checkbox
          id="sImpuesto"
          name="sImpuesto"
          checked={data.sImpuesto}
          onCheckedChange={() => handleCheckboxChange("sImpuesto")}
          className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
        />
      </div>
     
      <div className="col-span-1 flex items-center space-x-6">
        <Label htmlFor="activo" className="flex font-roboto text-[14px] text-gris2">
          Activo
        </Label>
        <Checkbox
          id="activo"
          name="activo"
          checked={data.activo}
          onCheckedChange={() => handleCheckboxChange("activo")}
          className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
        />
      </div>
      <div className="w-[200px] col-span-1 flex items-center space-x-6">
        <Label htmlFor="desde" className="font-roboto text-[14px] text-gris2">
          Desde:
        </Label>
        <InputRouter
          type="date"
          name="desde"
          value={data.desde}
          onChange={handleChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="w-[200px] col-span-1 flex items-center space-x-6">
        <Label htmlFor="hasta" className="font-roboto text-[14px] text-gris2">
          Hasta:
        </Label>
        <InputRouter
          type="date"
          name="hasta"
          value={data.hasta}
          onChange={handleChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="col-span-1 flex items-center space-x-6">
        <Label
          htmlFor="sImpuesto"
          className="font-roboto text-[14px] text-gris2"
        >
          Disponible para devolución
        </Label>
        <Checkbox
          id="debo"
          name="debo"
          checked={data.debo}
          onCheckedChange={() => handleCheckboxChange("devo")}
          className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
        />
      </div>
     
      <div className="col-span-1 flex items-center space-x-6">
        <Label
          htmlFor="inactivo"
          className="font-roboto text-[14px] text-gris2"
        >
          Inactivo
        </Label>
        <Checkbox
          id="inactivo"
          name="inactivo"
          checked={data.inactivo}
          onCheckedChange={() => handleCheckboxChange("inactivo")}
          className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
        />
      </div>
      <div></div>
      <div></div>
      <div className="col-span-1 flex items-center space-x-6">
        <Label
          htmlFor="fabricante"
          className="mr-3 font-roboto text-[14px] text-gris2 "
        >
          Fabricante:
        </Label>
        <InputRouter
          type="text"
          name="fabricante"
          value={data.fabricante}
          onChange={handleChange}
          placeholder="Ingresa"
        />
      </div>
    <div></div>
    <div></div>
    <div></div>
      <div className="col-span-1 flex items-center space-x-6">
        <Label
          htmlFor="comentarios"
          className="mb-1 font-roboto text-[14px] text-gris2"
        >
          Comentarios
        </Label>
        <Textarea
          name="comentarios"
          value={data.comentarios}
          onChange={handleChange}
          placeholder="Ingresa tus comentarios"
          className="border-gris2-transparent rounded-xl border border-none bg-grisBg font-roboto text-gris2 placeholder:text-grisHeading focus-visible:ring-primarioBotones"
        />
      </div>
    </div>
  );
};

export default GeneralForm;
