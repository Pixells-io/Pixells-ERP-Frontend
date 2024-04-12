import React, { useEffect } from "react";
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

function ClosingForm({ modal, setModal, leadId }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal({ prospect: false });
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-poppins">Prospect Form</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form
          id="closing-leads-form"
          className="flex flex-col gap-2"
          action="/crm/leads"
          method="post"
        >
          <div className="flex flex-col gap-4 font-roboto bg-[#F6F6F6] rounded-lg p-4">
            <div className="flex flex-col font-light gap-4 pb-4">
              <div>
                <FormInput name="service_paymnent" type="file" />
              </div>
              <div>
                <FormInput name="service_agreement" type="file" />
              </div>
              <div>
                <FormInput name="comments" type="text" />
              </div>
              <div>
                <FormInput name="recurrent_pay" type="text" />
              </div>
              <div>
                <FormInput name="month_billing" type="number" />
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
        <DialogFooter>
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