import React from "react";
import { Form } from "react-router-dom";

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
import { Button } from "@/components/ui/button";

function GoalForm({ objectiveId }) {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="text-primarioBotones text-base font-semibold">
          + New Goal
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="flex flex-col gap-2">
            <DialogTitle>Agregar Meta</DialogTitle>
            <div className="bg-gris rounded-lg p-4 flex flex-col gap-4">
              <DialogDescription>Meta</DialogDescription>
              <Form
                className="flex flex-col gap-8"
                id="goal-form"
                action={`/project-manager/${objectiveId}`}
                method="post"
              >
                <Input
                  name="goal"
                  placeholder="Nombre de la Meta"
                  className="rounded-none border-0 border-b bg-gris focus:border-primarioBotones !ring-0 !ring-offset-0"
                />
                <Input className="hidden" name="action" value="goal" readOnly />
              </Form>
            </div>
          </DialogHeader>
          <DialogFooter>
            <Button
              form="goal-form"
              className="bg-primario px-10"
              type="submit"
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default GoalForm;
