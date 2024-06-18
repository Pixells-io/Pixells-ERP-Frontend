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
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import InputRouter from "@/layouts/Masters/FormComponents/input";

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

const typeArray = [
  {
    label: "Individual",
    value: "1",
  },
  {
    label: "Business",
    value: "2",
  },
];

const channelArray = [
  {
    label: "Recommendation",
    value: "Recommendation",
  },
  {
    label: "Instagram",
    value: "Instagram",
  },
  {
    label: "Facebook",
    value: "Facebook",
  },
  {
    label: "Google",
    value: "Google",
  },
  {
    label: "Other",
    value: "Other",
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
            New Oportunity
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[650px] overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b px-8 py-6">
          <DialogTitle className="font-poppins">
            Create New Oportunity
          </DialogTitle>
        </DialogHeader>
        <Form
          id="lead-form"
          className="flex flex-col gap-8 px-6"
          action="/crm"
          method="post"
        >
          <div className="flex px-4 py-2">
            <SelectRouter
              name="register_type"
              options={typeArray}
              placeholder="Type of Oportunity"
            />
          </div>

          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="text-lg font-normal text-[#696974]">
              Business Information
            </div>
            <div className="flex flex-col gap-4 pb-4 font-light">
              {businessInputs?.map((input, i) => (
                <InputRouter
                  key={i}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="text-lg font-normal text-[#696974]">
              Contact Information
            </div>
            <div className="flex flex-col gap-4 pb-4 font-light">
              {contactInputs?.map((input, i) => (
                <InputRouter
                  key={i}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="text-lg font-normal text-[#696974]">
              Category Information
            </div>
            <div className="flex flex-col gap-4 pb-4 font-light">
              <SelectRouter
                name="channel"
                placeholder="Channel"
                options={channelArray}
              />
              <FromMultiSelect services={services} />
            </div>
          </div>
        </Form>
        <DialogFooter className="px-8 py-4">
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
