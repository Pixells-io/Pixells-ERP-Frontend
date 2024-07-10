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

import SelectRouter from "@/layouts/Masters/FormComponents/select";
import InputRouter from "@/layouts/Masters/FormComponents/input";

const navigation = useNavigation;

const EditLeadInformation2 = [
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

function EditLeadInformation({ modal, setModal, info, lead }) {
  useEffect(() => {
    if (navigation.state === "idle") {
      setOpen(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="h-[650px] overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b px-8 py-6">
          <DialogTitle className="font-poppins">Edit Lead</DialogTitle>
        </DialogHeader>
        <Form
          id="lead-form-edit"
          className="flex flex-col gap-8 px-6"
          action={`/crm/leads/${lead.id}`}
          method="post"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log(e.key);
              e.preventDefault();
            }
          }}
        >
          <input type="hidden" name="lead_id" value={lead.id} />
          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="text-lg font-normal text-[#696974]">
              Business Information
            </div>
            <div className="flex flex-col gap-4 pb-4 font-light">
              <InputRouter
                name="bussines_name"
                type="text"
                placeholder={info.business_name}
              />
              <InputRouter
                name="bussines_phone"
                type="text"
                placeholder={info.business_phone}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="text-lg font-normal text-[#696974]">
              Contact Information
            </div>
            <div className="flex flex-col gap-4 pb-4 font-light">
              <InputRouter
                name="contact_name"
                type="text"
                placeholder={info.contact_name}
              />
              <InputRouter
                name="contact_middle_name"
                type="text"
                placeholder={info.contact_middle_name}
              />
              <InputRouter
                name="contact_last_name"
                type="text"
                placeholder={info.contact_last_name}
              />
              <InputRouter
                name="contact_phone"
                type="text"
                placeholder={info.contact_phone}
              />
              <InputRouter
                name="contact_email"
                type="email"
                placeholder={info.contact_email}
              />
            </div>
          </div>
        </Form>
        <DialogFooter className="px-8 py-4">
          <Button
            form="lead-form-edit"
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

export default EditLeadInformation;
