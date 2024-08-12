import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import InputRouter from "@/layouts/Masters/FormComponents/input";

const GeneralForm = () => {
  return (
    <>
      <div className="pl-4 grid w-full grid-cols-3 grid-rows-4 gap-4">
        <div className="col-span-1 flex items-center space-x-2">
          <Label className="text-md font-roboto text-gris2">Activo</Label>
          <Checkbox
            name="active"
            className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
          />
        </div>
        <div className="col-span-1 flex items-center space-x-2">
          <Label className="text-md font-roboto text-gris2">Inactivo</Label>
          <Checkbox
            name="active2"
            className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
          />
        </div>
        <div className="col-span-1"></div>

        <div className="col-span-1 flex items-center space-x-2">
          <Label className="text-md w-24 font-roboto text-gris2">Calle:</Label>
          <InputRouter type="text" name="calle" placeholder="ingresa" />
        </div>
        <div className="col-span-1 flex items-center space-x-2">
          <Label className="text-md w-24 font-roboto text-gris2">
            Número int:
          </Label>
          <InputRouter type="number" name="numInt" placeholder="ingresa" />
        </div>
        <div className="col-span-1 flex items-center space-x-2">
          <Label className="text-md w-24 font-roboto text-gris2">
            Número ext:
          </Label>
          <InputRouter type="number" name="numExt" placeholder="ingresa" />
        </div>

        <div className="col-span-1 flex items-center space-x-2">
          <Label className="text-md w-24 font-roboto text-gris2">
            Colonia:
          </Label>
          <InputRouter type="text" name="col" placeholder="ingresa" />
        </div>
        <div className="col-span-1 flex items-center space-x-2">
          <Label className="text-md w-24 font-roboto text-gris2">
            Código postal:
          </Label>
          <InputRouter type="number" name="cp" placeholder="ingresa" />
        </div>
        <div className="col-span-1 flex items-center space-x-2">
          <Label className="text-md w-24 font-roboto text-gris2">Ciudad:</Label>
          <InputRouter type="text" name="city" placeholder="ingresa" />
        </div>

        <div className="col-span-1 flex items-center space-x-2">
          <Label className="text-md w-24 font-roboto text-gris2">Estado:</Label>
          <InputRouter type="text" name="state" placeholder="ingresa" />
        </div>
        <div className="col-span-1 flex items-center space-x-2">
          <Label className="text-md w-24 font-roboto text-gris2">País:</Label>
          <InputRouter type="text" name="country" placeholder="ingresa" />
        </div>
      </div>
    </>
  );
};

export default GeneralForm;
