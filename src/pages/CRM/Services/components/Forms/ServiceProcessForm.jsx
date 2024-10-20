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

import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

const CATEGORIES = [
  //1=Send Email  2=Qualify  3=Folow-up  4=Payment  5=Shipping  6=Close-up  7=Generic  8=Interview
  { value: "1", label: "Send Email" },
  { value: "2", label: "Qualify" },
  { value: "3", label: "Follow Up" },
  { value: "4", label: "Payment" },
  { value: "5", label: "Shipping" },
  { value: "6", label: "Closeup" },
  { value: "7", label: "Generic" },
];

function ServiceProcessForm({ modal, setModal, id }) {
  const navigation = useNavigation();

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
            Add Process
          </DialogTitle>
        </DialogHeader>
        <Form
          id="category-services-form"
          className="flex flex-col gap-4"
          action={`/crm/services/${id}`}
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
              <input type="hidden" name="type_of_function" value={3} />
              <input type="hidden" name="service_id" value={id} />
              <InputRouter name="process" type="text" placeholder="Process" />
              <InputRouter
                name="process_action"
                type="text"
                placeholder="Process Action"
              />
              <SelectRouter
                name="category"
                placeholder="Category"
                options={CATEGORIES}
              />
            </div>
          </div>
          <DialogFooter className="px-6 py-4">
            <Button
              type="submit"
              className="justify-normal rounded-lg bg-primarioBotones px-6 font-roboto text-xs font-semibold"
            >
              Create
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ServiceProcessForm;
