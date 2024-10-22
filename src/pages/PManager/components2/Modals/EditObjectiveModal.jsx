import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";

function EditObjectiveModal({ objective, modal, setModal }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="flex w-[400px] flex-col gap-6 px-0 py-3 sm:rounded-3xl">
        <DialogHeader className="border-b px-10 py-1 pb-3">
          <DialogTitle className="font-poppins text-lg text-grisHeading">
            Editar {objective?.name}
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Form
          id="editObjective"
          method="POST"
          action="/project-manager2"
          className="px-10"
        >
          <InputForm
            name="name"
            type="text"
            placeholder="Nombre del Objetivo"
            defaultValue={objective?.name}
          />
          <input
            type="hidden"
            name="objective_id"
            value={objective?.id}
            hidden
            className="hidden"
          />
          <input
            type="hidden"
            name="action"
            value="edit-objective"
            hidden
            className="hidden"
          />
        </Form>
        <div className="flex w-full justify-end gap-3 px-10">
          <Button
            form="editObjective"
            type="submit"
            className="bg-primarioBotones"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default EditObjectiveModal;
