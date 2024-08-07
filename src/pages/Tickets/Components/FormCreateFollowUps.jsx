import React, { useState, useEffect } from "react";

import { Form, useNavigation } from "react-router-dom";
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
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-poppins">{title}</DialogTitle>
        </DialogHeader>
        <Form
          id="ticket-follow-up-form"
          className="flex h-auto flex-col gap-0"
          action={`/tickets/${ticket}`}
          method="post"
        >
          <div className="flex flex-col gap-4 rounded-lg bg-[#F6F6F6] p-4 font-roboto">
            <div className="flex flex-col gap-4 pb-4 font-light">
              <input type="hidden" value={"1"} name="form" />
              <input type="hidden" value={value} name="type" />
              <input type="hidden" value={ticket} name="ticket" />
              <FormInput
                name="comments"
                type="text"
                placeholder="Commentario"
              />
            </div>
          </div>
        </Form>
        <DialogFooter className="h-auto">
          <Button
            form="ticket-follow-up-form"
            disabled={navigation.state === "submitting"}
            className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
          >
            {navigation.state === "submitting" ? "Submitting..." : "Añadir"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormCreateFollowUps;
