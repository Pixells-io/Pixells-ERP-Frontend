import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import { Form } from "react-router-dom";
import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";

function NewWorkspaceModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <IonIcon
          icon={addCircleOutline}
          className="size-5 align-middle text-primarioBotones"
        />
      </DialogTrigger>
      <DialogContent className="flex w-[400px] flex-col gap-6 px-0 py-3 sm:rounded-3xl">
        <DialogHeader className="border-b px-10 py-1 pb-3">
          <DialogTitle className="font-poppins text-lg text-grisHeading">
            Crear Nuevo Espacio de Trabajo
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Form className="px-10">
          <InputForm
            name="name"
            type="text"
            placeholder="Nombre del Espacio de Trabajo"
          />
        </Form>
        <div className="flex w-full justify-end gap-3 px-10">
          <Button type="button" className="bg-primarioBotones">
            Guardar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default NewWorkspaceModal;
