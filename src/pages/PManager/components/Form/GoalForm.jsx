import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";

function GoalForm({ objectiveId }) {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (navigation.state === "idle") {
      setOpen(false);
    }
  }, [navigation.state]);

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="flex items-center justify-center gap-1 rounded-full bg-primario px-4 py-[6px] text-[11px] font-light text-white">
          <IonIcon icon={add} className="h-4 w-4" size="" />
          <p className="flex pr-2 text-left">Goal</p>
        </DialogTrigger>
        <DialogContent className="p-0">
          <DialogHeader className="flex flex-col gap-2 border-b px-8 py-6">
            <DialogTitle>Agregar Meta</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 rounded-lg p-4 px-10">
            <Form
              className="flex flex-col gap-8"
              id="goal-form"
              action={`/project-manager/${objectiveId}`}
              method="post"
            >
              <InputRouter name="goal" placeholder="Nombre de la Meta" />
              <input className="hidden" name="action" value="goal" readOnly />
              <div className="flex self-end">
                <Button
                  className="bg-primarioBotones px-10 hover:bg-primario"
                  type="submit"
                >
                  Save
                </Button>
              </div>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default GoalForm;
