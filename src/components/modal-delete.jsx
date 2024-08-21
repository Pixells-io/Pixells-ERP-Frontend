import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, useNavigation } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { trash } from "ionicons/icons";
import { Button } from "./ui/button";

function ModalDelete({ id, name, action }) {
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
        <IonIcon icon={trash} className="size-5" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>¿Estás absolutamente seguro?</DialogTitle>
          <DialogDescription>
            Esta acción no se puede deshacer. Esto eliminará permanentemente{" "}
            {name}.
          </DialogDescription>
        </DialogHeader>
        <Form
          id="delete-user-form"
          className="flex h-full w-full flex-col gap-3 px-6"
          action="/organization"
          method="POST"
        >
          <input name="id" hidden className="hidden" readOnly value={id} />
          <input
            className="hidden"
            name="action"
            hidden
            readOnly
            value={action}
          />
          <div className="flex items-center justify-end gap-4">
            <Button
              className="w-fit"
              type="button"
              onClick={() => setModal(false)}
            >
              Cancelar
            </Button>
            <Button
              className="w-fit justify-normal rounded-lg bg-red-600 px-6 py-2 font-roboto text-xs font-semibold hover:bg-red-500"
              disabled={navigation.state === "submitting"}
            >
              {navigation.state === "submitting" ? "Submitting..." : "Borrar"}
            </Button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalDelete;
