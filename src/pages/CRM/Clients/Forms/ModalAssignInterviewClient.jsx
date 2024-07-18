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
import SelectRouter from "@/layouts/Masters/FormComponents/select";

const navigation = useNavigation;

function AssignInterviewModal({ modal, setModal, client_id, select }) {
  useEffect(() => {
    if (navigation.state === "idle") {
      setOpen(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b px-8 py-6">
          <DialogTitle className="font-poppins">Assign Interview</DialogTitle>
        </DialogHeader>
        <Form
          id="client-form-edit"
          className="flex flex-col gap-8 px-6"
          action={`/crm/client/${client_id}`}
          method="post"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log(e.key);
              e.preventDefault();
            }
          }}
        >
          <input type="hidden" value={9} name="type" />
          <input type="hidden" name="client_id" value={client_id} />
          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <SelectRouter
              name={"interview_id"}
              placeholder="Select a Interview"
              options={select}
            />
          </div>
          <DialogFooter className="px-8 py-4">
            <Button
              type="submit"
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

export default AssignInterviewModal;
