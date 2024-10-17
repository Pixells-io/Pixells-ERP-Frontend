import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";

import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
function NewObjectiveModal({ workspace_id }) {
  const navigation = useNavigation();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger>
        <IonIcon icon={add} className="size-4 align-middle text-grisSubText" />
      </DialogTrigger>
      <DialogContent className="flex w-[400px] flex-col gap-6 px-0 py-3 sm:rounded-3xl">
        <DialogHeader className="border-b px-10 py-1 pb-3">
          <DialogTitle className="font-poppins text-lg text-grisHeading">
            Crear Nuevo Objetivo Individual
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Form
          id="newObjective"
          method="POST"
          action="/project-manager2"
          className="px-10"
        >
          <InputForm
            name="name"
            type="text"
            placeholder="Nombre del Objetivo"
          />
          <input
            type="hidden"
            name="workspace_id"
            value={workspace_id}
            hidden
            className="hidden"
          />
          <input
            type="hidden"
            name="type"
            value={1}
            hidden
            className="hidden"
          />
          <input
            type="hidden"
            name="action"
            value="create-objective"
            hidden
            className="hidden"
          />
        </Form>
        <div className="flex w-full justify-end gap-3 px-10">
          <Button
            form="newObjective"
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

export default NewObjectiveModal;
