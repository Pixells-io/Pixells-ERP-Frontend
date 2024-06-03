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

function FormCreateFollowUpComments({ modal, setModal, followUpId, ticket }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="sm:max-w-[425px] overflow-auto">
        <DialogHeader>
          <DialogTitle className="font-poppins">Add Comment</DialogTitle>
        </DialogHeader>
        <Form
          id="ticket-follow-up-form"
          className="flex flex-col gap-0 h-auto"
          action={`/tickets/${ticket}`}
          method="post"
        >
          <div className="flex flex-col gap-4 font-roboto bg-[#F6F6F6] rounded-lg p-4">
            <div className="flex flex-col font-light gap-4 pb-4">
              <input type="hidden" value={"2"} name="form" />
              <input type="hidden" value={followUpId} name="follow_up_id" />
              <FormInput name="comment" type="text" placeholder="Comments" />
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

export default FormCreateFollowUpComments;
