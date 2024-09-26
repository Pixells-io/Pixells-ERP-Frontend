import React, { useState, useEffect } from "react";
import { Form, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

function EditLeadInformation({
  modal,
  setModal,
  info,
  lead,
  services,
  serviceSelected,
}) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  const servicesLead = services.data.filter((service) =>
    serviceSelected.some((serv) => serv.name == service.name),
  );

  const formatedLeadServices = servicesLead.map((serv) => {
    return { label: serv.name, value: serv.id };
  });

  const formatedServices = services?.data.map((serv) => {
    return { label: serv.name, value: serv.id };
  });

  const placeholders = [
    "Nombre del Negocio",
    "Telefono del Negocio",
    "Nombre del Contacto",
    "Apellido Paterno Contacto",
    "Apellido Materno Contacto",
    "Telefono del Contacto",
    "Email del Contacto",
  ];

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="h-[650px] overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b px-8 py-6">
          <DialogTitle className="font-poppins">Edit Lead</DialogTitle>
        </DialogHeader>
        <Form
          id="lead-form-edit"
          className="flex flex-col gap-8 px-6"
          action={`/crm/leads/${lead.id}`}
          method="post"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        >
          <input type="hidden" hidden readOnly name="lead_id" value={lead.id} />
          <input
            type="hidden"
            hidden
            readOnly
            name="action"
            value="edit-lead"
          />
          <div className="flex flex-col gap-4 rounded-lg px-4 py-2 font-roboto">
            <div className="text-lg font-normal text-[#696974]">
              Business Information
            </div>
            <div className="flex flex-col gap-4 font-light">
              <InputRouter
                name="bussines_name"
                type="text"
                placeholder={placeholders[0]}
                defaultVal={info.business_name}
              />
              <InputRouter
                name="bussines_phone"
                type="text"
                placeholder={placeholders[1]}
                defaultVal={info.business_phone}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg px-4 py-2 font-roboto">
            <div className="text-lg font-normal text-[#696974]">
              Contact Information
            </div>
            <div className="flex flex-col gap-4 font-light">
              <InputRouter
                name="contact_name"
                type="text"
                placeholder={placeholders[2]}
                defaultVal={info.contact_name}
              />
              <InputRouter
                name="contact_middle_name"
                type="text"
                placeholder={placeholders[3]}
                defaultVal={info.contact_middle_name}
              />
              <InputRouter
                name="contact_last_name"
                type="text"
                placeholder={placeholders[4]}
                defaultVal={info.contact_last_name}
              />
              <InputRouter
                name="contact_phone"
                type="text"
                placeholder={placeholders[5]}
                defaultVal={info.contact_phone}
              />
              <InputRouter
                name="contact_email"
                type="email"
                placeholder={placeholders[6]}
                defaultVal={info.contact_email}
              />
            </div>
          </div>
          <div className="flex items-center justify-center px-4 py-2">
            <SelectRouter
              placeholder="Select Services to Add"
              isMulti="true"
              defaultVal={formatedLeadServices}
              options={formatedServices}
              name="services"
            />
          </div>
        </Form>
        <DialogFooter className="px-8 py-4">
          <Button
            form="lead-form-edit"
            disabled={navigation.state === "submitting"}
            className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
          >
            {navigation.state === "submitting" ? "Submitting..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditLeadInformation;
