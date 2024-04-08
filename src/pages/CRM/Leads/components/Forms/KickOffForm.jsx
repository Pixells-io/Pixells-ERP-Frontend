import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import FormInput from "./Inputs/FormInput";

function KickOffForm({ modal, setModal, leadId, leads }) {
  const navigation = useNavigation();
  //   console.log(leadInfo);

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal({ prospect: false });
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-poppins">On Boarding Form</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form
          id="onboarding-leads-form"
          className="flex flex-col gap-2"
          action="/crm/leads"
          method="post"
        >
          <div className="flex flex-col gap-4 font-roboto bg-[#F6F6F6] rounded-lg p-4">
            <div className="flex flex-col font-light gap-4 pb-4">
              <div>
                <FormInput
                  type="text"
                  name="business_name"
                  placeholder="Business Name"
                  defaultValue="hola"
                />
              </div>
              <div>
                <FormInput
                  name="business_phone"
                  type="text"
                  placeholder="Business Phone"
                />
              </div>
              <div>
                <FormInput name="contact_name" type="text" />
                <FormInput name="contact_middle_name" type="text" />
                <FormInput name="contact_last_name" type="text" />
                <FormInput name="contact_phone" type="text" />
                <FormInput name="contact_email" type="text" />
              </div>
            </div>
            <div>
              <input
                type="text"
                name="lead_id"
                value={leadId}
                hidden
                readOnly
              />
              <input
                type="text"
                name="action"
                value="onboarding"
                readOnly
                hidden
              />
            </div>
          </div>
        </Form>
        <DialogFooter>
          <Button
            form="onboarding-leads-form"
            disabled={navigation.state === "submitting"}
            className="font-roboto font-semibold text-xs justify-normal pr-6 pl-6 rounded-lg bg-primarioBotones"
          >
            {navigation.state === "submitting" ? "Submitting..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default KickOffForm;
