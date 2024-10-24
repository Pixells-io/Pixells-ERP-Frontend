import React, { useEffect } from "react";

import { Form, useNavigation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function ModalDestroyContacts({ modal, setModal, contactId, masterId }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto border-none bg-black p-0 sm:max-w-[425px]">
        <DialogHeader className="pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-white">
            Delete Process
          </DialogTitle>
        </DialogHeader>
        <Form
          id="form-destroy-task"
          className="flex h-full w-full flex-col gap-3 px-6"
          action={`/crm/client/${masterId}`}
          method="post"
        >
          <input type="hidden" value={contactId} name="contact_id" />
          <input type="hidden" value={5} name="type" />
          <span className="font-roboto text-[#A6A6A6]">
            You are trying to delete a contact, are you sure?
          </span>
          <DialogFooter className="px-10 pb-6 pt-6">
            <Button
              type="submit"
              className="justify-normal rounded-lg bg-red-600 px-6 py-2 font-roboto text-xs font-semibold text-white"
            >
              Delete
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalDestroyContacts;
