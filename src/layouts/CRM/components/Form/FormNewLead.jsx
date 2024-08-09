import React, { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { IonIcon } from "@ionic/react";
import { personAdd } from "ionicons/icons";

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

const individualInputs = [
  {
    name: "business_name",
    type: "text",
    placeholder: "Personal Name",
  },
  {
    name: "business_phone",
    type: "text",
    placeholder: "Personal Phone",
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
  const [type, setType] = useState("");

  useEffect(() => {
    if (navigation.state === "idle") {
      setOpen(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="group flex w-full items-center justify-start gap-6 p-0 py-1 pl-4 text-gris2 hover:rounded-lg hover:bg-blue-100 hover:text-blue-500">
        <IonIcon icon={personAdd} size="large"></IonIcon>
        <p className="text-base font-medium text-gris2 group-hover:text-blue-500">
          New Oportunity
        </p>
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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        >
          <div className="flex px-4 py-2">
            <input
              type="hidden"
              hidden
              readOnly
              name="action"
              value="save-lead"
            />
            <SelectRouter
              name="register_type"
              options={typeArray}
              placeholder="Type of Oportunity"
              onChange={(e) => setType(e.value)}
            />
          </div>

          {type == "" && (
            <div className="flex flex-col rounded-lg px-4 font-roboto">
              <div className="text-center font-normal text-grisSubText">
                Select type of Oportunity
              </div>
            </div>
          )}

          {type == 1 ? (
            <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
              <div className="text-lg font-normal text-[#696974]">
                Individual Information
              </div>
              <div className="flex flex-col gap-4 pb-4 font-light">
                {individualInputs?.map((input, i) => (
                  <InputRouter
                    key={i}
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                ))}
              </div>
            </div>
          ) : (
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
          )}

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
