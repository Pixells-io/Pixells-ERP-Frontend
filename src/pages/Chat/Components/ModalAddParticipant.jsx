import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { IonIcon } from "@ionic/react";
import { personAdd } from "ionicons/icons";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

function ModalAddParticipant({ chat_id, users }) {
  const [modal, setModal] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger>
        <IonIcon
          icon={personAdd}
          className="size-5 pr-10 text-primarioBotones hover:cursor-pointer hover:text-primario"
        />
      </DialogTrigger>
      <DialogContent className="flex max-w-[400px] flex-col gap-4">
        <DialogHeader>
          <DialogTitle>Añadir un participante al grupo</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Form
          id="add-group-participant"
          action={`/chat/${chat_id}/user-media-library`}
          method="post"
          encType="multipart/form-data"
          className="flex flex-col gap-4 px-6"
        >
          <SelectRouter
            name="user_id"
            placeholder="Seleccionar Usuarios"
            options={users}
          />

          <input
            type="text"
            hidden
            readOnly
            className="hidden"
            value={chat_id}
            name="chat_id"
          />
          <input
            type="text"
            hidden
            readOnly
            className="hidden"
            value="add-participant"
            name="action"
          />
          <DialogFooter>
            <div className="flex w-full justify-between gap-2">
              <Button
                type="button"
                className="w-1/2 bg-[#343434] font-roboto text-xs font-semibold"
                onClick={() => setModal(false)}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="w-1/2 bg-primarioBotones font-roboto text-xs font-semibold"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting"
                  ? "Submitting..."
                  : "Guardar"}
              </Button>
            </div>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalAddParticipant;
