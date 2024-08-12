import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Form, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";

function CompleteActivity({ task_id, action, task, actionRoute }) {
  const navigation = useNavigation();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger className="rounded-2xl border border-grisHeading px-2 text-sm font-normal text-grisHeading">
        Complete
      </DialogTrigger>
      <DialogContent className="max-w-[350px]">
        <DialogHeader>
          <DialogTitle>Completar Actividad?</DialogTitle>
          <DialogDescription className="pt-1">
            Completar {task?.name}
          </DialogDescription>
        </DialogHeader>
        <Form id="complete-activity" method="POST" action={actionRoute}>
          <input
            className="hidden"
            readOnly
            hidden
            value={task?.id}
            name="activity_id"
          />
          <input
            className="hidden"
            readOnly
            hidden
            value={action}
            name="action"
          />
          <DialogFooter className="flex w-full gap-2 px-10 pt-6">
            <Button
              type="button"
              onClick={() => setModal(false)}
              className="flex w-full rounded-lg px-6 py-2 text-center font-roboto text-xs font-semibold"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={navigation.state === "submitting"}
              className="hover:primarioBotones rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold hover:bg-primario"
            >
              {navigation.state === "submitting"
                ? "Submitting..."
                : "Completar"}
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default CompleteActivity;
