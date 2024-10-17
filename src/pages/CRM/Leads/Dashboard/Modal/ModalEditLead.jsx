import React, { useState, useEffect } from "react";
import { Form, useNavigation, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import InputForm from "@/components/InputForm/InputForm";

function ModalEditLead({ modal, setModal, lead }) {
  const navigation = useNavigation();
  const params = useParams();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

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
          action={`/crm/dashboard/${params.id}`}
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
              Informacion del Negocio
            </div>
            <div className="flex flex-col gap-4 font-light">
              <InputForm
                name="bussines_name"
                type="text"
                placeholder={placeholders[0]}
                defaultValue={lead.name}
              />
              <InputForm
                name="bussines_phone"
                type="text"
                placeholder={placeholders[1]}
                defaultValue={lead.phone}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg px-4 py-2 font-roboto">
            <div className="text-lg font-normal text-[#696974]">
              Informacion de Contacto
            </div>
            <div className="flex flex-col gap-4 font-light">
              <InputForm
                name="contact_name"
                type="text"
                placeholder={placeholders[2]}
                defaultValue={lead.contact_name}
              />
              <InputForm
                name="contact_middle_name"
                type="text"
                placeholder={placeholders[3]}
                defaultValue={lead.contact_middle_name}
              />
              <InputForm
                name="contact_last_name"
                type="text"
                placeholder={placeholders[4]}
                defaultValue={lead.contact_last_name}
              />
              <InputForm
                name="contact_phone"
                type="text"
                placeholder={placeholders[5]}
                defaultValue={lead.contact_phone}
              />
              <InputForm
                name="contact_email"
                type="email"
                placeholder={placeholders[6]}
                defaultValue={lead.contact_email}
              />
            </div>
          </div>
        </Form>
        <DialogFooter className="px-8 py-4">
          <Button
            form="lead-form-edit"
            disabled={navigation.state === "submitting"}
            className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
          >
            {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalEditLead;
