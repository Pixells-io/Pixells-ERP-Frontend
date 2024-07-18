import React, { useEffect, useState } from "react";

import { Form, useNavigation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import CheckboxRouter from "@/layouts/Masters/FormComponents/checkbox";

function FormCreateContacts({ modal, setModal, masterId }) {
  const navigation = useNavigation();
  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-grisHeading">
            Create Contacts
          </DialogTitle>
        </DialogHeader>
        <Form
          id="form-create-client-contact"
          className="flex h-full w-full flex-col gap-3 px-6"
          action={`/crm/client/${masterId}`}
          method="post"
        >
          <input type="hidden" name="type" value={2} />
          <input type="hidden" name="master" value={masterId} />
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-3 pb-4 font-light">
              <div className="flex gap-3">
                <div>
                  <InputRouter name="name" type="text" placeholder="Name" />
                </div>
                <div>
                  <InputRouter
                    name="middle_name"
                    type="text"
                    placeholder="Middle Name"
                  />
                </div>
                <div>
                  <InputRouter
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <InputRouter name="phone" type="text" placeholder="Phone" />
              <InputRouter name="mail" type="text" placeholder="Mail" />
              <InputRouter name="position" type="text" placeholder="Position" />
              <CheckboxRouter name={"primary"} label={"Primary"} />
            </div>
          </div>
        </Form>
        <DialogFooter className="px-10 pb-6">
          <Button
            form="form-create-client-contact"
            className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormCreateContacts;
