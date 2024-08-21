import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import InputRouter from "@/layouts/Masters/FormComponents/input";

const ContactInfoForm = ({ contactData, setContactData, onDelete }) => {
  const handleInputChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (checked) => {
    setContactData({ ...contactData, princ: checked });
  };

  const inputClass =
    "w-[300px] rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones border-none bg-grisBg";

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 flex items-center gap-2">
        <Label
          className="w-32 font-roboto text-[14px] text-gris2"
          htmlFor="nombre"
        >
          Nombre
        </Label>
        <InputRouter
          name="nombre"
          value={contactData.nombre}
          onChange={handleInputChange}
          placeholder="Ingresa"
          className={inputClass}
        />
      </div>
      <div className="col-span-1 flex items-center gap-2">
        <Label
         className="w-32 font-roboto text-[14px] text-gris2"
          htmlFor="apellidop"
        >
          A. Paterno
        </Label>
        <InputRouter
          name="apellidop"
          value={contactData.apellidop}
          onChange={handleInputChange}
          placeholder="Ingresa"
          className={inputClass}
        />
      </div>
      <div className="col-span-1 flex items-center gap-2">
        <Label
         className="w-32 font-roboto text-[14px] text-gris2"
          htmlFor="apellidom"
        >
          A. Materno
        </Label>
        <InputRouter
          name="apellidom"
          value={contactData.apellidom}
          onChange={handleInputChange}
          placeholder="Ingresa"
          className={inputClass}
        />
      </div>
      <div className="col-span-1 flex items-center gap-2">
        <Label
          className="w-32 font-roboto text-[14px] text-gris2"
          htmlFor="email"
        >
          E-mail
        </Label>
        <InputRouter
          name="email"
          type="email"
          value={contactData.email}
          onChange={handleInputChange}
          placeholder="Ingresa"
          className={inputClass}
        />
      </div>
      <div className="col-span-1 flex items-center gap-2">
        <Label
         className="w-32 font-roboto text-[14px] text-gris2"
          htmlFor="tel"
        >
          Teléfono
        </Label>
        <InputRouter
          name="tel"
          type="tel"
          value={contactData.tel}
          onChange={handleInputChange}
          placeholder="Ingresa"
          className={inputClass}
        />
      </div>
      <div className="col-span-1 flex items-center gap-2">
        <Label
          className="w-32 font-roboto text-[14px] text-gris2"
          htmlFor="position"
        >
          Posición
        </Label>
        <InputRouter
          name="position"
          value={contactData.position}
          onChange={handleInputChange}
          placeholder="Ingresa"
          className={inputClass}
        />
      </div>
      <div className="col-span-3 flex items-center gap-2">
      <Label className="w-32 font-roboto text-[14px] text-gris2" htmlFor="princ">
          Principal
        </Label>
        <Checkbox
          id="princ"
          checked={contactData.princ}
          onCheckedChange={handleCheckboxChange}
          className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
        />
      </div>
      <div className="col-span-3 flex justify-start pt-4">
        <Button
          type="button"
          className="w-[100px] rounded-full border-[0.5px] border-[#D7586B] bg-transparent hover:bg-transparent"
          onClick={onDelete}
        >
          <Label className="font-roboto text-[14px] text-[#D7586B]">
            Eliminar
          </Label>
        </Button>
      </div>
    </div>
  );
};

export default ContactInfoForm;

