import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import { Form, useNavigation } from "react-router-dom";

const ContactInfoForm = ({
  contactData,
  setContactData,
  onDelete,
  isDisabled,
  positionTap,
  contacts,
  setContacts,
  supplier_id,
}) => {
  const handleInputChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };
  const navigation = useNavigation();

  const handleCheckboxChange = (checked) => {
    const auxContacts = contacts.map((contact, index) => {
      if (positionTap == index) {
        return {
          ...contact,
          princ: true,
        };
      } else {
        return {
          ...contact,
          princ: false,
        };
      }
    });

    setContacts(auxContacts);
  };

  const inputClass =
    "w-[300px] rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones border-none bg-grisBg";

  return (
    <div className="w-full">
      <Form
        method="post"
        action={"/shopping/supplier/edit/" + supplier_id}
        id="contact-form"
        name="contact-name"
      >
        <div className="grid grid-cols-3 gap-x-8 gap-y-4">
          <input type="hidden" hidden name="supplier_id" value={supplier_id} />
          <input
            type="hidden"
            hidden
            name="contact_id"
            value={contactData?.id}
          />
          <input type="hidden" hidden name="type" value={"contact"} />
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-3">
              <Label
                className="w-32 font-roboto text-xs font-light text-gris2"
                htmlFor="name"
              >
                Nombre
              </Label>
            </div>
            <div className="col-span-9">
              <InputRouter
                name="name"
                value={contactData.name}
                onChange={handleInputChange}
                placeholder=""
                className={inputClass}
                disabled={isDisabled}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 items-center">
            <div className="col-span-3">
              <Label
                className="w-32 font-roboto text-xs font-light text-gris2"
                htmlFor="middle_name"
              >
                A. Paterno
              </Label>
            </div>
            <div className="col-span-9">
              <InputRouter
                name="middle_name"
                value={contactData.middle_name}
                onChange={handleInputChange}
                placeholder=""
                className={inputClass}
                disabled={isDisabled}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 items-center">
            <div className="col-span-3">
              <Label
                className="w-32 font-roboto text-xs font-light text-gris2"
                htmlFor="last_name"
              >
                A. Materno
              </Label>
            </div>
            <div className="col-span-9">
              <InputRouter
                name="last_name"
                value={contactData.last_name}
                onChange={handleInputChange}
                placeholder=""
                className={inputClass}
                disabled={isDisabled}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 items-center">
            <div className="col-span-3">
              <Label
                className="w-32 font-roboto text-xs font-light text-gris2"
                htmlFor="email"
              >
                E-mail
              </Label>
            </div>
            <div className="col-span-9">
              <InputRouter
                name="email"
                type="email"
                value={contactData.email}
                onChange={handleInputChange}
                placeholder=""
                className={inputClass}
                disabled={isDisabled}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 items-center">
            <div className="col-span-3">
              <Label
                className="w-32 font-roboto text-xs font-light text-gris2"
                htmlFor="phone"
              >
                Teléfono
              </Label>
            </div>
            <div className="col-span-9">
              <InputRouter
                name="phone"
                type="phone"
                value={contactData.phone}
                onChange={handleInputChange}
                placeholder=""
                className={inputClass}
                disabled={isDisabled}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 items-center">
            <div className="col-span-3">
              <Label
                className="w-32 font-roboto text-xs font-light text-gris2"
                htmlFor="position"
              >
                Posición
              </Label>
            </div>
            <div className="col-span-9">
              <InputRouter
                name="position"
                value={contactData.position}
                onChange={handleInputChange}
                placeholder=""
                className={inputClass}
                disabled={isDisabled}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 items-center">
            <div className="col-span-3">
              <Label
                className="w-32 font-roboto text-xs font-light text-gris2"
                htmlFor="principal"
              >
                Principal
              </Label>
            </div>
            <div className="col-span-9">
              <Checkbox
                id="principal"
                checked={contactData.principal}
                onCheckedChange={handleCheckboxChange}
                className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
                disabled={isDisabled}
              />
            </div>
          </div>
        </div>

        {contacts.length > 0 && (
          <div className="mt-2 flex w-full justify-end pr-2">
            <Button
              className="rounded-3xl bg-primarioBotones"
              disabled={navigation.state === "submitting"}
            >
              {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
            </Button>
          </div>
        )}
      </Form>

      <Form
        method="post"
        action={"/shopping/supplier/edit/" + supplier_id}
        id="delete-contact-form"
        name="delete-contact-form"
      >
        <input type="hidden" hidden name="contact_id" value={contactData?.id} />
        <input type="hidden" hidden name="type" value={"destroy_contact"} />
        {contacts.length > 1 && !!contactData?.id && (
          <div className="col-span-3 flex justify-start pt-4">
            <Button
              type="submit"
              className="w-[100px] rounded-full border-[0.5px] border-[#D7586B] bg-transparent hover:bg-transparent"
              // onClick={onDelete}
              disabled={navigation.state === "submitting"}
            >
              <span className="font-roboto text-[14px] text-[#D7586B]">
                {navigation.state === "submitting"
                  ? "Submitting..."
                  : "Eliminar"}
              </span>
            </Button>
          </div>
        )}
      </Form>
    </div>
  );
};

export default ContactInfoForm;
