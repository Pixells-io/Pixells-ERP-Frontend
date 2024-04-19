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

function FormNewSale() {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  // useEffect(() => {
  //   if (navigation.state === "idle") {
  //     setOpen({ prospect: false });
  //   }
  // }, [navigation.state]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-full flex justify-start gap-6 p-0 text-gris2 group hover:text-blue-500 hover:bg-blue-100 hover:rounded-lg"
        >
          <IonIcon icon={add} size="large"></IonIcon>
          <p className="text-base font-medium text-gris2 group-hover:text-blue-500 mr-2">
            New Sale
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Sale Form</DialogTitle>
          <DialogDescription>Something something new sale...</DialogDescription>
        </DialogHeader>
        <Form
          id="new-sale-form"
          className="flex flex-col gap-2"
          action="/crm"
          method="post"
        >
          <div className="flex flex-col gap-4 font-roboto bg-[#F6F6F6] rounded-lg p-4">
            <div className="flex flex-col font-light gap-4 pb-4">
              <div>
                Select Client
                <Select />
              </div>
              <div>
                <FormInput
                  name="confirm_email"
                  type="email"
                  placeholder="Confirm Email"
                />
              </div>
              <div>
                <FormInput
                  name="subject"
                  type="date"
                  placeholder="Day of Contact"
                />
              </div>
              <div>
                <FormInput
                  name="comments"
                  type="text"
                  placeholder="Type your message here."
                />
              </div>
              <div>
                <FormInput name="document" type="file" />
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
        </Form>
        <DialogFooter>
          <Button
            form="new-sale-form"
            disabled={navigation.state === "submitting"}
            className="font-roboto font-semibold text-xs justify-normal pr-6 pl-6 rounded-lg bg-primarioBotones"
          >
            {navigation.state === "submitting" ? "Submitting..." : "Save"}
          </Button>{" "}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormNewSale;
