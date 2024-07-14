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

function EditPackageForm({ modal, setModal, id, name, description, price }) {
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
            Edit Membership
          </DialogTitle>
        </DialogHeader>
        <Form
          id="category-services-form"
          className="flex flex-col gap-4"
          action={`/crm/services/packages/${id}`}
          method="post"
          encType="multipart/form-data"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log(e.key);
              e.preventDefault();
            }
          }}
        >
          <div className="flex flex-col gap-4 rounded-lg px-6 font-roboto">
            <div className="text-lg font-normal text-[#696974]">
              Information
            </div>
            <div className="flex flex-col gap-4 font-light">
              <input type="hidden" name="type_of_function" value="1" />
              <input type="hidden" name="package_id" value={id} />
              <InputRouter name="name" type="text" placeholder={name} />
              <InputRouter
                name="description"
                type="text"
                placeholder={description}
              />
              <InputRouter name="price" type="number" placeholder={price} />
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
