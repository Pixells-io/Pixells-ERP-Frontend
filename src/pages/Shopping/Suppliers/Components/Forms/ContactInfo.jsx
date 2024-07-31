import React from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ContactInfoForm = ({ contactData, setContactData }) => {
  const handleInputChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.checked });
  };

  const inputClass =
    "rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones border-none bg-grisBg";

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="space-y-2">
        <Label htmlFor="nombre">Nombre</Label>
        <Input
          id="nombre"
          name="nombre"
          className={inputClass}
          value={contactData.nombre}
          onChange={handleInputChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="apellidop">A. Paterno</Label>
        <Input
          id="apellidop"
          name="apellidop"
          className={inputClass}
          value={contactData.apellidop}
          onChange={handleInputChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="apellidom">A. Materno</Label>
        <Input
          id="apellidom"
          name="apellidom"
          className={inputClass}
          value={contactData.apellidom}
          onChange={handleInputChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          name="email"
          type="email"
          className={inputClass}
          value={contactData.email}
          onChange={handleInputChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="tel">Teléfono</Label>
        <Input
          id="tel"
          name="tel"
          type="tel"
          className={inputClass}
          value={contactData.tel}
          onChange={handleInputChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="justify-start space-y-2">
        <Label htmlFor="position">Posición</Label>
        <Input
          id="position"
          name="position"
          className={inputClass}
          value={contactData.position}
          onChange={handleInputChange}
          placeholder="Ingresa"
        />
      </div>
      <div className="col-span-3 flex items-start space-x-2">
      <Label htmlFor="princ">Principal</Label>
        <Checkbox
          id="princ"
          name="princ"
          className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
          checked={contactData.princ}
          onCheckedChange={handleCheckboxChange}
        />
       
      </div>
    </div>
  );
};

export default ContactInfoForm;
