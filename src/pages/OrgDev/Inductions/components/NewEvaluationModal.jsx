import React, { useState, useEffect } from "react";

import { Form } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FormInput from "@/layouts/CRM/components/Form/FormInput";

function NewEvaluationModal({ modal, setModal }) {
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-poppins">Create Evaluation</DialogTitle>
        </DialogHeader>
        <Form
          id="evaluation-create-form"
          className="flex h-auto flex-col gap-0"
          action="/org-development/evaluation"
          method="post"
        >
          <div className="flex flex-col gap-4 rounded-lg bg-[#F6F6F6] p-4 font-roboto">
            <div className="flex flex-col gap-4 pb-4 font-light">
              <FormInput
                name="name"
                type="text"
                placeholder="Name of the Evaluation"
              />
            </div>
          </div>
        </Form>
        <DialogFooter className="h-auto">
          <Button
            form="evaluation-create-form"
            className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default NewEvaluationModal;
