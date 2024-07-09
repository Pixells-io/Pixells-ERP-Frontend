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
