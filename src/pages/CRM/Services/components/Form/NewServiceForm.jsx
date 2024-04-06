import React, { useState, useEffect } from "react";

import { Form } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { IonIcon } from "@ionic/react";
import { personAdd, addCircleOutline } from "ionicons/icons";

import FormInput from "@/layouts/CRM/components/Form/FormInput";
import FromMultiSelect from "@/layouts/CRM/components/Form/FromMultiSelect";
import FormSelect from "@/layouts/CRM/components/Form/FormSelect";

const businessInputs = [
  {
    name: "name",
    type: "text",
    placeholder: "Name",
  },
  {
    name: "description",
    type: "text",
    placeholder: "Description",
  },
  {
    name: "sub_services",
    type: "text",
    placeholder: "Sub-service",
  },
];

const contactInputs = [
  {
    name: "responsable",
    type: "text",
    placeholder: "Select responsible",
  },
  {
    name: "participants",
    type: "text",
    placeholder: "Select participants",
  },
];

const categoryInputs = [
  {
    name: "process",
    type: "text",
    placeholder: "Step 1 - Title",
  },
  {
    name: "process_action",
    type: "text",
    placeholder: "Action",
  },
];

function NewServiceForm({ navigation, services }) {
  // useEffect(() => {
  //   if (navigation.state === "idle") {
  //     setOpen(false);
  //   }
  // }, [navigation.state]);

  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-full flex justify-start gap-6 p-0 text-gris2"
        >
          <div className="flex items-center gap-3">
            <IonIcon
              icon={addCircleOutline}
              size="large"
              className="text-primarioBotones"
            ></IonIcon>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] overflow-auto h-[650px]">
        <DialogHeader>
          <DialogTitle className="font-poppins">Create New Service</DialogTitle>
        </DialogHeader>
        <Form
          id="lead-form"
          className="flex flex-col gap-4"
          action="/crm"
          method="post"
        >
          {/* <FormSelect /> */}

          <div className="flex flex-col gap-4 font-roboto bg-[#F6F6F6] rounded-lg p-4">
            <div className="text-[#696974] text-lg font-normal">
              Service Information
            </div>
            <div className="flex flex-col font-light gap-4 pb-4">
              {businessInputs?.map((input, i) => (
                <FormInput
                  key={i}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 font-roboto bg-[#F6F6F6] rounded-lg p-4">
            <div className="text-[#696974] text-lg font-normal">
              Responsible
            </div>
            <div className="flex flex-col font-light gap-4 pb-4">
              {contactInputs?.map((input, i) => (
                <FormInput
                  key={i}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 font-roboto bg-[#F6F6F6] rounded-lg p-4">
            <div className="text-[#696974] text-lg font-normal">
              Process
            </div>
            <div className="flex flex-col font-light gap-4 pb-4">
              {categoryInputs?.map((input, i) => (
                <FormInput
                  key={i}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                />
              ))}
              {/* <FromMultiSelect services={services} /> */}
            </div>
          </div>
        </Form>
        <DialogFooter>
          <Button className="font-roboto font-semibold text-xs justify-normal pr-6 pl-6 rounded-lg bg-primarioBotones">Create</Button>
          {/* <Button form="lead-form" disabled={navigation.state === "submitting"}>
            {navigation.state === "submitting"
              ? "Submitting..."
              : "Create New Lead"}
          </Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default NewServiceForm;
