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
import { IonIcon } from "@ionic/react";
import { add, closeCircle } from "ionicons/icons";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import DropzoneFile from "@/components/dropzone-files";

const DAYS = [
  { label: "Monday", value: "Monday" },
  { label: "Tuesday", value: "Tuesday" },
  { label: "Wednesday", value: "Wednesday" },
  { label: "Thursday", value: "Thursday" },
  { label: "Friday", value: "Friday" },
  { label: "Saturday", value: "Saturday" },
  { label: "Sunday", value: "Sunday" },
];

function FormUploadPlatform({ modal, setModal, document_id }) {
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
            Upload Document
          </DialogTitle>
        </DialogHeader>
        <Form
          id="area-form"
          className="flex h-full w-full flex-col gap-3 px-6"
          action="/client-platform"
          method="post"
          encType="multipart/form-data"
        >
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-3 pb-4 font-light">
              <input type="hidden" name="document_id" value={document_id} />
              <input type="hidden" name="type" value="8" />
              <DropzoneFile
                name={"file"}
                label={"Drag and drop the document"}
              />
            </div>
          </div>
          <DialogFooter className="px-10 pb-6">
            <Button
              type="submit"
              className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold"
            >
              Save
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default FormUploadPlatform;
