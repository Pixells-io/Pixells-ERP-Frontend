import React, { useEffect, useState } from "react";
import Select from "react-select";
import SelectRouter from "../../../layouts/Masters/FormComponents/select";

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
import DropzoneFile from "@/components/dropzone-files";

function FormCreateDocuments({ modal, setModal, masterId }) {
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-grisHeading">
            Create Document
          </DialogTitle>
        </DialogHeader>
        <Form
          id="form-create-client-document"
          className="flex h-full w-full flex-col gap-3 px-6"
          action={`/crm/client/${masterId}`}
          method="post"
          encType="multipart/form-data"
        >
          <input type="hidden" name="type" value={3} />
          <input type="hidden" name="master" value={masterId} />
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-3 pb-4 font-light">
              <DropzoneFile name={"document_file"} label={"Document"} />
            </div>
          </div>
        </Form>
        <DialogFooter className="px-10 pb-6">
          <Button
            form="form-create-client-document"
            className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormCreateDocuments;
