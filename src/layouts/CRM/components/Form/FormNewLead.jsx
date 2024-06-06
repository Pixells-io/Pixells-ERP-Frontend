import React, { useState, useEffect } from "react";
import { Form, useNavigation } from "react-router-dom";
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
import { personAdd } from "ionicons/icons";

import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FromMultiSelect from "./FromMultiSelect";

const businessInputs = [
  {
    name: "business_name",
    type: "text",
    placeholder: "Bussines Name",
  },
  {
    name: "business_phone",
    type: "text",
    placeholder: "Business Phone",
  },
];

const contactInputs = [
  {
    name: "contact_name",
    type: "text",
    placeholder: "Contact Name",
  },
  {
    name: "contact_middle_name",
    type: "text",
    placeholder: "Contact Midde Name",
  },
  {
    name: "contact_last_name",
    type: "text",
    placeholder: "Contact Last Name",
  },
  {
    name: "contact_phone",
    type: "text",
    placeholder: "Contact Phone",
  },
  {
    name: "contact_email",
    type: "text",
    placeholder: "Contact Email",
  },
];

const categoryInputs = [
  {
    name: "channel",
    type: "text",
    placeholder: "Channel",
  },
];

function FormNewLead({ services, navigation }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (navigation.state === "idle") {
      setOpen(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="group flex w-full justify-start gap-6 p-0 text-gris2 hover:rounded-lg hover:bg-blue-100 hover:text-blue-500"
        >
          <IonIcon icon={personAdd} size="large"></IonIcon>
          <p className="mr-2 text-base font-medium text-gris2 group-hover:text-blue-500">
            New Lead
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[650px] overflow-auto sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-poppins">Create New Lead</DialogTitle>
        </DialogHeader>
        <Form
          id="lead-form"
          className="flex flex-col gap-4"
          action="/crm"
          method="post"
        >
          <FormSelect />
          <input type="hidden" name="register_type" value={1} />

          <div className="flex flex-col gap-4 rounded-lg bg-[#F6F6F6] p-4 font-roboto">
            <div className="text-lg font-normal text-[#696974]">
              Business Information
            </div>
            <div className="flex flex-col gap-4 pb-4 font-light">
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

          <div className="flex flex-col gap-4 rounded-lg bg-[#F6F6F6] p-4 font-roboto">
            <div className="text-lg font-normal text-[#696974]">
              Contact Information
            </div>
            <div className="flex flex-col gap-4 pb-4 font-light">
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

          <div className="flex flex-col gap-4 rounded-lg bg-[#F6F6F6] p-4 font-roboto">
            <div className="text-lg font-normal text-[#696974]">
              Category Information
            </div>
            <div className="flex flex-col gap-4 pb-4 font-light">
              {categoryInputs?.map((input, i) => (
                <FormInput
                  key={i}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                />
              ))}
              <FromMultiSelect services={services} />
            </div>
          </div>
        </Form>
        <DialogFooter>
          <Button
            form="lead-form"
            disabled={navigation.state === "submitting"}
            className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
          >
            {navigation.state === "submitting" ? "Submitting..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormNewLead;
