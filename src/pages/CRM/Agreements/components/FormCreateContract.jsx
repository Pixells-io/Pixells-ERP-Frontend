import React from "react";

import { Form } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

function FormCreateContract({ modal, setModal, customers, agreement }) {
  let customer_array = [];

  arrayFillCustomer(customer_array, customers);

  function arrayFillCustomer(array, data) {
    data.forEach((element) => {
      array.push({
        label: element.business_name,
        value: element.id,
      });
    });
  }

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-grisHeading">
            Select User
          </DialogTitle>
        </DialogHeader>
        <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
          <Form
            id="formCreateAgreementCustomer"
            action="/crm/agreements"
            method="post"
          >
            <input type="hidden" name="agreement_id" value={agreement} />
            <SelectRouter
              name={"customer_id"}
              placeholder={"Customer"}
              options={customer_array}
            />
          </Form>
        </div>
        <DialogFooter className="px-10 pb-6">
          <Button
            form="formCreateAgreementCustomer"
            className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormCreateContract;
