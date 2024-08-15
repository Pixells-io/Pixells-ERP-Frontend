import React, { useState, useEffect } from "react";
import { Form, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import InputRouter from "@/layouts/Masters/FormComponents/input";

const navigation = useNavigation;

function ModalClientAccess({ modal, setModal, client_id, email }) {
  useEffect(() => {
    if (navigation.state === "idle") {
      setOpen(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b px-8 py-6">
          <DialogTitle className="font-poppins">Edit Access Info</DialogTitle>
        </DialogHeader>
        <Form
          id="client-form-edit"
          className="flex flex-col gap-8 px-6"
          action={`/crm/client/${client_id}`}
          method="post"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        >
          <input type="hidden" value={8} name="type" />
          <input type="hidden" name="client_id" value={client_id} />
          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <InputRouter
              name="email"
              type="email"
              defaultValue={email}
              placeholder={email}
            />
            <InputRouter
              name="password"
              type="password"
              placeholder="*********"
            />
          </div>
          <DialogFooter className="px-8 py-4">
            <Button
              form="client-form-edit"
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

export default ModalClientAccess;
