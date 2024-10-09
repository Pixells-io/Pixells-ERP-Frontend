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

function DeleteLeadsModal({ modal, setModal, lead_id, lead_name }) {
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
            Borrar Prospecto
          </DialogTitle>
        </DialogHeader>
        <Form
          id="form-destroy-task"
          className="flex h-full w-full flex-col gap-3 px-6"
          action={`/crm`}
          method="post"
        >
          <input type="hidden" value={lead_id} name="lead_id" />
          <input type="hidden" name="action" value="delete-lead" />
          <span className="font-roboto text-[#A6A6A6]">
            Estas intentando borrar el prospecto {lead_name}, ¿Estas seguro?
          </span>
          <DialogFooter className="justify-between px-10 pb-6 pt-6">
            <Button type="button" onClick={() => setModal(false)}>
              Cancelar
            </Button>
            <Button
              type="submit"
              className="justify-normal rounded-lg bg-red-600 px-6 py-2 font-roboto text-xs font-semibold text-white hover:bg-red-400"
            >
              Borrar
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteLeadsModal;
