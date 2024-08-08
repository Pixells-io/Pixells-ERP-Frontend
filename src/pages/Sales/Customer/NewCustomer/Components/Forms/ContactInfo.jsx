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
    "rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones border-none bg-grisBg";

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="mb-4 flex items-center justify-between">
        <Label
          className="pr-2 font-roboto text-sm text-grisText"
          htmlFor="nombre"
        >
          Nombre
        </Label>
        <InputRouter
          name="nombre"
          value={contactData.nombre}
          onChange={handleInputChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="mb-4 flex items-center justify-between">
        <Label
          className="pr-2 font-roboto text-sm text-grisText"
          htmlFor="apellidop"
        >
          A. Paterno
        </Label>
        <InputRouter
          name="apellidop"
          className={inputClass}
          value={contactData.apellidop}
          onChange={handleInputChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="mb-4 flex items-center justify-between">
        <Label
          className="pr-2 font-roboto text-sm text-grisText"
          htmlFor="apellidom"
        >
          A. Materno
        </Label>
        <InputRouter
          name="apellidom"
          value={contactData.apellidom}
          onChange={handleInputChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="mb-4 flex items-center justify-between">
        <Label
          className="pr-2 font-roboto text-sm text-grisText"
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
        />
      </div>
      <div className="mb-4 flex items-center justify-between">
        <Label className="pr-2 font-roboto text-sm text-grisText" htmlFor="tel">
          Teléfono
        </Label>
        <InputRouter
          name="tel"
          type="tel"
          value={contactData.tel}
          onChange={handleInputChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="mb-4 flex items-center justify-between">
        <Label
          className="pr-2 font-roboto text-sm text-grisText"
          htmlFor="position"
        >
          Posición
        </Label>
        <InputRouter
          name="position"
          value={contactData.position}
          onChange={handleInputChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="col-span-3 flex items-start space-x-2">
        <Checkbox
          id="princ"
          checked={contactData.princ}
          onCheckedChange={handleCheckboxChange}
          className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
        />
        <Label className="font-roboto text-sm text-grisText" htmlFor="princ">
          Principal
        </Label>
      </div>
      <div className="flex flex-col pt-4">
        <Button
          type="button"
          className="w-[100px] rounded-full border-[0.5px] border-[#D7586B] bg-transparent hover:bg-transparent"
          onClick={onDelete}
        >
          <Label className="font-roboto text-sm text-[#D7586B]">
            Eliminar
          </Label>
        </Button>
      </div>
    </div>
  );
};

export default ContactInfoForm;
