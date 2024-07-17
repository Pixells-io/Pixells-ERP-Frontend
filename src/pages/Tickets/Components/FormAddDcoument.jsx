import React, { useEffect } from "react";
import { Form, useNavigation, useParams } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import DropzoneFile from "@/components/dropzone-files";

function FormAddDcoument({ open, setOpen, ticket }) {
  const params = useParams();
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setOpen(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Document?</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Form
          id="ticket-document-add-form"
          className="flex h-auto flex-col gap-4"
          action={`/tickets/${params?.id}`}
          method="post"
          encType="multipart/form-data"
        >
          <DropzoneFile name="document" label="Add Document" />
          <input
            type="hidden"
            hidden
            readOnly
            value={ticket?.id}
            name="ticket"
          />
          <input type="hidden" hidden readOnly value="4" name="form" />

          <DialogFooter className="h-auto">
            <Button
              form="ticket-document-add-form"
              disabled={navigation.state === "submitting"}
              className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
            >
              {navigation.state === "submitting" ? "Submitting..." : "Save"}
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default FormAddDcoument;
