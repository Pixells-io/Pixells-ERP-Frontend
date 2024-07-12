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
import DropzoneImage from "@/layouts/Masters/FormComponents/dropzone-image";

function FormCreateDocuments({ modal, setModal, masterId, url }) {
  const navigation = useNavigation;
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
            Create Document
          </DialogTitle>
        </DialogHeader>
        <Form
          id="form-create-client-document"
          className="flex h-full w-full flex-col gap-3 px-6"
          action={url}
          method="post"
          encType="multipart/form-data"
        >
          <input type="hidden" name="type" value={3} />
          <input type="hidden" name="master" value={masterId} />
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-3 pb-4 font-light">
              <InputRouter name="name" type="text" placeholder="Name" />
              <DropzoneFile name={"document_file"} label={"Document"} />
            </div>
          </div>
          <div className="px-10 pb-6">
            <button
              type="submit"
              className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold text-white"
              onClick={() => setModal(false)}
            >
              Save
            </button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default FormCreateDocuments;
