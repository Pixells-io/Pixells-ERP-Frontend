import React, { useEffect } from "react";

import { Form, useNavigation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function DeleteTask({ modal, setModal, taskId, action, actionInput }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto border-none bg-black p-0 sm:max-w-[425px]">
        <DialogHeader className="pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-white">
            Borrar Tarea
          </DialogTitle>
        </DialogHeader>
        <Form
          id="form-destroy-task"
          className="flex h-full w-full flex-col gap-3 px-6"
          action={action}
          method="post"
        >
          <input type="hidden" value={taskId} name="task_id" />
          <input type="hidden" value={actionInput} name="action" />
          <span className="font-roboto text-[#A6A6A6]">
            Esta acción no se puede deshacer. Esto eliminará permanentemente la
            Tarea.
          </span>
          <DialogFooter className="flex gap-4 py-6">
            <Button
              type="submit"
              className="justify-normal rounded-lg bg-red-600 px-6 py-2 font-roboto text-xs font-semibold text-white"
            >
              Borrar
            </Button>
            <Button
              type="button"
              onClick={() => setModal(false)}
              className="justify-normal rounded-lg bg-grisText px-6 py-2 font-roboto text-xs font-semibold text-white"
            >
              Cancelar
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteTask;
