import React from "react";
import { Form } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

function CsfForm({ goalId, objectiveId }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex bg-gris group hover:bg-primarioBotones">
          <p className="text-grisSubText text-sm group-hover:text-white ">
            + CRITICAL SUCCES FACTOR
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-2">
          <DialogTitle>Agregar CSF</DialogTitle>
          <div className="bg-gris rounded-lg p-4 flex flex-col gap-4">
            <DialogDescription>CSF</DialogDescription>
            <Form
              id="csf-form"
              action={`/project-manager/${objectiveId}`}
              method="post"
              className="flex flex-col gap-8"
            >
              <Input
                name="csf"
                placeholder="Nombre del CSF"
                className="rounded-none border-0 border-b bg-gris focus:border-primarioBotones !ring-0 !ring-offset-0"
              />
              <Input className="hidden" name="action" value="csf" readOnly />
              <Input className="hidden" name="goalId" value={goalId} readOnly />
            </Form>
          </div>
        </DialogHeader>
        <DialogFooter>
          <Button form="csf-form" className="bg-primario px-10" type="submit">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CsfForm;
