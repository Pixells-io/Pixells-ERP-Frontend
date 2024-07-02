import React, { useState, useEffect } from "react";

import { Form, useNavigation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FormInput from "@/layouts/CRM/components/Form/FormInput";
import FileRouter from "@/layouts/Masters/FormComponents/file";

function FormImportClient({ modal, setModal }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-poppins text-sm font-semibold text-grisHeading">
            Import clients from Excel
          </DialogTitle>
        </DialogHeader>
        <Form
          id="ticket-import-customer"
          className="flex h-auto flex-col gap-0"
          action={`/crm`}
          method="post"
          encType="multipart/form-data"
        >
          <input type="hidden" name="register_type_function" value={2} />
          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="flex flex-col gap-4 pb-4 font-light">
              <FileRouter name={"file"} label={"Excel"} />
            </div>
          </div>
        </Form>
        <DialogFooter className="h-auto">
          <Button
            form="ticket-import-customer"
            className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
          >
            Import
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormImportClient;
