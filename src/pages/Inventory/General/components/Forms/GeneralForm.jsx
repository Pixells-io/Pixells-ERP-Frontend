import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const GeneralForm = ({ data, setData }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Primera columna */}
      <div className="space-y-4">
        <div className="flex items-center justify-start">
          <Label htmlFor="sImpuesto" className="w-auto mr-14 text-md text-gris2 font-roboto">Sujeto a impuestos</Label>
          <Checkbox 
            name="sImpuesto" 
            checked={data.sImpuesto}
            onCheckedChange={(checked) => setData({...data, sImpuesto: checked})}
            className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
          />
        </div>
        <div className="flex items-center">
          <Label htmlFor="fabricante" className="mb-1 mr-4 w-auto text-md text-gris2 font-roboto">Fabricante</Label> 
          <Input 
            type="text" 
            name="fabricante" 
            value={data.fabricante}
            onChange={handleChange}
            placeholder="Ingresa" 
            className="ml-4 w-full sm:w-96 lg:w-[500px] rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones border-none bg-grisBg" 
          />
        </div>
        <div className="flex justify-start space-x-3  md:w-[300px]">
          <Label htmlFor="comentarios" className="mb-1 text-md text-gris2 font-roboto">Comentarios</Label>
          <Textarea 
            name="comentarios" 
            value={data.comentarios}
            onChange={handleChange}
            placeholder="Ingresa tus comentarios" 
            className=" rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones border-none bg-grisBg" 
          />
        </div>
      </div>

      {/* Segunda columna */}
      <div className="space-y-4 ml-16 pl-6">
        <div className="flex items-center justify-start">
          <Label htmlFor="activo" className="pr-8 text-md text-gris2 font-roboto">Activo</Label>
          <Checkbox 
            name="activo" 
            checked={data.activo}
            onCheckedChange={(checked) => setData({...data, activo: checked})}
            className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
          />
        </div>
        <div className="flex items-center justify-start">
          <Label htmlFor="inactivo" className=" pr-6 text-md text-gris2 font-roboto">Inactivo</Label>
          <Checkbox 
            name="inactivo" 
            checked={data.inactivo}
            onCheckedChange={(checked) => setData({...data, inactivo: checked})}
            className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
          />
        </div>
      </div>

      {/* Tercera columna */}
      <div className="space-y-4">
        <div className="flex items-center justify-start">
          <Label htmlFor="desde" className="mb-1 mr-2 text-md text-gris2 font-roboto">Desde</Label>
          <Input 
            type="date" 
            name="desde" 
            value={data.desde}
            onChange={handleChange}
            className="w-full rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones border-none bg-grisBg" 
          />
        </div>
      </div>

      {/* Cuarta columna */}
      <div className="space-y-4">
        <div className="flex items-center justify-start">
          <Label htmlFor="hasta" className="mb-1 mr-2 text-md text-gris2 font-roboto">Hasta</Label>
          <Input 
            type="date" 
            name="hasta" 
            value={data.hasta}
            onChange={handleChange}
            className="w-full rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones border-none bg-grisBg" 
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralForm;