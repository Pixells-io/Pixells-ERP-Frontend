import React, { useState, useEffect } from "react";
import { Form, useNavigation, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import InputForm from "@/components/InputForm/InputForm";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

function ModalChangeAssignedLead({ modal, setModal, lead, users, url }) {
  const navigation = useNavigation();
  const params = useParams();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b px-8 py-6">
          <DialogTitle className="font-poppins">
            Asignar a Otro Usuario
          </DialogTitle>
        </DialogHeader>
        <Form
          id="lead-form-edit"
          className="flex flex-col gap-8 px-6"
          action={`${url}${params.id}`}
          method="post"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        >
          <input type="hidden" name="lead_id" value={lead.id} />
          <input
            type="hidden"
            hidden
            readOnly
            name="action"
            value="edit-lead"
          />
          <SelectRouter
            options={users}
            name={"assigned_id"}
            placeholder={"Agente"}
          />
          <DialogFooter className="px-8 py-4">
            <Button
              type="submit"
              disabled={navigation.state === "submitting"}
              className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
            >
              {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalChangeAssignedLead;
