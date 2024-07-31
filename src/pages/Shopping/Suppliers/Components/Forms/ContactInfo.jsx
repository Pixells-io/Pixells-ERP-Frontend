import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import InputRouter from "@/layouts/Masters/FormComponents/input";

const ContactInfoForm = ({ contactData, setContactData }) => {
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
      <div className="flex items-center justify-between mb-4">
      <Label className="font-roboto text-sm text-grisText pr-2" htmlFor="nombre">Nombre</Label>
        <InputRouter
          name="nombre"
          value={contactData.nombre}
          onChange={handleInputChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="flex items-center justify-between mb-4">
          <Label className="font-roboto text-sm text-grisText pr-2" htmlFor="apellidop">A. Paterno</Label>
        <InputRouter
          name="apellidop"
          className={inputClass}
          value={contactData.apellidop}
          onChange={handleInputChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="flex items-center justify-between mb-4">
          <Label className="font-roboto text-sm text-grisText pr-2" htmlFor="apellidom">A. Materno</Label>
        <InputRouter
          name="apellidom"
          value={contactData.apellidom}
          onChange={handleInputChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="flex items-center justify-between mb-4">
          <Label className="font-roboto text-sm text-grisText pr-2" htmlFor="email">E-mail</Label>
        <InputRouter
          name="email"
          type="email"
          value={contactData.email}
          onChange={handleInputChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="flex items-center justify-between mb-4">
      <Label className="font-roboto text-sm text-grisText pr-2" htmlFor="tel">Teléfono</Label>
        <InputRouter
          name="tel"
          type="tel"
          value={contactData.tel}
          onChange={handleInputChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="flex items-center justify-between mb-4">
          <Label className="font-roboto text-sm text-grisText pr-2" htmlFor="position">Posición</Label>
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
    </div>
  );
};

export default ContactInfoForm;