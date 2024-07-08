import React, { useState, useEffect } from "react";

import { Form, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import FormInput from "@/layouts/CRM/components/Form/FormInput";
import InputRouter from "@/layouts/Masters/FormComponents/input";

function EditPackageForm({ modal, setModal, id, name }) {
  const navigation = useNavigation();

  console.log(name);

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="border-b px-6 py-4 font-poppins">
            Edit Package
          </DialogTitle>
        </DialogHeader>
        <Form
          id="category-services-form"
          className="flex flex-col gap-4"
          action="/crm/services"
          method="post"
        >
          <div className="flex flex-col gap-4 rounded-lg px-6 font-roboto">
            <div className="text-lg font-normal text-[#696974]">
              Information
            </div>
            <div className="flex flex-col gap-4 font-light">
              <input type="hidden" name="type" value={5} />
              <input type="hidden" name="package_id" value={name} />
              <InputRouter name="name" type="text" placeholder={id} />
            </div>
          </div>
          <DialogFooter className="px-6 py-4">
            <Button
              type="submit"
              className="justify-normal rounded-lg bg-primarioBotones px-6 font-roboto text-xs font-semibold"
            >
              Edit
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default EditPackageForm;
