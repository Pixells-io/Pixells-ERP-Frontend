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

function ModalEditClient({ modal, setModal, info, client, link }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="h-[650px] overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b px-8 py-6">
          <DialogTitle className="font-poppins">Edit Information</DialogTitle>
        </DialogHeader>
        <Form
          id="client-form-edit"
          className="flex flex-col gap-8 px-6"
          action={link}
          method="post"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        >
          <input type="hidden" hidden readOnly value={7} name="type" />
          <input
            type="hidden"
            hidden
            readOnly
            name="client_id"
            value={client?.id}
          />
          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="text-lg font-normal text-[#696974]">
              Business Information
            </div>
            <div className="flex flex-col gap-4 pb-4 font-light">
              <InputRouter
                name="business_name"
                type="text"
                defaultVal={info?.business_name}
              />
              <InputRouter
                name="business_phone"
                type="text"
                defaultVal={info?.business_phone}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="text-lg font-normal text-[#696974]">
              Contact Information
            </div>
            <div className="flex flex-col gap-4 pb-4 font-light">
              <InputRouter
                name="contact_name"
                type="text"
                defaultVal={info?.contact_name}
              />
              <InputRouter
                name="contact_middle_name"
                type="text"
                defaultVal={info?.contact_middle_name}
              />
              <InputRouter
                name="contact_last_name"
                type="text"
                defaultVal={info?.contact_last_name}
              />
              <InputRouter
                name="contact_phone"
                type="text"
                defaultVal={info?.contact_phone}
              />
              <InputRouter
                name="contact_email"
                type="email"
                defaultVal={info?.contact_email}
              />
            </div>
          </div>
        </Form>
        <DialogFooter className="px-8 py-4">
          <Button
            form="client-form-edit"
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

export default ModalEditClient;
