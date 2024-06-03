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

function FormCreateFollowUps({ modal, setModal, title, value, ticket }) {
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="sm:max-w-[425px] overflow-auto">
        <DialogHeader>
          <DialogTitle className="font-poppins">{title}</DialogTitle>
        </DialogHeader>
        <Form
          id="ticket-follow-up-form"
          className="flex flex-col gap-0 h-auto"
          action={`/tickets/${ticket}`}
          method="post"
        >
          <div className="flex flex-col gap-4 font-roboto bg-[#F6F6F6] rounded-lg p-4">
            <div className="flex flex-col font-light gap-4 pb-4">
              <input type="hidden" value={value} name="type" />
              <input type="hidden" value={ticket} name="ticket" />
              <FormInput name="comments" type="text" placeholder="Comments" />
            </div>
          </div>
        </Form>
        <DialogFooter className="h-auto">
          <Button
            form="ticket-follow-up-form"
            className="font-roboto font-semibold text-xs justify-normal pr-6 pl-6 rounded-lg bg-primarioBotones"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormCreateFollowUps;
