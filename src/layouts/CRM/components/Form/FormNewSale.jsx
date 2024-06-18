import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";

import Select from "react-select";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import FormInput from "./Inputs/FormInput";
import FormInput from "./FormInput";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import DropzoneFile from "@/components/dropzone-files";
import InputRouter from "@/layouts/Masters/FormComponents/input";

function FormNewSale() {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setOpen({ prospect: false });
    }
  }, [navigation.state]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="group flex w-full justify-start gap-6 p-0 text-gris2 hover:rounded-lg hover:bg-blue-100 hover:text-blue-500"
        >
          <IonIcon icon={add} size="large"></IonIcon>
          <p className="mr-2 text-base font-medium text-gris2 group-hover:text-blue-500">
            New Sale
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b px-8 py-6">
          <DialogTitle>New Sale</DialogTitle>
        </DialogHeader>
        <Form
          id="new-sale-form"
          className="flex flex-col gap-2 px-6"
          action="/crm"
          method="post"
        >
          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="flex flex-col gap-4 pb-4 font-light">
              <div>
                <SelectRouter name="client" placeholder="Select Client" />
              </div>
              <div>
                <InputRouter
                  name="confirm_email"
                  type="email"
                  placeholder="Confirm Email"
                />
              </div>
              <div>
                <InputRouter
                  name="subject"
                  type="date"
                  placeholder="Day of Contact"
                />
              </div>
              <div>
                <InputRouter
                  name="comments"
                  type="text"
                  placeholder="Type your message here."
                />
              </div>
              <div>
                <DropzoneFile name="document" label="Select a file" />
              </div>
            </div>
            <div>
              {/* <input
                type="text"
                name="lead_id"
                value={leadId}
                hidden
                readOnly
              /> */}
              <input
                type="text"
                name="action"
                value="proposal"
                readOnly
                hidden
              />
            </div>
          </div>
          <DialogFooter className="px-4 pb-4">
            <Button
              form="new-sale-form"
              disabled={navigation.state === "submitting"}
              className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
            >
              {navigation.state === "submitting" ? "Submitting..." : "Save"}
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default FormNewSale;
