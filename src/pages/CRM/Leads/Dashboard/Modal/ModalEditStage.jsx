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

function ModalEditStage({ modal, setModal, stage }) {
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
          <DialogTitle className="font-poppins">Editar Etapa</DialogTitle>
        </DialogHeader>
        <Form
          id="lead-form-edit"
          className="flex flex-col gap-8 px-6"
          action={`/crm/dashboard/${params.id}`}
          method="post"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        >
          <input type="hidden" name="stage_id" value={stage.id} />
          <input
            type="hidden"
            hidden
            readOnly
            name="action"
            value="edit-stage"
          />
          <InputForm
            placeholder={"Nombre"}
            name={"name"}
            defaultValue={stage.name}
          />
          <InputForm
            placeholder={"Color"}
            name={"color"}
            type={"color"}
            defaultValue={stage.color}
          />
          <DialogFooter className="px-8 py-4">
            <Button
              type="submit"
              disabled={navigation.state === "submitting"}
              className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
            >
              {navigation.state === "submitting" ? "Submitting..." : "Editar"}
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalEditStage;
