import React, { useEffect, useState } from "react";
import Select from "react-select";
import SelectRouter from "../../../layouts/Masters/FormComponents/select";

import { Form, useNavigation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import CheckboxRouter from "@/layouts/Masters/FormComponents/checkbox";

function FormCreateAdress({ modal, setModal, masterId }) {
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-grisHeading">
            Create Adress
          </DialogTitle>
        </DialogHeader>
        <Form
          id="form-create-client-adress"
          className="flex h-full w-full flex-col gap-3 px-6"
          action={`/crm/client/${masterId}`}
          method="post"
        >
          <input type="hidden" name="type" value={1} />
          <input type="hidden" name="master" value={masterId} />
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-3 pb-4 font-light">
              <InputRouter name="street" type="text" placeholder="Street" />
              <div className="flex gap-3">
                <div>
                  <InputRouter name="ext" type="text" placeholder="Ext" />
                </div>
                <div>
                  <InputRouter name="int" type="text" placeholder="Int" />
                </div>
                <div>
                  <InputRouter name="cp" type="text" placeholder="CP" />
                </div>
              </div>
              <InputRouter name="city" type="text" placeholder="City" />
              <InputRouter name="country" type="text" placeholder="Country" />
              <InputRouter name="state" type="text" placeholder="State" />
              <CheckboxRouter name={"primary"} label={"Primary"} />
            </div>
          </div>
        </Form>
        <DialogFooter className="px-10 pb-6">
          <Button
            form="form-create-client-adress"
            className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormCreateAdress;
