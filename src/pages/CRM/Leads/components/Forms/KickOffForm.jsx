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
      <DialogContent className="sm:max-w-[425px] p-0">
        <div className="bg-gris flex p-6 rounded-t-lg">
          <DialogHeader>
            <DialogTitle className="font-poppins font-semibold text-sm text-grisHeading">
              Pay Form &gt; On Boarding Form
            </DialogTitle>
          </DialogHeader>
        </div>
        <Form
          id="onboarding-leads-form"
          className="flex flex-col gap-2 px-8"
          action="/crm/leads"
          method="post"
        >
          <div className="flex flex-col gap-2 font-roboto rounded-lg p-4">
            <div className="flex flex-col gap-5 pb-1">
              <div>
                <span className="text-sm text-grisSubText font-medium">
                  Business Name
                </span>
                <FormInput
                  type="text"
                  name="business_name"
                  placeholder="Business Name"
                />
              </div>
              <div>
                <span className="text-sm text-grisSubText font-medium">
                  Business Phone
                </span>
                <FormInput
                  name="business_phone"
                  type="text"
                  placeholder="Business Phone"
                />
              </div>
              <div>
                <span className="text-sm text-grisSubText font-medium">
                  Contact Name
                </span>
                <FormInput
                  name="contact_name"
                  type="text"
                  placeholder="Contact Name"
                />
              </div>
              <div>
                <span className="text-sm text-grisSubText font-medium">
                  Contact Middle Name
                </span>
                <FormInput
                  name="contact_middle_name"
                  type="text"
                  placeholder="Contact Middle Name"
                />
              </div>
              <div>
                <span className="text-sm text-grisSubText font-medium">
                  Contact Last Name
                </span>
                <FormInput
                  name="contact_last_name"
                  type="text"
                  placeholder="Contact Last Name"
                />
              </div>
              <div>
                <span className="text-sm text-grisSubText font-medium">
                  Contact Phone
                </span>
                <FormInput
                  name="contact_phone"
                  type="text"
                  placeholder="Contact Phone"
                />
              </div>
              <div>
                <span className="text-sm text-grisSubText font-medium">
                  Email
                </span>
                <FormInput
                  name="contact_email"
                  type="text"
                  placeholder="Contact Email"
                />
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
        <DialogFooter className="p-4">
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
