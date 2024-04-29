import React, { useEffect } from "react";
import { Form, useNavigation } from "react-router-dom";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import FormInput from "./Inputs/FormInput";
import FileRouter from "@/layouts/Masters/FormComponents/file";
import FromMultiSelect from "@/layouts/CRM/components/Form/FromMultiSelect";

function ClosingForm({ modal, setModal, leadId, services }) {
  const navigation = useNavigation();

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
              Proposal Form &gt; Prospect Form
            </DialogTitle>
          </DialogHeader>
        </div>
        <Form
          id="closing-leads-form"
          className="flex flex-col gap-2 px-8"
          action="/crm/leads"
          method="post"
        >
          <div className="flex flex-col gap-4 font-roboto rounded-lg p-4">
            <div className="flex flex-col gap-4 pb-4">
              <div>
                <FileRouter name="service_paymnent" label="Payment agreement" />
              </div>
              <div>
                <FileRouter
                  name="service_agreement"
                  label="Service agreement"
                />
              </div>
              <div>
                <FormInput name="comments" type="text" placeholder="Comments" />
              </div>
              <div>
                <Select name="recurrent_pay">
                  <SelectTrigger className="border-0 border-b-2 rounded-none aria-[expanded=true]:border-b-2 aria-[expanded=true]:border-primario focus:border-primario !ring-0 !ring-offset-0 p-4 text-gris2">
                    <SelectValue placeholder="Recurrent Pay (Monthly?)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">No</SelectItem>
                    <SelectItem value="1">Yes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <FormInput
                  name="month_billing"
                  type="number"
                  placeholder="Monthly Bill"
                />
              </div>
              <div>
                <FromMultiSelect services={services} />
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
                value="closing"
                readOnly
                hidden
              />
            </div>
          </div>
        </Form>
        <DialogFooter className="p-4">
          <Button
            form="closing-leads-form"
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

export default ClosingForm;
