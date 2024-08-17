import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import InputRouter from "@/layouts/Masters/FormComponents/input";

const GeneralForm = ({ data, setData }) => {

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="pl-4 grid w-full grid-cols-3 grid-rows-4 gap-4">
      <div className="col-span-1 flex items-center space-x-3">
        <Label htmlFor="active" className=" text-[14px] w-24 font-roboto text-gris2">Activo</Label>
        <Checkbox
          id="active"
          name="active"
          checked={data.active}
          onCheckedChange={(checked) => setData({...data, active: checked})}
          className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
        />
      </div>
      <div className="col-span-1 flex items-center space-x-2">
        <Label htmlFor="inactive" className=" text-[14px] w-24 font-roboto text-gris2">Inactivo</Label>
        <Checkbox
          id="inactive"
          name="inactive"
          checked={data.inactive}
          onCheckedChange={(checked) => setData({...data, inactive: checked})}
          className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
        />
      </div>
      <div className="col-span-1"></div>

      <div className="col-span-1 flex items-center space-x-2">
        <Label htmlFor="calle" className="text-[14px] w-24 font-roboto text-gris2">Calle:</Label>
        <InputRouter
          id="calle"
          type="text"
          name="calle"
          value={data.calle}
          onChange={handleChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="col-span-1 flex items-center space-x-2">
        <Label htmlFor="numInt" className="text-[14px] w-24 font-roboto text-gris2">Número int:</Label>
        <InputRouter
          id="numInt"
          type="number"
          name="numInt"
          value={data.numInt}
          onChange={handleChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="col-span-1 flex items-center space-x-2">
        <Label htmlFor="numExt" className=" text-[14px] w-24 font-roboto text-gris2">Número ext:</Label>
        <InputRouter
          id="numExt"
          type="number"
          name="numExt"
          value={data.numExt}
          onChange={handleChange}
         placeholder="Ingresa"
        />
      </div>

      <div className="col-span-1 flex items-center space-x-2">
        <Label htmlFor="col" className=" text-[14px] w-24 font-roboto text-gris2">Colonia:</Label>
        <InputRouter
          id="col"
          type="text"
          name="col"
          value={data.col}
          onChange={handleChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="col-span-1 flex items-center space-x-2">
        <Label htmlFor="cp" className=" text-[14px] w-24 font-roboto text-gris2 whitespace-nowrap">Código postal:</Label>
        <InputRouter
          id="cp"
          type="number"
          name="cp"
          value={data.cp}
          onChange={handleChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="col-span-1 flex items-center space-x-2">
        <Label htmlFor="city" className="text-[14px] w-24 font-roboto text-gris2">Ciudad:</Label>
        <InputRouter
          id="city"
          type="text"
          name="city"
          value={data.city}
          onChange={handleChange}
          placeholder="Ingresa"
        />
      </div>

      <div className="col-span-1 flex items-center space-x-2">
        <Label htmlFor="state" className=" text-[14px] w-24 font-roboto text-gris2">Estado:</Label>
        <InputRouter
          id="state"
          type="text"
          name="state"
          value={data.state}
          onChange={handleChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="col-span-1 flex items-center space-x-2">
        <Label htmlFor="country" className=" text-[14px] w-24 font-roboto text-gris2">País:</Label>
        <InputRouter
          id="country"
          type="text"
          name="country"
          value={data.country}
          onChange={handleChange}
          placeholder="Ingresa"
        />
      </div>
    </div>
  );
};

export default GeneralForm;
 
